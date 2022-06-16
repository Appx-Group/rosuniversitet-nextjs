"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 2481:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pages),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AboutUsHome_AboutUsHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2765);
/* harmony import */ var _components_Learning_Learning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4857);
/* harmony import */ var _components_WhyChoose_WhyChoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2299);
/* harmony import */ var _components_Questions_Questions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6271);
/* harmony import */ var _components_Branch_Branch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7179);
/* harmony import */ var _components_OurBranches_OurBranches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2968);
/* harmony import */ var _components_FreeConsultation_FreeConsultation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9018);
/* harmony import */ var _components_OurPartners_OurPartners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6644);
/* harmony import */ var _components_studentOpinion_studentOpinion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1687);
/* harmony import */ var _components_AboutCenter_AboutCenter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4077);
/* harmony import */ var _components_Statistics_Statistics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2599);
/* harmony import */ var _components_GreenSection_GreenSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(235);
/* harmony import */ var _components_Russia_Russia__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6614);
/* harmony import */ var _components_ReliablePartner_ReliablePartner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1695);
/* harmony import */ var _components_Cooperation_Cooperation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4993);
/* harmony import */ var _components_Universites_Universites__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2354);
/* harmony import */ var _components_Principles_Principles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9429);
/* harmony import */ var _components_Contacts_Contacts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7317);
/* harmony import */ var utils_urls__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8137);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3157);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AboutUsHome_AboutUsHome__WEBPACK_IMPORTED_MODULE_2__, _components_OurPartners_OurPartners__WEBPACK_IMPORTED_MODULE_9__, _components_studentOpinion_studentOpinion__WEBPACK_IMPORTED_MODULE_10__]);
([_components_AboutUsHome_AboutUsHome__WEBPACK_IMPORTED_MODULE_2__, _components_OurPartners_OurPartners__WEBPACK_IMPORTED_MODULE_9__, _components_studentOpinion_studentOpinion__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const allComponents = {
    CardFirst: _components_AboutUsHome_AboutUsHome__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    CardSecond: _components_WhyChoose_WhyChoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    CardThird: _components_Universites_Universites__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
    CardFour: _components_Statistics_Statistics__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
    CardFifth: _components_Principles_Principles__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
    CardSix: _components_OurBranches_OurBranches__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    CardSeven: _components_Branch_Branch__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    picInfoFirst: _components_ReliablePartner_ReliablePartner__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
    picInfoSecond: _components_Russia_Russia__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
    Accordion: _components_Questions_Questions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    sliderFirst: _components_OurPartners_OurPartners__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    sliderSecond: _components_studentOpinion_studentOpinion__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    InfoLineSecond: _components_AboutCenter_AboutCenter__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
    InfoLineFirst: _components_FreeConsultation_FreeConsultation__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    InfoLineThird: _components_GreenSection_GreenSection__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
    timeline: _components_Cooperation_Cooperation__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
    richtext: _components_Learning_Learning__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
};
function Pages({ data , slug , statusCode  }) {
    if (statusCode) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error__WEBPACK_IMPORTED_MODULE_21__["default"], {
        statusCode: statusCode
    });
    const details = data === null || data === void 0 ? void 0 : data.details;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "wrapper",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: data.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "\u0422\u0432\u043E\u0439 \u0432\u044B\u0431\u043E\u0440, \u0442\u0432\u043E\u0451 \u0431\u0443\u0434\u0443\u0449\u0435\u0435"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "/rosuniversites.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "\u0425\u043E\u0447\u0435\u0448\u044C \u0441\u0442\u0430\u0442\u044C \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u043C \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u043B\u0443\u0447\u0448\u0438\u0445 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0445 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u043E\u0432?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "details",
                children: details.map((detail)=>{
                    const Component = allComponents[detail.style];
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        data: detail,
                        slug: slug
                    }, detail.id);
                })
            })
        ]
    });
};
const getStaticProps = async (context)=>{
    const slug = context.params.slug;
    if (slug === "submit-an-application") {
        return;
    }
    const res = await fetch(`https://api.rosuniversitet.com/dev/v1/menu/slug/${slug}`);
    const statusCode = res.status > 200 ? res.status : false;
    const { data  } = await res.json();
    if (!data) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            data: data,
            slug: slug,
            statusCode
        },
        revalidate: 10
    };
};
const getStaticPaths = async ()=>{
    const res = await fetch("https://api.rosuniversitet.com/dev/v1/menu");
    console.log(res);
    const { data  } = await res.json();
    function someCostom(array, cb) {
        for(let i = 0; i < array.length; i++){
            if (cb(array[i], i, array)) return true;
        }
        return false;
    }
    const some = (arr, element)=>{
        return someCostom(arr, (item)=>item.slug === element
        );
    // return arr.some(item => { item.slug == element  })
    };
    const sortSlug = (arr)=>{
        const newArray = [];
        for(let i = 0; i < arr.length; i++){
            const element = arr[i];
            if (!some(newArray, element.slug)) {
                newArray.push({
                    slug: element.slug
                });
            }
            if (element.children) {
                for(let i = 0; i < element.children.length; i++){
                    if (!some(newArray, element.children[i].slug)) {
                        newArray.push({
                            slug: element.children[i].slug
                        });
                    }
                }
            }
        }
        return newArray.filter((item)=>item.slug !== "/" && item.slug !== "submit-an-application"
        );
    };
    const allPath = sortSlug(data);
    const paths = allPath.map((curElem)=>{
        return {
            params: {
                slug: curElem.slug.toString()
            }
        };
    });
    return {
        paths,
        fallback: false
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 5452:
/***/ ((module) => {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 8938:
/***/ ((module) => {

module.exports = require("react-vertical-timeline-component");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,290,118,5,863,317], () => (__webpack_exec__(2481)));
module.exports = __webpack_exports__;

})();