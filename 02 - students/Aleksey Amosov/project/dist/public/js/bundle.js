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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/css/normalize.css":
/*!**************************************!*\
  !*** ./src/public/css/normalize.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/css/normalize.css?");

/***/ }),

/***/ "./src/public/css/style.css":
/*!**********************************!*\
  !*** ./src/public/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/css/style.css?");

/***/ }),

/***/ "./src/public/index.js":
/*!*****************************!*\
  !*** ./src/public/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ \"./src/public/css/normalize.css\");\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/public/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main */ \"./src/public/js/main.js\");\n\n\n\nvar app = new Vue(_js_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./src/public/index.js?");

/***/ }),

/***/ "./src/public/js/CartComp.js":
/*!***********************************!*\
  !*** ./src/public/js/CartComp.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar cartItem = {\n  props: ['cartItem', 'img'],\n  template: \"<div class=\\\"cart-item\\\" >\\n                    <div class=\\\"product-bio\\\">\\n                        <img :src=\\\"img\\\" alt=\\\"Some image\\\">\\n                        <div class=\\\"product-desc\\\">\\n                            <p class=\\\"product-title\\\">{{cartItem.product_name}}</p>\\n                            <p class=\\\"product-quantity\\\">Quantity: {{cartItem.quantity}}</p>\\n                            <p class=\\\"product-single-price\\\">$ {{cartItem.price}} each</p>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"right-block\\\">\\n                        <p class=\\\"product-price\\\">{{cartItem.quantity*cartItem.price}}</p>\\n                        <button class=\\\"del-btn\\\" @click=\\\"$parent.remove(cartItem)\\\">&times;</button>\\n                    </div>\\n                </div>\"\n};\nvar cart = {\n  data: function data() {\n    return {\n      cartItems: [],\n      imgCart: 'https://placehold.it/50x100',\n      cartUrl: '/getBasket.json',\n      showCart: false\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$parent.getJson(\"/api/cart\").then(function (data) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = data.contents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var el = _step.value;\n\n          _this.cartItems.push(el);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    });\n  },\n  methods: {\n    addProduct: function addProduct(product) {\n      var _this2 = this;\n\n      var find = this.cartItems.find(function (el) {\n        return el.id_product === product.id_product;\n      });\n\n      if (find) {\n        //put\n        this.$parent.putJson(\"/api/cart/\".concat(find.id_product), {\n          quantity: 1\n        }).then(function (data) {\n          if (data.result) {\n            find.quantity++;\n          }\n        });\n      } else {\n        //post\n        var prod = Object.assign({\n          quantity: 1\n        }, product);\n        this.$parent.postJson('/api/cart', prod).then(function (data) {\n          if (data.result) {\n            _this2.cartItems.push(prod);\n          }\n        });\n      }\n    },\n    remove: function remove(product) {\n      var _this3 = this;\n\n      var find = this.cartItems.find(function (el) {\n        return el.id_product === product.id_product;\n      });\n\n      if (find.quantity > 1) {\n        //put\n        this.$parent.putJson(\"/api/cart/\".concat(find.id_product), {\n          quantity: -1\n        }).then(function (data) {\n          if (data.result) {\n            find.quantity--;\n          }\n        });\n      } else {\n        //delete\n        this.$parent.deleteJson(\"/api/cart/\".concat(product.id_product)).then(function (data) {\n          if (data.result) {\n            _this3.cartItems.splice(_this3.cartItems.indexOf(product), 1);\n          }\n        });\n      }\n    }\n  },\n  template: \"<div>\\n                <button class=\\\"btn-cart\\\" type=\\\"button\\\" @click=\\\"showCart = !showCart\\\">\\u041A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0430</button>\\n                <div class=\\\"cart-block\\\" v-show=\\\"showCart\\\">\\n                    <p v-if=\\\"!cartItems.length\\\">Cart is empty</p>\\n                    <cart-item \\n                    v-for=\\\"product of cartItems\\\"  \\n                    :key=\\\"product.id_product\\\"\\n                    :img=\\\"imgCart\\\"\\n                    :cart-item=\\\"product\\\"></cart-item>\\n                </div>\\n            </div>\",\n  components: {\n    'cart-item': cartItem\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\n\n//# sourceURL=webpack:///./src/public/js/CartComp.js?");

/***/ }),

/***/ "./src/public/js/ErrorComp.js":
/*!************************************!*\
  !*** ./src/public/js/ErrorComp.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar error = {\n  data: function data() {\n    return {\n      text: ''\n    };\n  },\n  methods: {\n    setError: function setError(error) {\n      this.text = error;\n    }\n  },\n  template: \"\\n        <div class=\\\"error-block\\\" v-if=\\\"text\\\">\\n            <p class=\\\"error-msg\\\">\\n                <button class=\\\"close-btn\\\" @click=\\\"text = ''\\\">&times;</button>\\n                {{ text }}\\n            </p>\\n        </div>\\n    \"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (error);\n\n//# sourceURL=webpack:///./src/public/js/ErrorComp.js?");

/***/ }),

