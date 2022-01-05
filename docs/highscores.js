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

/***/ "./src/easterEgg/easterEgg.js":
/*!************************************!*\
  !*** ./src/easterEgg/easterEgg.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEasterEgg\": () => (/* binding */ addEasterEgg)\n/* harmony export */ });\n/* harmony import */ var _easterEgg_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easterEgg.scss */ \"./src/easterEgg/easterEgg.scss\");\n\nvar slide1;\nvar slide2;\nvar slide3;\nvar slide4;\nvar counter;\nvar leftButton;\nvar rightButton;\nvar easterEgg = [];\nvar isOpen = false;\nfunction addEasterEgg() {\n  document.addEventListener('keydown', function (event) {\n    easterEgg.push(event.key);\n\n    if (easterEgg.length > 4) {\n      easterEgg.shift();\n    }\n\n    ;\n\n    if (easterEgg[0] == 2 && easterEgg[1] == 0 && easterEgg[2] == 1 && easterEgg[3] == 1) {\n      openModal();\n      changeSlides();\n    }\n\n    ;\n\n    if (event.key == \"Escape\") {\n      if (isOpen) offModal();\n    }\n\n    if (event.key == \"ArrowRight\" && counter < 3) {\n      if (isOpen) goRight();\n    }\n\n    if (event.key == \"ArrowLeft\" && counter > 0) {\n      if (isOpen) goLeft();\n    }\n  });\n}\n;\n\nfunction openModal() {\n  counter = 0;\n\n  if (!isOpen) {\n    isOpen = true;\n    var modal = document.createElement('div');\n    modal.classList.add('modal');\n    modal.innerHTML = \"\\n            <div class=\\\"modal__content easter-egg\\\">\\n                <div class=\\\"slider\\\">\\n                    <button id='leftButton' class='leftButton button'>&lt</button>\\n                    <div id='slide1' class=\\\"slide hidden\\\">\\n                        <h2>Secret Codes and Battleships!</h2>\\n                        <div class=\\\"slide slide_1\\\">\\n                        </div>\\n                        <h3>Author: Darren Hayes<br>Released: 21 October 2011</h3>\\n                    </div>\\n                    <div id='slide2' class=\\\"hidden slide slide_2\\\">\\n                    </div>\\n                    <div id='slide3' class=\\\"hidden slide slide_3\\\">\\n                    </div>\\n                    <div id='slide4' class=\\\"hidden slide slide_4\\\">\\n                    </div>\\n                    <button id ='rightButton' class='rightButton button'>></button>\\n                </div>\\n            <a href=\\\"\\\" class=\\\"return\\\" onclick=\\\"offModal()\\\">Return</a>\\n            </div>\\n        \";\n    document.body.prepend(modal);\n  }\n\n  slide1 = document.getElementById('slide1');\n  slide2 = document.getElementById('slide2');\n  slide3 = document.getElementById('slide3');\n  slide4 = document.getElementById('slide4');\n  leftButton = document.getElementById('leftButton');\n  rightButton = document.getElementById('rightButton');\n}\n\n;\n\nfunction changeSlides() {\n  var rightKey = document.querySelector('.rightButton');\n  var leftKey = document.querySelector('.leftButton');\n  rightKey.addEventListener('click', goRight);\n  leftKey.addEventListener('click', goLeft);\n  whatSlide();\n}\n\n;\n\nfunction goRight() {\n  counter++;\n\n  if (counter == 3) {\n    var rightBtn = document.querySelector('.rightButton');\n    rightBtn.disabled = true;\n  }\n\n  if (counter > 0) {\n    var leftBtn = document.querySelector('.leftButton');\n    leftBtn.disabled = false;\n  }\n\n  ;\n  hideAll();\n  whatSlide();\n}\n\n;\n\nfunction goLeft() {\n  counter--;\n\n  if (counter == 0) {\n    var leftBtn = document.querySelector('.leftButton');\n    leftBtn.disabled = true;\n  }\n\n  if (counter < 3) {\n    var rightBtn = document.querySelector('.rightButton');\n    rightBtn.disabled = false;\n  }\n\n  ;\n  hideAll();\n  whatSlide();\n}\n\nfunction whatSlide() {\n  switch (counter % 4) {\n    case 0:\n      slide1.classList.remove('hidden');\n      leftButton.classList.add('invisible');\n      break;\n\n    case 1:\n      slide2.classList.remove('hidden');\n      leftButton.classList.remove('invisible');\n      break;\n\n    case 2:\n      slide3.classList.remove('hidden');\n      rightButton.classList.remove('invisible');\n      break;\n\n    case 3:\n      slide4.classList.remove('hidden');\n      rightButton.classList.add('invisible');\n      break;\n  }\n\n  ;\n}\n\n;\n\nfunction hideAll() {\n  slide1.classList.add('hidden');\n  slide2.classList.add('hidden');\n  slide3.classList.add('hidden');\n  slide4.classList.add('hidden');\n}\n\n;\n\nfunction offModal() {\n  var getModal;\n  getModal = document.body.firstChild;\n  getModal.innerHTML = \"\";\n  getModal.remove();\n  isOpen = false;\n}\n\n;\n\n//# sourceURL=webpack://battleshipgame/./src/easterEgg/easterEgg.js?");

