const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

function makeGETRequest(url) {
	return new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onload = () => resolve(xhr.responseText);
		xhr.onerror = () => reject(new Error(`Error ${url}`));
		xhr.open('GET', url, true);
		xhr.send();
	})
};

class Product {
	constructor(product) {
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
	constructor() {
		this.products = [],
		this._init()
	}

	_init() {
		document.querySelector('.products').addEventListener('click', (evt) => {
			if (evt.target.classList.contains('buy-btn')) {
				let productId = +evt.target.dataset['id'];
				let find = this.products.find(element => element.id === productId);
				cart.addProduct(find);
			}
		});
	}

	productsListSrv(dataList) {
		dataList.forEach(dataList => {
			let {
				id_product: id,
				product_name: name,
				price
			} = dataList
			this.products.push(new Product({
				id: id,
				name: name,
				price: price,
				img: image
			}))
		});
	}

	fetchProducts() {
		makeGETRequest(`${API_URL}/catalogData.json`)
			.then(data => {
				this.productsListSrv(JSON.parse(data))
				this.render()
			})
			.catch((err) => {
				console.log(err)
			})
	}

	render() {
		const block = document.querySelector('.products');
		this.products.forEach(product => {
			block.innerHTML += product.template
		});
	}
}

class CartItem {
	constructor(product) {
		this.product = product,
			this.quantity = 0
	}

	getTemplate() {
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
				</div>`;
	}
}

class Cart {
	constructor() {
		this.cartItems = [],
			this._init(),
			this.render()
	}

	_init() {
		document.querySelector('.btn-cart').addEventListener('click', () => {
			document.querySelector('.cart-block').classList.toggle('invisible')
		});

		document.querySelector('.cart-block').addEventListener('click', (evt) => {
			if (evt.target.classList.contains('del-btn')) {
				this.removeProduct(evt.target);
			}
		});
	}

	render() {
		const block = document.querySelector('.cart-block');
		block.innerHTML = "";
		let sum = 0;
		this.cartItems.forEach(cartItem => {
			sum += cartItem.quantity * cartItem.product.price;
			block.innerHTML += cartItem.getTemplate();
		});
		block.innerHTML = `<div><p>Total price: ${sum}</p><hr><div>` + block.innerHTML;

	}

	addProduct(product) {
		let find = this.cartItems.find(element => element.product.id === product.id);
		if (find) {
			find.quantity++;
		} else {
			find = new CartItem(product);
			find.quantity++;
			this.cartItems.push(find);
		}
		this.render();
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
		this.render();
	}
}

let list = new ProductsList;
list.fetchProducts();
let cart = new Cart;