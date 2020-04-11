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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/_base.scss":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/_base.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/_base.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/card.scss":
/*!******************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/card.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/graphics/i-like-food.svg */ \"./assets/graphics/i-like-food.svg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/graphics/floating-cogs.svg */ \"./assets/graphics/floating-cogs.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.i, \".card-flip > div > .card-front, .card-flip > div > .card-back {\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  height: 100%;\\n  backface-visibility: hidden;\\n  -webkit-backface-visibility: hidden; }\\n\\n.flipped {\\n  transform: rotateY(180deg);\\n  -webkit-transform: rotateY(180deg);\\n  -moz-transform: rotateY(180deg);\\n  -o-transform: rotateY(180deg);\\n  -ms-transform: rotateY(180deg); }\\n\\n.card, .card-flip {\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  justify-content: center; }\\n  .card > div, .card-flip > div {\\n    width: 100%;\\n    height: 100%;\\n    border-radius: 10px;\\n    border: 1px solid #d8d8d8;\\n    box-shadow: 0 2px 5px 1px #efefef; }\\n  .card .card-top, .card-flip .card-top {\\n    /* TEMPORARY */\\n    border-top-right-radius: 10px;\\n    border-top-left-radius: 10px;\\n    width: 100%;\\n    height: 96px; }\\n  .card .card-body, .card-flip .card-body {\\n    width: 90%;\\n    align-self: center; }\\n  .card .card-bottom, .card-flip .card-bottom {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    justify-content: flex-end; }\\n\\n.card-flip {\\n  max-width: 384px;\\n  height: 100%;\\n  perspective: 1000px; }\\n  .card-flip > div {\\n    transition: transform 0.8s;\\n    transform-style: preserve-3d; }\\n    .card-flip > div > .card-back {\\n      transform: rotateY(180deg);\\n      -webkit-transform: rotateY(180deg);\\n      -moz-transform: rotateY(180deg);\\n      -o-transform: rotateY(180deg);\\n      -ms-transform: rotateY(180deg);\\n      /*border-radius: 10px;*/\\n      display: none; }\\n\\n#prave .card-top {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  -webkit-background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  -moz-background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  -o-background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-color: #dfdbe5; }\\n\\n#fitster .card-top {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  -webkit-background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  -moz-background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  -o-background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-color: #c0ded6; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/card.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!******************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Raleway&display=swap);\"]);\n// Module\nexports.push([module.i, \".row {\\n  display: flex; }\\n\\n.col, .cover {\\n  display: flex;\\n  flex-direction: column; }\\n\\n.list-inline, .tech-list, footer ul {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  padding: 0; }\\n  .list-inline li, .tech-list li, footer ul li {\\n    list-style: none; }\\n\\n.tech-list li {\\n  margin-right: 12px;\\n  margin-bottom: 24px; }\\n  .tech-list li span {\\n    border-radius: 4px;\\n    border: 2px solid;\\n    padding: 6px;\\n    text-align: center; }\\n\\n.button, .solid-button, .hollow-button {\\n  position: relative;\\n  text-decoration: none;\\n  text-align: center;\\n  border-radius: 48px;\\n  border: 1px solid;\\n  padding: 8px 64px 8px 64px;\\n  box-shadow: 0 2px 5px 1px #efefef; }\\n\\n.button:hover, .solid-button:hover, .hollow-button:hover {\\n  top: -1px;\\n  text-decoration: none;\\n  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);\\n  -moz-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);\\n  -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3); }\\n\\n.button:active, .solid-button:active, .hollow-button:active {\\n  -webkit-box-shadow: inset 0 0 5px #c1c1c1;\\n  -moz-box-shadow: inset 0 0 5px #c1c1c1;\\n  box-shadow: inset 0 0 5px #c1c1c1;\\n  outline: none; }\\n\\n.solid-button {\\n  background-color: #4591e7;\\n  color: #fff;\\n  border-color: #9dc0e7; }\\n\\n.hollow-button {\\n  border-color: #ccd1dc;\\n  background-color: #fff;\\n  color: #192938; }\\n\\n.link {\\n  text-decoration: none;\\n  color: #0470dc;\\n  font-weight: bold; }\\n  .link:hover {\\n    border-bottom: 2px solid #0470dc; }\\n\\nbody {\\n  margin: 0;\\n  color: #1b2128;\\n  background-color: #fafafa; }\\n\\nh1, h2, h3, h4, h5, h6 {\\n  font-family: \\\"Raleway\\\", sans-serif; }\\n\\na, li, p {\\n  font-family: \\\"Open Sans\\\", sans-serif; }\\n\\np {\\n  line-height: 1.5; }\\n\\ni {\\n  color: #9dacbe; }\\n\\nheader {\\n  width: 100%;\\n  height: auto;\\n  display: flex; }\\n\\nfooter {\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  align-items: center; }\\n\\n.span {\\n  font-family: \\\"Open Sans\\\", sans-serif; }\\n\\n#temp-banner {\\n  width: 100%;\\n  height: 30px;\\n  background-color: #F6AE38;\\n  justify-content: center;\\n  align-items: center;\\n  display: flex; }\\n\\n.container {\\n  max-width: 1200px;\\n  margin-left: auto;\\n  margin-right: auto;\\n  background-color: #fff; }\\n\\n#profileImg img {\\n  width: 128px;\\n  height: auto;\\n  border-radius: 50%; }\\n\\n.cover {\\n  width: 100%;\\n  height: 10em;\\n  justify-content: flex-end;\\n  background: linear-gradient(135deg, #13f1fc 0%, #0470dc 100%); }\\n\\n.curved-border {\\n  width: 100%;\\n  height: 148px;\\n  overflow: hidden; }\\n  .curved-border img {\\n    width: 100%;\\n    height: 100%; }\\n\\n/*.card-thumbnail > img {\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}*/\\n.card-thumbnail {\\n  width: 96px;\\n  height: 96px;\\n  background-color: #fff;\\n  border-radius: 50%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  margin-top: 48px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/main.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./index.html":
/*!******************************************************************************!*\
  !*** ../node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./index.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"index.html\");\n\n//# sourceURL=webpack:///./index.html?../node_modules/file-loader/dist/cjs.js?name=%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./assets/favicon/apple-touch-icon.png":
/*!*********************************************!*\
  !*** ./assets/favicon/apple-touch-icon.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f6049f23e284a5e319ec2c5588a8ac7d.png\");\n\n//# sourceURL=webpack:///./assets/favicon/apple-touch-icon.png?");

/***/ }),

