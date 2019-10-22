/*
As of Babel 7.4.0, this package has been deprecated in favor of directly including core-js/stable 
(to polyfill ECMAScript features) and regenerator-runtime/runtime (needed to use transpiled generator functions):
 */
import '@babel/polyfill'
import './css/normalize.css'
import './css/style.css'
import appObj from './js/main'

let app = new Vue (appObj)