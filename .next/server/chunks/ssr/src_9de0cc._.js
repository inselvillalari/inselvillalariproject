module.exports = {

"[project]/src/pages/_document.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/document.js [ssr] (ecmascript)");
var __TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__ = __turbopack_external_import__("@vercel/speed-insights/next");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__
]);
[__TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
class MyDocument extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"] {
    static async getInitialProps(ctx) {
        const initialProps = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].getInitialProps(ctx);
        return {
            ...initialProps
        };
    }
    render() {
        return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Html"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Head"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("meta", {
                            charSet: "utf-8"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("meta", {
                            name: "keywords"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("meta", {
                            name: "description"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("meta", {
                            name: "author",
                            content: ""
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                            rel: "shortcut icon",
                            href: "/assets/img/favicon.ico"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                            href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
                            rel: "stylesheet"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                            href: "https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap",
                            rel: "stylesheet"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                            href: "https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap",
                            rel: "stylesheet"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                            href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap",
                            rel: "stylesheet"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                            href: "https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap",
                            rel: "stylesheet"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/_document.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("body", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Main"], {}, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["NextScript"], {}, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__["SpeedInsights"], {}, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/_document.js",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/_document.js",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
}
const __TURBOPACK__default__export__ = MyDocument;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);
})()),
"[project]/src/common/loadingPace.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const loadingPace = ()=>{
    let preloader = document.querySelector("#preloader"), loadingText = document.querySelector(".loading-text");
    const addDoneClass = ()=>{
        preloader.classList.add("isdone");
        loadingText.classList.add("isdone");
    };
    Pace.on("start", function() {
        preloader.classList.remove("isdone");
        loadingText.classList.remove("isdone");
    });
    Pace.on("done", function() {
        addDoneClass();
    });
    if (document.querySelector("body").classList.contains("pace-done")) {
        addDoneClass();
    }
    document.addEventListener("load", ()=>{
        addDoneClass();
    });
};
const __TURBOPACK__default__export__ = loadingPace;

})()),
"[project]/src/data/app.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"lightLogo\":\"/assets/img/logo-light.png\",\"darkLogo\":\"/assets/img/logo-dark.png\",\"mapIframe\":\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.9212341505254!2d29.41556577717408!3d36.2656911724043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c1d2d533c413e7%3A0x61b9e1538feeccf2!2sKalkan%2C%20Zakkum%20Sk.%2C%2007580%20Ka%C5%9F%2FAntalya!5e0!3m2!1str!2str!4v1717242307280!5m2!1str!2str\",\"showLoading\":true}"));
})()),
"[project]/src/components/Loading-Screen/loading-screen.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/script.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$loadingPace$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/loadingPace.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$app$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/data/app.json (json)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const LoadingScreen = ()=>{
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        let bodyEl = document.querySelector("body");
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$app$2e$json__$28$json$29$__["default"].showLoading) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$loadingPace$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
            if (bodyEl.classList.contains("hideX")) {
                bodyEl.classList.remove("hideX");
            }
        } else {
            bodyEl.classList.add("hideX");
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$app$2e$json__$28$json$29$__["default"].showLoading === true ? "showX" : "hideX"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                    id: "preloader",
                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "loading-text",
                        children: "Yükleniyor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Loading-Screen/loading-screen.jsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Loading-Screen/loading-screen.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Loading-Screen/loading-screen.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$app$2e$json__$28$json$29$__["default"].showLoading ? /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "pace",
                strategy: "beforeInteractive",
                src: "/assets/js/pace.min.js"
            }, void 0, false, {
                fileName: "[project]/src/components/Loading-Screen/loading-screen.jsx",
                lineNumber: 26,
                columnNumber: 9
            }, this) : ""
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = LoadingScreen;

})()),
"[project]/src/common/mouseEffect.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const mouseEffect = ()=>{
    function mousecursor() {
        const cursorInner = document.querySelector(".cursor-inner"), cursorOuter = document.querySelector(".cursor-outer");
        let n, i = 0, o = !1;
        window.onmousemove = function(s) {
            o || (cursorOuter.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), cursorInner.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
        };
        if (document.querySelector(".cursor-pointer")) {
            document.querySelector(".cursor-pointer").addEventListener("mouseenter", function() {
                cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
            });
            document.querySelector(".cursor-pointer").addEventListener("mouseleave", function() {
                cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
            }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
        }
        document.querySelectorAll("a").forEach(function(item) {
            item.addEventListener("mouseenter", function() {
                cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
            });
        });
        document.querySelectorAll("a").forEach(function(item) {
            item.addEventListener("mouseleave", function() {
                cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
            });
        }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
    }
    mousecursor();
};
const __TURBOPACK__default__export__ = mouseEffect;

})()),
"[project]/src/components/Cursor/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$mouseEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/mouseEffect.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Cursor = ()=>{
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$mouseEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "mouse-cursor cursor-outer"
            }, void 0, false, {
                fileName: "[project]/src/components/Cursor/index.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "mouse-cursor cursor-inner"
            }, void 0, false, {
                fileName: "[project]/src/components/Cursor/index.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Cursor;

})()),
"[project]/src/common/scrollToTop.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const scrollToTop = ()=>{
    let offset = 150;
    let progressWrap = document.querySelector(".progress-wrap");
    let progressPath = document.querySelector(".progress-wrap path");
    let pathLength = progressPath.getTotalLength();
    const updateProgress = ()=>{
        let scroll = window.pageYOffset;
        let height = document.documentElement.scrollHeight - window.innerHeight;
        let progress = pathLength - scroll * pathLength / height;
        progressPath.style.strokeDashoffset = progress;
    };
    if (progressWrap) {
        progressPath.style.transition = progressPath.style.WebkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        updateProgress();
        window.addEventListener("scroll", updateProgress);
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > offset) {
                progressWrap.classList.add("active-progress");
            } else {
                document.querySelector(".progress-wrap").classList.remove("active-progress");
            }
        });
        progressWrap.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return false;
        });
    }
};
const __TURBOPACK__default__export__ = scrollToTop;

})()),
"[project]/src/components/scrollToTop/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$scrollToTop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/scrollToTop.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const ScrollToTop = ()=>{
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$scrollToTop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
        className: "progress-wrap cursor-pointer",
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("svg", {
            className: "progress-circle svg-content",
            width: "100%",
            height: "100%",
            viewBox: "-1 -1 102 102",
            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            }, void 0, false, {
                fileName: "[project]/src/components/scrollToTop/index.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/scrollToTop/index.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/scrollToTop/index.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ScrollToTop;

})()),
"[project]/src/pages/_app.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/script.js [ssr] (ecmascript)");
var __TURBOPACK__commonjs__external__next$2f$head$2e$js__ = __turbopack_external_require__("next/head.js", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2d$Screen$2f$loading$2d$screen$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Loading-Screen/loading-screen.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cursor$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Cursor/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scrollToTop$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/scrollToTop/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__ = __turbopack_external_import__("@vercel/speed-insights/next");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__
]);
[__TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__next$2f$head$2e$js__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("title", {
                        children: "IN-SEL"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.js",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cursor$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2d$Screen$2f$loading$2d$screen$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(Component, {
                ...pageProps
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__["SpeedInsights"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scrollToTop$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "wow",
                src: "/assets/js/wow.min.js"
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "splitting",
                strategy: "beforeInteractive",
                src: "/assets/js/splitting.min.js"
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "simpleParallax",
                src: "/assets/js/simpleParallax.min.js"
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "isotope",
                src: "/assets/js/isotope.pkgd.min.js"
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/assets/js/main.js",
                id: "init",
                strategy: "lazyOnload"
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = MyApp;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);
})()),
"[project]/src/pages/navbar/app.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"lightLogo\":\"/assets/img/logo-light.png\",\"darkLogo\":\"/assets/img/logo-dark.png\",\"mapIframe\":\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.9212341505254!2d29.41556577717408!3d36.2656911724043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c1d2d533c413e7%3A0x61b9e1538feeccf2!2sKalkan%2C%20Zakkum%20Sk.%2C%2007580%20Ka%C5%9F%2FAntalya!5e0!3m2!1str!2str!4v1717242307280!5m2!1str!2str\",\"showLoading\":true}"));
})()),
"[project]/src/common/getSiblings.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
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
const __TURBOPACK__default__export__ = getSiblings;

})()),
"[project]/src/pages/navbar/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$navbar$2f$app$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/pages/navbar/app.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$getSiblings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/getSiblings.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const Navbar = ({ navbarRef, logoRef, logoClass })=>{
    const handleDropdown = (e)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$getSiblings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(e.target.parentElement).filter((item)=>item.classList.contains("show")).map((item)=>{
            item.classList.remove("show");
            if (item.childNodes[0]) {
                item.childNodes[0].setAttribute("aria-expanded", false);
            }
            if (item.childNodes[1]) {
                item.childNodes[1].classList.remove("show");
            }
        });
        e.target.parentElement.classList.toggle("show");
        e.target.setAttribute("aria-expanded", true);
        e.target.parentElement.childNodes[1].classList.toggle("show");
    };
    const handleMobileDropdown = (e)=>{
        document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("nav", {
            className: "navbar change navbar-expand-lg",
            ref: navbarRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                        className: `logo ${logoClass && logoClass}`,
                        href: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/navbar/index.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-toggle": "collapse",
                        onClick: handleMobileDropdown,
                        "data-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                            className: "icon-bar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                className: "fas fa-bars"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/navbar/index.jsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/navbar/index.jsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/navbar/index.jsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarSupportedContent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("ul", {
                            className: "navbar-nav ml-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        className: "nav-link",
                                        href: "/agena",
                                        children: "Agena"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/navbar/index.jsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/navbar/index.jsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        className: "nav-link",
                                        href: "/capella",
                                        children: "Capella"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/navbar/index.jsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/navbar/index.jsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        className: "nav-link",
                                        href: "/gredi",
                                        children: "Gredi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/navbar/index.jsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/navbar/index.jsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        className: "nav-link",
                                        href: "/rigel",
                                        children: "Rigel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/navbar/index.jsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/navbar/index.jsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                    className: "nav-item md-ml0",
                                    style: {
                                        marginLeft: "60px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        className: "nav-link",
                                        href: "/",
                                        children: "Anasayfa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/navbar/index.jsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/navbar/index.jsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        className: "nav-link",
                                        href: "/contact",
                                        children: "İletişim"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/navbar/index.jsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/navbar/index.jsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/navbar/index.jsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/navbar/index.jsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/navbar/index.jsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/navbar/index.jsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Navbar;

})()),
"[project]/src/pages/footer/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Footer = ({ classText })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("footer", {
        className: `${classText ? classText : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "item md-mb50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "title",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h5", {
                                        children: "Bize Ulaşın"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/footer/index.jsx",
                                        lineNumber: 13,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/footer/index.jsx",
                                    lineNumber: 12,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                                                    className: "icon pe-7s-map-marker"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 17,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h6", {
                                                            children: "Adres Bilgilerimiz"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 19,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("p", {
                                                            children: "Zakkum Sk Kalkan, Kaş, ANTALYA"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 20,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 18,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/footer/index.jsx",
                                            lineNumber: 16,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                                                    className: "icon pe-7s-mail"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 24,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h6", {
                                                            children: "Bize Yazın"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 26,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("p", {
                                                            children: "info@inselvillalari.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 27,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 25,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/footer/index.jsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                                                    className: "icon pe-7s-call"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 31,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h6", {
                                                            children: "Bizi Arayın"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 33,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("p", {
                                                            children: "+90 532 490 53 07"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 34,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 32,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/footer/index.jsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/footer/index.jsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/footer/index.jsx",
                            lineNumber: 11,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/footer/index.jsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/footer/index.jsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "social",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://wa.me/905324905307?text=Merhaba,%20İnsel%20Villaları%20hakkında%20bilgi%20almak%20istiyorum",
                                            rel: "noopener noreferrer",
                                            target: "_blank",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                                className: "fab fa-whatsapp"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/footer/index.jsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/footer/index.jsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://www.instagram.com/insel_villalari?igsh=aGowaGF3c2ozM2dm",
                                            rel: "noopener noreferrer",
                                            target: "_blank",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                                className: "fab fa-instagram"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/footer/index.jsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/footer/index.jsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                                className: "fab fa-google"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/footer/index.jsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/footer/index.jsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/footer/index.jsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/footer/index.jsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/footer/index.jsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/footer/index.jsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/footer/index.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/footer/index.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Footer;

})()),
"[project]/src/pages/layout/MainLayout.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-css-tags */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__commonjs__external__next$2f$head$2e$js__ = __turbopack_external_require__("next/head.js", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$navbar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/navbar/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$footer$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/footer/index.jsx [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const MainLayout = ({ children, logoClassText })=>{
    const navbarRef = __TURBOPACK__commonjs__external__react__["default"].useRef(null);
    const logoRef = __TURBOPACK__commonjs__external__react__["default"].useRef(null);
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        var navbar = navbarRef.current, logo = logoRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            // logo.setAttribute("src", "/assets/img/logo-light.png");
            } else {
                navbar.classList.remove("nav-scroll");
            // logo.setAttribute("src", "/assets/img/logo-light.png");
            }
        });
    }, [
        navbarRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__next$2f$head$2e$js__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                    rel: "stylesheet",
                    href: "/assets/css/style.css"
                }, void 0, false, {
                    fileName: "[project]/src/pages/layout/MainLayout.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/layout/MainLayout.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$navbar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                navbarRef: navbarRef,
                logoRef: logoRef,
                logoClass: logoClassText
            }, void 0, false, {
                fileName: "[project]/src/pages/layout/MainLayout.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$footer$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/layout/MainLayout.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = MainLayout;

})()),
"[project]/src/components/Page-header/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const PageHeader = ({ title, fullPath, image })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("header", {
        className: "pages-header bg-img valign parallaxie",
        style: {
            backgroundImage: `url(${!image ? "/assets/img/pg1.jpg" : image})`
        },
        "data-overlay-dark": "5",
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "row",
                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                    className: "col-lg-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "cont text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h1", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Page-header/index.jsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                className: "path",
                                children: fullPath.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react__["default"].Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                                href: item.url,
                                                className: router.pathname == item.url ? "active" : "",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Page-header/index.jsx",
                                                lineNumber: 23,
                                                columnNumber: 21
                                            }, this),
                                            index != fullPath.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                                                children: "/"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Page-header/index.jsx",
                                                lineNumber: 30,
                                                columnNumber: 53
                                            }, this) : ""
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/components/Page-header/index.jsx",
                                        lineNumber: 22,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Page-header/index.jsx",
                                lineNumber: 20,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Page-header/index.jsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Page-header/index.jsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Page-header/index.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Page-header/index.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Page-header/index.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = PageHeader;

})()),
"[project]/src/capella/nightViews/ProjectIntro.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const ProjectIntro = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("section", {
        className: "intro-section section-padding",
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "col-lg-3 col-md-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "htit",
                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h4", {
                                children: "Gece Görünümleri"
                            }, void 0, false, {
                                fileName: "[project]/src/capella/nightViews/ProjectIntro.jsx",
                                lineNumber: 11,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/capella/nightViews/ProjectIntro.jsx",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/capella/nightViews/ProjectIntro.jsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "col-lg-8 offset-lg-1 col-md-8 mb-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "text"
                        }, void 0, false, {
                            fileName: "[project]/src/capella/nightViews/ProjectIntro.jsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/capella/nightViews/ProjectIntro.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/capella/nightViews/ProjectIntro.jsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/capella/nightViews/ProjectIntro.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/capella/nightViews/ProjectIntro.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ProjectIntro;

})()),
"[project]/src/components/Project-Video/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__commonjs__external__react$2d$modal$2d$video__ = __turbopack_external_require__("react-modal-video", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const ProjectVideo = ()=>{
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        console.clear();
    }, []);
    const [isOpen, setOpen] = __TURBOPACK__commonjs__external__react__["default"].useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "video-wrapper section-padding bg-img parallaxie valign",
                style: {
                    backgroundImage: "url(/assets/img/portfolio/project1/vid.jpg)"
                },
                "data-overlay-dark": "4",
                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                    className: "full-width text-center",
                    children: [
                        typeof window !== "undefined" && /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react$2d$modal$2d$video__["default"], {
                            autoplay: true,
                            isOpen: isOpen,
                            videoId: "AzwC6umvd1s",
                            onClose: ()=>setOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Project-Video/index.jsx",
                            lineNumber: 22,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                            className: "vid",
                            onClick: (e)=>{
                                e.preventDefault();
                                setOpen(true);
                            },
                            href: "https://vimeo.com/127203262",
                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                className: "vid-butn",
                                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                                    className: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                        className: "fas fa-play"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Project-Video/index.jsx",
                                        lineNumber: 39,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Project-Video/index.jsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Project-Video/index.jsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Project-Video/index.jsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Project-Video/index.jsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Project-Video/index.jsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Project-Video/index.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Project-Video/index.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ProjectVideo;

})()),
"[project]/src/pages/capella/nightViews/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2f$MainLayout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/layout/MainLayout.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Page$2d$header$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Page-header/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$capella$2f$nightViews$2f$ProjectIntro$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/capella/nightViews/ProjectIntro.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Project$2d$Video$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Project-Video/index.jsx [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const CapellaNightViews = ()=>{
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        document.querySelector("body").classList.add("index3");
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2f$MainLayout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Page$2d$header$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "VİLLA CAPELLA",
                fullPath: [
                    {
                        id: 1,
                        name: "Anasayfa",
                        url: "/"
                    },
                    {
                        id: 2,
                        name: "İletişim",
                        url: "/contact"
                    }
                ],
                image: "/assets/img/slid/villasCoverImg/capella.jpeg"
            }, void 0, false, {
                fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$capella$2f$nightViews$2f$ProjectIntro$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("section", {
                className: "projdtal",
                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                    className: "justified-gallery",
                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                style: {
                                    cursor: "none"
                                },
                                className: "col-lg-4 col-xl-3 col-md-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("img", {
                                    alt: "",
                                    src: "/assets/img/slid/capella/nightViews/2.jpeg"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                style: {
                                    cursor: "none"
                                },
                                className: "col-lg-4 col-xl-3 col-md-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("img", {
                                    alt: "",
                                    src: "/assets/img/slid/capella/nightViews/3.jpeg"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                style: {
                                    cursor: "none"
                                },
                                className: "col-lg-4 col-xl-3 col-md-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("img", {
                                    alt: "",
                                    src: "/assets/img/slid/capella/nightViews/4.jpeg"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                style: {
                                    cursor: "none"
                                },
                                className: "col-lg-4 col-xl-3 col-md-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("img", {
                                    alt: "",
                                    src: "/assets/img/slid/capella/nightViews/5.jpeg"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("section", {
                className: "projdtal",
                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                    className: "justified-gallery",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                            style: {
                                cursor: "none"
                            },
                            className: "col-lg-4 col-xl-3 col-md-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("img", {
                                alt: "",
                                src: "/assets/img/slid/capella/nightViews/6.jpeg"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                            style: {
                                cursor: "none"
                            },
                            className: "col-lg-4 col-xl-3 col-md-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("img", {
                                alt: "",
                                src: "/assets/img/slid/capella/nightViews/7.jpeg"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/capella/nightViews/index.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/capella/nightViews/index.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CapellaNightViews;

})()),

};

//# sourceMappingURL=src_9de0cc._.js.map