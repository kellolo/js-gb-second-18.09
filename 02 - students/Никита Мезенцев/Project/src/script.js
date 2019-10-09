class DB {
	constructor() {
		this.url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
	}
	getAll() {
		return fetch( this.url )
						.then( res => res.json())
						.catch( err => {
							console.error("Failed to fetch resources with error:", err)
						})
	}
}

class Product {
	constructor({id_product, product_name, price, img, thumb}) {
		this.id_product = id_product
		this.product_name = product_name
		this.price = price
		this.img = img || "https://placehold.it/200x150"
		this.thumb = thumb || "https://placehold.it/100x80"
	}
}

class CatalogProduct extends Product {}

class CartProduct extends Product {
	constructor(opts) {
		super(opts)
		this.quantity = opts.quantity || 1
		this.total = this.price * this.quantity
	}
	inc() {
		this.quantity++
		this.total += this.price
	}
	dec() {
		this.quantity--
		this.total -= this.price
	}
}

Vue.component('goods-item', {
	props: ['item'],
	methods: {
		buy() {
			this.$el.dispatchEvent(new CustomEvent('buy', {
				detail: this.item,
				bubbles: true,
			}))
		}
	},
	template: `<div class='goods-item'>
				<img class='goods-item__img' :src="item.img" />
				<div class='goods-item__block'>
					<h3 class='goods-item__title'>{{ item.product_name }}</h3>
					<span class='goods-item__price'>\${{ item.price}}</span>
				</div>
				<button class='goods-item__btn btn' :data-id="item.id_product" @click="buy">Купить</button>
			</div>`
})

Vue.component('cart-item', {
	props: ['item'],
	methods: {
		remove () {
			this.$el.dispatchEvent(new CustomEvent('remove', {
				detail: this.item,
				bubbles: true
			}))
		}
	},
	computed: {
		total () {
			return this.item.price * this.item.quantity
		}
	},
	template: `<div class='cart-item'>
					<img class='cart-item__img' :src="item.thumb" />
					<div class='cart-item__block'>
						<h3 class='cart-item__title'>{{ item.product_name }}</h3>
						<span class='cart-item__quantity'>Quantity: {{ item.quantity }}</span>
					</div>
					<div class='cart-item__block'>
						<span class='cart-item__price'>\${{ total }}</span>
						<button class='cart-item__btn btn' :data-id="item.id_product" @click="remove">x</button>
					</div>
				</div>`
})

Vue.component('goods-list', {
	props: ['items'],
	template: `<div class="goods-list">
						<goods-item v-for="item of items" :key="item.id_product" :item="item" />
					</div>`
})

Vue.component('cart', {
	props: ['items'],
	data: () => ({
		visible: false
	}),
	computed: {
		total () {
			return Object.values(this.items).reduce((acc, i) => acc + i.total, 0)
		},
		isEmpty () {
			return Object.values(this.items).length <= 0
		}
	},
	template: `<div class="cart">
                <button class="cart-button btn btn_light" type="button" @click="visible = !visible">Корзина</button>
                <div class="cart-list" v-bind:class="{  invisible: !visible }">
                    <div class="cart-list__header" v-show="!isEmpty"><div class='cart-list__total'>Total: <span>\${{ total }}</span></div></div>
                    <ul class="cart-list__content">
                    	<cart-item v-for="item in items" :key="item.id_product" :item="item" />
                    </ul>
                    <div class="cart-list__footer" v-show="!isEmpty"><button class='cart-list__order-button btn btn_stroke'>Оформить</button></div>
                </div>
            </div>`
})

Vue.component('search-form', {
	props: ['value'],
	data: () => ({
		focused: false
	}),
	computed: {
		val: {
			get() { return this.value },
			set(x) { this.$emit('update:value', x) }
		}
	},
	template: `<div class="search-input" :class="{ focused }">
                <input class="search-control" placeholder="Search..." v-model="val" @focus="focused = true" @blur="focused = false">
            </div>`
})

const App = new Vue({
	el: '#app',
	data: () => ({
		catalog: [],
		cart: {},
		filter: '',
		db: new DB()
	}),
	computed: {
		filteredCatalog () {
			if (this.filter) {
				return this.catalog.filter(i => {
					return  new RegExp(this.filter, 'ig').test(i.product_name)
				})
			}
			return this.catalog
		}
	},
	methods: {
		buy (e) {
			const product = e.detail
			if (this.cart[product.id_product] ) {
				this.cart[product.id_product].inc()
			}else {
				this.$set(this.cart, product.id_product,new CartProduct(product))
			}
		},
		remove (e) {
			const product = e.detail
			this.cart[product.id_product].dec()
			if (this.cart[product.id_product].quantity <= 0) {
				this.$delete(this.cart, product.id_product)
			}
		}
	},	async mounted () {
		this.catalog = (await this.db.getAll()).map(i => new CatalogProduct(i))
		this.$el.addEventListener('buy', this.buy)
		this.$el.addEventListener('remove', this.remove)
	}
})
