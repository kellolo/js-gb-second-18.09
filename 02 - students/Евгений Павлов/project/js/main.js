const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
/* функция makeGETRequest - на основе callback функции*/
// function makeGETRequest(url, callback) {
//     let xhr;
//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             callback(xhr.responseText);
//         }
//     }
//     xhr.open('GET', url, true);
//     xhr.send();
// }

// функция makeGETRequest - на основе Promise не получается завершить - OKAAAY
// function makeGETRequest(url) {
//     return new Promise(function (resolve,reject) {
//         let xhr = new XMLHttpRequest()
//         xhr.open('GET', url, true)
//         xhr.onload = () => resolve(xhr.responseText);
//         xhr.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${url}`));
//         xhr.open('GET', url, true);
//         xhr.send();      
//     }
// )};
     
function makeGETRequest (url) {
    return fetch (url)
        .then(result => result.json())
        //.then (d => d = JSON.parse(d)) - ЛИШНЯЯ ФИГНЯ
        .catch (err => {console.log (err)})
}



class Product {
    constructor(product_name, price, id_product) {
        this.title = product_name
        this.price = price
        this.img = image
        this.id = id_product
        this.template = `<div class="product-item" data-id="${this.id_product}">
                        <img src="${this.img}" alt="Some img">
                        <div class="desc">
                            <h3>${this.title}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn" 
                            data-id="${this.id}"
                            data-name="${this.title}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить</button>
                        </div>
                        </div>`
    }
}

class ProductsList {
    constructor() {
        this.products = []
    }
    /* функция makeGETRequest - на основе callback функции*/
    // fetchProducts(cb) {
    //     makeGETRequest(`${API_URL}/catalogData.json`, (products) => {
    //         this.products = JSON.parse(products)
    //         cb()
    //     })

    // }

    /* функция makeGETRequest - на основе promise функции*/
    // fetchProducts() {
    //     makeGETRequest(`${API_URL}/catalogData.json`)
    //         .then (data => {
    //             this.products = JSON.parse(data)
    //             this.render()
    //         })
    //         .catch (err => {
    //             console.log ('error')
    //         })
    // }

    async fetchProducts() {
        // makeGETRequest(`${API_URL}/catalogData.json`)
        //     .then (data => {
        //         this.products = data
        //         this.render()
        //     })

        try {
            this.products = await fetch (`${API_URL}/catalogData.json`)
                .then (data => data.json ()) //data ===== xhr.responseText (JSON)

                this.render ()
        } 
        catch (err) {
            console.log (err)
        }
        finally {
            console.log ('end of async')
        }
    }

    render() {
        this.products.forEach(product => {
            const goodItem = new Product(product.product_name, product.price, product.id_product, product.img);
            document.querySelector('.products').innerHTML += goodItem.template;
        });
    }
    totalCost() {
        console.log("Доделать")

    }
}


class cartItem {
    constructor(product) {
        this.title = product.dataset.name
        this.id = +product.dataset.id
        this.img = cartImage
        this.price = +product.dataset.price
        this.quantity = 0
    }
}


class Cart {
    constructor() {
        this.cartItems = []
        this._init()
    }
    _init() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible')
        })
        document.querySelector('.cart-block').addEventListener('click', (evt) => {
            if (evt.target.classList.contains('del-btn')) {
                this.removeProduct(evt.target);
            }
        })
        document.querySelector('.products').addEventListener('click', (evt) => {
            if (evt.target.classList.contains('buy-btn')) {
                this.addProduct(evt.target)
            }
        })
    }
    render() {
        const blockCart = document.querySelector('.cart-block')
        blockCart.innerHTML = ''
        this.cartItems.forEach(cartItem => {
            blockCart.innerHTML += `<div class="cart-item" data-id="${cartItem.id}">
            <div class="product-bio">
                <img src="${cartItem.img}" alt="Some image">
                <div class="product-desc">
                    <p class="product-title">${cartItem.title}</p>
                    <p class="product-quantity">Quantity: ${cartItem.quantity}</p>
                    <p class="product-single-price">$${cartItem.price} each</p>
                </div>
            </div>
            <div class="right-block">
                <p class="product-price">${cartItem.quantity * cartItem.price}</p>
                <button class="del-btn" data-id="${cartItem.id}">&times;</button>
            </div>
        </div>`
        })
    }
    addProduct(product) {
        let productId = +product.dataset.id
        let xxx;
        let find = this.cartItems.find(element => element.id == productId)
        if (!find) {
            xxx = new cartItem(product)
            xxx.quantity = 1
            this.cartItems.push(xxx)
        } else {
            find.quantity++;
        }
        this.render();
    }
    removeProduct(product) {
        let productId = +product.dataset.id
        let find = this.cartItems.find(element => element.id == productId)
        if (find.quantity > 1) {
            find.quantity--
        } else {
            this.cartItems.splice(this.cartItems.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        this.render();
    }

}
const list = new ProductsList();
list.fetchProducts(() => {
    list.render();
})


let userCart = new Cart