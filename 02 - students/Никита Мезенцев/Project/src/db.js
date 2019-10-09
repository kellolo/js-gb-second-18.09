const sleep = (duration) => new Promise( (resolve, _) => {
    setTimeout(resolve, duration)
})

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

class DB {
    constructor() {
        this.url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
    }
    async getAll() {
        await sleep(2000)
        return fetch( this.url + '/catalogData.json' )
                        .then( res => res.ok && res || Promise.reject('Сервер вернул ошибку ' + res.status))
                        .then( res => res.json())
                        .then( data => data.map(i => new CatalogProduct(i)))
    }
    async getCart() {
        await sleep(1500)
        return fetch (this.url + '/getBasket-------------.json')
                        .then( res => res.ok && res || Promise.reject('Сервер вернул ошибку ' + res.status))
                        .then( res => res.json())
                        .then( cart => ({
                            ...cart,
                            contents: cart.contents.map(i => new CartProduct(i))
                        }))
    }
    async buy(product) {
        // await sleep(2000)
        return fetch (this.url + '/addToBasket.json', {})
                        .then( res => res.ok && res || Promise.reject('Сервер вернул ошибку ' + res.status))
                        .then( res => res.json())
                        .then( ({result}) => {
                            if (result === 1) {
                                return Promise.resolve(new CartProduct(product))
                            }
                            return Promise.reject()
                        })
    }
    async remove(product) {
        // await sleep(1000)
        return fetch (this.url + '/deleteFromBasket.json', {})
                        .then( res => res.ok && res || Promise.reject('Сервер вернул ошибку ' + res.status))
                        .then( res => res.json())
                        .then( ({result}) => {
                            if (result === 1) {
                                return Promise.resolve()
                            }
                            return Promise.reject()
                        })
    }
}

const db = new DB()