/***/ "./assets/favicon/favicon-16x16.png":
/*!******************************************!*\
  !*** ./assets/favicon/favicon-16x16.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"59282383e84989afb2ae9fa6b55b12ad.png\");\n\n//# sourceURL=webpack:///./assets/favicon/favicon-16x16.png?");

/***/ }),

/***/ "./assets/favicon/favicon-32x32.png":
/*!******************************************!*\
  !*** ./assets/favicon/favicon-32x32.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4bc6fefe1558dae6f213df97d9dfc1ea.png\");\n\n//# sourceURL=webpack:///./assets/favicon/favicon-32x32.png?");

/***/ }),

/***/ "./assets/favicon/site.webmanifest":
/*!*****************************************!*\
  !*** ./assets/favicon/site.webmanifest ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1c337fa2fa1515591f8db20865e618de.webmanifest\");\n\n//# sourceURL=webpack:///./assets/favicon/site.webmanifest?");

/***/ }),

/***/ "./assets/graphics/curved-border-flip.svg":
/*!************************************************!*\
  !*** ./assets/graphics/curved-border-flip.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d00892353aa16f116ae3b673f3d75a31.svg\");\n\n//# sourceURL=webpack:///./assets/graphics/curved-border-flip.svg?");

/***/ }),

/***/ "./assets/graphics/fitster.svg":
/*!*************************************!*\
  !*** ./assets/graphics/fitster.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7d9053974926d3469ff5ef9caae6b261.svg\");\n\n//# sourceURL=webpack:///./assets/graphics/fitster.svg?");

/***/ }),

/***/ "./assets/graphics/floating-cogs.svg":
/*!*******************************************!*\
  !*** ./assets/graphics/floating-cogs.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ec6ef57289e33e19044e35e7be0f880c.svg\");\n\n//# sourceURL=webpack:///./assets/graphics/floating-cogs.svg?");

/***/ }),

