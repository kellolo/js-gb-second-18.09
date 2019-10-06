//заглушки (имитация базы данных)
const API_URL='https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

//создание массива объектов - имитация загрузки данных с сервера

function makeGETRequestFetch (a) {
    fetch (a)
        .then(result => result.json())
        .then (d => { console.log (d) })
        .catch (err => {console.log (err)})
}


class Product {
    constructor (product) {
        this.title = product.product_name
        this.price = product.price
        //this.img = product.img
        this.id = product.id_product
        this.template = `<div class="product-item" data-id="${this.id}">
                            <div class="desc">
                                <h3>${this.title}</h3>
                                <p>${this.price} $</p>
                                <button class="buy-btn" 
                                data-id="${this.id}"
                                data-name="${this.title}"
                                data-price="${this.price}">Купить</button>
                            </div>
                        </div>`
    }
}

class ProductsList {
    constructor () {
        this.products = []
        this._init ()
    }

    _init () {
        this.products = this.fetchData()
    }

    fetchData() {
        makeGETRequestFetch(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            debugger
        })
    }

    fetchProducts () {
        let arr = [];
        for (let i = 0; i < items.length; i++) {
            arr.push (new Product (data [i]))
        }
        return arr
    }

    render () {
        const block = document.querySelector ('.products')
        this.products.forEach ( product => {
            block.innerHTML += product.template
        } )
    }

    totalPrice() {
        let total=0
        const block = document.querySelector ('.products')
        //totalBlock=document.createElement()
        this.products.forEach ( product => {
            total+=product.price
        } )
        let totalDiv=document.createElement("DIV")
        (block.parentNode).insertBefore(totalDiv,block.nextSibling)
        totalDiv.classList.add("totalPrice")
        totalDiv.innerHTML=`<h4>Итого товаров на сумму: ${total} $</h4>`
    }
}

const list = new ProductsList()
list.fetchData(() => {
    list.render()
})

list.totalPrice()


class cartItem {
    constructor(Product){
        //
    }
}

class Cart {
    constructor(){

    }

    _init(){

    }

    addProduct(c=cartItem, q=1)
    {
        //
    }

    removeProduct(c=cartItem, q=1){
        //
    }

    renderCart(){
        //
    }
}
// //глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)
// var userCart = [];
// var list = fetchData ();

// //кнопка скрытия и показа корзины
// document.querySelector('.btn-cart').addEventListener('click', () => {
//     document.querySelector('.cart-block').classList.toggle('invisible');
// });
// //кнопки удаления товара (добавляется один раз)
// document.querySelector('.cart-block').addEventListener ('click', (evt) => {
//     if (evt.target.classList.contains ('del-btn')) {
//         removeProduct (evt.target);
//     }
// })
// //кнопки покупки товара (добавляется один раз)
// document.querySelector('.products').addEventListener ('click', (evt) => {
//     if (evt.target.classList.contains ('buy-btn')) {
//         addProduct (evt.target);
//     }
// })


// //рендер списка товаров (каталога)
// function renderProducts () {
//     let arr = [];
//     for (item of list) {
//         arr.push(item.createTemplate())
//     }
//     document.querySelector('.products').innerHTML = arr.join();
// }

// renderProducts ();

// //CART

// // Добавление продуктов в корзину
// function addProduct (product) {
//     let productId = +product.dataset['id'];
//     let find = userCart.find (element => element.id === productId);
//     if (!find) {
//         userCart.push ({
//             name: product.dataset ['name'],
//             id: productId,
//             img: cartImage,
//             price: +product.dataset['price'],
//             quantity: 1
//         })
//     }  else {
//         find.quantity++
//     }
//     renderCart ()
// }

// //удаление товаров
// function removeProduct (product) {
//     let productId = +product.dataset['id'];
//     let find = userCart.find (element => element.id === productId);
//     if (find.quantity > 1) {
//         find.quantity--;
//     } else {
//         userCart.splice(userCart.indexOf(find), 1);
//         document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
//     }
//     renderCart ();
// }

// //перерендер корзины
// function renderCart () {
//     let allProducts = '';
//     for (el of userCart) {
//         allProducts += `<div class="cart-item" data-id="${el.id}">
//                             <div class="product-bio">
//                                 <img src="${el.img}" alt="Some image">
//                                 <div class="product-desc">
//                                     <p class="product-title">${el.name}</p>
//                                     <p class="product-quantity">Quantity: ${el.quantity}</p>
//                                     <p class="product-single-price">$${el.price} each</p>
//                                 </div>
//                             </div>
//                             <div class="right-block">
//                                 <p class="product-price">${el.quantity * el.price}</p>
//                                 <button class="del-btn" data-id="${el.id}">&times;</button>
//                             </div>
//                         </div>`
//     }

//     document.querySelector(`.cart-block`).innerHTML = allProducts;
// }
