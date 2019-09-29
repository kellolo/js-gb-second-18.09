//заглушки (имитация базы данных)
const urlGitHubServer = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json";
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

// В данной версии не используется оставил в учебных целях. 
// Перешёл на fetch().then().catch()
// let makeGETRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         let xhr

//         if (window.XMLHttpRequest){
//             xhr = new XMLHttpRequest()
//         } else if (window.ActiveXObject){
//             // браузер IO
//             xhr = new ActiveXObject("Microsoft.XMLHTTP")
//         }        

//         // повесили обработчик события на изменение статуса запроса
//         xhr.onreadystatechange = () => {
//             // если запрос выполнен
//             if (xhr.readyState === 4){
//                 // проверяем успешно или с ошибкой выполнен запрос
//                 if (xhr.status == 200){
//                     // в callback resolve передаём результат выполнения запроса - данные
//                     resolve(xhr.responseText)
//                 } else {
//                     reject(xhr.status)
//                 }
//             }
//         }

//         // определяем параметры запроса: задаём тип запроса, адрес ресурса, флаг асинхронности
//         xhr.open("GET", url, true);
//         // отправили запрос на сервер
//         xhr.send();
//     });
// }

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
        this.products = []
        this._init()
    }

    _init() {
        document.querySelector('.products').addEventListener('click', (evt) => {
            if (evt.target.classList.contains('buy-btn')) {
                let productId = +evt.target.dataset['id']
                let find = this.products.find(element => element.id === productId)
                cart.addProduct(find)
            }
        })
    }
    _render() {
        const block = document.querySelector('.products')
        this.products.forEach(product => {
            block.innerHTML += product.template
        });
    }
    _mapProducts(srvProducts){
        srvProducts.forEach(srvProduct => {
            // деструктурируем массив продуктов, полученный по запросу с сервера
            let {id_product: id, product_name: name, price} = srvProduct
            this.products.push(new Product({id: id, name: name, price: price, img: image}))
        });
    }
    async fetchProducts() {
        try {
            var data = await fetch(urlGitHubServer)
            .then(srvData => {
                console.log("Данные в ответе сервера: \n", srvData)
                console.log("Тип данных: ", typeof srvData) //object Response{}
                return srvData.json()})
            this._mapProducts(data)
            this._render()
        } catch (error) {
            console.error("Ошибка: ", error)
        } finally {
            console.log("Асинхронный вызов завершён.")
        }
        
    }
    // Устаревшая версия с использовантем Promise и makeGETRequest.
    // Оставил отрывок кода в учебных целях.
    // Перешёл на fetch().then()
    // fetchProducts() {            
    //     makeGETRequest(urlGitHubServer)
    //         .then((srvData) => {
    //             console.log("Данные в ответе сервера: \n", srvData)
    //             console.log("Тип данных: ", typeof srvData) //string
    //             this._mapProducts(JSON.parse(srvData))
    //             this._render()
    //         })
    //         .catch((err) => {console.log(err)})
    // }
}

let list = new ProductsList
list.fetchProducts()

class CartItem {
    constructor(product) {
        this.product = product
        this.quantity = 0
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
    addProduct(product) {
        let find = this.cartItems.find(element => element.product.id === product.id);
        if (find) {
            find.quantity++;
        }
        else {
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
