//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API_URL = 'https://raw.githubusercontent.com/amsv/js-gb-second-18.09/master/02%20-%20students/Aleksey%20Amosov/project/js';

class Product {
    constructor (product) {
        this.title = product.product_name,
        this.price = product.price,
        this.img = image,
        this.id = product.id_product,
        this.template = `<div class="product-item" data-id="${this.id}">
                            <img src="${this.img}" alt="Some img">
                            <div class="desc">
                                <h3>${this.title}</h3>
                                <p>${this.price} руб.</p>
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
        this.products = [];
		this.fetchProducts();
    }
	
	async fetchProducts() {
		try {
			this.products = await fetch (`${API_URL}/catalogData.json`)
				.then (data => data.json ())
			this._init ();
			this.cart = new Cart();
			this._render ();
		} 
		catch (err) {
			console.log (err)
		}
		finally {
			console.log ('end of async')
		}
    }
    
    _init () {		
        document.querySelector ('.products').addEventListener ('click', (evt) => {
            if (evt.target.classList.contains ('buy-btn')) {
                let productId = +evt.target.dataset['id'];
                let find = this.products.find (element => element.id_product === productId);
                this.cart.addProduct (find);
            }
        })
    }

    _render () {
        const block = document.querySelector ('.products');
        this.products.forEach ( product => {
			const goodItem = new Product(product);
            block.innerHTML += goodItem.template;
        } )
    }
}

class cartItem {
    constructor (product) {
        this.product = product;
        this.quantity = 0;
    }

    getTemplate () {
        return `<div class="cart-item" data-id="${this.product.id_product}">
                    <div class="product-bio">
                        <img src="${cartImage}" alt="">
                        <div class="product-desc">
                            <p class="product-title">${this.product.product_name}</p>
                            <p class="product-quantity">Кол-во: ${this.quantity}</p>
                            <p class="product-single-price">${this.product.price} руб. за ед.</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">${this.quantity * this.product.price}</p>
                        <button class="del-btn" data-id="${this.product.id_product}">&times;</button>
                    </div>
                </div>`;
    }
}

class Cart {
    constructor () {
        this.cartItems = [];
        this._init ();
        this._render ();
    }

    _init () {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible')
        });
        document.querySelector ('.cart-block').addEventListener ('click', (evt) => {
            if (evt.target.classList.contains ('del-btn')) {
                this.removeProduct (evt.target);
            }
        });
    }

    _render () {
        const block = document.querySelector ('.cart-block');
        block.innerHTML = "";
        let sum = 0;
        this.cartItems.forEach (cartItem => {
            sum += cartItem.quantity * cartItem.product.price;
            block.innerHTML += cartItem.getTemplate ();
        });
        block.innerHTML = `<div><p>Общая цена: ${sum}</p><hr><div>` + block.innerHTML;
        
    }

    addProduct (product) {
        let find = this.cartItems.find (element => element.product.id_product === product.id_product);
        if (find) {
            find.quantity++;
        } 
        else {
            find = new cartItem (product);
            find.quantity++;
            this.cartItems.push (find);
        }
        this._render ();
    }

    removeProduct (product) {
        let productId = +product.dataset['id'];
        let find = this.cartItems.find (element => element.product.id_product === productId);
        if (find.quantity > 1) {
            find.quantity--;
        } else {
            this.cartItems.splice(this.cartItems.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
        }
        this._render ();
    }
} 

//let list = new ProductsList;

const app = new Vue({
    el: "#app",
    data: {
        products: [],
        carts: [],
        image: 'https://placehold.it/200x150',
        cartImage: 'https://placehold.it/100x80',
        API_URL: 'https://raw.githubusercontent.com/amsv/js-gb-second-18.09/master/02%20-%20students/Aleksey%20Amosov/project/js',
        isVisibleCart: false,
        filteredGoods: [],
        searchLine: ''
    },
    methods: {
        changeVisibleCart() {
            this.isVisibleCart = !this.isVisibleCart; 
          },
        filterGoods() {
        const regexp = new RegExp(this.searchLine, 'i');
        this.filteredGoods = this.products.filter(good => {  
            return regexp.test(good.product_name); 
        })
        console.log(this.searchLine);
        }  
    },
    computed: {
      isGoodsEmpty() {
        return 1;
      }
    },
    async mounted() {
      const goods = await fetch(`${this.API_URL}/catalogData.json`)
      .then (data => data.json ())
      this.carts = await fetch(`${this.API_URL}/getBasket.json`)
      .then (data => data.json ())
      this.products = goods;
      this.filteredGoods = goods;
    }
  });