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

/***/ "./src/game/computerShooting.js":
/*!**************************************!*\
  !*** ./src/game/computerShooting.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computerMove\": () => (/* binding */ computerMove)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game/game.js\");\n/* harmony import */ var _gameResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameResult */ \"./src/game/gameResult.js\");\n/* harmony import */ var _gameOverModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameOverModal */ \"./src/game/gameOverModal.js\");\n/* harmony import */ var _gameTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameTimer */ \"./src/game/gameTimer.js\");\n/* harmony import */ var _highscores_highscoresState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../highscores/highscoresState */ \"./src/highscores/highscoresState.js\");\n/* harmony import */ var _utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/localStorage/localStorage */ \"./src/utils/localStorage/localStorage.js\");\n\n\n\n\n\n\nvar probabilityArray = [false, true, false, false, false, false, true, false, true, false];\nvar PLAYER_BOARD = document.querySelector(\".board__fields--player\");\nvar COMPUTER_BOARD = document.querySelector(\".board__fields--computer\");\nfunction computerMove() {\n  var _COMPUTER_BOARD$class;\n\n  var timeForComputer = Math.random() * 1000 + 1000;\n  var classes = [\"disabled\", \"overlay\"];\n\n  (_COMPUTER_BOARD$class = COMPUTER_BOARD.classList).add.apply(_COMPUTER_BOARD$class, classes);\n\n  setTimeout(function () {\n    var move = Math.floor(Math.random() * probabilityArray.length);\n    var hit = probabilityArray[move];\n    var fieldOnBoard;\n\n    if (hit) {\n      var fieldIndex = Math.floor(Math.random() * _game__WEBPACK_IMPORTED_MODULE_0__.playerShips.length);\n      var fieldToDestroy = _game__WEBPACK_IMPORTED_MODULE_0__.playerShips[fieldIndex];\n      var fieldName = fieldToDestroy.fieldName;\n      fieldOnBoard = PLAYER_BOARD.querySelector(\"[data-field-name=\".concat(fieldName));\n      var shipName = fieldToDestroy.shipName;\n      _game__WEBPACK_IMPORTED_MODULE_0__.playerShips.splice(fieldIndex, 1);\n      var ship = _game__WEBPACK_IMPORTED_MODULE_0__.playerState.ships.find(function (ship) {\n        return ship.shipName === shipName;\n      });\n      var field = ship.fields.findIndex(function (field) {\n        return field.name === fieldName;\n      });\n      ship.fields[field].hit = true;\n      var isSunk = ship.fields.every(function (field) {\n        return field.hit;\n      });\n      ship.sunk = isSunk;\n      fieldOnBoard.classList.add(\"hit\");\n      var lostAllShips = _game__WEBPACK_IMPORTED_MODULE_0__.playerState.ships.every(function (ship) {\n        return ship.sunk;\n      });\n      _game__WEBPACK_IMPORTED_MODULE_0__.playerState.lostAllShips = lostAllShips;\n      (0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_5__.setDataInStorage)(\"computerPoints\", +(0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_5__.getDataFromStorage)(\"computerPoints\") + 1);\n\n      if (lostAllShips) {\n        var _getResult = (0,_gameResult__WEBPACK_IMPORTED_MODULE_1__.getResult)(),\n            settlement = _getResult.settlement,\n            result = _getResult.result,\n            userPoints = _getResult.userPoints;\n\n        (0,_gameOverModal__WEBPACK_IMPORTED_MODULE_2__.displayModal)(settlement, result, +userPoints);\n        (0,_gameTimer__WEBPACK_IMPORTED_MODULE_3__.stopTimer)();\n        (0,_highscores_highscoresState__WEBPACK_IMPORTED_MODULE_4__.saveMatchResult)(result, +userPoints);\n      }\n\n      computerMove();\n    } else {\n      var _COMPUTER_BOARD$class2;\n\n      var _fieldIndex = Math.floor(Math.random() * _game__WEBPACK_IMPORTED_MODULE_0__.playerEmptyFields.length);\n\n      var _fieldName = _game__WEBPACK_IMPORTED_MODULE_0__.playerEmptyFields[_fieldIndex].fieldName;\n      fieldOnBoard = PLAYER_BOARD.querySelector(\"[data-field-name=\".concat(_fieldName));\n      fieldOnBoard.classList.add(\"miss\");\n      _game__WEBPACK_IMPORTED_MODULE_0__.playerEmptyFields.splice(_fieldIndex, 1);\n\n      (_COMPUTER_BOARD$class2 = COMPUTER_BOARD.classList).remove.apply(_COMPUTER_BOARD$class2, classes);\n    }\n  }, timeForComputer);\n}\n\n//# sourceURL=webpack://battleshipgame/./src/game/computerShooting.js?");

