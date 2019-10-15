//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'



class List {
    //суперкласс для ProductsList и Cart
    constructor(url, container) {
        this.container = container
        this.url = url
        this.items = []
        this.DTO = ''
        this.renderedItems = []
        this._init()
    }
    _init() {
        return false
    }
    async getJSON(url) {
        try {
            this.items = await fetch(`${API_URL + this.url}`)
                .then(data => data.json())
                .then(res => {
                    this.DTO = res
                    return res.contents ? this.items = res.contents : this.items = res
                })
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        const block = document.querySelector(this.container)
        for (let item of this.items) {
            let prod = new lists[this.constructor.name](item)
            this.renderedItems.push(prod)
            block.insertAdjacentHTML('beforeend', prod.render())
        }
    }
    filter() {
        //потом
    }
}

class Item {
    //суперкласс для ProductsItem и CartItem
    constructor(el, img = image) {
        this.product_name = el.product_name
        this.price = el.price
        this.id_product = el.id_product
        this.img = img
    }

    render() {
        return `<div class="product-item" data-id="${this.id_product}">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.product_name}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn" 
                        data-id="${this.id_product}"
                        data-name="${this.product_name}"
                        data-image="${this.img}"
                        data-price="${this.price}">Купить</button>
                    </div>
                </div>`
    }
}

class Product extends Item { }

class ProductsList extends List {
    constructor(cart, url = '/catalogData.json', container = '.products') {
        super(url, container)
        this.cart = cart
    }

    async _init() {
        await this.getJSON()
        this.render()
    }

}


class CartItem extends Item {
    constructor(el, img = cartImage) {
        super(el, img)
        this.quantity = el.quantity
    }

    render() {
        return `<div class="cart-item" data-id="${this.id_product}">
                    <div class="product-bio">
                        <img src="${this.img}" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">${this.product_name}</p>
                            <p class="product-quantity">Кол-во: ${this.quantity}</p>
                            <p class="product-single-price">$${this.price} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">${this.quantity * this.price}</p>
                        <button class="del-btn" data-id="${this.id_product}">&times;</button>
                    </div>
                </div>`
    }
}

class Cart extends List {
    constructor(url = '/getBasket.json', container = '.cart-block') {
        super(url, container)
    }
    async _init() {
        await this.getJSON()
        const block = document.querySelector(this.container)
        for (let item of this.items) {
            let prod = new lists[this.constructor.name](item)
            this.renderedItems.push(prod)
        }
        this.render()

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
        this.renderedItems.forEach(CartItem => {
            blockCart.innerHTML += `<div class="cart-item" data-id="${CartItem.id_product}">
            <div class="product-bio">
                <img src="${CartItem.img}" alt="Some image">
                <div class="product-desc">
                    <p class="product-title">${CartItem.product_name}</p>
                    <p class="product-quantity">Кол-во: ${CartItem.quantity}</p>
                    <p class="product-single-price">$${CartItem.price} each</p>
                </div>
            </div>
            <div class="right-block">
                <p class="product-price">${CartItem.quantity * CartItem.price}</p>
                <button class="del-btn" data-id="${CartItem.id_product}">&times;</button>
            </div>
        </div>`
        })
    }
    addProduct(product) {
        console.log(cart);
        let productId = +product.dataset.id
        let findItem = this.renderedItems.find(element => element.id_product == productId)
        this.DTO.countProduct++
        if (!findItem) {
            this.renderedItems.push(new lists[this.constructor.name](this.DTO.contents.find(element => element.id_product == productId)))
            this.DTO.amount += this.DTO.contents.find(element => element.id_product == productId).price
        } else {
            findItem.quantity++;
            this.DTO.amount += findItem.price
        }
        this.render();
    }

    removeProduct(product) {
        let productId = +product.dataset.id
        let findItem = this.renderedItems.find(element => element.id_product == productId)
        this.DTO.countProduct--
        this.DTO.amount -= findItem.price
        if (findItem.quantity > 1) {
            findItem.quantity--
        } else {
            this.renderedItems.splice(this.renderedItems.indexOf(findItem), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        console.log(cart);
        this.render()
    }
}


const lists = {
    ProductsList: Product,
    Cart: CartItem
}

let products = new ProductsList()
let cart = new Cart()



// ___________
// class GoodsList {
//     constructor() {
//         this.goods = [];
//         this.filteredGoods = [];
//     }
//     filterGoods(value) {
//         const regexp = new RegExp(value, 'i');
//         this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
//         this.render();
//     }
//     render() {
//         let listHtml = '';
//         this.filteredGoods.forEach(good => {
//             const goodItem = new GoodsItem(good.product_name, good.price);
//             listHtml += goodItem.render();
//         });
//         document.querySelector('.goods-list').innerHTML = listHtml;
//     }
// }