"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmovies_rater"] = self["webpackChunkmovies_rater"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\n:root {\\n  --bgdark: #fafafa;\\n  --green: #008080;\\n}\\n\\n.header-list {\\n  display: flex;\\n  justify-items: center;\\n  gap: 2.2rem;\\n  list-style: none;\\n  font-size: 1.3rem;\\n}\\n\\n.header-list a {\\n  text-decoration: none;\\n  color: black;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  box-shadow: 0 2px 10px grey;\\n  height: 4rem;\\n  gap: 2rem;\\n}\\n\\nfooter {\\n  display: flex;\\n  justify-content: center;\\n  padding-top: 1.2rem;\\n  border-top: 1px solid black;\\n}\\n\\n#logo {\\n  height: 2.5rem;\\n}\\n\\nol,\\nul {\\n  list-style-type: none;\\n}\\n\\n.d-flex {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.d-flex-xs {\\n  flex-direction: column;\\n  align-content: center;\\n  align-items: center;\\n}\\n\\n.mb-1 {\\n  margin-bottom: 1em;\\n}\\n\\n.mt-1 {\\n  margin-top: 2em;\\n}\\n\\n.space-between {\\n  justify-content: space-between;\\n}\\n\\n.space-around {\\n  justify-content: space-around;\\n}\\n\\n.space-evenly {\\n  justify-content: space-evenly;\\n}\\n\\n.title {\\n  padding: 10px;\\n}\\n\\n.movies-list img {\\n  width: 80%;\\n}\\n\\n.movies-list .movie-item {\\n  width: 50%;\\n}\\n\\n.btn {\\n  padding: 5px;\\n  width: 60%;\\n}\\n\\n.card-modal {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  display: none;\\n  overflow: auto;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgb(0, 0, 0);\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n\\n.modal-container {\\n  width: 57.5rem;\\n  height: auto;\\n  background-color: white;\\n  margin-top: 1%;\\n  margin-bottom: 2%;\\n  border-radius: 8px;\\n}\\n\\n.modal-wrapper {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.mclose-btn button {\\n  all: unset;\\n}\\n\\n.mclose-btn {\\n  padding: 16px;\\n  display: flex;\\n  justify-content: end;\\n}\\n\\n.summary p {\\n  font-size: 1rem;\\n  padding: 0 2rem;\\n}\\n\\n.modal-image {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.modal-head {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-top: 1rem;\\n}\\n\\n#modal-cover {\\n  height: 30rem;\\n  width: 40rem;\\n}\\n\\n.movie-attributes {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 4rem;\\n  margin-top: 2rem;\\n}\\n\\n.movie-attributes span {\\n  font-weight: bold;\\n}\\n\\n.comment-display {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin-top: 2rem;\\n  gap: 1rem;\\n}\\n\\n.add-comment {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin-top: 2rem;\\n  gap: 1rem;\\n  margin-bottom: 1rem;\\n}\\n\\n.add-comment ul {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n\\n.comment-items {\\n  display: flex;\\n  gap: 0.5rem;\\n}\\n\\n@media screen and (max-width: 600px) {\\n  nav {\\n    gap: 1rem;\\n  }\\n\\n  .header-list {\\n    display: flex;\\n    justify-items: center;\\n    gap: 1.8rem;\\n    list-style: none;\\n    font-size: 1rem;\\n  }\\n\\n  .modal-container {\\n    width: 23rem;\\n    height: auto;\\n    background-color: white;\\n    margin-top: 1%;\\n    margin-bottom: 2%;\\n    border-radius: 8px;\\n  }\\n\\n  #modal-cover {\\n    height: 18rem;\\n    width: 28rem;\\n  }\\n\\n  .movie-attributes {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: 0.8rem;\\n    gap: 2rem;\\n    margin-top: 2rem;\\n  }\\n}\\n\\n@media screen and (min-width: 768px) {\\n  .container {\\n    width: 90%;\\n    margin: auto;\\n  }\\n\\n  .movies-list .movie-item {\\n    width: 33%;\\n  }\\n\\n  .btn {\\n    padding: 5px;\\n    width: 60%;\\n  }\\n\\n  .d-flex-xs {\\n    flex-direction: row;\\n    justify-content: space-evenly;\\n  }\\n\\n  .modal-container {\\n    width: 45rem;\\n  }\\n}\\n\\n@media screen and (min-width: 992px) {\\n  nav {\\n    display: flex;\\n    align-items: center;\\n    justify-content: left;\\n    padding-left: 15rem;\\n    box-shadow: 0 2px 10px grey;\\n    height: 4rem;\\n    gap: 2rem;\\n  }\\n\\n  .header-list {\\n    display: flex;\\n    justify-items: center;\\n    gap: 1.8rem;\\n    list-style: none;\\n    font-size: 1rem;\\n  }\\n\\n  .modal-container {\\n    width: 50rem;\\n    height: auto;\\n    background-color: white;\\n    margin-top: 1%;\\n    margin-bottom: 2%;\\n    border-radius: 8px;\\n  }\\n\\n  #modal-cover {\\n    height: 25rem;\\n    width: 35rem;\\n  }\\n\\n  .movie-attributes {\\n    font-size: 1rem;\\n    gap: 2rem;\\n    margin-top: 2rem;\\n  }\\n}\\n\\n@media screen and (min-width: 1024px) {\\n  .movies-list .movie-item {\\n    width: 25%;\\n  }\\n}\\n\\n@media screen and (min-width: 1200px) {\\n  .movies-list .movie-item {\\n    width: 20%;\\n  }\\n\\n  .modal-container {\\n    width: 55rem;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movies-rater/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://movies-rater/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://movies-rater/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://movies-rater/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://movies-rater/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://movies-rater/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://movies-rater/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://movies-rater/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://movies-rater/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://movies-rater/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_movies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/movies.js */ \"./src/modules/movies.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n\n\n\n\n\nconst movies = new _modules_movies_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nmovies.displayMovies();\n\n//# sourceURL=webpack://movies-rater/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _listComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listComments..js */ \"./src/modules/listComments..js\");\n\n\n\nconst addComment = () => {\n  let data = {};\n  const name = document.getElementById('finput');\n  const insight = document.getElementById('linput');\n  const COMMENT_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eeE9kmiK9ON5LxnmgZ0i/comments';\n  const addToApi = async (data, id) => {\n    await fetch(`${COMMENT_URL}`, {\n      method: 'POST',\n      body: JSON.stringify(data),\n      headers: {\n        'Content-type': 'application/json',\n      },\n    }).then((res) => {\n      res.json();\n    });\n    name.value = '';\n    insight.value = '';\n    (0,_listComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n  };\n\n  window.submitValue = function (id) {\n    data = {\n      item_id: id,\n      username: name.value,\n      comment: insight.value,\n    };\n    addToApi(data, id);\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://movies-rater/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = async (id) => {\n  let scoreArray = [];\n  const result = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eeE9kmiK9ON5LxnmgZ0i/comments?item_id=${id}`).then((res) => res.json());\n\n  scoreArray = result;\n  return scoreArray.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://movies-rater/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _movies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies.js */ \"./src/modules/movies.js\");\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComment.js */ \"./src/modules/addComment.js\");\n/* harmony import */ var _listComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listComments..js */ \"./src/modules/listComments..js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n// eslint-disable-next-line import/no-cycle\n\n\n\n\nconst comments = () => {\n  const modal = document.getElementById('modal-wrap');\n  const back = document.getElementById('test');\n  const projectModal = document.createElement('div');\n  projectModal.className = 'modal-container';\n  const baseApi = 'https://api.tvmaze.com/shows/';\n  const details = [{\n    country: '', genre: [''], image: '', name: '', release: '', summary: '',\n  }];\n\n  const displayDetails = async (id) => {\n    const number = await (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id);\n    let num = 0;\n    if (number) {\n      num = number;\n    }\n    projectModal.innerHTML = '';\n    document.getElementById('modal').style.display = 'block';\n    back.style.filter = 'blur(.8rem)';\n    const projectCode = `\n<div class=\"mclose-btn\">\n<button onclick=\"modalClose()\" id='close-modal' type=\"button\">\n<i class=\"fa fa-times fa-2x\" aria-hidden=\"true\"></i>\n</button>\n</div>\n<div class=\"modal-image\">\n<img\n  src=\"${details.image}\"\n  alt=\"cover picture\"\n  id=\"modal-cover\"\n/>\n</div>\n<div class=\"modal-head\">\n<div class=\"summary\">${details.summary}</div>\n</div>\n<div class=\"movie-attributes\">\n<ul>\n    <li><span>Name:</span> ${details.name}</li>\n    <li><span>Country:</span> ${details.country}</li>\n</ul>\n<ul>\n    <li><span>Genre:</span> ${details.genre.join(',')}</li>\n    <li><span>Release:</span> ${details.release}</li>\n</ul>\n</div>\n<div class=\"comment-display\">\n<h2>Comments(${num})</h2>\n<ul id=\"comments-section\">\n    \n</ul>\n</div>\n<div class=\"add-comment\">\n                <h2>Add Comments</h2>\n                <ul>\n                    <li><input type=\"text\" id=\"finput\" placeholder=\"Your Name\" required></li>\n                    <li><textarea cols=\"30\" id=\"linput\" rows=\"10\" placeholder=\"Your insights\" required></textarea></li>\n                    <li><button type=\"button\" id=\"submit\" onclick=\"submitValue(${id})\">Comment</button></li>\n                </ul>\n                </div>\n  `;\n    projectModal.innerHTML += projectCode;\n    modal.appendChild(projectModal);\n\n    (0,_addComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_listComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n  };\n  const fillDetails = async (id) => {\n    const list = await fetch(`${baseApi}${id}`).then((response) => response.json());\n    if (list.network === null) {\n      details.country = 'N/A';\n    } else {\n      details.country = list.network.country.name;\n    }\n    if (list.summary === null) {\n      details.summary = '';\n    } else {\n      details.summary = list.summary;\n    }\n    details.name = list.name;\n    details.genre = list.genres;\n    details.release = list.premiered;\n    details.image = list.image.original;\n    displayDetails(id);\n  };\n  window.checkme = function (id) {\n    fillDetails(id);\n  };\n\n  window.modalClose = function () {\n    document.getElementById('modal').style.display = 'none';\n    back.style.filter = 'blur(0)';\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);\n\n//# sourceURL=webpack://movies-rater/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asset_tvmaze_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/tvmaze.png */ \"./src/asset/tvmaze.png\");\n\n\nconst myImage = new Image();\nmyImage.src = _asset_tvmaze_png__WEBPACK_IMPORTED_MODULE_0__;\n\nconst header = () => {\n  const header = document.getElementById('nav');\n  header.innerHTML = `\n    <div><img src= ${_asset_tvmaze_png__WEBPACK_IMPORTED_MODULE_0__} alt=\"logo\" id=\"logo\"></div>\n    <ul class=\"header-list\">\n    <li><a href=\"#\">Home</a></li>\n    <li><a href=\"#\">Action</a></li>\n    <li><a href=\"#\">Comedy</a></li>\n</ul>\n    `;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://movies-rater/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass HelperFuncs {\n    static registersLikeButtons = (movies) => {\n      const likeButtons = document.querySelectorAll('.fa-heart');\n      likeButtons.forEach((likeButton) => {\n        likeButton.addEventListener('click', () => {\n          const movieId = parseInt(likeButton.getAttribute('data-pos'), 10);\n          movies.addLike(movieId, likeButton);\n        });\n      });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelperFuncs);\n\n//# sourceURL=webpack://movies-rater/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/listComments..js":
/*!**************************************!*\
  !*** ./src/modules/listComments..js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst listComment = (id) => {\n  const commentsSection = document.getElementById('comments-section');\n  let scoreArray = [];\n  const COMMENTLLIST_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eeE9kmiK9ON5LxnmgZ0i/comments?item_id=';\n  const addToList = async () => {\n    const result = await fetch(`${COMMENTLLIST_URL}${id}`).then((res) => res.json());\n    return result;\n  };\n  addToList().then((res) => {\n    commentsSection.innerHTML = '';\n    if (res) {\n      scoreArray = res;\n      for (let i = 0; i < scoreArray.length; i += 1) {\n        commentsSection.innerHTML += `\n              <li class=\"comment-items\"> <p>${scoreArray[i].creation_date}</p><p>${scoreArray[i].username}:</p><p>${scoreArray[i].comment}</p></li>\n      \n                `;\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listComment);\n\n//# sourceURL=webpack://movies-rater/./src/modules/listComments..js?");

/***/ }),

