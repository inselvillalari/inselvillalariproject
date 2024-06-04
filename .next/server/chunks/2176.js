"use strict";
exports.id = 2176;
exports.ids = [2176];
exports.modules = {

/***/ 2176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ aboutus)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/aboutus/about-us.json
const about_us_namespaceObject = JSON.parse('{"TN":{"P":"Kalkan","E":"Kızıltaş\'ta"},"wp":"/assets/img/slid/aboutUs/1.jpg","Lx":"/assets/img/slid/aboutUs/2.jpg","kQ":"mavi ve yeşili sizlerle buluşturuyoruz. Villalarımız, bütün bir yılın yorgunluğunu üzerinizden atmanız için kusursuz bir şekilde tasarlanmıştır. Siz değerli misafirlerimize \'işte bu\' dedirtecek bir tatil geçirtmek için; kapılarımızı açıyoruz…","Qq":"","JB":[{"id":1,"name":"Agena"},{"id":2,"name":"Capella"},{"id":3,"name":"Gredi"},{"id":4,"name":"Rigel"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/pages/aboutus/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const AboutUs = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "about section-padding",
        style: {
            backgroundColor: "#EFFAFA"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "exp-content nopat wow fadeInUp",
                            "data-wow-delay": ".3s",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "sub-title",
                                    children: "Konumumuz"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                    className: "mb-20 playfont",
                                    children: [
                                        about_us_namespaceObject.TN.P,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                        }),
                                        " ",
                                        about_us_namespaceObject.TN.E
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: about_us_namespaceObject.kQ
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: about_us_namespaceObject.JB.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: item.name
                                        }, item.id)
                                    )
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "ab-exp",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-4 mb-20",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "pattern bg-img bg-repeat",
                                            style: {
                                                backgroundImage: `url(/assets/img/line-pattern.png)`
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-8 wow fadeInUp",
                                        "data-wow-delay": ".3s",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img mb-20 wow imago",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: about_us_namespaceObject.wp,
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-7 wow fadeInUp",
                                        "data-wow-delay": ".3s",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img wow imago",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: about_us_namespaceObject.Lx,
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "years-exp",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "exp-text",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "custom-font",
                                                    children: about_us_namespaceObject.Qq
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const aboutus = (AboutUs);


/***/ })

};
;