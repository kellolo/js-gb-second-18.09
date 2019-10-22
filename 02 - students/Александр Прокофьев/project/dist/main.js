/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/js/main */ \"./src/public/js/main.js\");\n\r\n\r\nlet app = new Vue (_public_js_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/cart.js":
/*!*******************************!*\
  !*** ./src/public/js/cart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet cartItem = {\r\n    props:[\r\n        'item'\r\n    ],\r\n    data(){\r\n        return {\r\n            img_cart: 'https://placehold.it/100x80'\r\n        }\r\n    },\r\n    template:   `<div class=\"cart-item\">\r\n                    <div class=\"product-bio\">\r\n                        <img :src=\"img_cart\" alt=\"Some image\">\r\n                        <div class=\"product-desc\">\r\n                            <p class=\"product-title\">{{item.product_name}}</p>\r\n                            <p class=\"product-quantity\">Quantity: {{item.quantity}}</p>\r\n                            <p class=\"product-single-price\">$ {{item.price}} each</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"right-block\">\r\n                        <p class=\"product-price\">{{item.quantity * item.price}}</p>\r\n                        <button class=\"del-btn\" @click=\"$parent.removeProduct(item.id_product)\">&times;</button>\r\n                    </div>\r\n                </div>`\r\n}\r\n\r\nlet cart = {\r\n    props:[\r\n        'toggle'\r\n    ],\r\n    data(){\r\n        return {\r\n            amount: null,\r\n            count_goods: null,\r\n            cart_items: [],\r\n            total_price: 0,\r\n            cart_empty_msg: 'Нет данных',\r\n            url: '/api/cart',\r\n            err: 'Корзина товаров: запрос на сервер вернул ошибку.'\r\n        }\r\n    },\r\n    methods:{\r\n        addProduct(item){\r\n            let find = this.cart_items.find(el => el.id_product === item.id_product)\r\n            if (find) {\r\n                //put\r\n                this.$parent.putJson(`${this.url}/${find.id_product}`, {quantity: 1})\r\n                    .then(data => {\r\n                        if (data.result){\r\n                            find.quantity++\r\n                        }\r\n                    })\r\n            }\r\n            else {\r\n                //post\r\n                let prod = Object.assign({quantity:  1}, item)                \r\n                this.$parent.postJson(`${this.url}`, prod)\r\n                    .then(data => {\r\n                        if (data.result){\r\n                            this.cart_items.push(prod)\r\n                        }\r\n                    })\r\n            }\r\n            this.calcTotal()\r\n        },\r\n        removeProduct(productId){\r\n            let find = this.cart_items.find(elem => elem.id_product === productId)\r\n            if (find.quantity > 1) {\r\n                //put\r\n                this.$parent.putJson(`${this.url}/${productId}`, {quantity: -1})\r\n                    .then(data => {\r\n                        if (data.result){\r\n                            find.quantity--\r\n                        }\r\n                    })\r\n            }\r\n            else {\r\n                //delete                \r\n                this.$parent.deleteJson(`${this.url}/${productId}`)\r\n                    .then(data => {\r\n                        if (data.result){\r\n                            this.cart_items.splice(this.cart_items.indexOf(find), 1)\r\n                        }\r\n                    })\r\n            }\r\n            this.calcTotal()\r\n        },\r\n        calcTotal(){\r\n            let sum = 0\r\n            this.cart_items.forEach(element => sum += element.price * element.quantity)\r\n            this.total_price = sum\r\n        }\r\n    },\r\n    computed:{\r\n        \r\n    },\r\n    async mounted(){\r\n        let res = await this.$parent.getJson(this.url)\r\n        this.amount = res.amount\r\n        this.count_goods = res.countGoods\r\n        this.cart_items = [...res.contents]\r\n        this.calcTotal()\r\n    },\r\n    template:   `<div class=\"cart-block\" v-show=\"toggle\">\r\n                    <div class='total-price'><p>Total price: {{total_price}} $</p><hr></div>\r\n                    <cart-item v-for=\"item in cart_items\" :key=\"item.id_product\" :item=\"item\"></cart-item>\r\n                    <div class=\"cart-item\" v-if=\"cart_items.length == 0\">{{cart_empty_msg}}</div>\r\n                </div>`,\r\n    components: {\r\n        'cart-item': cartItem\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\n\n//# sourceURL=webpack:///./src/public/js/cart.js?");

/***/ }),

