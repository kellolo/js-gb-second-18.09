//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

//создание массива объектов - имитация загрузки данных с сервера
function fetchData () {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push (createProduct (i));
    }
    return arr
};

//создание объекта товара
function createProduct (i) {
    return {
        id: ids[i],
        name: items[i],
        price: prices[i],
        img: image,
    }
}
let data = fetchData () //массив объектов для создания товаров

function fetchProducts () {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push (new Product (data [i]));
    }
    return arr
}

class Product {
    constructor (product) {
        this.title = product.name
        this.price = product.price
        this.img = product.img
        this.id = product.id
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
                        </div>`
    }
}

class ProductsList {
    constructor () {
        this.products = []
        this._init ()
    }

    _init () {
        this.products = fetchProducts ()
    }
    render () {
        const block = document.querySelector ('.products')
        this.products.forEach ( product => {
            block.innerHTML += product.template
        } )
    }
}

let list = new ProductsList
list.render ()

class cartItem {
    constructor(product) {
        this.title = product.title
        this.id = product.id
        this.img = cartImage
        this.price = product.price
        this.quantity = 0
        this.template = `<div class="cart-item" data-id="${this.id}">
                            <div class="product-bio">
                                <img src="${this.img}" alt="Some image">
                                <div class="product-desc">
                                    <p class="product-title">${this.name}</p>
                                    <p class="product-quantity">Quantity: ${this.quantity}</p>
                                    <p class="product-single-price">$${this.price} each</p>
                                </div>
                            </div>
                            <div class="right-block">
                                <p class="product-price">${this.quantity * this.price}</p>
                                <button class="d el-btn" data-id="${this.id}">&times;</button>
                            </div>
                        </div>`
    }
    
}


class Cart {
    constructor () {
        this.cartItems = []
		this._render ()
		this._init ()
    }
	_init () {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible')
        })
        document.querySelector ('.cart-block').addEventListener ('click', (evt) => {
            if (evt.target.classList.contains ('del-btn')) {
                this.removeProduct (evt.target);
            }
        })
    }
    _render () {
        const blockCart = document.querySelector ('.cart-block')
        this.cartItems.forEach ( cartItem => {
            blockCart.innerHTML += cartItem.template
        })
    }
	addProduct (product) {
        let find = this.cartItems.find (element => element.id === product.id)
	    if (find) {
				find.quantity++
			} else {
				find = new cartItem(product)
				find.quantity++
				this.cartItems.push(find)
            } 
        this._render(); 
    }
    removeProduct (product) {
		let productId = +product.dataset['id'];
        let find = this.cartItems.find (element => element.id === productId);
        if (find.quantity > 1) {
            find.quantity--
        } else {
            this.cartItems.splice(this.cartItems.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        this._render ();
       
    }
    totalCost () {
		let total = 0
		this.cartItems.forEach(
			total += (cartItem.price * cartItem.quantity)
		)

    }
}

let userCart = new Cart

// //глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)
// var userCart = [];
// var list = fetchData ();

// //кнопка скрытия и показа корзины
// document.querySelector('.btn-cart').addEventListener('click', () => {
//     document.querySelector('.cart-block').classList.toggle('invisible');
//});
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
