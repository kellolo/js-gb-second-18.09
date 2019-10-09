//заглушки (имитация базы данных)
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
const image = 'https://placehold.it/200x150'
const cartImage = 'https://placehold.it/100x80'

let app = new Vue ({
    el: '#app',
    data:{
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        cart_items: [],
        img_catalog: 'https://placehold.it/200x150',
        img_cart: 'https://placehold.it/100x80',
        error: '',
        filter: '',
        cart_toggle: false, //признак, переключатель видимости корзины
        cart_empty_msg: 'Нет данных'
    },
    computed:{
        refreshHtml(){
            // return this.refresh_html
            console.log('заставляем Vue рендерить html-разметку')
        }
    },
    methods:{
        async getData(){
            try {
                await fetch(`${API_URL}/catalogData.json`)
                .then(data => data.json())
                .then(data => {
                    this.products = data
                    this.filtered = data
                })
            }
            catch (error){
                this.error = error
            }
        },
        addProduct(item){
            let find = this.cart_items.find(element => element.id_product === item.id_product)
            if (find) {
                find.quantity++
            }
            else {
                let prod = Object.assign({quantity:  1}, item)
                this.cart_items.push(prod)
            }
        },
        filterCatalog(){
            const reg = new RegExp(this.filter, 'i')            
            this.filtered = this.products.filter(el => reg.test(el.product_name))
        }
    },
    async mounted(){
        await this.getData()
    }
})


// //суперкласс для ProductList и Cart
// class List {
//     //переменные: 
//     //  container - селектор <div> элемента для рендеринга;
//     //  url - адрес ресурса на сервере
//     constructor(url, container) {
//         this.container = container
//         this.url = url
//         this.items = [] //список товаров, полученных от сервера по запросу
//         this.DTO = '' //это свойство добавлено, потому что по адресу /getBasket.json сервер возращает объект со свойством amount, coundGoods, contents: []
//         this.renderedItems = [] //список товаров, уже прошедших вёрстку/отрисованных
//         this._init()
//     }
//     //для каждого дочернего класса будет своя реализация. Важен интерфейс
//     _init() {
//         //заглушка
//         return false
//     }
//     async getJSON(url) {
//         try {
//             this.items = await fetch(`${API_URL + this.url}`)
//                 //.then(srvData => srvData.json()) //typeof(srvData) === object Response
//                 .then(data => data.json())
//                 .then(res => {
//                     this.DTO = res
//                     return res.contents ? this.items = res.contents : this.items = res
//                 })
//         } catch (error) {
//             console.error('Ошибка: ', error)
//         } finally {
//             console.log('Асинхронный вызов завершён.')
//         }
//     }
//     render() {
//         const block = document.querySelector(this.container)
//         block.innerHTML = ''
//         for (let item of this.items){
//             //создаем элемент для списка товаров, в зависимости от класса 
//             let prod = new lists [this.constructor.name] (item)
//             this.renderedItems.push(prod)
//             block.insertAdjacentHTML('beforeend', prod.render())
//         }
//     }
//     filter() {
//         return false;
//     }
// }

// //суперкласс для Product и CartItem
// //по-умолчанию заточен для использования в Каталоге товаров (ProductList)
// class Item {
//     //параметры: el - объект, полученный в результате парсинга ответа от сервера
//     constructor(el, img = 'https://placehold.it/200x150'){
//         this.product_name = el.product_name
//         this.price = el.price
//         this.id_product = el.id_product
//         this.img = img
//     }

//     //класс Item по-умолчанию отражает класс Product
//     render(){
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
//                 </div>`;
//     }
// }

// //просто наследуется от класса Item
// class Product extends Item{}

// class ProductsList extends List{
//     constructor(cart, url = '/catalogData.json', container = '.products') {
//         super(url, container)
//         this.cart = cart
//     }

//     async _init(){
//         await this.getJSON()
//         this.render()

//         document.querySelector('.products').addEventListener('click', (evt) => {
//             if (evt.target.classList.contains('buy-btn')) {
//                 let productId = +evt.target.dataset['id']
//                 let find = this.renderedItems.find(element => element.id_product === productId)
//                 find.quantity = 0 //добавляем свойство(отсутсвует у товара каталога), необходимое для создания товара корзины
//                 cart.addProduct(find)
//             }
//         })
//     }
// }

// class CartItem extends Item{
//     constructor(el, img = 'https://placehold.it/100x80'){
//         super(el, img)
//         this.quantity = el.quantity
//     }

//     render(){
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

// class Cart extends List{
//     constructor (url = '/getBasket.json', container = '.cart-block'){
//         super(url, container)
//     }

//     async _init(){
//         await this.getJSON()
//         this.render()

//         document.querySelector('.btn-cart').addEventListener('click', () => {
//             document.querySelector('.cart-block').classList.toggle('invisible')
//         })
//         //используем делегирование при обработки события клик по кнопке "удалить товар"
//         //вешать обработчик на каждую кнопку "удалить товар" нерационально
//         document.querySelector('.cart-block').addEventListener('click', (evt) => {
//             if (evt.target.classList.contains('del-btn')) {
//                 this.removeProduct(evt.target)
//             }
//         })
//     }
//     removeProduct(product) {
//         let productId = +product.dataset['id']
//         let find = this.items.find(element => element.id_product === productId)
//         if (find.quantity > 1) {
//             find.quantity--
//         } else {
//             this.items.splice(this.items.indexOf(find), 1)
//             document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
//         }
//         this.render()
//     }
//     addProduct(product) {
//         let find = this.items.find(element => element.id_product === product.id_product)
//         if (find) {
//             find.quantity++
//         }
//         else {
//             find = new CartItem(product)
//             find.quantity++
//             this.items.push(find)
//         }
//         this.render()
//     }
//     render(){
//         super.render()
//         let sum = 0
//         let block = document.querySelector(this.container)        
//         this.items.forEach(item => sum += item.quantity * item.price)
//         let elemTotalPrice = `<div class='total-price'><p>Total price: ${sum}</p><hr><div>`
//         block.insertAdjacentHTML('afterbegin', elemTotalPrice)
//     }
    
// }

// //словарик 
// //используется в методе List::render() для динамической подстановки 
// //конструктора нужного класса элемента массива List::items
// const lists = {
//     ProductsList: Product,
//     Cart: CartItem
// }

// let products = new ProductsList()
// let cart = new Cart;
