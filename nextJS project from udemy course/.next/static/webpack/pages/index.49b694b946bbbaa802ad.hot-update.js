webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\programirane-front-end\\reactJS-udemy-course\\nextJS project from udemy course\\pages\\index.js",
    _s = $RefreshSig$();



var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'A first meetup',
  image: "https://picsum.photos/200/300",
  address: "Main str. #1",
  description: "This is a first meetup"
}, {
  id: 'm2',
  title: 'A second meetup',
  image: "https://picsum.photos/200/300",
  address: "Main str. #2",
  description: "This is a second meetup"
}, {
  id: 'm3',
  title: 'A third meetup',
  image: "https://picsum.photos/200/300",
  address: "Main str. #3",
  description: "This is a third meetup "
}];
function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      loadedMeetups = _useState[0],
      setLoadedMeetups = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: loadedMeetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, this);
}

_s(HomePage, "lt95aOlOC9RW+nrRzHOiZRPQygU=");

_c = HomePage;
;

var _c;

$RefreshReg$(_c, "HomePage");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJsb2FkZWRNZWV0dXBzIiwic2V0TG9hZGVkTWVldHVwcyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDckI7QUFBRUMsSUFBRSxFQUFFLElBQU47QUFBWUMsT0FBSyxFQUFFLGdCQUFuQjtBQUFxQ0MsT0FBSyxFQUFFLCtCQUE1QztBQUE2RUMsU0FBTyxFQUFFLGNBQXRGO0FBQXNHQyxhQUFXLEVBQUU7QUFBbkgsQ0FEcUIsRUFFckI7QUFBRUosSUFBRSxFQUFFLElBQU47QUFBWUMsT0FBSyxFQUFFLGlCQUFuQjtBQUFzQ0MsT0FBSyxFQUFFLCtCQUE3QztBQUE4RUMsU0FBTyxFQUFFLGNBQXZGO0FBQXVHQyxhQUFXLEVBQUU7QUFBcEgsQ0FGcUIsRUFHckI7QUFBRUosSUFBRSxFQUFFLElBQU47QUFBWUMsT0FBSyxFQUFFLGdCQUFuQjtBQUFxQ0MsT0FBSyxFQUFFLCtCQUE1QztBQUE2RUMsU0FBTyxFQUFFLGNBQXRGO0FBQXNHQyxhQUFXLEVBQUU7QUFBbkgsQ0FIcUIsQ0FBdEI7QUFNZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQzNCQyxhQUQyQjtBQUFBLE1BQ1pDLGdCQURZOztBQUdsQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2ZELG9CQUFnQixDQUFDVCxhQUFELENBQWhCO0FBRUEsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLHNCQUNDLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFUTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFHQTs7R0FYdUJGLFE7O0tBQUFBLFE7QUFXdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDliNjk0Yjk0NmJiYmFhODAyYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcblx0eyBpZDogJ20xJywgdGl0bGU6ICdBIGZpcnN0IG1lZXR1cCcsIGltYWdlOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwXCIsIGFkZHJlc3M6IFwiTWFpbiBzdHIuICMxXCIsIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXBcIiB9LFxyXG5cdHsgaWQ6ICdtMicsIHRpdGxlOiAnQSBzZWNvbmQgbWVldHVwJywgaW1hZ2U6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDBcIiwgYWRkcmVzczogXCJNYWluIHN0ci4gIzJcIiwgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNlY29uZCBtZWV0dXBcIiB9LFxyXG5cdHsgaWQ6ICdtMycsIHRpdGxlOiAnQSB0aGlyZCBtZWV0dXAnLCBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMFwiLCBhZGRyZXNzOiBcIk1haW4gc3RyLiAjM1wiLCBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgdGhpcmQgbWVldHVwIFwiIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcblx0Y29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKTtcclxuXHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1lZXR1cExpc3QgbWVldHVwcz17bG9hZGVkTWVldHVwc30gLz5cclxuXHQpXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==