/***/ }),

/***/ "./src/game/constants.js":
/*!*******************************!*\
  !*** ./src/game/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SHIPS_LIST\": () => (/* binding */ SHIPS_LIST)\n/* harmony export */ });\nvar SHIPS_LIST = [{\n  shipName: \"Carrier\",\n  size: 5\n}, {\n  shipName: \"Battleship\",\n  size: 4\n}, {\n  shipName: \"Destroyer\",\n  size: 3\n}, {\n  shipName: \"Submarine\",\n  size: 2\n}, {\n  shipName: \"Patrol Boat\",\n  size: 1\n}];\n\n//# sourceURL=webpack://battleshipgame/./src/game/constants.js?");

/***/ }),

/***/ "./src/game/createGameBoards.js":
/*!**************************************!*\
  !*** ./src/game/createGameBoards.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGameBoards\": () => (/* binding */ createGameBoards),\n/* harmony export */   \"checkIfGameStarted\": () => (/* binding */ checkIfGameStarted)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/game/constants.js\");\n/* harmony import */ var _utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/localStorage/localStorage */ \"./src/utils/localStorage/localStorage.js\");\n\n\nvar GAME_BOARD_WIDTH = 10;\nvar GAME_BOARD = document.querySelectorAll(\".board__fields\");\nvar CHARACTER_CONTAINER = document.querySelectorAll(\".board__characters\");\nvar NUMBER_CONTAINER = document.querySelectorAll(\".board__numbers\");\nvar SHIPS_CONTAINER = document.querySelectorAll(\".ships__row\");\nvar PLAYER_NAME_FIELD = document.querySelector(\".player\");\nvar SHIPS_HEADING = document.querySelector(\".ships__heading\");\nvar BUTTON = document.querySelector(\".actions__button\");\nvar createGameBoards = function createGameBoards() {\n  GAME_BOARD.forEach(function (e) {\n    for (var i = 0; i < Math.pow(GAME_BOARD_WIDTH, 2); i++) {\n      var newField = document.createElement(\"div\");\n      newField.classList.add(\"board__field\");\n      newField.dataset.id = i;\n      e.appendChild(newField);\n      newField.style.width = \"\".concat(100 / GAME_BOARD_WIDTH, \"%\");\n      newField.style.height = \"\".concat(100 / GAME_BOARD_WIDTH, \"%\");\n    }\n  });\n  CHARACTER_CONTAINER.forEach(function (e) {\n    for (var i = 0; i < GAME_BOARD_WIDTH; i++) {\n      var newChar = document.createElement(\"div\");\n      newChar.classList.add(\"board__characters-char\");\n      newChar.innerHTML = \"<p>\".concat(String.fromCharCode(i + 65), \"</p>\");\n      e.appendChild(newChar);\n      newChar.style.width = \"40px\";\n      newChar.style.height = \"\".concat(100 / GAME_BOARD_WIDTH, \"%\");\n    }\n  });\n  NUMBER_CONTAINER.forEach(function (e) {\n    for (var i = 0; i < GAME_BOARD_WIDTH; i++) {\n      var newNumb = document.createElement(\"div\");\n      newNumb.classList.add(\"board__numbers-numb\");\n      newNumb.innerHTML = \"<p>\".concat(i + 1, \"</p>\");\n      e.appendChild(newNumb);\n      newNumb.style.width = \"\".concat(100 / GAME_BOARD_WIDTH, \"%\");\n      newNumb.style.height = \"40px\";\n    }\n  });\n  SHIPS_CONTAINER.forEach(function (target) {\n    _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST.forEach(function (e, index) {\n      var newElement = document.createElement(\"div\");\n      newElement.classList.add(\"ships-ship\");\n      newElement.dataset.name = _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST[index].shipName;\n      window.addEventListener(\"resize\", function () {\n        var windowWidth = window.innerWidth;\n\n        if (windowWidth > 1399) {\n          newElement.style.width = \"\".concat(25 * e.size, \"px\");\n        } else if (windowWidth > 1023) {\n          newElement.style.width = \"\".concat(15 * e.size, \"px\");\n        } else {\n          newElement.style.width = \"\".concat(10 * e.size, \"px\");\n        }\n      });\n      newElement.style.width = \"\".concat(25 * e.size, \"px\");\n      target.appendChild(newElement);\n    });\n  });\n  (0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_1__.getDataFromStorage)(name) ? PLAYER_NAME_FIELD.innerText = \"\".concat((0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_1__.getDataFromStorage)(name)) : PLAYER_NAME_FIELD.innerText = \"Player\";\n};\nvar checkIfGameStarted = function checkIfGameStarted(isGameStarted, START_GAME_BTN) {\n  if (isGameStarted) {\n    SHIPS_HEADING.innerText = \"Yours ships:\";\n    BUTTON.style.display = \"none\";\n    START_GAME_BTN.style.display = \"none\";\n  } else {\n    SHIPS_HEADING.innerText = \"Deploy Your Ships:\";\n    BUTTON.style.display = \"flex\";\n    START_GAME_BTN.style.display = \"flex\";\n  }\n};\n\n//# sourceURL=webpack://battleshipgame/./src/game/createGameBoards.js?");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playerState\": () => (/* binding */ playerState),\n/* harmony export */   \"playerShips\": () => (/* binding */ playerShips),\n/* harmony export */   \"playerEmptyFields\": () => (/* binding */ playerEmptyFields),\n/* harmony export */   \"computerState\": () => (/* binding */ computerState),\n/* harmony export */   \"computerShips\": () => (/* binding */ computerShips),\n/* harmony export */   \"computerEmptyFields\": () => (/* binding */ computerEmptyFields)\n/* harmony export */ });\n/* harmony import */ var _gameTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameTimer */ \"./src/game/gameTimer.js\");\n/* harmony import */ var _gameResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameResult */ \"./src/game/gameResult.js\");\n/* harmony import */ var _gameOverModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameOverModal */ \"./src/game/gameOverModal.js\");\n/* harmony import */ var _createGameBoards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createGameBoards */ \"./src/game/createGameBoards.js\");\n/* harmony import */ var _randomizationOfShipsPositions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./randomizationOfShipsPositions */ \"./src/game/randomizationOfShipsPositions.js\");\n/* harmony import */ var _shipsArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipsArray */ \"./src/game/shipsArray.js\");\n/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./startGame */ \"./src/game/startGame.js\");\n/* harmony import */ var _playerShooting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playerShooting */ \"./src/game/playerShooting.js\");\n/* harmony import */ var _utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/localStorage/localStorage */ \"./src/utils/localStorage/localStorage.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _easterEgg_easterEgg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../easterEgg/easterEgg */ \"./src/easterEgg/easterEgg.js\");\n/* harmony import */ var _game_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game.scss */ \"./src/game/game.scss\");\n/* harmony import */ var _gameOverModal_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gameOverModal.scss */ \"./src/game/gameOverModal.scss\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar RANDOMIZE_BTN = document.querySelector(\".actions__button-randomize\");\nvar playerState;\nvar playerShips;\nvar playerEmptyFields;\nvar computerState;\nvar computerShips;\nvar computerEmptyFields;\n(0,_easterEgg_easterEgg__WEBPACK_IMPORTED_MODULE_10__.addEasterEgg)();\n(0,_createGameBoards__WEBPACK_IMPORTED_MODULE_3__.createGameBoards)();\nRANDOMIZE_BTN.addEventListener(\"click\", function () {\n  var _addShipsToBoard = (0,_randomizationOfShipsPositions__WEBPACK_IMPORTED_MODULE_4__.addShipsToBoard)(true);\n\n  var _addShipsToBoard2 = _slicedToArray(_addShipsToBoard, 2);\n\n  playerEmptyFields = _addShipsToBoard2[0];\n  playerShips = _addShipsToBoard2[1];\n  playerState = (0,_shipsArray__WEBPACK_IMPORTED_MODULE_5__.generateShipsArray)(playerShips);\n  _startGame__WEBPACK_IMPORTED_MODULE_6__.START_GAME_BTN.addEventListener(\"click\", _startGame__WEBPACK_IMPORTED_MODULE_6__.startGame);\n  _startGame__WEBPACK_IMPORTED_MODULE_6__.START_GAME_BTN.classList.remove(\"disabled\");\n  (0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_8__.setDataInStorage)(\"userPoints\", 0);\n  (0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_8__.setDataInStorage)(\"computerPoints\", 0);\n});\n\nvar _addShipsToBoard3 = (0,_randomizationOfShipsPositions__WEBPACK_IMPORTED_MODULE_4__.addShipsToBoard)(false);\n\nvar _addShipsToBoard4 = _slicedToArray(_addShipsToBoard3, 2);\n\ncomputerEmptyFields = _addShipsToBoard4[0];\ncomputerShips = _addShipsToBoard4[1];\ncomputerState = (0,_shipsArray__WEBPACK_IMPORTED_MODULE_5__.generateShipsArray)(computerShips);\n(0,_playerShooting__WEBPACK_IMPORTED_MODULE_7__.makeFieldsTargetable)();\n\n//# sourceURL=webpack://battleshipgame/./src/game/game.js?");

