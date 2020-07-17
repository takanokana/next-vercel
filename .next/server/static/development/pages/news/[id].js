module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/news/[id].js":
/*!****************************!*\
  !*** ./pages/news/[id].js ***!
  \****************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/takanokana/Project_learn/nextVercel/pages/news/[id].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst BlogId = ({\n  blog\n}) => {\n  console.log(blog);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, blog.title), __jsx(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: `${blog.content}`\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }));\n};\n\nconst getStaticPaths = async () => {\n  const key = {\n    headers: {\n      'X-API-KEY': \"226e628a-6b0a-4e3d-a6ee-30389b8953d2\"\n    }\n  };\n  const res = await fetch('https://iricocco.microcms.io/api/v1/news', key);\n  const resBody = await res.json();\n  const paths = resBody.contents.map(repo => `/news/${repo.id}`);\n  return {\n    paths,\n    fallback: false\n  };\n};\nconst getStaticProps = async context => {\n  const id = context.params.id;\n  const key = {\n    headers: {\n      'X-API-KEY': \"226e628a-6b0a-4e3d-a6ee-30389b8953d2\"\n    }\n  };\n  const res = await fetch(`https://iricocco.microcms.io/api/v1/news/${id}`, key);\n  const blog = await res.json();\n  return {\n    props: {\n      blog: blog\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogId);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXdzLy5qcz85MzUxIl0sIm5hbWVzIjpbIkJsb2dJZCIsImJsb2ciLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJfX2h0bWwiLCJjb250ZW50IiwiZ2V0U3RhdGljUGF0aHMiLCJrZXkiLCJoZWFkZXJzIiwicHJvY2VzcyIsImFwaUtleSIsInJlcyIsImZldGNoIiwicmVzQm9keSIsImpzb24iLCJwYXRocyIsImNvbnRlbnRzIiwibWFwIiwicmVwbyIsImlkIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVk7QUFDekJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxJQUFJLENBQUNHLEtBQVYsQ0FERixFQUVFO0FBQUssMkJBQXVCLEVBQUU7QUFBQ0MsWUFBTSxFQUFHLEdBQUVKLElBQUksQ0FBQ0ssT0FBUTtBQUF6QixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBUkQ7O0FBVU8sTUFBTUMsY0FBYyxHQUFHLFlBQVc7QUFDdkMsUUFBTUMsR0FBRyxHQUFHO0FBQ1ZDLFdBQU8sRUFBRTtBQUNQLG1CQUFhQyxzQ0FBa0JDO0FBRHhCO0FBREMsR0FBWjtBQU1BLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsMENBQUQsRUFBNkNMLEdBQTdDLENBQXZCO0FBQ0EsUUFBTU0sT0FBTyxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUF0QjtBQUNBLFFBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxRQUFSLENBQWlCQyxHQUFqQixDQUFxQkMsSUFBSSxJQUFLLFNBQVFBLElBQUksQ0FBQ0MsRUFBRyxFQUE5QyxDQUFkO0FBQ0EsU0FBTztBQUNMSixTQURLO0FBRUxLLFlBQVEsRUFBRTtBQUZMLEdBQVA7QUFJRCxDQWRNO0FBZ0JBLE1BQU1DLGNBQWMsR0FBRyxNQUFNQyxPQUFOLElBQWlCO0FBQzdDLFFBQU1ILEVBQUUsR0FBR0csT0FBTyxDQUFDQyxNQUFSLENBQWVKLEVBQTFCO0FBRUEsUUFBTVosR0FBRyxHQUFHO0FBQ1ZDLFdBQU8sRUFBRTtBQUNQLG1CQUFhQyxzQ0FBa0JDO0FBRHhCO0FBREMsR0FBWjtBQUtBLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ3BCLDRDQUEyQ08sRUFBRyxFQUQxQixFQUVyQlosR0FGcUIsQ0FBdkI7QUFJQSxRQUFNUCxJQUFJLEdBQUcsTUFBTVcsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0FBRUEsU0FBTztBQUNMVSxTQUFLLEVBQUU7QUFDTHhCLFVBQUksRUFBRUE7QUFERDtBQURGLEdBQVA7QUFLRCxDQW5CTTtBQXFCUUQscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9uZXdzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IEJsb2dJZCA9ICh7YmxvZ30pID0+IHtcbiAgY29uc29sZS5sb2coYmxvZylcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntibG9nLnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBgJHtibG9nLmNvbnRlbnR9YH19PjwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jKCkgPT4ge1xuICBjb25zdCBrZXkgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1gtQVBJLUtFWSc6IHByb2Nlc3MuZW52LmFwaUtleVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2lyaWNvY2NvLm1pY3JvY21zLmlvL2FwaS92MS9uZXdzJywga2V5KVxuICBjb25zdCByZXNCb2R5ID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zdCBwYXRocyA9IHJlc0JvZHkuY29udGVudHMubWFwKHJlcG8gPT4gYC9uZXdzLyR7cmVwby5pZH1gKVxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkXG5cbiAgY29uc3Qga2V5ID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdYLUFQSS1LRVknOiBwcm9jZXNzLmVudi5hcGlLZXlcbiAgICB9XG4gIH1cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vaXJpY29jY28ubWljcm9jbXMuaW8vYXBpL3YxL25ld3MvJHtpZH1gLFxuICAgIGtleVxuICApXG4gIGNvbnN0IGJsb2cgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYmxvZzogYmxvZ1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nSWRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news/[id].js\n");

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/news/[id].js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/takanokana/Project_learn/nextVercel/pages/news/[id].js */"./pages/news/[id].js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });