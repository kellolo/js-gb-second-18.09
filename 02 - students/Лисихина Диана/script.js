//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

//создание массива объектов - имитация загрузки данных с сервера
function fetchData() {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push(createProduct(i));
    }
    return arr;
}

//создание объекта товара
function createProduct(i) {
    return {
        id: ids[i],
        name: items[i],
        price: prices[i],
        img: image,
    }
}
let data = fetchData(); //массив объектов для создания товаров

function fetchProducts() {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push(new Product(data[i]));
    }
    return arr;
}

class Product {
    constructor(product) {
        this.title = product.name;
        this.price = product.price;
        this.img = product.img;
        this.id = product.id;
        this.template = `<div class="product-item" data-id="${this.id}">
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
                        </div>`;
    }
}

class ProductsList {
    constructor() {
        this.products = [];
        this._init();
    }

    _init() {
        this.products = fetchProducts();
        document.querySelector('.products').addEventListener('click', (evt) => {
            if (evt.target.classList.contains('buy-btn')) {
                let productId = +evt.target.dataset['id'];
                let find = this.products.find(element => element.id === productId);
                cart.addProduct(find);
            }
        })
    }
    render() {
        const block = document.querySelector('.products');
        this.products.forEach(product => {
            block.innerHTML += product.template
        });
    }
}

//общая сумма
totalPrice() {
    let total = 0
    const block = document.querySelector('.products')
        //totalBlock=document.createElement()
    this.products.forEach(product => {
        total += product.price
    })
    totalDiv = document.createElement("DIV")
        (block.parentNode).insertBefore(totalDiv,
            totalDiv.innerHTML =
            `<h4>Итого на сумму: ${total} $</h4>        
         </div>
        `)
}
}

let list = new ProductsList;
list.render();
list.totalPrice();

class CartItem {
    constructor(product) {
        this.product = product;
        this.quantity = 0;
    }

    genTemplate() {
        return `<div class="cart-item" data-id="${this.product.id}">
                    <div class="product-bio">
                        <img src="${cartImage}" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">${this.product.title}</p>
                            <p class="product-quantity">Quantity: ${this.quantity}</p>
                            <p class="product-single-price">$${this.product.price} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">${this.quantity * this.product.price}</p>
                        <button class="del-btn" data-id="${this.product.id}">&times;</button>
                    </div>
                </div>`
    }
}

class Cart {
    constructor() {
        this.cartItems = [],
            this._init(),
            this._render()
    }

    //назначаем обработчики событый на кнопки корзины
    _init() {
            document.querySelector('.btn-cart').addEventListener('click', () => {
                document.querySelector('.cart-block').classList.toggle('invisible')
            });
            //используем делегирование при обработки события клик по кнопке "удалить товар"
            //вешать обработчик на каждую кнопку "удалить товар" нерационально
            document.querySelector('.cart-block').addEventListener('click', (evt) => {
                if (evt.target.classList.contains('del-btn')) {
                    this.removeProduct(evt.target);
                }
            })
        }
        //удалить товар из корзины
    removeProduct(product) {
        let productId = +product.dataset['id'];
        let find = this.cartItems.find(element => element.product.id === productId);
        if (find.quantity > 1) {
            find.quantity--;
        } else {
            this.cartItems.splice(this.cartItems.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
        }
        this._render();
    }

    //добавить товар в корзину
    addProduct(product) {
        let find = this.cartItems.find(element => element.product.id === product.id);
        if (find) {
            find.quantity++;
        } else {
            find = new CartItem(product);
            find.quantity++;
            this.cartItems.push(find);
        }
        this._render();
    }
    _render() {
        const block = document.querySelector('.cart-block');
        block.innerHTML = "";
        let sum = 0;
        this.cartItems.forEach(item => {
            sum += item.quantity * item.product.price;
            block.innerHTML += item.genTemplate();
        });
        block.innerHTML = `<div><p>Total price: ${sum}</p><hr><div>` + block.innerHTML;
    }
}

let cart = new Cart;

// функция makeGETRequest - на основе Promise (...)
// function makeGETRequest(url) {
//  return new Promise(function (resolve,reject) {
//         let xhr = new XMLHttpRequest()
//         xhr.open('GET', url, true)
//         xhr.onload = () => resolve(xhr.responseText);
//         xhr.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${url}`));
//         xhr.open('GET', url, true);
//         xhr.open('GET', url, true);
//     }
// )};

//function makeGETRequest (url) {
// return fetch (url)
//.then(result => result.json())
//.catch (err => {console.log (err)})
//}

//* функция makeGETRequest - на основе callback функции*/
//fetchProducts(cb) {
//makeGETRequest(`${API_URL}/catalogData.json`, (products) => {
//this.products = JSON.parse(products)
//cb()
//})
//}

//  /* функция makeGETRequest - на основе promise функции*/
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

//     async fetchProducts() {
// makeGETRequest(`${API_URL}/catalogData.json`)
//     .then (data => {
//         this.products = data
//         this.render()
//     })

//     try {
//      this.products = await fetch (`${API_URL}/catalogData.json`)
//          .then (data => data.json ()) //data ===== xhr.responseText (JSON)
//
//             this.render ()
//  } 
//  catch (err) {
//       console.log (err)
//    }
//  finally {
//      console.log ('end of async')
//  }
//}

//render() {
//    this.products.forEach(product => {