/***/ }),

/***/ "./src/game/gameOverModal.js":
/*!***********************************!*\
  !*** ./src/game/gameOverModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("var MODAL = document.createElement(\"div\");\nMODAL.classList.add(\"modal\");\n\nfunction displayModal(GAME_RESULT, GAME_WIN_OR_LOSE, POINTS) {\n  if (typeof GAME_RESULT !== \"string\" || GAME_RESULT === \"Victory\" && GAME_WIN_OR_LOSE === \"lose\" || GAME_RESULT === \"Defeat\" && GAME_WIN_OR_LOSE === \"win\" || typeof GAME_WIN_OR_LOSE !== \"string\" || typeof POINTS !== \"number\") {\n    var err = new Error(\"Input data is wrong\");\n    throw err;\n  }\n\n  MODAL.innerHTML = \"<div class=\\\"modal__content\\\">\\n                        <h2 class=\\\"modal__settlement\\\">\".concat(GAME_RESULT, \"!</h2>\\n                        <h3 class=\\\"modal__result\\\">You \").concat(GAME_WIN_OR_LOSE, \" with \").concat(POINTS, \" points</h3>\\n                        <div class=\\\"modal__actions\\\">\\n                            <a class=\\\"modal__action-item modal__new-game-js\\\" href=\\\"game.html\\\">Start New Game</a>\\n                            <a class=\\\"modal__action-item\\\" href=\\\"/highscores.html\\\">High Scores</a>\\n                            <a class=\\\"modal__action-item\\\" href=\\\"/index.html\\\">Return</a>\\n                        </div>                        \\n                    </div>\");\n  document.querySelector(\"body\").prepend(MODAL);\n  document.querySelector(\".modal__new-game-js\").addEventListener(\"click\", closeModal);\n}\n\nfunction closeModal() {\n  MODAL.remove(); //   TODO - add logic for new game\n}\n\nexports.closeModal = closeModal;\nexports.displayModal = displayModal;\n\n//# sourceURL=webpack://battleshipgame/./src/game/gameOverModal.js?");

/***/ }),

