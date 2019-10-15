const handler = require('./handler.js')

const statsFile = require('./stats.json')
const cartFile = require('./cart.json')
const catalogFile = require('./catalog.json')

class Model {
    constructor(filename) {
        this.filename = filename
        this._read()
    }
    _read() {
        return handler.read(this.filename)
                    .then(data => this.data = data)
    }
    _write() {
        return handler.write(this.filename, this.data)
    }
    getAll(data) {
        return Promise.resolve(data || this.data)
    }
    getById(id, data) {
        return new Promise( (resolve, reject) => {
            const find = (data || this.data).find ( i => i.id === id )
            if (find) resolve(find)
            reject('Cant find by id = '+ id)
        })
    }
}

class Logger extends Model {
    constructor() {
        super(statsFile)
    }
    log(msg, id, title, q) {
        try {
            this.data.push({
                type: msg,
                product_id: id,
                title,
                quantity: q,
                timestamp: new Date().toISOString()
            })
            this._write()
        } catch (err) {
            console.log("Failed to write log", err)
        }
    }
}

class Cart extends Model {
    constructor() {
        super(cartFile)
    }
    getItems() {
        return super.getAll(this.data.items)
    }
    getById(id) {
        return super.getById(id, this.data.items)
    }
    add(id, quantity = 1) {
        if (quantity <= 0) return Promise.reject(" Quantity <= 0 ")
        if (!this.catalog) {
            throw new Error('Catalog is not defined')
         }
        return this.getById(id)
                    .catch( err =>
                        this.catalog.getById(id)
                            .then(find => ({...find, quantity: 0}))
                            .then(find => {
                                this.data.items.push(find)
                                return find
                            })
                    ).then( find => {
                        find.quantity += quantity
                        this.data.total += find.price * quantity
                        this.data.count += quantity
                        return find
                    })
                    .then( find => {
                        this._write()
                        this.logger && this.logger.log("Add product to cart", id, find.title, quantity)
                        return { cart: this.data, item: find }
                    })
                    .catch( err => {
                        throw new Error(`Product with id ${id} not found in cart, nor in catalog`)
                    })
    }
    remove(id, quantity = 1) {
        if (quantity <= 0) return Promise.reject(" Quantity <= 0 ")
        if (!this.catalog) {
            throw new Error('Catalog is not defined')
         }
        return this.getById(id)
                    .then( find => {
                        const d = Math.min(find.quantity, quantity)
                        find.quantity -= d
                        this.data.total -= find.price * d
                        this.data.count -= d
                        if (find.quantity === 0) {
                            this.data.items = this.data.items.filter( i => i.id !== id )
                        }
                        return find
                    })
                    .then( find => {
                        this._write()
                        this.logger && this.logger.log("Remove product from cart", id, find.title, quantity)
                        return { cart: this.data, item: find }
                    })
                    .catch( err => {
                        throw new Error(`Product with id ${id} not found in cart`)
                    })
    }
}

class Catalog extends Model {
    constructor() {
        super(catalogFile)
    }
}

class DB {
    constructor() {
        this.cart = new Cart()
        this.catalog = new Catalog()
        this.logger = new Logger()
        this.cart.catalog = this.catalog
        this.catalog.cart = this.cart
        this.cart.logger = this.logger
    }
}

const db = new DB()

module.exports = {
    db,
    cart: db.cart,
    catalog: db.catalog,
}
