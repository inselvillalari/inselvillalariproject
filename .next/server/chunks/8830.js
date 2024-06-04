"use strict";
exports.id = 8830;
exports.ids = [8830];
exports.modules = {

/***/ 1311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getSiblings = function(e) {
    let siblings = [];
    if (!e.parentNode) {
        return siblings;
    }
    let sibling = e.parentNode.firstChild;
    while(sibling){
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSiblings);


/***/ }),

/***/ 8830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ portfolio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/common/getSiblings.js
var getSiblings = __webpack_require__(1311);
;// CONCATENATED MODULE: ./src/common/worksCardEffect.js

const worksCardEffect = ()=>{
    let workColumns = document.querySelectorAll(".full-bg .cluom"), glryTabsImages = document.querySelectorAll(".glry-img .tab-img");
    if (workColumns) {
        workColumns.forEach((cluom)=>{
            cluom.addEventListener("mouseenter", (e)=>{
                var tab_id = e.target.getAttribute("data-tab");
                cluom.classList.remove("current");
                e.target.classList.add("current");
                glryTabsImages.forEach((tabImg)=>{
                    tabImg.classList.remove("current");
                });
                document.getElementById(tab_id).classList.add("current");
            });
            cluom.addEventListener("mouseleave", (e)=>{
                if (e.target.classList.contains("current")) {
                    (0,getSiblings/* default */.Z)(e.target).forEach((item)=>item.classList.remove("current")
                    );
                    return false;
                }
            });
        });
    }
};
/* harmony default export */ const common_worksCardEffect = (worksCardEffect);

;// CONCATENATED MODULE: ./src/pages/portfolio/index.jsx




const Portfolio2 = ()=>{
    external_react_default().useEffect(()=>{
        common_worksCardEffect();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "portfolio full-bg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-3 col-md-6 cluom current",
                            "data-tab": "tab-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "info",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "custom-font",
                                        children: "Patara Antik Kenti"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "https://tr.wikipedia.org/wiki/Patara",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            target: "_blank",
                                            children: [
                                                "Detaya Git ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-chevron-right"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-3 col-md-6 cluom",
                            "data-tab": "tab-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "info",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "custom-font",
                                        children: "Kaputaş Plajı"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "https://www.google.com/search?q=Kaputa%C5%9F+plaj%C4%B1&oq=Kaputa%C5%9F+plaj%C4%B1&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDU0MTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            target: "_blank",
                                            children: [
                                                "Detaya Git ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-chevron-right"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-3 col-md-6 cluom",
                            "data-tab": "tab-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "info",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "custom-font",
                                        children: "Kaş"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "https://www.google.com/search?q=ka%C5%9F%27ta+gezilecek+yerler&sca_esv=c8c65b53b193be60&biw=2560&bih=1294&ei=7blcZp3KG93ixc8Ps-SumAw&udm=&oq=ka%C5%9Fta+ge&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWthxZ90YSBnZSoCCAAyDRAAGIAEGLEDGIMBGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyCBAAGBYYChgeMgYQABgWGB4yBhAAGBYYHjIIEAAYFhgKGB4yCBAAGBYYChgeMggQABgWGB4YD0iKFlDJBli4DHAAeAKQAQCYAZIBoAGnBaoBAzAuNbgBA8gBAPgBAZgCBqACtgXCAgQQABhHwgIMEAAYgAQYQxiKBRgKwgIFEAAYgATCAggQABiABBiiBJgDAIgGAZAGCJIHAzEuNaAHkSQ&sclient=gws-wiz-serp",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            target: "_blank",
                                            children: [
                                                "Detaya Git ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-chevron-right"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-3 col-md-6 cluom",
                            "data-tab": "tab-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "info",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "custom-font",
                                        children: "Saklıkent"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "https://tr.wikipedia.org/wiki/Sakl%C4%B1kent_Mill%C3%AE_Park%C4%B1",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            target: "_blank",
                                            children: [
                                                "Detaya Git ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-chevron-right"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "glry-img",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "tab-1",
                        className: "bg-img tab-img current",
                        style: {
                            backgroundImage: `url(/assets/img/slid/portfolio/patara.jpeg)`
                        },
                        "data-overlay-dark": "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "tab-2",
                        className: "bg-img tab-img",
                        style: {
                            backgroundImage: `url(/assets/img/slid/portfolio/kaputas.jpeg)`
                        },
                        "data-overlay-dark": "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "tab-3",
                        className: "bg-img tab-img",
                        style: {
                            backgroundImage: `url(/assets/img/slid/portfolio/kas.jpeg)`
                        },
                        "data-overlay-dark": "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "tab-4",
                        className: "bg-img tab-img",
                        style: {
                            backgroundImage: `url(/assets/img/slid/portfolio/saklikent.jpeg)`
                        },
                        "data-overlay-dark": "2"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const portfolio = (Portfolio2);


/***/ })

};
;