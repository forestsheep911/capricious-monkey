// ==UserScript==
// @name                monkey-xxx-xxx
// @namespace           https://github.com/you/monkey-monkey-xxx-xxx
// @version             0.0.1
// @description         write description here
// @author              you
// @copyright           you
// @license             MIT
// @match               https://2water.cybozu.com/k/8/*
// @match               http://localhost:8080/*
// @require             file://D:/usr/bxu/dev/github/capricious-monkey/public/dev/monkey-xxx-xxx.script.js
// @run-at              document-end
// @supportURL          https://github.com/yourname/your-app/issues
// @homepage            https://github.com/yourname/your-app
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_addValueChangeListener
// @icon                https://img.icons8.com/ios/50/000000/happy-eyes.png
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
// @[ You can find all source codes in GitHub repo ]
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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app = function () {\r\n    console.log('monkey jumping on the bed.');\r\n};\r\nexports[\"default\"] = app;\r\n\n\n//# sourceURL=webpack://monkey-xxx-xxx/./src/app.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_1 = __importDefault(__webpack_require__(/*! @/app */ \"./src/app.ts\"));\r\nif (false) {}\r\nelse {\r\n    // 在生产环境打包时 webpack 会把 else 部分代码移除。使用动态导入就不会把这些代码打包进生产环境\r\n    Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! @/lib/environment */ \"./src/lib/environment.ts\")); }).then(function (_a) {\r\n        var isTampermonkey = _a.isTampermonkey;\r\n        if (isTampermonkey()) {\r\n            // 开发环境油猴脚本从这里开始运行\r\n            Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! @/lib/hotReload */ \"./src/lib/hotReload.ts\")); }).then(function (_a) {\r\n                var hotReload = _a.hotReload;\r\n                // 载入在线调试热刷新\r\n                hotReload();\r\n                (0, app_1.default)();\r\n            });\r\n        }\r\n        else {\r\n            // 第一次启动时自动安装油猴脚本\r\n            Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! @/mock/autoInstall */ \"./src/mock/autoInstall.ts\")); }).then(function (_a) {\r\n                var autoInstall = _a.autoInstall;\r\n                autoInstall();\r\n            });\r\n            // 运行不需要油猴环境的js，用于模拟目标网页原本逻辑。不需要模拟可以删除\r\n            Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! @/mock/mock */ \"./src/mock/mock.ts\")); }).then(function (_a) {\r\n                var mock = _a.mock;\r\n                mock();\r\n            });\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://monkey-xxx-xxx/./src/index.ts?");

/***/ }),

/***/ "./src/lib/environment.ts":
/*!********************************!*\
  !*** ./src/lib/environment.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.isTampermonkey = void 0;\r\n/**\r\n * 判断运行环境，阻止本地webpack注入的重复js代码执行\r\n */\r\nvar isTampermonkey = function () {\r\n    var tampermonkey = true;\r\n    try {\r\n        GM_info;\r\n    }\r\n    catch (err) {\r\n        tampermonkey = false;\r\n    }\r\n    return tampermonkey;\r\n};\r\nexports.isTampermonkey = isTampermonkey;\r\n\n\n//# sourceURL=webpack://monkey-xxx-xxx/./src/lib/environment.ts?");

/***/ }),

/***/ "./src/lib/hotReload.ts":
/*!******************************!*\
  !*** ./src/lib/hotReload.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.hotReload = void 0;\r\nvar hotReload = function () {\r\n    if (window.location.host.includes('localhost')) {\r\n        var oldRefresh = GM_getValue('refresh');\r\n        GM_setValue('refresh', !oldRefresh);\r\n    }\r\n    else {\r\n        var callback = function (name, oldValue, newValue, remote) {\r\n            if (remote) {\r\n                window.location.reload();\r\n            }\r\n        };\r\n        GM_addValueChangeListener('refresh', callback);\r\n    }\r\n};\r\nexports.hotReload = hotReload;\r\n\n\n//# sourceURL=webpack://monkey-xxx-xxx/./src/lib/hotReload.ts?");

/***/ }),

/***/ "./src/mock/autoInstall.ts":
/*!*********************************!*\
  !*** ./src/mock/autoInstall.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.autoInstall = void 0;\r\nvar autoInstall = function () {\r\n    var isNewInstall = localStorage.getItem('isNewInstall');\r\n    if (!isNewInstall) {\r\n        window.open(\"monkey-xxx-xxx.script.js\", 'self');\r\n        localStorage.setItem('isNewInstall', 'false');\r\n    }\r\n};\r\nexports.autoInstall = autoInstall;\r\n\n\n//# sourceURL=webpack://monkey-xxx-xxx/./src/mock/autoInstall.ts?");

/***/ }),

/***/ "./src/mock/mock.ts":
/*!**************************!*\
  !*** ./src/mock/mock.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.mock = void 0;\r\n// 简单模拟斗鱼播放器原本逻辑\r\nvar mock = function () {\r\n    //mock\r\n};\r\nexports.mock = mock;\r\n\n\n//# sourceURL=webpack://monkey-xxx-xxx/./src/mock/mock.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;