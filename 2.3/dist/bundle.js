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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ \"./src/react.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/** @jsx createElement*/\n\nvar vDom = {\n  tag: 'p',\n  //Tag Name\n  props: {},\n  //Attribute\n  children: [//자식이 있다면 객체로 추가\n  {\n    tag: 'h1',\n    //Tag Name\n    props: {},\n    //Attribute\n    children: [\"리액트 만들기\"]\n  }, {\n    tag: 'ul',\n    props: {},\n    children: [{\n      tag: 'li',\n      props: {\n        style: \"color : red\"\n      },\n      children: ['첫 번째 아이템']\n    }, {\n      tag: 'li',\n      props: {\n        style: \"color : blue\"\n      },\n      children: ['두 번째 아이템']\n    }, {\n      tag: 'li',\n      props: {\n        style: \"color : green\"\n      },\n      children: ['세 번째 아이템']\n    }]\n  }] //자식 요소\n\n};\nvar vDom2 = (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", {}, (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\", {}, \"React 만들기\"), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"ul\", {}, (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"li\", {\n  style: \"color : red\"\n}, \"첫 번째 아이템\"), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"li\", {\n  style: \"color : blue\"\n}, \"두 번째 아이템\"), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"li\", {\n  style: \"color : green\"\n}, \"세 번째 아이템\")));\n/*\n ****************************************\n * 클래스 컴포넌트\n ****************************************\n */\n\nvar Title = /*#__PURE__*/function (_Component) {\n  _inherits(Title, _Component);\n\n  var _super = _createSuper(Title);\n\n  function Title() {\n    _classCallCheck(this, Title);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Title, [{\n    key: \"render\",\n    value: function render() {\n      //Class 컴포넌트는 render()이 강제 사항임\n      return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\", null, this.children);\n    }\n  }]);\n\n  return Title;\n}(_react__WEBPACK_IMPORTED_MODULE_0__.Component);\n/*\n ****************************************\n * 함수 컴포넌트\n ****************************************\n */\n// const Title = (props) =>{\n//     return <h1>{props.children}</h1>\n// }\n\n\nvar Item = function Item(props) {\n  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"li\", {\n    style: \"color : \".concat(props.color)\n  }, props.children);\n}; //@babel/preset-react는 vDom3같은 JSX구문을 vDom2처럼 변경을 해준다.\n\n\nvar App = function App() {\n  (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", null, (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Title, null, \"React \\uD074\\uB798\\uC2A4 \\uCEF4\\uD3EC\\uB10C\\uD2B8 \\uB9CC\\uB4E4\\uAE30\"), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"ul\", null, (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Item, {\n    color: \"red\"\n  }, \"\\uCCAB \\uBC88\\uC9F8 \\uC544\\uC774\\uD15C\"), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Item, {\n    color: \"blue\"\n  }, \"\\uB450 \\uBC88\\uC9F8 \\uC544\\uC774\\uD15C\"), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Item, {\n    color: \"green\"\n  }, \"\\uC138 \\uBC88\\uC9F8 \\uC544\\uC774\\uD15C\")));\n};\n\n(0,_react__WEBPACK_IMPORTED_MODULE_0__.render)((0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, null), document.querySelector('#root')); // document.querySelector('#root')\n//     .appendChild(createDom(vDom));\n\n//# sourceURL=webpack://2.3/./src/app.js?");

/***/ }),

/***/ "./src/react.js":
/*!**********************!*\
  !*** ./src/react.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component),\n/* harmony export */   \"createDom\": () => (/* binding */ createDom),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction createDom(node) {\n  if (typeof node === 'string') {\n    return document.createTextNode(node);\n  }\n\n  var element = document.createElement(node.tag); //Dom 생성을 위해 DOM API 사용\n  //Key와 Value를 쌍으로 배열로 넘겨줌\n\n  Object.entries(node.props).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        name = _ref2[0],\n        value = _ref2[1];\n\n    return element.setAttribute(name, value);\n  });\n  node.children.map(createDom).forEach(element.appendChild.bind(element));\n  return element;\n}\nfunction render(vDom, container) {\n  container.appendChild(createDom(vDom));\n}\n\nfunction makeProps(props, children) {\n  return _objectSpread(_objectSpread({}, props), {}, {\n    children: children.length === 1 ? children[0] : children\n  });\n}\n\nfunction createElement(tag, props) {\n  props = props || {};\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  if (typeof tag === \"function\") {\n    //클래스든 함수형이든 대문자가 들어오면 함수로 알아봄\n    //실제 React에서는 함수형 컴포넌트인지 클래스 컴포넌트인지 심볼을 만들어서 확인함\n    if (tag.prototype instanceof Component) {\n      //Component를 상속받았는지 확인\n      var instance = tag(makeProps(props, children));\n      return instance.render();\n    } else {\n      if (children.length > 0) {\n        return tag(makeProps(props, children));\n      } else {\n        return tag(props); //JSX를 return\n      }\n    }\n  } else {\n    return {\n      tag: tag,\n      props: props,\n      children: children\n    };\n  }\n}\nvar Component = /*#__PURE__*/_createClass(function Component(props) {\n  _classCallCheck(this, Component);\n\n  this.props = props;\n});\n\n//# sourceURL=webpack://2.3/./src/react.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;