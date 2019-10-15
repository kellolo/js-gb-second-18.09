import 'normalize.css'
import './style.css'

import 'regenerator-runtime/runtime'

import Vue from 'vue'
import Vuex from 'vuex'

import Cart from './components/Cart.vue'
import GoodsList from './components/GoodsList.vue'
import SearchForm from './components/SearchForm.vue'

import NotifyPlugin from './plugins/NotifyPlugin.js'
import storeObj from './store.js'

Vue.use(Vuex)

Vue.use(NotifyPlugin, {
    error: true,
})

const store = new Vuex.Store(storeObj)

new Vue({
    el: '#app',
    store,
    components: {
        Cart,
        GoodsList,
        SearchForm,
    }
})