/***/ "./src/modules/movies.js":
/*!*******************************!*\
  !*** ./src/modules/movies.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/modules/helpers.js\");\n\n\nclass Movies {\n  constructor() {\n    this.API_BASE_URL = 'https://api.tvmaze.com/';\n    this.LIKES_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eeE9kmiK9ON5LxnmgZ0i/likes';\n    this.movies = [];\n    this.likes = [];\n  }\n\n  addLike = async (itemId, likeButton) => {\n    await fetch(this.LIKES_URL, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({ item_id: itemId }),\n    }).then((response) => response.text(response)).then((json) => json);\n    await this.getLikes();\n\n    const index = this.likes.findIndex((like) => like.item_id === itemId);\n    const msgLikes = index >= 0 ? this.likes[index].likes : 0;\n    likeButton.nextElementSibling.innerHTML = msgLikes;\n  }\n\n  getLikes = async () => {\n    this.likes = await fetch(this.LIKES_URL).then((response) => response.json());\n  }\n\n  getMovieList = async (key) => {\n    const Query = `search/shows?q=${key}`;\n    const list = await fetch(`${this.API_BASE_URL}${Query}`).then((response) => response.json());\n    this.movies = [...this.movies, ...list];\n  }\n\n  getMoviesCount = () => this.movies.length;\n\n  displayMovies = async () => {\n    await this.getMovieList('girls');\n    await this.getMovieList('boys');\n    await this.getLikes();\n\n    const list = this.movies.reduce((prev, curr) => {\n      if (curr.show.image) {\n        const index = this.likes.findIndex((like) => like.item_id === curr.show.id);\n        const msgLikes = index >= 0 ? this.likes[index].likes : 0;\n\n        prev += `\n        <div class=\"movie-item mb-1\">\n          <div>\n            <div class=\"d-flex space-around mb-1\">\n             <img src=${curr.show.image.medium} />\n            </div>\n            <div class=\"d-flex d-flex-xs movie-content mb-1 space-evenly\">\n              <span>${curr.show.name}</span>\n              <div> \n               <i class=\"fa fa-heart fa-lg\" data-pos=${curr.show.id}></i> \n               <span>${msgLikes}</span> Like(s)\n              </div>\n            </div>\n            <div class=\"d-flex space-around mb-1\">\n              <button class=\"btn\" data-id=${curr.show.id} id=\"${curr.show.id}\" type=\"button\" onclick=\"checkme(${curr.show.id})\">Comments</button>\n            </div>\n          </div>\n        </div>\n        `;\n      }\n      return prev;\n    }, '');\n    document.querySelector('.movies-list').innerHTML = list;\n    document.querySelector('.title span').innerHTML = this.getMoviesCount(this.movies);\n    _helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registersLikeButtons(this);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movies);\n\n//# sourceURL=webpack://movies-rater/./src/modules/movies.js?");

/***/ }),

/***/ "./src/asset/tvmaze.png":
/*!******************************!*\
  !*** ./src/asset/tvmaze.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"99b4ccddf7755be7b4af.png\";\n\n//# sourceURL=webpack://movies-rater/./src/asset/tvmaze.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);