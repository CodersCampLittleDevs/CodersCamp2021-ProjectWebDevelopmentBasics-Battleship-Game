/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/settings/settings.js":
/*!**********************************!*\
  !*** ./src/settings/settings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ./settings.scss */ \"./src/settings/settings.scss\"),\n    styles = _require.styles;\n\nvar _require2 = __webpack_require__(/*! ../styles.scss */ \"./src/styles.scss\"),\n    bodyStyle = _require2.bodyStyle;\n\nvar _require3 = __webpack_require__(/*! ../utils/localStorage/localStorage.js */ \"./src/utils/localStorage/localStorage.js\"),\n    setDataInStorage = _require3.setDataInStorage,\n    getDataFromStorage = _require3.getDataFromStorage;\n\nvar SAVE_BUTTON = document.querySelector(\".section__button--save\");\nvar INPUT = document.querySelector(\".section__input--playerName\");\n\nvar onButtonClick = function onButtonClick() {\n  setDataInStorage(\"playerName\", INPUT.value);\n};\n\nvar setPlayerName = function setPlayerName() {\n  var playerName = getDataFromStorage(\"playerName\");\n\n  if (playerName) {\n    INPUT.value = playerName;\n  }\n};\n\nsetPlayerName();\nSAVE_BUTTON.addEventListener(\"click\", onButtonClick);\nexports.onButtonClick = onButtonClick;\nexports.setPlayerName = setPlayerName;\n\n//# sourceURL=webpack://battleshipgame/./src/settings/settings.js?");

/***/ }),

/***/ "./src/utils/localStorage/localStorage.js":
/*!************************************************!*\
  !*** ./src/utils/localStorage/localStorage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function setDataInStorage(key, value) {\n  localStorage.setItem(key, value);\n}\n\nfunction getDataFromStorage(key) {\n  return localStorage.getItem(key);\n}\n\nexports.setDataInStorage = setDataInStorage;\nexports.getDataFromStorage = getDataFromStorage;\n\n//# sourceURL=webpack://battleshipgame/./src/utils/localStorage/localStorage.js?");

/***/ }),

/***/ "./src/settings/settings.scss":
/*!************************************!*\
  !*** ./src/settings/settings.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://battleshipgame/./src/settings/settings.scss?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://battleshipgame/./src/styles.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/settings/settings.js");
/******/ 	
/******/ })()
;