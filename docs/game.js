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

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameTimer */ \"./src/game/gameTimer.js\");\n/* harmony import */ var _gameResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameResult */ \"./src/game/gameResult.js\");\n/* harmony import */ var _gameOverModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameOverModal */ \"./src/game/gameOverModal.js\");\n/* harmony import */ var _gameOverModal_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameOverModal.scss */ \"./src/game/gameOverModal.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles.scss */ \"./src/styles.scss\");\n\n\n\n\n\n\n//# sourceURL=webpack://battleshipgame/./src/game/game.js?");

/***/ }),

/***/ "./src/game/gameOverModal.js":
/*!***********************************!*\
  !*** ./src/game/gameOverModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("var MODAL = document.createElement(\"div\");\nMODAL.classList.add(\"modal\");\n\nfunction displayModal(GAME_RESULT, GAME_WIN_OR_LOSE, POINTS) {\n  if (typeof GAME_RESULT !== \"string\" || GAME_RESULT === \"Victory\" && GAME_WIN_OR_LOSE === \"lose\" || GAME_RESULT === \"Defeat\" && GAME_WIN_OR_LOSE === \"win\" || typeof GAME_WIN_OR_LOSE !== \"string\" || typeof POINTS !== \"number\") {\n    var err = new Error(\"Input data is wrong\");\n    throw err;\n  }\n\n  MODAL.innerHTML = \"<div class=\\\"modal__content\\\">\\n                        <h2 class=\\\"modal__settlement\\\">\".concat(GAME_RESULT, \"!</h2>\\n                        <h3 class=\\\"modal__result\\\">You \").concat(GAME_WIN_OR_LOSE, \" with \").concat(POINTS, \" points</h3>\\n                        <div class=\\\"modal__actions\\\">\\n                            <a class=\\\"modal__action-item modal__new-game-js\\\" href=\\\"#\\\">Start New Game</a>\\n                            <a class=\\\"modal__action-item\\\" href=\\\"/highscores.html\\\">High Scores</a>\\n                            <a class=\\\"modal__action-item\\\" href=\\\"/main.html\\\">Return</a>\\n                        </div>                        \\n                    </div>\");\n  document.querySelector(\"body\").prepend(MODAL);\n  document.querySelector(\".modal__new-game-js\").addEventListener(\"click\", closeModal);\n}\n\nfunction closeModal() {\n  MODAL.remove(); //   TODO - add logic for new game\n}\n\nexports.closeModal = closeModal;\nexports.displayModal = displayModal;\n\n//# sourceURL=webpack://battleshipgame/./src/game/gameOverModal.js?");

/***/ }),

/***/ "./src/game/gameResult.js":
/*!********************************!*\
  !*** ./src/game/gameResult.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ../utils/localStorage/localStorage.js */ \"./src/utils/localStorage/localStorage.js\"),\n    getDataFromStorage = _require.getDataFromStorage;\n\nfunction getResult() {\n  var settlement;\n  var result;\n  var computerPoints = getDataFromStorage(\"computerPoints\");\n  var userPoints = getDataFromStorage(\"userPoints\");\n\n  if (userPoints > computerPoints) {\n    settlement = \"Victory\";\n    result = \"win\";\n  } else {\n    settlement = \"Defeat\";\n    result = \"lose\";\n  }\n\n  return {\n    settlement: settlement,\n    result: result,\n    userPoints: userPoints\n  };\n}\n\nexports.getResult = getResult;\n\n//# sourceURL=webpack://battleshipgame/./src/game/gameResult.js?");

/***/ }),

/***/ "./src/game/gameTimer.js":
/*!*******************************!*\
  !*** ./src/game/gameTimer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("// container class where will be displayed timer. Change classname if it is necessary\nvar gameTime;\n\nfunction setTimer() {\n  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n  var finishGame = arguments.length > 1 ? arguments[1] : undefined;\n  var timer = document.querySelector(\".timer\");\n  var totalSeconds = time * 60;\n  var minutes = totalSeconds / 60;\n  var seconds = totalSeconds - minutes * 60;\n\n  if (seconds < 10) {\n    seconds = \"0\" + seconds;\n  }\n\n  if (minutes < 10) {\n    minutes = \"0\" + minutes;\n  }\n\n  timer.textContent = \"\".concat(minutes, \":\").concat(seconds);\n  gameTime = setInterval(function () {\n    totalSeconds -= 1;\n    seconds = totalSeconds % 60;\n\n    if (seconds < 10) {\n      seconds = \"0\" + seconds;\n    }\n\n    minutes = Math.floor(totalSeconds / 60);\n\n    if (minutes < 10) {\n      minutes = \"0\" + minutes;\n    }\n\n    timer.textContent = \"\".concat(minutes, \":\").concat(seconds);\n\n    if (totalSeconds === 0) {\n      finishGame();\n    }\n  }, 1000);\n}\n\nfunction stopTimer() {\n  clearInterval(gameTime);\n}\n\nexports.setTimer = setTimer;\nexports.stopTimer = stopTimer;\n\n//# sourceURL=webpack://battleshipgame/./src/game/gameTimer.js?");

/***/ }),

/***/ "./src/utils/localStorage/localStorage.js":
/*!************************************************!*\
  !*** ./src/utils/localStorage/localStorage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setDataInStorage\": () => (/* binding */ setDataInStorage),\n/* harmony export */   \"getDataFromStorage\": () => (/* binding */ getDataFromStorage)\n/* harmony export */ });\nfunction setDataInStorage(key, value) {\n  localStorage.setItem(key, value);\n}\nfunction getDataFromStorage(key) {\n  return localStorage.getItem(key);\n}\n\n//# sourceURL=webpack://battleshipgame/./src/utils/localStorage/localStorage.js?");

/***/ }),

/***/ "./src/game/gameOverModal.scss":
/*!*************************************!*\
  !*** ./src/game/gameOverModal.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://battleshipgame/./src/game/gameOverModal.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game/game.js");
/******/ 	
/******/ })()
;