/***/ }),

/***/ "./src/highscores/highscores.js":
/*!**************************************!*\
  !*** ./src/highscores/highscores.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _easterEgg_easterEgg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easterEgg/easterEgg */ \"./src/easterEgg/easterEgg.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _highscores_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highscores.scss */ \"./src/highscores/highscores.scss\");\n/* harmony import */ var _highscoresTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highscoresTable */ \"./src/highscores/highscoresTable.js\");\n\n\n\n\n(0,_easterEgg_easterEgg__WEBPACK_IMPORTED_MODULE_0__.addEasterEgg)();\n(0,_highscoresTable__WEBPACK_IMPORTED_MODULE_3__.displayHighScores)();\n\n//# sourceURL=webpack://battleshipgame/./src/highscores/highscores.js?");

/***/ }),

/***/ "./src/highscores/highscoresTable.js":
/*!*******************************************!*\
  !*** ./src/highscores/highscoresTable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHighScores\": () => (/* binding */ displayHighScores)\n/* harmony export */ });\n/* harmony import */ var _utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/localStorage/localStorage */ \"./src/utils/localStorage/localStorage.js\");\n\nvar displayHighScores = function displayHighScores() {\n  var highScores = JSON.parse((0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_0__.getDataFromStorage)(\"highScores\"));\n\n  for (var i = 0; i < 10; i++) {\n    var tr = document.createElement(\"tr\");\n    tr.classList.add(\"table__row\");\n\n    if (highScores) {\n      tr.innerHTML = \"\\n      <td class=\\\"row__cell\\\">\".concat(i + 1, \"</td>\\n      <td class=\\\"row__cell row__cell-name\\\">\").concat(highScores[i] ? highScores[i].name : \"\", \"</td>\\n      <td class=\\\"row__cell row__cell-score\\\">\").concat(highScores[i] ? highScores[i].score : \"\", \"</td>\\n      <td class=\\\"row__cell row__cell-status\\\">\").concat(highScores[i] ? highScores[i].status : \"\", \"</td>\");\n    } else {\n      tr.innerHTML = \"\\n      <td class=\\\"row__cell\\\">\".concat(i + 1, \"</td>\\n      <td class=\\\"row__cell row__cell-name\\\"></td>\\n      <td class=\\\"row__cell row__cell-score\\\"></td>\\n      <td class=\\\"row__cell row__cell-status\\\"></td>\");\n    }\n\n    document.querySelector(\".table\").appendChild(tr);\n  }\n};\n\n//# sourceURL=webpack://battleshipgame/./src/highscores/highscoresTable.js?");

/***/ }),

/***/ "./src/utils/localStorage/localStorage.js":
/*!************************************************!*\
  !*** ./src/utils/localStorage/localStorage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function setDataInStorage(key, value) {\n  localStorage.setItem(key, value);\n}\n\nfunction getDataFromStorage(key) {\n  return localStorage.getItem(key);\n}\n\nexports.setDataInStorage = setDataInStorage;\nexports.getDataFromStorage = getDataFromStorage;\n\n//# sourceURL=webpack://battleshipgame/./src/utils/localStorage/localStorage.js?");

/***/ }),

/***/ "./src/easterEgg/easterEgg.scss":
/*!**************************************!*\
  !*** ./src/easterEgg/easterEgg.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://battleshipgame/./src/easterEgg/easterEgg.scss?");

/***/ }),

/***/ "./src/highscores/highscores.scss":
/*!****************************************!*\
  !*** ./src/highscores/highscores.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://battleshipgame/./src/highscores/highscores.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/highscores/highscores.js");
/******/ 	
/******/ })()
;