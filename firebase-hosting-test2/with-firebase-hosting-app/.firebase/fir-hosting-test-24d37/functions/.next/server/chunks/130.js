"use strict";
exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 8130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Header.jsx



const Header = ({ pathname  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                className: pathname === "/" ? "is-active" : "",
                children: "Home"
            }),
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/about",
                className: pathname === "/about" ? "is-active" : "",
                children: "About"
            })
        ]
    });
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./src/components/App.jsx



const App = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            children
        ]
    });
/* harmony default export */ const components_App = (App);


/***/ })

};
;