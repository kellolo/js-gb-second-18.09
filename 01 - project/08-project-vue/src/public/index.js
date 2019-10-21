import '@babel/polyfill'
import './css/normalize.css'
import './css/style.css'

//import appObj from './js/main'
import Vue from 'vue'
import app from './js/main.vue'

// const app = new Vue (appObj)

new Vue ({
    render: h => h(app)
}).$mount('#app')