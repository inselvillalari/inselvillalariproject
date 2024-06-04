"use strict";
(() => {
var exports = {};
exports.id = 1055;
exports.ids = [1055,7956,8623,1915,9216,4117,5950,5095,3663,6424,7523,3235,9494,5920,9147,6405,7099,1678,2643,7377,7371,6882,1814,1436,7566,245,1504,6032,577,5810,7487,2409,982,1812,5600,8895,4957,6683,9946,8053,8856,2402,5292,2209,1671,4458,3512,8218,9801,2545,110,6830,283,1322];
exports.modules = {

/***/ 8941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const thumparallaxUp = ()=>{
    let imageUp = document.getElementsByClassName("thumparallax");
    if (imageUp) {
        new simpleParallax(imageUp, {
            delay: 1,
            scale: 1.1
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thumparallaxUp);


/***/ }),

/***/ 5952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blogs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/layouts/main.jsx + 2 modules
var main = __webpack_require__(2603);
// EXTERNAL MODULE: ./src/components/Page-header/index.jsx
var Page_header = __webpack_require__(3136);
;// CONCATENATED MODULE: ./src/data/blog1.json
const blog1_namespaceObject = JSON.parse('[{"id":1,"image":"/assets/img/blog/1.jpg","title":"In Good Taste: Mark Finlay Architects and Interiors","by":"ALEX SMITH","date":"Aug 06 2022","date2":["Aug 2022","06"]},{"id":2,"image":"/assets/img/blog/2.jpg","title":"Five Things You Should Know About Modern Furniture.","by":"ALEX SMITH","date":"Aug 06 2022","date2":["Aug 2022","06"]},{"id":3,"image":"/assets/img/blog/3.jpg","title":"What it\'s like to be an interior designer?","by":"ALEX SMITH","date":"Aug 06 2022","date2":["Aug 2022","06"]}]');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/common/thumparallaxUp.js
var thumparallaxUp = __webpack_require__(8941);
;// CONCATENATED MODULE: ./src/components/Blogs-List/index.jsx

/* eslint-disable @next/next/no-img-element */ 



const BlogsList = ()=>{
    external_react_default().useEffect(()=>{
        setTimeout(()=>{
            if (window.simpleParallax) (0,thumparallaxUp/* default */.Z)();
        }, 1000);
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "blog-pg section-padding",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-10 offset-lg-1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "posts",
                            children: [
                                blog1_namespaceObject.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item mb-80",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/blog-details",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.image,
                                                            alt: "",
                                                            className: "thumparallax"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "date",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/blog-details",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "num",
                                                                            children: item.date2[1]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: item.date2[0]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "cont",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "tags",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                        href: "#",
                                                                        children: "WordPress"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                        href: "#",
                                                                        children: "Themeforest"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                        href: "#",
                                                                        children: "Archo"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "title",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "/blog-details",
                                                                    children: "Build a Beautiful Blog With Ease"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: "/blog-details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "more",
                                                                    children: "Read More"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, item.id)
                                ),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "pagination",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "active",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#",
                                                children: "1"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#",
                                                children: "2"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-angle-right"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const Blogs_List = (BlogsList);

;// CONCATENATED MODULE: ./src/pages/blogs/index.jsx





const Blogs = ()=>{
    external_react_default().useEffect(()=>{
        document.querySelector('body').classList.add('index3');
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(main/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Page_header/* default */.Z, {
                title: "Our Blogs",
                fullPath: [
                    {
                        id: 1,
                        name: "home",
                        url: "/"
                    },
                    {
                        id: 2,
                        name: "blogs",
                        url: "/blogs"
                    }, 
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Blogs_List, {
            })
        ]
    }));
};
/* harmony default export */ const blogs = (Blogs);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,3136,2603], () => (__webpack_exec__(5952)));
module.exports = __webpack_exports__;

})();