/***/ "./src/game/gameResult.js":
/*!********************************!*\
  !*** ./src/game/gameResult.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ../utils/localStorage/localStorage.js */ \"./src/utils/localStorage/localStorage.js\"),\n    getDataFromStorage = _require.getDataFromStorage;\n\nfunction getResult() {\n  var computerPoints = +getDataFromStorage(\"computerPoints\");\n  var userPoints = +getDataFromStorage(\"userPoints\");\n\n  if (userPoints > computerPoints) {\n    settlement = \"Victory\";\n    result = \"win\";\n  } else {\n    settlement = \"Defeat\";\n    result = \"lose\";\n  }\n\n  return {\n    settlement: settlement,\n    result: result,\n    userPoints: userPoints\n  };\n}\n\nexports.getResult = getResult;\n\n//# sourceURL=webpack://battleshipgame/./src/game/gameResult.js?");

/***/ }),

/***/ "./src/game/gameTimer.js":
/*!*******************************!*\
  !*** ./src/game/gameTimer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("// container class where will be displayed timer. Change classname if it is necessary\nvar gameTime;\n\nfunction setTimer() {\n  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n  var finishGame = arguments.length > 1 ? arguments[1] : undefined;\n\n  if (time < 1 || time > 60 || typeof time !== \"number\") {\n    var err = new Error(\"Invalid value for game time.\");\n    throw err;\n  }\n\n  var timer = document.querySelector(\".timer__counter\");\n  var totalSeconds = time * 60;\n  var minutes = totalSeconds / 60;\n  var seconds = totalSeconds - minutes * 60;\n\n  if (seconds < 10) {\n    seconds = \"0\" + seconds;\n  }\n\n  if (minutes < 10) {\n    minutes = \"0\" + minutes;\n  }\n\n  timer.textContent = \"\".concat(minutes, \":\").concat(seconds);\n  gameTime = setInterval(function () {\n    totalSeconds -= 1;\n    seconds = totalSeconds % 60;\n\n    if (seconds < 10) {\n      seconds = \"0\" + seconds;\n    }\n\n    minutes = Math.floor(totalSeconds / 60);\n\n    if (minutes < 10) {\n      minutes = \"0\" + minutes;\n    }\n\n    timer.textContent = \"\".concat(minutes, \":\").concat(seconds);\n\n    if (totalSeconds === 0) {\n      finishGame();\n    }\n  }, 1000);\n}\n\nfunction stopTimer() {\n  clearInterval(gameTime);\n}\n\nexports.setTimer = setTimer;\nexports.stopTimer = stopTimer;\n\n//# sourceURL=webpack://battleshipgame/./src/game/gameTimer.js?");

/***/ }),

