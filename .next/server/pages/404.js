"use strict";
(() => {
var exports = {};
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 8306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _404)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./store/features/lang.js
var features_lang = __webpack_require__(5290);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./assets/images/notFound/not-found.png
/* harmony default export */ const not_found = ({"src":"/_next/static/media/not-found.3b5ed40d.png","height":359,"width":407,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAoUlEQVR42mPABi69f8+MInDuxk2mj58/e/7+8cPi////YMnDr14ywRX8//lT+fuXr//fvHv3//izZ0/vvXnjDRK/+vo1xKS5Fy/qXnr8+P/ya9d+Jl2+/P/k8+dv////z4NsC++Nx4+3Xn727H8qUMGep0/fARUIgGXmX7nCCFN15smTkNrr1ycsf/TIGCz34AETWOLQjZtARahg9r17YEkAgrJaFIHtRVgAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./pages/404.js








const NotFound = ()=>{
    const { lang  } = (0,external_react_redux_.useSelector)(features_lang/* selectLangSlice */.hE);
    const router = (0,router_namespaceObject.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const pushHome = ()=>{
            setTimeout(()=>{
                // navigate('/')
                router.push("/");
            }, 10 * 1000);
        };
        pushHome();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    ;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "not-found",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "not-found__row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "not-found__img",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: not_found,
                            alt: "Not found"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "not-found__content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "not-found__title",
                            children: lang === "uz" ? "Kechirasiz!" : lang === "ru" ? "\u043F\u0440\u043E\u0448\u0443 \u043F\u0440\u043E\u0449\u0435\u043D\u0438\u044F" : "Excuse me"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: "not-found__title",
                            children: [
                                " ",
                                lang === "uz" ? "Bunday sahfa topilmadi" : lang === "ru" ? "\u0422\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E" : "No such page found"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "not-found__desc",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "not-found__link",
                                children: lang === "uz" ? "Bosh sahifa" : lang === "ru" ? "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" : "Home"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const _404 = (NotFound);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [686,675,676,664,290], () => (__webpack_exec__(8306)));
module.exports = __webpack_exports__;

})();