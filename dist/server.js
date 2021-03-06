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

/***/ "./src/server/config/index.js":
/*!************************************!*\
  !*** ./src/server/config/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n\nconst envFound = dotenv__WEBPACK_IMPORTED_MODULE_0___default().config();\n\nif (!envFound) {\n  throw new Error(\"Couldn't find .env!\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  mysql: {\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASS,\n    database: process.env.DB_SCHEMA\n  },\n  port: parseInt(process.env.PORT)\n});\n\n//# sourceURL=webpack://mrpostcard/./src/server/config/index.js?");

/***/ }),

/***/ "./src/server/db/models/index.js":
/*!***************************************!*\
  !*** ./src/server/db/models/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/server/config/index.js\");\n\n\nconst Connection = mysql__WEBPACK_IMPORTED_MODULE_0___default().createPool(_config__WEBPACK_IMPORTED_MODULE_1__.default.mysql);\n\nconst Query = (query, values) => {\n  return new Promise((resolve, reject) => {\n    Connection.query(query, values, (err, results) => {\n      if (err) reject(err);\n      resolve(results);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Query);\n\n//# sourceURL=webpack://mrpostcard/./src/server/db/models/index.js?");

/***/ }),

/***/ "./src/server/db/queries/cards.js":
/*!****************************************!*\
  !*** ./src/server/db/queries/cards.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.js\");\n\n\nconst getRealCards = code => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM  cards WHERE code = ?\", [code]);\n};\n\nconst getCalenderCards = code => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM  cards WHERE code = ?\", [code]);\n};\n\nconst getSportsCards = code => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM  cards WHERE code = ?\", [code]);\n};\n\nconst getHolidayCards = code => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM  cards WHERE code = ?\", [code]);\n};\n\nconst getBusinessCards = code => {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"SELECT * FROM  cards WHERE code = ?\", [code]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getRealCards,\n  getCalenderCards,\n  getSportsCards,\n  getHolidayCards,\n  getBusinessCards\n});\n\n//# sourceURL=webpack://mrpostcard/./src/server/db/queries/cards.js?");

/***/ }),

/***/ "./src/server/db/queries/customers.js":
/*!********************************************!*\
  !*** ./src/server/db/queries/customers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.js\");\n //only need parenthesis with require\n\nasync function insertCustomer(customer) {\n  return (0,_models__WEBPACK_IMPORTED_MODULE_0__.default)(\"INSERT INTO customers SET ?\", [customer]); //customer is an object with the data from the form and since they are in the same order as the database we dont need 4 ? marks\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  insertCustomer\n});\n\n//# sourceURL=webpack://mrpostcard/./src/server/db/queries/customers.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db_queries_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/queries/cards */ \"./src/server/db/queries/cards.js\");\n/* harmony import */ var _db_queries_customers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/queries/customers */ \"./src/server/db/queries/customers.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.get(\"/test\", (req, res, next) => {\n  res.json({\n    msg: \"Hello World!\"\n  });\n});\nrouter.get(\"/cards/:code?\", async (req, res, next) => {\n  try {\n    let {\n      code\n    } = req.params;\n    let imageURL = await _db_queries_cards__WEBPACK_IMPORTED_MODULE_1__.default.getRealCards(code);\n    res.status(200).json(imageURL);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/cards/:code?\", async (req, res, next) => {\n  try {\n    let {\n      code\n    } = req.params;\n    let imageURL = await _db_queries_cards__WEBPACK_IMPORTED_MODULE_1__.default.getCalendarCards(code);\n    res.status(200).json(imageURL);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.get(\"/cards/:code?\", async (req, res, next) => {\n  try {\n    let {\n      code\n    } = req.params;\n    let imageURL = await _db_queries_cards__WEBPACK_IMPORTED_MODULE_1__.default.getHolidayCards(code);\n    res.status(200).json(imageURL);\n  } catch (error) {\n    next(error);\n  }\n});\nrouter.post(\"/insert\", async (req, res, next) => {\n  try {\n    let response = await _db_queries_customers__WEBPACK_IMPORTED_MODULE_2__.default.insertCustomer(req.body);\n    res.json(response);\n  } catch (error) {\n    next(error);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://mrpostcard/./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ \"./src/server/config/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()(\"dev\"));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"public\"));\napp.use(\"/api\", _routes__WEBPACK_IMPORTED_MODULE_2__.default);\napp.use(\"*\", (req, res, next) => {\n  try {\n    res.sendFile(path__WEBPACK_IMPORTED_MODULE_4___default().join(__dirname, \"../public/index.html\"));\n  } catch (error) {\n    next(error);\n  }\n});\napp.use((req, res, next) => {\n  try {\n    res.status(404).json(\"Not Found\");\n  } catch (error) {\n    next(error);\n  }\n});\napp.use((err, req, res, next) => {\n  console.log(err.message);\n  res.status(500).json({\n    msg: \"Something went wrong :(\"\n  });\n});\napp.listen(_config__WEBPACK_IMPORTED_MODULE_3__.default.port, () => console.log(`Server listening on port ${_config__WEBPACK_IMPORTED_MODULE_3__.default.port}...`));\n\n//# sourceURL=webpack://mrpostcard/./src/server/server.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;