/***/ "./src/game/playerShooting.js":
/*!************************************!*\
  !*** ./src/game/playerShooting.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeFieldsTargetable\": () => (/* binding */ makeFieldsTargetable)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game/game.js\");\n/* harmony import */ var _computerShooting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computerShooting */ \"./src/game/computerShooting.js\");\n/* harmony import */ var _gameResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameResult */ \"./src/game/gameResult.js\");\n/* harmony import */ var _gameOverModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameOverModal */ \"./src/game/gameOverModal.js\");\n/* harmony import */ var _gameTimer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameTimer */ \"./src/game/gameTimer.js\");\n/* harmony import */ var _highscores_highscoresState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../highscores/highscoresState */ \"./src/highscores/highscoresState.js\");\n/* harmony import */ var _utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/localStorage/localStorage */ \"./src/utils/localStorage/localStorage.js\");\n\n\n\n\n\n\n\nvar COMPUTER_BOARD = document.querySelector(\".board__fields--computer\");\n\nfunction hitField() {\n  event.target.removeEventListener(\"click\", hitField);\n  event.target.style.cursor = \"not-allowed\";\n  var fieldName = event.target.dataset.fieldName;\n  var fieldOnBoard = COMPUTER_BOARD.querySelector(\"[data-field-name=\".concat(fieldName));\n  var fieldIndex = _game__WEBPACK_IMPORTED_MODULE_0__.computerShips.findIndex(function (ship) {\n    return ship.fieldName === fieldName;\n  });\n\n  if (fieldIndex >= 0) {\n    var shipName = _game__WEBPACK_IMPORTED_MODULE_0__.computerShips[fieldIndex].shipName;\n    _game__WEBPACK_IMPORTED_MODULE_0__.computerShips.splice(fieldIndex, 1);\n    var ship = _game__WEBPACK_IMPORTED_MODULE_0__.computerState.ships.find(function (ship) {\n      return ship.shipName === shipName;\n    });\n    var field = ship.fields.findIndex(function (field) {\n      return field.name === fieldName;\n    });\n    ship.fields[field].hit = true;\n    var isSunk = ship.fields.every(function (field) {\n      return field.hit;\n    });\n    ship.sunk = isSunk;\n\n    if (isSunk) {\n      ship.fields.forEach(function (field) {\n        COMPUTER_BOARD.querySelector(\"[data-field-name=\".concat(field.name)).classList.add(\"sunk\");\n      });\n    }\n\n    fieldOnBoard.classList.add(\"hit\");\n    var lostAllShips = _game__WEBPACK_IMPORTED_MODULE_0__.computerState.ships.every(function (ship) {\n      return ship.sunk;\n    });\n    _game__WEBPACK_IMPORTED_MODULE_0__.computerState.lostAllShips = lostAllShips;\n    (0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_6__.setDataInStorage)(\"userPoints\", +(0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_6__.getDataFromStorage)(\"userPoints\") + 1);\n\n    if (lostAllShips) {\n      var _getResult = (0,_gameResult__WEBPACK_IMPORTED_MODULE_2__.getResult)(),\n          settlement = _getResult.settlement,\n          result = _getResult.result,\n          userPoints = _getResult.userPoints;\n\n      (0,_gameOverModal__WEBPACK_IMPORTED_MODULE_3__.displayModal)(settlement, result, +userPoints);\n      (0,_gameTimer__WEBPACK_IMPORTED_MODULE_4__.stopTimer)();\n      (0,_highscores_highscoresState__WEBPACK_IMPORTED_MODULE_5__.saveMatchResult)(result, +userPoints);\n    }\n  } else {\n    fieldIndex = _game__WEBPACK_IMPORTED_MODULE_0__.computerEmptyFields.findIndex(function (field) {\n      return field.fieldName === fieldName;\n    });\n\n    if (fieldIndex >= 0) {\n      _game__WEBPACK_IMPORTED_MODULE_0__.computerEmptyFields.splice(fieldIndex, 1);\n      fieldOnBoard.classList.add(\"miss\");\n    }\n\n    (0,_computerShooting__WEBPACK_IMPORTED_MODULE_1__.computerMove)();\n  }\n}\n\nfunction makeFieldsTargetable() {\n  var fields = document.querySelectorAll(\".board__fields--computer .board__field\");\n  fields.forEach(function (field) {\n    field.addEventListener(\"click\", hitField);\n  });\n}\n\n//# sourceURL=webpack://battleshipgame/./src/game/playerShooting.js?");

