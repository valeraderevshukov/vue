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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// import svg4everybody from 'svg4everybody';\n// import './common';\n// import { BODY, NO_TOUCH } from './constants';\n// import { isTouch } from './utils';\n// svg4everybody();\n\n// if (!isTouch()) BODY.addClass(NO_TOUCH);\n\n\n// import Vue from './lib/vue';\n// window.Vue = Vue;\n\nvar app = new Vue({\n  el: '#app',\n  data: {\n    items: [{\n      name: 'Иван',\n      surname: 'Иванов',\n      patronymic: 'Иванович',\n      avatar: 'https://via.placeholder.com/150x150'\n    }, {\n      name: 'Петр',\n      surname: 'Иванов',\n      patronymic: 'Иванович'\n    }, {\n      name: 'Василий',\n      surname: 'Иванов',\n      patronymic: 'Иванович',\n      avatar: 'https://via.placeholder.com/150x150'\n    }, {\n      name: 'Роман',\n      surname: 'Иванов',\n      patronymic: 'Иванович'\n    }, {\n      name: 'Виталий',\n      surname: 'Иванов',\n      patronymic: 'Иванович',\n      avatar: 'https://via.placeholder.com/150x150'\n    }],\n    itemsVisible: true\n  },\n  methods: {\n    caunterLength: function caunterLength() {\n      return this.items.length;\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XG4vLyBpbXBvcnQgJy4vY29tbW9uJztcbi8vIGltcG9ydCB7IEJPRFksIE5PX1RPVUNIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuLy8gaW1wb3J0IHsgaXNUb3VjaCB9IGZyb20gJy4vdXRpbHMnO1xuLy8gc3ZnNGV2ZXJ5Ym9keSgpO1xuXG4vLyBpZiAoIWlzVG91Y2goKSkgQk9EWS5hZGRDbGFzcyhOT19UT1VDSCk7XG5cblxuLy8gaW1wb3J0IFZ1ZSBmcm9tICcuL2xpYi92dWUnO1xuLy8gd2luZG93LlZ1ZSA9IFZ1ZTtcblxudmFyIGFwcCA9IG5ldyBWdWUoe1xuICBlbDogJyNhcHAnLFxuICBkYXRhOiB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHsgXG4gICAgICAgIG5hbWU6ICfQmNCy0LDQvScsXG4gICAgICAgIHN1cm5hbWU6ICfQmNCy0LDQvdC+0LInLFxuICAgICAgICBwYXRyb255bWljOiAn0JjQstCw0L3QvtCy0LjRhycsXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTB4MTUwJ1xuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIG5hbWU6ICfQn9C10YLRgCcsXG4gICAgICAgIHN1cm5hbWU6ICfQmNCy0LDQvdC+0LInLFxuICAgICAgICBwYXRyb255bWljOiAn0JjQstCw0L3QvtCy0LjRhydcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBuYW1lOiAn0JLQsNGB0LjQu9C40LknLFxuICAgICAgICBzdXJuYW1lOiAn0JjQstCw0L3QvtCyJyxcbiAgICAgICAgcGF0cm9ueW1pYzogJ9CY0LLQsNC90L7QstC40YcnLFxuICAgICAgICBhdmF0YXI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCdcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBuYW1lOiAn0KDQvtC80LDQvScsXG4gICAgICAgIHN1cm5hbWU6ICfQmNCy0LDQvdC+0LInLFxuICAgICAgICBwYXRyb255bWljOiAn0JjQstCw0L3QvtCy0LjRhydcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBuYW1lOiAn0JLQuNGC0LDQu9C40LknLFxuICAgICAgICBzdXJuYW1lOiAn0JjQstCw0L3QvtCyJyxcbiAgICAgICAgcGF0cm9ueW1pYzogJ9CY0LLQsNC90L7QstC40YcnLFxuICAgICAgICBhdmF0YXI6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUweDE1MCdcbiAgICAgIH0sXG4gICAgXSxcbiAgICBpdGVtc1Zpc2libGU6IHRydWVcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNhdW50ZXJMZW5ndGg6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQS9CQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBbkNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })

/******/ });