/***/ "./src/public/js/catalog.js":
/*!**********************************!*\
  !*** ./src/public/js/catalog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet productItem = {\r\n    props:[\r\n        'product'\r\n    ],\r\n    data(){\r\n        return {\r\n            img: 'https://placehold.it/200x150',\r\n        }\r\n    },\r\n    template: \r\n                `<div class=\"product-item\">\r\n                    <img :src=\"img\" alt=\"Some img\">\r\n                    <div class=\"desc\">\r\n                        <h3>{{product.product_name}}</h3>\r\n                        <p>{{product.price}} $</p>\r\n                        <button class=\"buy-btn\" @click=\"$root.$refs.cart.addProduct(product)\">Купить</button>\r\n                    </div>\r\n                </div>`\r\n}\r\n\r\nlet catalog = {\r\n    data(){\r\n        return {\r\n            filtered: [],\r\n            products: [],\r\n            url: '/api/products',\r\n            err: 'Каталог товаров: запрос на сервер вернул ошибку.'\r\n        }\r\n    },\r\n    methods:{\r\n        filterCatalog(filter){\r\n            const reg = new RegExp(filter, 'i')            \r\n            this.filtered = this.products.filter(el => reg.test(el.product_name))\r\n        }\r\n    },\r\n    async mounted(){\r\n        let res = await this.$parent.getJson(this.url)\r\n        this.products = res\r\n        this.filtered = res\r\n    },\r\n    template: \r\n                `<div class=\"products\">\r\n                    <product-item v-for=\"product of filtered\" :key=\"product.id_product\" :product=\"product\">\r\n                    </product-item>\r\n                </div>`,\r\n    components: {\r\n        'product-item': productItem\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (catalog);\n\n//# sourceURL=webpack:///./src/public/js/catalog.js?");

/***/ }),

/***/ "./src/public/js/error-notifier.js":
/*!*****************************************!*\
  !*** ./src/public/js/error-notifier.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet error = {\r\n    data(){\r\n        return{\r\n            err: ''\r\n        }\r\n    },\r\n    methods:{\r\n        flashErrMsg(err_msg){\r\n            this.err = err_msg\r\n        }\r\n    },\r\n    template:   `<div class=err-note v-if=\"err.length != 0\"><h4>{{err}}</h4></div>`\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (error);\n\n//# sourceURL=webpack:///./src/public/js/error-notifier.js?");

/***/ }),

/***/ "./src/public/js/filter.js":
/*!*********************************!*\
  !*** ./src/public/js/filter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet search = {\r\n    data(){\r\n        return {\r\n            filter: ''\r\n        }\r\n    },\r\n    template: `\r\n                <form action=\"#\" class=\"search-form\" @submit.prevent=\"$root.$refs.cata.filterCatalog(filter)\">\r\n                    <input type=\"text\" class=\"search-field\" v-model.lazy=\"filter\">\r\n                    <button class=\"btn-search\" type=\"submit\">\r\n                        <i class=\"fas fa-search\"></i>\r\n                    </button>\r\n                </form>`\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);\n\n//# sourceURL=webpack:///./src/public/js/filter.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/public/js/cart.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ \"./src/public/js/catalog.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./src/public/js/filter.js\");\n/* harmony import */ var _error_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-notifier */ \"./src/public/js/error-notifier.js\");\n\r\n\r\n\r\n\r\n\r\nlet appObj = {\r\n    el: '#app',\r\n    data:{\r\n        cart_toggle: false //признак, переключатель видимости корзины\r\n    },\r\n    methods:{\r\n        async getJson(url){\r\n            return fetch(url)\r\n                .then(res => res.json())\r\n                .catch(err => {\r\n                    this.$refs.err_notifier.flashErrMsg(err.message)\r\n                    console.log(err)\r\n                })\r\n        },\r\n        //добавление нового товара в корзину\r\n        async postJson(url, data){\r\n            return fetch(url, \r\n                    {\r\n                        method: 'POST',\r\n                        headers: {\r\n                            \"Content-Type\": \"application/json\"\r\n                        },\r\n                        body: JSON.stringify(data)\r\n                    })\r\n                .then(res => res.json())\r\n                .catch(err => {\r\n                    this.$refs.err_notifier.flashErrMsg(err.message)\r\n                    console.log(err)\r\n                })\r\n        },\r\n        //редактирование товара в корзине\r\n        async putJson(url, data){\r\n            return fetch(url, \r\n                    {\r\n                        method: 'PUT',\r\n                        headers: {\r\n                            \"Content-Type\": \"application/json\"\r\n                        },\r\n                        body: JSON.stringify(data)\r\n                    })\r\n                .then(res => res.json())\r\n                .catch(err => {\r\n                    this.$refs.err_notifier.flashErrMsg(err.message)\r\n                    console.log(err)\r\n                })\r\n        },\r\n        //удаление товара из корзины\r\n        async deleteJson(url){\r\n            return fetch(url, \r\n                    {\r\n                        method: 'DELETE',\r\n                        headers: {\r\n                            \"Content-Type\": \"application/json\"\r\n                        }\r\n                    })\r\n                .then(res => res.json())\r\n                .catch(err => {\r\n                    this.$refs.err_notifier.flashErrMsg(err.message)\r\n                    console.log(err)\r\n                })\r\n        }\r\n    },\r\n    components: {\r\n        cart: _cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"], catalog: _catalog__WEBPACK_IMPORTED_MODULE_1__[\"default\"], search: _filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], error: _error_notifier__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (appObj);\r\n\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ })

/******/ });