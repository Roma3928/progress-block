/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api/Progress.js":
/*!*************************!*\
  !*** ./api/Progress.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Progress)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }\nfunction _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\nvar _container = /*#__PURE__*/new WeakMap();\nvar _progressCircle = /*#__PURE__*/new WeakMap();\nvar _progressIndicator = /*#__PURE__*/new WeakMap();\nvar _valueInput = /*#__PURE__*/new WeakMap();\nvar _animateToggle = /*#__PURE__*/new WeakMap();\nvar _hideToggle = /*#__PURE__*/new WeakMap();\nvar _options = /*#__PURE__*/new WeakMap();\nvar _Progress_brand = /*#__PURE__*/new WeakSet();\n/** Класс для создания Progress */\nvar Progress = /*#__PURE__*/function () {\n  /**\r\n   * Класс для создания экземпляра Progress\r\n   * @param {string} containerSelector - Селектор секции с Progress\r\n   * @param {object} options - Первичные настройки\r\n   */\n  function Progress(containerSelector) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    _classCallCheck(this, Progress);\n    /**\r\n     * Инициализация.\r\n     * @private\r\n     */\n    _classPrivateMethodInitSpec(this, _Progress_brand);\n    _classPrivateFieldInitSpec(this, _container, void 0);\n    _classPrivateFieldInitSpec(this, _progressCircle, void 0);\n    _classPrivateFieldInitSpec(this, _progressIndicator, void 0);\n    _classPrivateFieldInitSpec(this, _valueInput, void 0);\n    _classPrivateFieldInitSpec(this, _animateToggle, void 0);\n    _classPrivateFieldInitSpec(this, _hideToggle, void 0);\n    _classPrivateFieldInitSpec(this, _options, {\n      initialValue: 0,\n      animated: false,\n      hidden: false\n    });\n    _classPrivateFieldSet(_container, this, document.querySelector(containerSelector));\n    if (!_classPrivateFieldGet(_container, this)) {\n      console.error(\"\\u0421\\u0435\\u043B\\u0435\\u043A\\u0442\\u043E\\u0440 '\".concat(containerSelector, \"' \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D!\"));\n      return;\n    }\n    _classPrivateFieldSet(_progressCircle, this, _classPrivateFieldGet(_container, this).querySelector('.progress__circle'));\n    _classPrivateFieldSet(_progressIndicator, this, _classPrivateFieldGet(_container, this).querySelector('.progress__indicator'));\n    _classPrivateFieldSet(_valueInput, this, _classPrivateFieldGet(_container, this).querySelector('.progress__value-input'));\n    _classPrivateFieldSet(_animateToggle, this, _classPrivateFieldGet(_container, this).querySelector('.progress__animate-toggle'));\n    _classPrivateFieldSet(_hideToggle, this, _classPrivateFieldGet(_container, this).querySelector('.progress__hide-toggle'));\n    _classPrivateFieldSet(_options, this, _objectSpread(_objectSpread({}, _classPrivateFieldGet(_options, this)), options));\n    _assertClassBrand(_Progress_brand, this, _init).call(this);\n  }\n  _createClass(Progress, [{\n    key: \"setProgress\",\n    value:\n    /**\r\n     * Устанавливает прогресс.\r\n     * @param {number} value - Значение прогресса (от 0 до 100).\r\n     */\n    function setProgress(value) {\n      value = _assertClassBrand(_Progress_brand, this, _validateInputValue).call(this, value);\n      var progress = 251.4 * (1 - value / 100);\n      _classPrivateFieldGet(_progressIndicator, this).style.strokeDashoffset = progress;\n    }\n\n    /**\r\n     * Переключает анимацию прогресса.\r\n     * @param {HTMLInputElement} toggle - Переключатель анимации.\r\n     */\n  }, {\n    key: \"toggleAnimation\",\n    value: function toggleAnimation(toggle) {\n      _classPrivateFieldGet(_progressIndicator, this).classList.toggle('animated', toggle.checked);\n\n      // if (this.animateToggle.checked) {\n      //   this.hideToggle.checked = false;\n      //   this.toggleVisibility();\n      // }\n    }\n\n    /**\r\n     * Переключает видимость прогресса.\r\n     * @param {HTMLInputElement} toggle - Переключатель видимости.\r\n     */\n  }, {\n    key: \"toggleVisibility\",\n    value: function toggleVisibility(toggle) {\n      _classPrivateFieldGet(_progressCircle, this).classList.toggle('hide', toggle.checked);\n\n      // if (this.hideToggle.checked) {\n      //   this.animateToggle.checked = false;\n      //   this.toggleAnimation();\n      // }\n    }\n  }]);\n  return Progress;\n}();\nfunction _init() {\n  _assertClassBrand(_Progress_brand, this, _setupInitialValues).call(this);\n  _assertClassBrand(_Progress_brand, this, _setupEventListeners).call(this);\n}\n/**\r\n * Устанавливает начальные значения.\r\n * @private\r\n */\nfunction _setupInitialValues() {\n  _classPrivateFieldGet(_valueInput, this).value = _classPrivateFieldGet(_options, this).initialValue;\n  this.setProgress(_classPrivateFieldGet(_options, this).initialValue);\n  if (_classPrivateFieldGet(_options, this).animated) {\n    _classPrivateFieldGet(_animateToggle, this).checked = true;\n    this.toggleAnimation(_classPrivateFieldGet(_animateToggle, this));\n  }\n  if (_classPrivateFieldGet(_options, this).hidden) {\n    _classPrivateFieldGet(_hideToggle, this).checked = true;\n    this.toggleVisibility(_classPrivateFieldGet(_hideToggle, this));\n  }\n}\n/**\r\n * Устанавливает обработчики событий.\r\n * @private\r\n */\nfunction _setupEventListeners() {\n  var _this = this;\n  _classPrivateFieldGet(_valueInput, this).addEventListener('input', function () {\n    return _this.setProgress(_classPrivateFieldGet(_valueInput, _this).value);\n  });\n  _classPrivateFieldGet(_animateToggle, this).addEventListener('change', function () {\n    return _this.toggleAnimation(_classPrivateFieldGet(_animateToggle, _this));\n  });\n  _classPrivateFieldGet(_hideToggle, this).addEventListener('change', function () {\n    return _this.toggleVisibility(_classPrivateFieldGet(_hideToggle, _this));\n  });\n}\n/**\r\n * Проверяет и корректирует введенное значение.\r\n * @private\r\n * @param {number} value - Значение, которое необходимо проверить.\r\n * @returns {number} - Скорректированное значение.\r\n */\nfunction _validateInputValue(value) {\n  value = Math.max(0, Math.min(100, value));\n  _classPrivateFieldGet(_valueInput, this).value = value;\n  return value;\n}\n\n\n//# sourceURL=webpack:///./api/Progress.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/index.scss */ \"./assets/scss/index.scss\");\n/* harmony import */ var _api_Progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/Progress */ \"./api/Progress.js\");\n\n\nnew _api_Progress__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.progress', {\n  initialValue: 50,\n  animated: false,\n  hidden: false\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./assets/scss/index.scss":
/*!********************************!*\
  !*** ./assets/scss/index.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./assets/scss/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;