import cart from '/component/cart.js'
import goodsList from '/component/goods-list.js'
import searchForm from '/component/search-form.js'
import NotifyPlugin from '/component/notify.js'
import store from '/store.js'

Vue.use(NotifyPlugin, {
    // infinite: true,
    // duration: 2,
    error: true,
    // async: true,
    // success: true,
})


const App = new Vue({
	el: '#app',
    components: {
        cart,
        'goods-list': goodsList,
        'search-form': searchForm
    },
	store
})
