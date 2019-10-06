//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

let app = new Vue ({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        imgCatalog: 'https://placehold.it/200x150',
        err: '',
        filter: ''
    },
    methods: {
        async getData () {
            try {
                await fetch(`${API_URL}/catalogData.json`)
                .then (data => data.json ())
                .then (data => {
                    this.products = data
                    this.filtered = data
                })
            }
            catch (error) {
                this.err = error
            }
            finally {
                //this.filterCatalog ()
            }
        },

        addProduct (item) {
            console.log (item.id_product)
        },

        filterCatalog () {
            const reg = new RegExp (this.filter, 'i')
            this.filtered = this.filtered.filter (el => reg.test (el.product_name))
        }
    },
    async mounted () {
        await this.getData ()
    }
})


// class List {
//     //суперкласс для ProductsList и Cart
//     constructor (url, container) {
//         this.container = container
//         this.url = url
//         this.items = []
//         this.DTO = ''
//         this.renderedItems = []
//         this._init ()
//     }
//     _init () {
//         return false
//     }
//     async getJSON (url) {
//         try {
//             this.items = await fetch (`${API_URL + this.url}`)
//                 .then (data => data.json ()) 
//                 .then (res => {
//                     this.DTO = res
//                     return res.contents ? this.items = res.contents : this.items = res
//                 })
//         } 
//         catch (err) {
//             console.log (err)
//         }
//     }
//     render () {
//         const block = document.querySelector (this.container)
//         for (let item of this.items) {
//             let prod = new lists [this.constructor.name] (item)
//             this.renderedItems.push (prod)
//             block.insertAdjacentHTML ('beforeend', prod.render ())
//         }
//     }
//     filter () {
//         //потом
//     }
// }

// class Item {
//     //суперкласс для ProductsItem и CartItem
//     constructor (el, img = 'https://placehold.it/200x150') {
//         this.product_name = el.product_name
//         this.price = el.price
//         this.id_product = el.id_product
//         this.img = img
//     }

//     render () {
//         return `<div class="product-item" data-id="${this.id_product}">
//                     <img src="${this.img}" alt="Some img">
//                     <div class="desc">
//                         <h3>${this.product_name}</h3>
//                         <p>${this.price} $</p>
//                         <button class="buy-btn" 
//                         data-id="${this.id_product}"
//                         data-name="${this.product_name}"
//                         data-image="${this.img}"
//                         data-price="${this.price}">Купить</button>
//                     </div>
//                 </div>`
//     }
// }

// class Product extends Item {}

// class ProductsList extends List {
//     constructor (cart, url = '/catalogData.json', container = '.products') {
//         super (url, container)
//         this.cart = cart
//     }

//     async _init () {
//         await this.getJSON()
//         this.render ()
//     }
    
// }


// class CartItem extends Item {
//     constructor (el, img = 'https://placehold.it/100x80') {
//         super (el, img)
//         this.quantity = el.quantity
//     }

//     render () {
//         return `<div class="cart-item" data-id="${this.id_product}">
//                     <div class="product-bio">
//                         <img src="${this.img}" alt="Some image">
//                         <div class="product-desc">
//                             <p class="product-title">${this.product_name}</p>
//                             <p class="product-quantity">Quantity: ${this.quantity}</p>
//                             <p class="product-single-price">$${this.price} each</p>
//                         </div>
//                     </div>
//                     <div class="right-block">
//                         <p class="product-price">${this.quantity * this.price}</p>
//                         <button class="del-btn" data-id="${this.id_product}">&times;</button>
//                     </div>
//                 </div>`
//     }
// }

// class Cart extends List {
//     constructor (url = '/getBasket.json', container = '.cart-block') {
//         super (url, container) 
//     }
//     async _init () {
//         await this.getJSON()
//         this.render ()
//     }
// }

// const lists = {
//     ProductsList: Product,
//     Cart: CartItem
// }

// let products = new ProductsList ()
// let cart = new Cart ()
