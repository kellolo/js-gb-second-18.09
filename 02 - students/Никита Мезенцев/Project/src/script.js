function makeGETRequest(url){
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.onloadend = e => {
			((e.target.status === 200) && resolve || reject)(e.target.responseText)
		}
		xhr.open('GET', url, true)
		xhr.send()
	})
}

class DB {
	constructor() {
		this.url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
	}
	getAll() {
		return makeGETRequest( this.url )
						.then( text => JSON.parse(text))
						.catch( err => {
							console.error("Failed to fetch resources with error:", err)
						})
	}
	getByID(id) {
		return makeGETRequest( this.url )
						.then( text => JSON.parse(text))
						.then( data => data.find( i => i.id_product.toString() === id ) )
						.catch( err => {
							console.error("Failed to fetch resources with error:", err)
						})
	}
}

class Product {
	constructor({id_product, product_name, price, img, thumb}) {
		this.id = id_product
		this.title = product_name
		this.price = price
		this.img = img || "https://placehold.it/200x150"
		this.thumb = thumb || "https://placehold.it/100x80"
	}
}

class GoodsItem extends Product {
	get template() {
		return `<div class='goods-item'>
				<img class='goods-item__img' src=${this.img} />
				<div class='goods-item__block'>
					<h3 class='goods-item__title'>${this.title}</h3>
					<span class='goods-item__price'>$${this.price}</span>
				</div>
				<button class='goods-item__btn btn' data-id=${this.id} data-fn="buy">Купить</button>
			</div>`
	}
}

class CartItem extends Product {
	constructor(product) {
		super(product)
		this.quantity = 1
		this.total = this.price
	}
	inc() {
		this.quantity += 1
		this.total = this.quantity * this.price
	}
	dec () {
		this.quantity -= 1
		this.total = this.quantity * this.price
	}
	get template() {
		return `<div class='cart-item'>
					<img class='cart-item__img' src=${this.thumb} />
					<div class='cart-item__block'>
						<h3 class='cart-item__title'>${this.title}</h3>
						<span class='cart-item__quantity'>Quantity: ${this.quantity}</span>
					</div>
					<div class='cart-item__block'>
						<span class='cart-item__price'>$${this.total}</span>
						<button class='cart-item__btn btn' data-id=${this.id} data-fn="remove">x</button>
					</div>
				</div>`
	}
}

class ProductList {
	constructor({root, items = [], db = new DB()}) {
		this._root = root
		this._db = db
	}
	addEventListener(...args) {
		this._root.addEventListener(...args)
	}
}

class GoodsList extends ProductList {
	constructor(cfg) {
		super(cfg)
		this.items = []
		this.fetchData()
			.then(() => {
				this.render()
			})
	}
	totalCost() {
		return this.items.reduce( (acc, {price}) => acc + price,  0)
	}
	async fetchData() {
		const data = await this._db.getAll()
		this.items = data.map(i => new GoodsItem(i))
	}
	render(node) {
	    let goodsList = this.items.map( i => i.template )
	    this._root.innerHTML = goodsList.join("")
	}
}

class CartList  extends ProductList{
	constructor(cfg) {
		super(cfg)
		this.items = {}
		this._contentNode = cfg.root.querySelector('.cart-list__content')
		this._headerNode = cfg.root.querySelector('.cart-list__header')
		this._footerNode = cfg.root.querySelector('.cart-list__footer')
		this.total = 0
		this.count = 0
		if (cfg.items)
			cfg.items.forEach( i => {
				const item = this.items[i.id] && this.items[i.id].inc() || (this.items[i.id] = new CartItem(i))
				this.total += item.price
				this.count++
			})
		this.render()
	}
	toggleVisibility () {
		this._root.classList.toggle('invisible')
	}
	totalCost() {
		return this.total
	}
	async add(id) {
		if (this.items[id]) {
			this.items[id].inc()
		}else {
			this.items[id] = new CartItem( await this._db.getByID(id) )
		}
		this.total += this.items[id].price
		this.count++
		this.render()
	}
	remove(id) {
		this.items[id].dec()
		this.total -= this.items[id].price
		this.count--
		if (this.items[id].quantity <= 0) delete this.items[id]
		this.render()
	}
	getProducts() {
		return Object.keys(this.items).map( id => this.items[id])
	}
	render() {
		const cartItems = Object.keys(this.items).map( id => this.items[id].template)
		this._contentNode.innerHTML = cartItems.join('')
		if (this.total)
			this._headerNode.innerHTML = `<div class='cart-list__total'>Total: <span>$${this.total}</span></div>`
		else
			this._headerNode.innerHTML = ''
		if (this.total)
			this._footerNode.innerHTML = `<button class='cart-list__order-button btn btn_stroke'>Оформить</button>`
		else
			this._footerNode.innerHTML = ''
	}
}

class App {
	constructor() {
		this._db = new DB()
		this._goodsList = new GoodsList({
			root: document.querySelector('.goods-list'),
			db: this._db,
		})
		this._cartList = new CartList({
			root: document.querySelector('.cart-list'),
			db: this._db,
		})
		this._cartButton = document.querySelector('.cart-button')

		this._goodsList.render()
		this._cartList.render()

		this._cartButton.addEventListener('click', () => this._cartList.toggleVisibility())
		this._goodsList.addEventListener('click', e => this._handleGoodsClick(e))
		this._cartList.addEventListener('click', e => this._handleCartClick(e))
	}
	_handleGoodsClick(e) {
		if (e.target.dataset.id && e.target.dataset.fn && e.target.dataset.fn === "buy") {
			this._cartList.add(e.target.dataset.id)
		}
	}
	_handleCartClick(e) {
		if (e.target.dataset.id && e.target.dataset.fn && e.target.dataset.fn === "remove") {
			this._cartList.remove(e.target.dataset.id)
		}
	}
}

const app = new App()
