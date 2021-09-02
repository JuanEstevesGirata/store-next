"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Product/index.jsx":
/*!**************************************!*\
  !*** ./components/Product/index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ "./components/Product/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _components_ProductDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ProductDetail */ "./components/ProductDetail/index.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/mnt/d/developer/Front-End/Next/app/components/Product/index.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var Product = function Product() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      modal = _useState[0],
      setModal = _useState[1];

  var openModal = function openModal() {
    return setModal(!modal);
  };

  var closeModal = function closeModal() {
    return setModal(!modal);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlinePlusCircle, {
      onClick: openModal,
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "img ".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().img)),
      children: "IMG"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().information),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
        children: "Pizza Huawaiana"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),
        children: "Big Box del Coronel 1 Sand Del Coronel2 Tiras de pechuga apanadas "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),
        children: "$10.500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductDetail__WEBPACK_IMPORTED_MODULE_2__.default, {
      closeModal: closeModal,
      modal: modal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};

_s(Product, "nuZUJtGVisUtbUUE0eTC3bXBg84=");

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTYxMTM3OGExZGViMjcxMzZjZDkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUVRSiwrQ0FBUSxDQUFDLElBQUQsQ0FGaEI7QUFBQSxNQUVYSyxLQUZXO0FBQUEsTUFFSkMsUUFGSTs7QUFLbEIsTUFBTUMsU0FBUyxHQUFFLFNBQVhBLFNBQVc7QUFBQSxXQUFNRCxRQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFkO0FBQUEsR0FBakI7O0FBRUEsTUFBTUcsVUFBVSxHQUFFLFNBQVpBLFVBQVk7QUFBQSxXQUFNRixRQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFkO0FBQUEsR0FBbEI7O0FBSUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVKLHFFQUFoQjtBQUFBLDRCQUNJLDhEQUFDLCtEQUFEO0FBQXFCLGFBQU8sRUFBRU0sU0FBOUI7QUFBeUMsZUFBUyxFQUFFTiwrREFBVVM7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBTSxlQUFTLGdCQUFTVCwrREFBVCxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSTtBQUFLLGVBQVMsRUFBRUEsdUVBQWhCO0FBQUEsOEJBQ0k7QUFBTSxpQkFBUyxFQUFFQSxpRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU0saUJBQVMsRUFBRUEsdUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFNLGlCQUFTLEVBQUVBLGlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBU0ksOERBQUMsOERBQUQ7QUFBZSxnQkFBVSxFQUFFTyxVQUEzQjtBQUF1QyxXQUFLLEVBQUVIO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQTNCRDs7R0FBTUQ7O0tBQUFBO0FBNkJOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdC9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgQWlPdXRsaW5lUGx1c0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IFByb2R1Y3REZXRhaWwgZnJvbSAnQGNvbXBvbmVudHMvUHJvZHVjdERldGFpbCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgIFxyXG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgb3Blbk1vZGFsID0oKSA9PiBzZXRNb2RhbCghbW9kYWwpXHJcblxyXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9KCkgPT4gc2V0TW9kYWwoIW1vZGFsKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICA8QWlPdXRsaW5lUGx1c0NpcmNsZSBvbkNsaWNrPXtvcGVuTW9kYWx9IGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0vPlxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e2BpbWcgJHtzdHlsZXMuaW1nfWB9ICA+SU1HPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb3JtYXRpb259PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlBpenphIEh1YXdhaWFuYTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5CaWcgQm94IGRlbCBDb3JvbmVsIDEgU2FuZCBEZWwgQ29yb25lbDIgVGlyYXMgZGUgcGVjaHVnYSBhcGFuYWRhcyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+JDEwLjUwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8UHJvZHVjdERldGFpbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSBtb2RhbD17bW9kYWx9Lz5cclxuICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJBaU91dGxpbmVQbHVzQ2lyY2xlIiwiUHJvZHVjdERldGFpbCIsIlByb2R1Y3QiLCJtb2RhbCIsInNldE1vZGFsIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImNvbnRhaW5lciIsImJ0biIsImltZyIsImluZm9ybWF0aW9uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==