/***/ "./src/public/js/FilterComp.js":
/*!*************************************!*\
  !*** ./src/public/js/FilterComp.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar filter = {\n  data: function data() {\n    return {\n      userSearch: ''\n    };\n  },\n  template: \"\\n        <form action=\\\"#\\\" class=\\\"search-form\\\" @submit.prevent='$root.$refs.products.filter (userSearch)'>\\n            <input type=\\\"text\\\" class=\\\"search-field\\\" v-model=\\\"userSearch\\\">\\n            <button class=\\\"btn-search\\\" type=\\\"submit\\\">\\n                <i class=\\\"fas fa-search\\\"></i>\\n            </button>\\n        </form>\\n    \"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (filter);\n\n//# sourceURL=webpack:///./src/public/js/FilterComp.js?");

/***/ }),

/***/ "./src/public/js/ProdComp.js":
/*!***********************************!*\
  !*** ./src/public/js/ProdComp.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar product = {\n  props: ['product', 'img'],\n  template: \"<div class=\\\"product-item\\\" >\\n                <img :src=\\\"img\\\" alt=\\\"Some img\\\">\\n                <div class=\\\"desc\\\">\\n                    <h3>{{ product.product_name }}</h3>\\n                    <p>{{ product.price }} $</p>\\n                    <button class=\\\"buy-btn\\\" @click=\\\"$root.$refs.cart.addProduct (product)\\\">\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C</button>\\n                </div>\\n            </div>\"\n};\nvar products = {\n  data: function data() {\n    return {\n      products: [],\n      imgCatalog: 'https://placehold.it/200x150',\n      catalogUrl: '/catalogData.json',\n      filtered: []\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$parent.getJson(\"/api/products\").then(function (data) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var el = _step.value;\n\n          _this.products.push(el);\n\n          _this.filtered.push(el);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    });\n  },\n  methods: {\n    filter: function filter(value) {\n      var regexp = new RegExp(value, 'i');\n      this.filtered = this.products.filter(function (el) {\n        return regexp.test(el.product_name);\n      });\n    }\n  },\n  template: \"<div class=\\\"products\\\">\\n                    <product \\n                    v-for=\\\"product of filtered\\\" \\n                    :key=\\\"product.id_product\\\"\\n                    :img=\\\"imgCatalog\\\"\\n                    :product=\\\"product\\\"></product>\\n                </div>\",\n  components: {\n    product: product\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (products);\n\n//# sourceURL=webpack:///./src/public/js/ProdComp.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CartComp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartComp */ \"./src/public/js/CartComp.js\");\n/* harmony import */ var _ProdComp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProdComp */ \"./src/public/js/ProdComp.js\");\n/* harmony import */ var _FilterComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterComp */ \"./src/public/js/FilterComp.js\");\n/* harmony import */ var _ErrorComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorComp */ \"./src/public/js/ErrorComp.js\");\n\n\n\n\nvar API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\nvar app = {\n  el: '#app',\n  methods: {\n    getJson: function getJson(url) {\n      var _this = this;\n\n      return fetch(url).then(function (result) {\n        return result.json();\n      })[\"catch\"](function (error) {\n        _this.$refs.error.setError(error);\n\n        console.log(error);\n      });\n    },\n    postJson: function postJson(url, data) {\n      var _this2 = this;\n\n      return fetch(url, {\n        method: 'POST',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(function (result) {\n        return result.json();\n      })[\"catch\"](function (error) {\n        _this2.$refs.error.setError(error);\n\n        console.log(error);\n      });\n    },\n    putJson: function putJson(url, data) {\n      var _this3 = this;\n\n      return fetch(url, {\n        method: 'PUT',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(function (result) {\n        return result.json();\n      })[\"catch\"](function (error) {\n        _this3.$refs.error.setError(error);\n\n        console.log(error);\n      });\n    },\n    deleteJson: function deleteJson(url) {\n      var _this4 = this;\n\n      return fetch(url, {\n        method: 'DELETE',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(function (result) {\n        return result.json();\n      })[\"catch\"](function (error) {\n        _this4.$refs.error.setError(error);\n\n        console.log(error);\n      });\n    }\n  },\n  components: {\n    products: _ProdComp__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    cart: _CartComp__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    filter: _FilterComp__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    error: _ErrorComp__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ })

/******/ });