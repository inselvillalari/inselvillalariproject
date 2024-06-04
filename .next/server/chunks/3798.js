"use strict";
exports.id = 3798;
exports.ids = [3798];
exports.modules = {

/***/ 3798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout_LightLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/layout/app.json
const app_namespaceObject = JSON.parse('{"E8":"/assets/img/logo-light.png","Q1":"/assets/img/logo-dark.png"}');
// EXTERNAL MODULE: ./src/pages/navbar/index.jsx + 1 modules
var navbar = __webpack_require__(5955);
// EXTERNAL MODULE: ./src/pages/footer/index.jsx
var footer = __webpack_require__(496);
;// CONCATENATED MODULE: ./src/pages/layout/LightLayout.jsx

/* eslint-disable @next/next/no-css-tags */ 




const LightLayout = ({ children , footerClass  })=>{
    const navbarRef = external_react_default().useRef(null);
    const logoRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        var navbar = navbarRef.current, logo = logoRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
                logo.setAttribute("src", app_namespaceObject.Q1);
            } else {
                navbar.classList.remove("nav-scroll");
                logo.setAttribute("src", app_namespaceObject.E8);
            }
        });
    }, [
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "/assets/css/style-light.css"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar["default"], {
                navbarRef: navbarRef,
                logoRef: logoRef
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(footer["default"], {
                classText: footerClass
            })
        ]
    }));
};
/* harmony default export */ const layout_LightLayout = (LightLayout);


/***/ })

};
;