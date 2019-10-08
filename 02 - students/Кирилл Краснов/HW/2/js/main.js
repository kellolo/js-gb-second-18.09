const image = `https://placehold.it/200x150`;
const cartImage = `https://placehold.it/100x80`;
const items = [`Notebook`, `Display`, `Keyboard`, `Mouse`, `Phone`, `Router`, `USB-camera`, `Gamepad`];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

//создание объекта товара
function createProduct(i) {
    return {
        id: ids[i],
        name: items[i],
        price: prices[i],
        img: image,
    }
}

//имитация загрузки данных с сервера
function featchData() {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push(createProduct(i));
    }
    return arr
}
let data = featchData();

//создаем класс
class Product {
    constructor(product) {
        this.price = product.price
        this.img = product.img
        this.id = product.id
        this.name = product.name
        this.template = `<div class="product-item" data-id="${this.id}">
                            <img src="${this.img}" alt="image" width="200" height="150">
                            <h3>${this.name}</h3>
                            <p>${this.price} $</p>
                            <button class="product-item-btn" data-id="${this.id}">Купить</button>
                        </div>`
    }
}

//генерирует массив продуктов используя класс объектов Product
function featchProducts() {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push(new Product(data[i]));
    }
    return arr
}

class ProductsList {
    constructor() {
        this.products = []
        this._init()
    }
    _init() {
        this.products = featchProducts();
    }
    render() {
        const block = document.querySelector('.products')
        this.products.forEach(product => {
            block.innerHTML += product.template
        });
    }
    summ() {
        let s = 0;
        this.products.forEach(product => { s += product.price });
        return s
    }
}

let list = new ProductsList;
list.render();
list.summ();


//ДЗ
class Cart {
    constructor() {

    }
    countPriducts() {

    }
    sumProducts() {

    }
}

class CartItem {
    constructor() {

    }
    incItem() {

    }
    decItem() {

    }
    delItem() {

    }
}