/***/ }),

/***/ "./src/game/randomizationOfShipsPositions.js":
/*!***************************************************!*\
  !*** ./src/game/randomizationOfShipsPositions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addShipsToBoard\": () => (/* binding */ addShipsToBoard)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/game/constants.js\");\n\nvar GAME_BOARD = document.querySelectorAll(\".board__fields\");\nvar gameBoardArray = [];\nvar fieldsNamesArray = [];\nvar GAME_BOARD_WIDTH = 10;\n\nvar createFieldsName = function createFieldsName() {\n  for (var i = 0; i < 10; i++) {\n    for (var j = 0; j < 10; j++) {\n      fieldsNamesArray.push(\"\".concat(String.fromCharCode(i + 65)).concat(j + 1));\n    }\n  }\n};\n\ncreateFieldsName();\n\nvar createGameBoardArray = function createGameBoardArray() {\n  gameBoardArray = [];\n\n  for (var i = 0; i < GAME_BOARD_WIDTH; i++) {\n    gameBoardArray.push([]);\n\n    for (var j = 0; j < GAME_BOARD_WIDTH; j++) {\n      gameBoardArray[i].push({\n        isEmpty: true,\n        fieldName: fieldsNamesArray[i * 10 + j]\n      });\n    }\n  }\n};\n\nvar rollDirection = function rollDirection() {\n  return Math.floor(Math.random() * 2) === 0 ? \"vertical\" : \"horizontal\";\n};\n\nvar createPosition = function createPosition(shipIndex, direction) {\n  var position = [];\n\n  for (var i = 0; i < 2; i++) {\n    position.push(Math.floor(Math.random() * GAME_BOARD_WIDTH));\n  }\n\n  if (direction === \"horizontal\" && position[1] + _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST[shipIndex].size > GAME_BOARD_WIDTH) {\n    position[1] = Math.abs(position[1] - _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST[shipIndex].size);\n  } else if (position[0] + _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST[shipIndex].size > GAME_BOARD_WIDTH) {\n    position[0] = Math.abs(position[0] - _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST[shipIndex].size);\n  }\n\n  return position;\n};\n\nvar placeShipsOnBoard = function placeShipsOnBoard() {\n  for (var shipIndex = 0; shipIndex < _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST.length; shipIndex++) {\n    var direction = rollDirection();\n\n    if (direction === \"horizontal\") {\n      positionShipHorizontally(shipIndex, direction);\n    } else {\n      positionShipVertically(shipIndex, direction);\n    }\n  }\n\n  return gameBoardArray;\n};\n\nvar positionShipVertically = function positionShipVertically(shipIndex, direction) {\n  var position = createPosition(shipIndex, direction);\n  var positionsForCheck = [];\n\n  for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST[shipIndex].size; i++) {\n    positionsForCheck.push(gameBoardArray[position[0] + i][position[1]]);\n  }\n\n  if (positionsForCheck.some(function (el) {\n    return !el.isEmpty;\n  })) {\n    positionShipVertically(shipIndex, direction);\n  } else {\n    for (var _i = 0; _i < _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST[shipIndex].size; _i++) {\n      gameBoardArray[position[0] + _i].fill({\n        isEmpty: false,\n        shipName: _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST[shipIndex].shipName,\n        fieldName: fieldsNamesArray[(position[0] + _i) * 10 + position[1]],\n        hit: false\n      }, position[1], position[1] + 1);\n    }\n  }\n};\n\nvar positionShipHorizontally = function positionShipHorizontally(shipIndex, direction) {\n  var position = createPosition(shipIndex, direction);\n\n  if (gameBoardArray[position[0]].slice(position[1], position[1] + _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST[shipIndex].size).some(function (el) {\n    return !el.isEmpty;\n  })) {\n    positionShipHorizontally(shipIndex, direction);\n  } else {\n    for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST[shipIndex].size; i++) {\n      gameBoardArray[position[0]][position[1] + i] = {\n        isEmpty: false,\n        shipName: _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST[shipIndex].shipName,\n        fieldName: fieldsNamesArray[position[0] * 10 + position[1] + i],\n        hit: false\n      };\n    }\n  }\n};\n\nvar addShipsToBoard = function addShipsToBoard(isPlayer) {\n  createGameBoardArray();\n  var gameBoard = placeShipsOnBoard();\n  GAME_BOARD[isPlayer ? 0 : 1].innerHTML = \"\";\n  var gameBoardForMap = gameBoardArray.flat(Infinity);\n  gameBoardForMap.map(function (_, i) {\n    var newField = document.createElement(\"div\");\n    newField.classList.add(\"board__field\");\n\n    if (isPlayer) {\n      if (!gameBoardForMap[i].isEmpty) {\n        newField.classList.add(\"ship\");\n      }\n\n      if (gameBoardForMap[i].shipName != \"\") {\n        newField.setAttribute(\"data-ship-name-board\", gameBoardForMap[i].shipName);\n      }\n    }\n\n    newField.setAttribute(\"data-field-name\", fieldsNamesArray[i]);\n    newField.dataset.id = i;\n    GAME_BOARD[isPlayer ? 0 : 1].appendChild(newField);\n  });\n  return separateShipsFromEmptyFields(gameBoard);\n};\n\nvar separateShipsFromEmptyFields = function separateShipsFromEmptyFields(board) {\n  var emptyFields = board.flat(Infinity).filter(function (field) {\n    return field.isEmpty;\n  });\n  var ships = board.flat(Infinity).filter(function (field) {\n    return !field.isEmpty;\n  });\n  return [emptyFields, ships];\n};\n\n//# sourceURL=webpack://battleshipgame/./src/game/randomizationOfShipsPositions.js?");

