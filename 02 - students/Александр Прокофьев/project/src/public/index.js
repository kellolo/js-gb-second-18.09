/*
As of Babel 7.4.0, this package has been deprecated in favor of directly including core-js/stable 
(to polyfill ECMAScript features) and regenerator-runtime/runtime (needed to use transpiled generator functions):
 */
import '@babel/polyfill'
import './css/normalize.css'
import './css/style.css'
import Vue from "vue"
import app from './js/main.vue'

new Vue({
    render: h => h(app)
}).$mount('#app')