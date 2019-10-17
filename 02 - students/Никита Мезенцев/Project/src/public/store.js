import db from './db.js'

const store = {
    state: {
        catalog: [],
        cart: [],
        filter: '',
    },
    getters: {
        filteredCatalog (state) {
            const regex = new RegExp(state.filter, 'i')
            return state.catalog.filter(i => regex.test(i.title))
        },
        cart (state) {
            return state.cart
        },
        total (state) {
            return state.cart.reduce((acc,i) => acc + i.total, 0)
        }
    },
    mutations: {
        setCatalog (state, items = []) {
            state.catalog = items
        },
        setCart (state, items = []) {
            state.cart = items
        },
        setFilter (state, value = '') {
            state.filter = value || ''
        },
        addCartProduct (state, product) {
            const _product = state.cart.find(i => i.id === product.id)
            if (_product){
                _product.inc()
            }else{
                state.cart = [...state.cart, product]
            }
        },
        removeCartProduct (state, product) {
            const _product = state.cart.find(i => i.id === product.id)
            if (_product) {
                _product.dec()
                if (_product.quantity <= 0) {
                    state.cart = state.cart.filter(i => i.id !== product.id)
                }
            }
        }
    },
    actions: {
        fetchCatalog (context) {
            return this._vm.$notify.async('Загрузка продуктов', {
                            success_msg: 'Продукты загружены',
                            error_msg: 'Не удалось загрузить продукты',
                            action: () => db.getAll(),
                            success: true,
                            async: true,
                        })
                        .then(catalog => context.commit('setCatalog', catalog))
                        .catch( err => console.log('Ошибка при загрузке каталога ', err ))
        },
        fetchCart (context) {
            return this._vm.$notify.async('Загрузка корзины', {
                            success_msg: 'Корзина загружена',
                            error_msg: 'Не удалось загрузить корзину',
                            action: () => db.getCart(),
                            success: true,
                            async: true,
                        })
                        .then( cart => context.commit('setCart', cart.contents))
                        .catch( err => console.log('Ошибка при загрузке корзины ', err ))
        },
        buy (context, product) {
            return this._vm.$notify.async('Добавляем продукт в корзину', {
                            success_msg: 'Добавили',
                            error_msg: 'Не удалось добавить продукт в корзину',
                            action: () => db.buy(product),
                        })
                        .then( cartProduct => context.commit('addCartProduct', cartProduct))
                        .catch( err => console.log('Ошибка при добавлении продукта в корзину', err ))
        },
        remove (context, product) {
            return this._vm.$notify.async('Удаляем продукт из корзины', {
                            success_msg: 'Удалили',
                            error_msg: 'Не удалось удалить продукт из корзины',
                            action: () => db.remove(product)
                        })
                        .then( () => context.commit('removeCartProduct', product))
                        .catch( err => console.log('Ошибка при удалении продукта из корзины', err ))
        },
    }
}

export default store
