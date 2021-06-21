/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/ssr-test";
exports.ids = ["pages/ssr-test"];
exports.modules = {

/***/ "./pages/ssr-test.js":
/*!***************************!*\
  !*** ./pages/ssr-test.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/choo/Documents/study/TIL/2021-06-15/hello-next/pages/ssr-test.js\";\n\n\nconst TESTAPI = 'https://jsonplaceholder.typicode.com/users'; // ? getServerSideProps에서 반환된 props가 들어옴\n\nconst SSRTest = ({\n  users\n}) => {\n  console.log('users', users);\n  const userList = users.map(user => {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n      children: user.username\n    }, user.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 12\n    }, undefined);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n    children: userList\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getServerSideProps() {\n  const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(TESTAPI); // ? data 가 존재하지 않을 경우 리다이렉트\n\n  if (!res.data) {\n    return {\n      redirect: {\n        destination: '/not-found',\n        permanent: false\n      }\n    };\n  } // ? data 가 존재할 경우 props로 넣어줌\n\n\n  return {\n    props: {\n      users: res.data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (SSRTest);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvc3NyLXRlc3QuanM/MmUzOCJdLCJuYW1lcyI6WyJURVNUQVBJIiwiU1NSVGVzdCIsInVzZXJzIiwiY29uc29sZSIsImxvZyIsInVzZXJMaXN0IiwibWFwIiwidXNlciIsInVzZXJuYW1lIiwiaWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMiLCJheGlvcyIsImRhdGEiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBRyw0Q0FBaEIsQyxDQUVBOztBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixLQUFyQjtBQUVBLFFBQU1HLFFBQVEsR0FBR0gsS0FBSyxDQUFDSSxHQUFOLENBQVVDLElBQUksSUFBSTtBQUNqQyx3QkFBTztBQUFBLGdCQUFzQkEsSUFBSSxDQUFDQztBQUEzQixPQUFVRCxJQUFJLENBQUNFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNELEdBRmdCLENBQWpCO0FBSUEsc0JBQ0UsOERBQUMsK0NBQUQ7QUFBQSxjQUNHSjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBWkQ7O0FBY08sZUFBZUssa0JBQWYsR0FBb0M7QUFDekMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLGdEQUFBLENBQVVaLE9BQVYsQ0FBbEIsQ0FEeUMsQ0FHekM7O0FBQ0EsTUFBRyxDQUFDVyxHQUFHLENBQUNFLElBQVIsRUFBYztBQUNaLFdBQU87QUFDTEMsY0FBUSxFQUFFO0FBQ1JDLG1CQUFXLEVBQUUsWUFETDtBQUVSQyxpQkFBUyxFQUFFO0FBRkg7QUFETCxLQUFQO0FBTUQsR0FYd0MsQ0FhekM7OztBQUNBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xmLFdBQUssRUFBRVMsR0FBRyxDQUFDRTtBQUROO0FBREYsR0FBUDtBQUtEO0FBRUQsK0RBQWVaLE9BQWYiLCJmaWxlIjoiLi9wYWdlcy9zc3ItdGVzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgVEVTVEFQSSA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnO1xuXG4vLyA/IGdldFNlcnZlclNpZGVQcm9wc+yXkOyEnCDrsJjtmZjrkJwgcHJvcHPqsIAg65Ok7Ja07Ji0XG5jb25zdCBTU1JUZXN0ID0gKHsgdXNlcnMgfSkgPT4ge1xuICBjb25zb2xlLmxvZygndXNlcnMnLCB1c2Vycyk7XG4gIFxuICBjb25zdCB1c2VyTGlzdCA9IHVzZXJzLm1hcCh1c2VyID0+IHtcbiAgICByZXR1cm4gPGxpIGtleT17IHVzZXIuaWQgfT57IHVzZXIudXNlcm5hbWUgfTwvbGk+XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAge3VzZXJMaXN0fVxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChURVNUQVBJKTtcblxuICAvLyA/IGRhdGEg6rCAIOyhtOyerO2VmOyngCDslYrsnYQg6rK97JqwIOumrOuLpOydtOugie2KuFxuICBpZighcmVzLmRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246ICcvbm90LWZvdW5kJyxcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyA/IGRhdGEg6rCAIOyhtOyerO2VoCDqsr3smrAgcHJvcHProZwg64Sj7Ja07KSMXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHVzZXJzOiByZXMuZGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTU1JUZXN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ssr-test.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_index_js"], function() { return __webpack_exec__("./pages/ssr-test.js"); });
module.exports = __webpack_exports__;

})();