/***/ }),

/***/ "./src/game/shipsArray.js":
/*!********************************!*\
  !*** ./src/game/shipsArray.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateShipsArray\": () => (/* binding */ generateShipsArray)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/game/constants.js\");\n\nvar generateShipsArray = function generateShipsArray(board) {\n  var gameBoard = board.flat(Infinity);\n  var ships = {\n    ships: _constants__WEBPACK_IMPORTED_MODULE_0__.SHIPS_LIST.map(function (ship) {\n      return {\n        shipName: ship.shipName,\n        sunk: false,\n        fields: generateShipFields(ship, gameBoard)\n      };\n    }),\n    lostAllShips: false\n  };\n  return ships;\n};\n\nvar generateShipFields = function generateShipFields(ship, gameboard) {\n  var fields = [];\n  var shipFields = gameboard.filter(function (field) {\n    return field.shipName === ship.shipName;\n  });\n\n  for (var i = 0; i < shipFields.length; i++) {\n    fields.push({\n      name: shipFields[i].fieldName,\n      hit: false\n    });\n  }\n\n  return fields;\n};\n\n//# sourceURL=webpack://battleshipgame/./src/game/shipsArray.js?");

/***/ }),

/***/ "./src/game/startGame.js":
/*!*******************************!*\
  !*** ./src/game/startGame.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"START_GAME_BTN\": () => (/* binding */ START_GAME_BTN),\n/* harmony export */   \"isGameStarted\": () => (/* binding */ isGameStarted),\n/* harmony export */   \"startGame\": () => (/* binding */ startGame),\n/* harmony export */   \"finishGame\": () => (/* binding */ finishGame)\n/* harmony export */ });\n/* harmony import */ var _createGameBoards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGameBoards */ \"./src/game/createGameBoards.js\");\n/* harmony import */ var _gameTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameTimer */ \"./src/game/gameTimer.js\");\n/* harmony import */ var _gameOverModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameOverModal */ \"./src/game/gameOverModal.js\");\n/* harmony import */ var _gameResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameResult */ \"./src/game/gameResult.js\");\n\n\n\n\nvar PLAYER_BOARD = document.querySelector(\".board__fields--computer\");\nvar START_GAME_BTN = document.querySelector(\".button--start\");\nvar isGameStarted = false; //It should be true when player randomized their ships, it is true only for test\n\nvar isGamePrepare = true;\nvar startGame = function startGame() {\n  if (isGamePrepare === true) {\n    isGameStarted = !isGameStarted;\n    (0,_createGameBoards__WEBPACK_IMPORTED_MODULE_0__.checkIfGameStarted)(isGameStarted, START_GAME_BTN);\n    PLAYER_BOARD.classList.remove(\"overlay\");\n    (0,_gameTimer__WEBPACK_IMPORTED_MODULE_1__.setTimer)(10, finishGame);\n  }\n};\nvar finishGame = function finishGame() {\n  (0,_gameTimer__WEBPACK_IMPORTED_MODULE_1__.stopTimer)();\n\n  var _getResult = (0,_gameResult__WEBPACK_IMPORTED_MODULE_3__.getResult)(),\n      _getResult$settlement = _getResult.settlement,\n      settlement = _getResult$settlement === void 0 ? \"\" : _getResult$settlement,\n      _getResult$result = _getResult.result,\n      result = _getResult$result === void 0 ? \"\" : _getResult$result,\n      _getResult$userPoints = _getResult.userPoints,\n      userPoints = _getResult$userPoints === void 0 ? \"\" : _getResult$userPoints;\n\n  (0,_gameOverModal__WEBPACK_IMPORTED_MODULE_2__.displayModal)(settlement, result, userPoints);\n};\n\n//# sourceURL=webpack://battleshipgame/./src/game/startGame.js?");

/***/ }),

/***/ "./src/highscores/highscoresState.js":
/*!*******************************************!*\
  !*** ./src/highscores/highscoresState.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveMatchResult\": () => (/* binding */ saveMatchResult)\n/* harmony export */ });\n/* harmony import */ var _utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/localStorage/localStorage */ \"./src/utils/localStorage/localStorage.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar saveMatchResult = function saveMatchResult(matchResult, points) {\n  var _getDataFromStorage;\n\n  var PLAYER_NAME = (_getDataFromStorage = (0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_0__.getDataFromStorage)(\"playerName\")) !== null && _getDataFromStorage !== void 0 ? _getDataFromStorage : \"Player\";\n  var row = {\n    name: PLAYER_NAME,\n    score: points !== null && points !== void 0 ? points : \"\",\n    status: matchResult !== null && matchResult !== void 0 ? matchResult : \"\"\n  };\n  var highScores = (0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_0__.getDataFromStorage)(\"highScores\");\n\n  if (highScores) {\n    var result = [].concat(_toConsumableArray(JSON.parse(highScores)), [row]).sort(function (a, b) {\n      return b.score - a.score;\n    }).slice(0, 10);\n    (0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_0__.setDataInStorage)(\"highScores\", JSON.stringify(result));\n  } else {\n    var newHighScores = [row];\n    (0,_utils_localStorage_localStorage__WEBPACK_IMPORTED_MODULE_0__.setDataInStorage)(\"highScores\", JSON.stringify(newHighScores));\n  }\n};\n\n//# sourceURL=webpack://battleshipgame/./src/highscores/highscoresState.js?");

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

/***/ "./src/game/game.scss":
/*!****************************!*\
  !*** ./src/game/game.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://battleshipgame/./src/game/game.scss?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game/game.js");
/******/ 	
/******/ })()
;