/***/ "./assets/graphics/github.svg":
/*!************************************!*\
  !*** ./assets/graphics/github.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1dd961ab93ae56a385c9fae65a01e8cf.svg\");\n\n//# sourceURL=webpack:///./assets/graphics/github.svg?");

/***/ }),

/***/ "./assets/graphics/i-like-food.svg":
/*!*****************************************!*\
  !*** ./assets/graphics/i-like-food.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fe2b164b3939b9f2bf9f43e40739340e.svg\");\n\n//# sourceURL=webpack:///./assets/graphics/i-like-food.svg?");

/***/ }),

/***/ "./assets/graphics/prave.svg":
/*!***********************************!*\
  !*** ./assets/graphics/prave.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fd23f1fb728136064d25069f09dc8a7b.svg\");\n\n//# sourceURL=webpack:///./assets/graphics/prave.svg?");

/***/ }),

/***/ "./assets/img/aiyush.jpg":
/*!*******************************!*\
  !*** ./assets/img/aiyush.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b866d509293e7f9d4015397fd52381e4.jpg\");\n\n//# sourceURL=webpack:///./assets/img/aiyush.jpg?");

/***/ }),

/***/ "./css/_base.scss":
/*!************************!*\
  !*** ./css/_base.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./_base.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/_base.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./css/_base.scss?");

/***/ }),

/***/ "./css/card.scss":
/*!***********************!*\
  !*** ./css/card.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./card.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/card.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./css/card.scss?");

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/card.scss */ \"./css/card.scss\");\n/* harmony import */ var _css_card_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_card_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/_base.scss */ \"./css/_base.scss\");\n/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_favicon_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/favicon/apple-touch-icon.png */ \"./assets/favicon/apple-touch-icon.png\");\n/* harmony import */ var _assets_favicon_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/favicon/favicon-32x32.png */ \"./assets/favicon/favicon-32x32.png\");\n/* harmony import */ var _assets_favicon_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/favicon/favicon-16x16.png */ \"./assets/favicon/favicon-16x16.png\");\n/* harmony import */ var _assets_favicon_site_webmanifest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/favicon/site.webmanifest */ \"./assets/favicon/site.webmanifest\");\n/* harmony import */ var _assets_graphics_curved_border_flip_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/graphics/curved-border-flip.svg */ \"./assets/graphics/curved-border-flip.svg\");\n/* harmony import */ var _assets_img_aiyush_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/img/aiyush.jpg */ \"./assets/img/aiyush.jpg\");\n/* harmony import */ var _assets_graphics_prave_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/graphics/prave.svg */ \"./assets/graphics/prave.svg\");\n/* harmony import */ var _assets_graphics_fitster_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/graphics/fitster.svg */ \"./assets/graphics/fitster.svg\");\n/* harmony import */ var _assets_graphics_github_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/graphics/github.svg */ \"./assets/graphics/github.svg\");\n__webpack_require__(/*! file-loader?name=[name].[ext]!./index.html */ \"../node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./index.html\");\n\n\n\n\n\n\n\n\n\n\n/* Logos */\n\n\n\n\nvar ele = document.getElementById('border');\nvar border = new Image();\nborder.src = _assets_graphics_curved_border_flip_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\nele.appendChild(border);\nvar profile = document.getElementById('profileImg');\nvar pic = new Image();\npic.src = _assets_img_aiyush_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\npic.alt = 'Profile Picture';\nprofile.appendChild(pic);\nvar praveTop = document.getElementById('prave-top');\nvar temp = new Image();\ntemp.src = _assets_graphics_prave_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\ntemp.alt = 'prave';\ntemp.width = 96;\npraveTop.appendChild(temp);\nvar miniProjects = [[_assets_graphics_prave_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"], 'prave', document.getElementById('prave-mini')], [_assets_graphics_fitster_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"], 'fitster', document.getElementById('fitster-mini')], [_assets_graphics_github_svg__WEBPACK_IMPORTED_MODULE_11__[\"default\"], 'github', document.getElementById('github-mini')]];\n\nfor (var _i = 0, _miniProjects = miniProjects; _i < _miniProjects.length; _i++) {\n  var mini = _miniProjects[_i];\n  var miniPic = new Image();\n  miniPic.src = mini[0];\n  miniPic.alt = mini[1];\n  miniPic.width = 32;\n  mini[2].appendChild(miniPic);\n}\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });