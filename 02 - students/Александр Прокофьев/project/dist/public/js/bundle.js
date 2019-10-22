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

/***/ "./src/public/js/cart.js":
/*!*******************************!*\
  !*** ./src/public/js/cart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar cartItem = {\n  props: ['item'],\n  data: function data() {\n    return {\n      img_cart: 'https://placehold.it/100x80'\n    };\n  },\n  template: \"<div class=\\\"cart-item\\\">\\n                    <div class=\\\"product-bio\\\">\\n                        <img :src=\\\"img_cart\\\" alt=\\\"Some image\\\">\\n                        <div class=\\\"product-desc\\\">\\n                            <p class=\\\"product-title\\\">{{item.product_name}}</p>\\n                            <p class=\\\"product-quantity\\\">Quantity: {{item.quantity}}</p>\\n                            <p class=\\\"product-single-price\\\">$ {{item.price}} each</p>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"right-block\\\">\\n                        <p class=\\\"product-price\\\">{{item.quantity * item.price}}</p>\\n                        <button class=\\\"del-btn\\\" @click=\\\"$parent.removeProduct(item.id_product)\\\">&times;</button>\\n                    </div>\\n                </div>\"\n};\nvar cart = {\n  props: ['toggle'],\n  data: function data() {\n    return {\n      amount: null,\n      count_goods: null,\n      cart_items: [],\n      total_price: 0,\n      cart_empty_msg: 'Нет данных',\n      url: '/api/cart',\n      err: 'Корзина товаров: запрос на сервер вернул ошибку.'\n    };\n  },\n  methods: {\n    addProduct: function addProduct(item) {\n      var _this = this;\n\n      var find = this.cart_items.find(function (el) {\n        return el.id_product === item.id_product;\n      });\n\n      if (find) {\n        //put\n        this.$parent.putJson(\"\".concat(this.url, \"/\").concat(find.id_product), {\n          quantity: 1\n        }).then(function (data) {\n          if (data.result) {\n            find.quantity++;\n          }\n        });\n      } else {\n        //post\n        var prod = Object.assign({\n          quantity: 1\n        }, item);\n        this.$parent.postJson(\"\".concat(this.url), prod).then(function (data) {\n          if (data.result) {\n            _this.cart_items.push(prod);\n          }\n        });\n      }\n\n      this.calcTotal();\n    },\n    removeProduct: function removeProduct(productId) {\n      var _this2 = this;\n\n      var find = this.cart_items.find(function (elem) {\n        return elem.id_product === productId;\n      });\n\n      if (find.quantity > 1) {\n        //put\n        this.$parent.putJson(\"\".concat(this.url, \"/\").concat(productId), {\n          quantity: -1\n        }).then(function (data) {\n          if (data.result) {\n            find.quantity--;\n          }\n        });\n      } else {\n        //delete                \n        this.$parent.deleteJson(\"\".concat(this.url, \"/\").concat(productId)).then(function (data) {\n          if (data.result) {\n            _this2.cart_items.splice(_this2.cart_items.indexOf(find), 1);\n          }\n        });\n      }\n\n      this.calcTotal();\n    },\n    calcTotal: function calcTotal() {\n      var sum = 0;\n      this.cart_items.forEach(function (element) {\n        return sum += element.price * element.quantity;\n      });\n      this.total_price = sum;\n    }\n  },\n  computed: {},\n  mounted: function () {\n    var _mounted = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return this.$parent.getJson(this.url);\n\n            case 2:\n              res = _context.sent;\n              this.amount = res.amount;\n              this.count_goods = res.countGoods;\n              this.cart_items = _toConsumableArray(res.contents);\n              this.calcTotal();\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function mounted() {\n      return _mounted.apply(this, arguments);\n    }\n\n    return mounted;\n  }(),\n  template: \"<div class=\\\"cart-block\\\" v-show=\\\"toggle\\\">\\n                    <div class='total-price'><p>Total price: {{total_price}} $</p><hr></div>\\n                    <cart-item v-for=\\\"item in cart_items\\\" :key=\\\"item.id_product\\\" :item=\\\"item\\\"></cart-item>\\n                    <div class=\\\"cart-item\\\" v-if=\\\"cart_items.length == 0\\\">{{cart_empty_msg}}</div>\\n                </div>\",\n  components: {\n    'cart-item': cartItem\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\n\n//# sourceURL=webpack:///./src/public/js/cart.js?");

/***/ }),

/***/ "./src/public/js/catalog.js":
/*!**********************************!*\
  !*** ./src/public/js/catalog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar productItem = {\n  props: ['product'],\n  data: function data() {\n    return {\n      img: 'https://placehold.it/200x150'\n    };\n  },\n  template: \"<div class=\\\"product-item\\\">\\n                    <img :src=\\\"img\\\" alt=\\\"Some img\\\">\\n                    <div class=\\\"desc\\\">\\n                        <h3>{{product.product_name}}</h3>\\n                        <p>{{product.price}} $</p>\\n                        <button class=\\\"buy-btn\\\" @click=\\\"$root.$refs.cart.addProduct(product)\\\">\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C</button>\\n                    </div>\\n                </div>\"\n};\nvar catalog = {\n  data: function data() {\n    return {\n      filtered: [],\n      products: [],\n      url: '/api/products',\n      err: 'Каталог товаров: запрос на сервер вернул ошибку.'\n    };\n  },\n  methods: {\n    filterCatalog: function filterCatalog(filter) {\n      var reg = new RegExp(filter, 'i');\n      this.filtered = this.products.filter(function (el) {\n        return reg.test(el.product_name);\n      });\n    }\n  },\n  mounted: function () {\n    var _mounted = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return this.$parent.getJson(this.url);\n\n            case 2:\n              res = _context.sent;\n              this.products = res;\n              this.filtered = res;\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function mounted() {\n      return _mounted.apply(this, arguments);\n    }\n\n    return mounted;\n  }(),\n  template: \"<div class=\\\"products\\\">\\n                    <product-item v-for=\\\"product of filtered\\\" :key=\\\"product.id_product\\\" :product=\\\"product\\\">\\n                    </product-item>\\n                </div>\",\n  components: {\n    'product-item': productItem\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (catalog);\n\n//# sourceURL=webpack:///./src/public/js/catalog.js?");

/***/ }),

/***/ "./src/public/js/error-notifier.js":
/*!*****************************************!*\
  !*** ./src/public/js/error-notifier.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar error = {\n  data: function data() {\n    return {\n      err: ''\n    };\n  },\n  methods: {\n    flashErrMsg: function flashErrMsg(err_msg) {\n      this.err = err_msg;\n    }\n  },\n  template: \"<div class=err-note v-if=\\\"err.length != 0\\\"><h4>{{err}}</h4></div>\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (error);\n\n//# sourceURL=webpack:///./src/public/js/error-notifier.js?");

/***/ }),

/***/ "./src/public/js/filter.js":
/*!*********************************!*\
  !*** ./src/public/js/filter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar search = {\n  data: function data() {\n    return {\n      filter: ''\n    };\n  },\n  template: \"\\n                <form action=\\\"#\\\" class=\\\"search-form\\\" @submit.prevent=\\\"$root.$refs.cata.filterCatalog(filter)\\\">\\n                    <input type=\\\"text\\\" class=\\\"search-field\\\" v-model.lazy=\\\"filter\\\">\\n                    <button class=\\\"btn-search\\\" type=\\\"submit\\\">\\n                        <i class=\\\"fas fa-search\\\"></i>\\n                    </button>\\n                </form>\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);\n\n//# sourceURL=webpack:///./src/public/js/filter.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/public/js/cart.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ \"./src/public/js/catalog.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./src/public/js/filter.js\");\n/* harmony import */ var _error_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-notifier */ \"./src/public/js/error-notifier.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar app = {\n  el: '#app',\n  data: {\n    cart_toggle: false //признак, переключатель видимости корзины\n\n  },\n  methods: {\n    getJson: function () {\n      var _getJson = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(url) {\n        var _this = this;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                return _context.abrupt(\"return\", fetch(url).then(function (res) {\n                  return res.json();\n                })[\"catch\"](function (err) {\n                  _this.$refs.err_notifier.flashErrMsg(err.message);\n\n                  console.log(err);\n                }));\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getJson(_x) {\n        return _getJson.apply(this, arguments);\n      }\n\n      return getJson;\n    }(),\n    //добавление нового товара в корзину\n    postJson: function () {\n      var _postJson = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(url, data) {\n        var _this2 = this;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                return _context2.abrupt(\"return\", fetch(url, {\n                  method: 'POST',\n                  headers: {\n                    \"Content-Type\": \"application/json\"\n                  },\n                  body: JSON.stringify(data)\n                }).then(function (res) {\n                  return res.json();\n                })[\"catch\"](function (err) {\n                  _this2.$refs.err_notifier.flashErrMsg(err.message);\n\n                  console.log(err);\n                }));\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function postJson(_x2, _x3) {\n        return _postJson.apply(this, arguments);\n      }\n\n      return postJson;\n    }(),\n    //редактирование товара в корзине\n    putJson: function () {\n      var _putJson = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(url, data) {\n        var _this3 = this;\n\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                return _context3.abrupt(\"return\", fetch(url, {\n                  method: 'PUT',\n                  headers: {\n                    \"Content-Type\": \"application/json\"\n                  },\n                  body: JSON.stringify(data)\n                }).then(function (res) {\n                  return res.json();\n                })[\"catch\"](function (err) {\n                  _this3.$refs.err_notifier.flashErrMsg(err.message);\n\n                  console.log(err);\n                }));\n\n              case 1:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      function putJson(_x4, _x5) {\n        return _putJson.apply(this, arguments);\n      }\n\n      return putJson;\n    }(),\n    //удаление товара из корзины\n    deleteJson: function () {\n      var _deleteJson = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee4(url) {\n        var _this4 = this;\n\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                return _context4.abrupt(\"return\", fetch(url, {\n                  method: 'DELETE',\n                  headers: {\n                    \"Content-Type\": \"application/json\"\n                  }\n                }).then(function (res) {\n                  return res.json();\n                })[\"catch\"](function (err) {\n                  _this4.$refs.err_notifier.flashErrMsg(err.message);\n\n                  console.log(err);\n                }));\n\n              case 1:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      function deleteJson(_x6) {\n        return _deleteJson.apply(this, arguments);\n      }\n\n      return deleteJson;\n    }()\n  },\n  components: {\n    cart: _cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    catalog: _catalog__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    search: _filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    error: _error_notifier__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ })

/******/ });