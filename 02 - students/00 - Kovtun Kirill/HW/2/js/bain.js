//заглушки (имитация базы данных)
const components = ['Маленький', 'Большой','С сыром', 'С салатом', 'С картофелем','Посыпать приправой', 'Полить майонезом']
const prices = [50, 100,10, 20,15,15,20];
const calories = [20, 40, 20, 5,10, 0,5];
const groupIds =[1,1,2,2,2,3,4]
const ids=[1,2,3,4,5,6,7]
//создание массива объектов - имитация загрузки данных с сервера
function fetchData () {
    let arr = [];
    for (let i = 0; i < components.length; i++) {
        arr.push (createFoodComponent (i));
    }
    return arr
};

//создание объекта товара
function createFoodComponent (i) {
    return {
        id: ids[i],
        name: components[i],
        price: prices[i],
        calorie: calories[i],
        groupId: groupIds[i]
    }
}
let data = fetchData () //массив объектов для создания товаров

function fetchData() {
    let arr = [];
    for (let i = 0; i < components.length; i++) {
        arr.push (new FoodComponent (data [i]));
    }
    return arr
}


class FoodComponent {
    constructor (product) {
        this.title = product.name
        this.price = product.price
        this.calorie = product.calorie
        this.id = product.id
        this.template = `<div class="meal-component" data-id="${this.id}">
                            <div class="desc">
                                <h3>${this.title}</h3>
                                <p>${this.price} $</p>
                                <button class="buy-btn" 
                                data-id="${this.id}"
                                data-name="${this.title}"
                                data-image="${this.calorie}"
                                data-price="${this.price}">Купить
                                </button>
                            </div>
                        </div>`
    }
}

class Meal {
    constructor () {
        this.products = []
        this._init ()
    }

    _init () {
        this.products = fetchProducts ()
    }
    render () {
        const block = document.querySelector ('.meal')
        this.products.forEach ( product => {
            block.innerHTML += product.template
        } )
    }

    totalPrice() {
        let total=0
        const block = document.querySelector ('.meal')
        //totalBlock=document.createElement()
        this.products.forEach ( product => {
            total+=product.price
        } )
        let totalDiv=document.createElement("DIV");
        (block.parentNode).insertBefore(totalDiv,block.nextSibling);
        totalDiv.classList.add("totalPrice");
        totalDiv.innerHTML=`<h4>Итого товаров на сумму: ${total} $</h4>`;
    }
}

let list = new Meal
list.render ()
list.totalPrice()


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
