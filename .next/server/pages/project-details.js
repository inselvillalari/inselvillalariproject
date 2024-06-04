"use strict";
(() => {
var exports = {};
exports.id = 9260;
exports.ids = [9260,7956,8623,1915,9216,4117,5950,5095,3663,6424,7523,3235,9494,5920,9147,6405,7099,1678,2643,7377,7371,6882,1814,1436,7566,245,1504,6032,577,5810,7487,2409,982,1812,5600,8895,4957,6683,9946,8053,8856,2402,5292,2209,1671,4458,3512,8218,9801,2545,110,6830,283,1322];
exports.modules = {

/***/ 6409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ project_details)
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Project-Intro/index.jsx



const ProjectIntro = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "intro-section section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 col-md-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "htit",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "introduction"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 offset-lg-1 col-md-8 mb-30",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part."
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item mt-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "Client"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "#",
                                        children: "Envato.com"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item mt-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "Date"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "6 August 2022"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item mt-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "Categories"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: "Web Design "
                                        }),
                                        ",",
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: "WordPress"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item mt-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "Tags"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: "Minimal"
                                        }),
                                        " , ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: "Modern"
                                        }),
                                        " ,",
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: "Design"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Project_Intro = (ProjectIntro);

;// CONCATENATED MODULE: ./src/components/Split/index.jsx


class Split extends (external_react_default()).Component {
    target = /*#__PURE__*/ external_react_default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const components_Split = (Split);

;// CONCATENATED MODULE: ./src/components/Next-Project/index.jsx




const NextProject = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "call-action nogif next",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "content text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/project-details",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_Split, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "wow txt words chars splitting",
                                                "data-splitting": true,
                                                children: "Next Project"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_Split, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "wow txt words chars splitting",
                                                "data-splitting": true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                        children: " Luxury "
                                                    }),
                                                    " Furniture"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "nxt-img bg-img",
                "data-background": "img/portfolio/project1/bg.jpg"
            })
        ]
    }));
};
/* harmony default export */ const Next_Project = (NextProject);

// EXTERNAL MODULE: ./src/components/Project-Video/index.jsx
var Project_Video = __webpack_require__(1207);
;// CONCATENATED MODULE: ./src/pages/project-details/index.jsx

/* eslint-disable @next/next/no-img-element */ 





const ProjectDetails = ()=>{
    external_react_default().useEffect(()=>{
        document.querySelector("body").classList.add("index3");
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(main/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Page_header/* default */.Z, {
                title: "Luxury Furniture",
                fullPath: [
                    {
                        id: 1,
                        name: "home",
                        url: "/"
                    },
                    {
                        id: 2,
                        name: "portfolio",
                        url: "/work1"
                    },
                    {
                        id: 3,
                        name: "project details",
                        url: "/project-details"
                    }, 
                ],
                image: "/assets/img/portfolio/project1/bg.jpg"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Project_Intro, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "projdtal",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "justified-gallery",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "col-lg-4 col-xl-3 col-md-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "",
                                    src: "/assets/img/portfolio/project1/1.jpg"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "col-lg-4 col-xl-3 col-md-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "",
                                    src: "/assets/img/portfolio/project1/2.jpg"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "col-lg-4 col-xl-3 col-md-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "",
                                    src: "/assets/img/portfolio/project1/6.jpg"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "col-lg-4 col-xl-3 col-md-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    alt: "",
                                    src: "/assets/img/portfolio/project1/3.jpg"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Project_Video/* default */.Z, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "projdtal",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "justified-gallery",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "col-lg-4 col-xl-3 col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "",
                                src: "/assets/img/portfolio/project1/8.jpg"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "col-lg-4 col-xl-3 col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "",
                                src: "/assets/img/portfolio/project1/9.jpg"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Next_Project, {
            })
        ]
    }));
};
/* harmony default export */ const project_details = (ProjectDetails);


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

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,3136,1207,2603], () => (__webpack_exec__(6409)));
module.exports = __webpack_exports__;

})();