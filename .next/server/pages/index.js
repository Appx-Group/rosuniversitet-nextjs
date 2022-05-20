"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/banner-pattern.21000252.png","height":10607,"width":8327,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAo0lEQVR42mN48eSRLgMQvHz6iIkBGTx79GAJiH7+6AEzisTpM5f+//z0xhrEBupGSM6Yvfn/6+dPToCNe/KA6fGD+4xgiUr7xt+nL1z9//Xti3IQ/9XTx2xgic1iKf8y+9b/f/vs0f/njx85Q41kY3ip6fmfwan377pth/+/e/nk9+MHD6zBOv6yaP2f5VL5nyF6zp8zp879f/3syc+nDx+EAAD2O1iHJsaa3wAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/shape_19.36067f4b.png","height":88,"width":90,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEUnQ5YnQpYnQ5YnQ5YnQ5YnQpYnQpYnQ5YnQ5YnQ5YnQ5YnQ5UnQpYnQpUnQ5YnQpYnQ5YnQ5UnQpYnQ5YnQ5YnQpYnQpUnQ5YnQ5YnQ5YnQ5YnQpYnQpUnQ5YnQ5YnQpYnQ5YnQpYnQ5YnQpZA+/FhAAAAJHRSTlMKCg4PExMUFhcaGxsbGxwcHR0dHh8fHyIjJCUlJScoKDIyMzMTnBQ5AAAARUlEQVR42gVACRZAIBD9LdSMVAiJrPe/o4fqt5SyP0GjIBZDjyI/a25VMHUts6YF0TWOtZtxyNeaR+2gCGJ4Rg05pTVcP4gqA8RnYPSVAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 632:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_features_lang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5290);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var _PattertThree_PatternThree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1544);
/* harmony import */ var _assets_images_home_banner_pattern_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8624);
/* harmony import */ var assets_data_PartnersDara_ImagesData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7886);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_6__, _PattertThree_PatternThree__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_6__, _PattertThree_PatternThree__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Banner = ({ data  })=>{
    var ref, ref1, ref2;
    const { lang  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(store_features_lang__WEBPACK_IMPORTED_MODULE_5__/* .selectLangSlice */ .hE);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.section, {
            className: "banner",
            initial: "hidden",
            viewport: {
                amount: 0.15,
                once: true
            },
            whileInView: "visible",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "banner__bg-color"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "banner__bg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "banner__bg",
                            src: (data === null || data === void 0 ? void 0 : data.image) ? data === null || data === void 0 ? void 0 : data.image : assets_data_PartnersDara_ImagesData__WEBPACK_IMPORTED_MODULE_9__/* .notImage */ .x,
                            alt: "bg banner",
                            layout: "fill"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "banner__pattern",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            unoptimized: true,
                            custom: 4,
                            variants: patternAnimation,
                            src: _assets_images_home_banner_pattern_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                            layout: "fill",
                            alt: "bg Pattern"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "banner__content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.h1, {
                                className: "banner__title",
                                custom: 1,
                                variants: textAnimation,
                                children: lang === "uz" ? data === null || data === void 0 ? void 0 : data.title_uz : lang === "ru" ? data === null || data === void 0 ? void 0 : data.title_ru : data === null || data === void 0 ? void 0 : data.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.h3, {
                                className: "banner__subtitle",
                                custom: 2,
                                variants: textAnimation,
                                children: lang === "uz" ? data === null || data === void 0 ? void 0 : data.subtitle_uz : lang === "ru" ? data === null || data === void 0 ? void 0 : data.subtitle_ru : data === null || data === void 0 ? void 0 : data.subtitle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
                                custom: 3,
                                variants: textAnimation,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: data === null || data === void 0 ? void 0 : data.link.url,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "default__btn",
                                        children: lang === "uz" ? data === null || data === void 0 ? void 0 : (ref = data.link) === null || ref === void 0 ? void 0 : ref.title_uz : lang === "ru" ? data === null || data === void 0 ? void 0 : (ref1 = data.link) === null || ref1 === void 0 ? void 0 : ref1.title_ru : data === null || data === void 0 ? void 0 : (ref2 = data.link) === null || ref2 === void 0 ? void 0 : ref2.title
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PattertThree_PatternThree__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pattrn-flags",
                        children: data === null || data === void 0 ? void 0 : data.flags.map((element, index)=>{
                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
                                custom: index,
                                variants: flagAnimation,
                                className: "flag-wrapper",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flag-cart",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flag-cart__img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                layout: "fill",
                                                src: element === null || element === void 0 ? void 0 : element.image,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "flag-cart__text",
                                            children: element === null || element === void 0 ? void 0 : element.title
                                        })
                                    ]
                                })
                            }, element === null || element === void 0 ? void 0 : element.id);
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);
const textAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: (custom)=>({
            y: 0,
            opacity: 1,
            transition: {
                delay: Number(custom * 0.2) + Number(2)
            }
        })
};
const flagAnimation = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: (custom)=>({
            opacity: 1,
            scale: 1,
            transition: {
                delay: Number(custom * 0.2) + Number(3)
            }
        })
};
const patternAnimation = {
    hidden: {
        x: "-100%",
        opacity: 0
    },
    visible: (custom)=>({
            x: 0,
            opacity: 1,
            transition: {
                delay: Number(custom * 0.4) + Number(2)
            }
        })
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_features_lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5290);
/* harmony import */ var _assets_images_flag_uz_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3538);
/* harmony import */ var _assets_images_flag_ru_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1773);
/* harmony import */ var _assets_images_flag_eng_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3146);








const LangSelectDefault = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const wrapper = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { activeShow  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_store_features_lang__WEBPACK_IMPORTED_MODULE_4__/* .selectLangSlice */ .hE);
    const { 0: activeShows , 1: setActiveshow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const setValueLang = (el)=>{
        localStorage.setItem("lang", el);
        dispatch((0,_store_features_lang__WEBPACK_IMPORTED_MODULE_4__/* .changeLang */ .t4)(el));
        wrapper.current.style.display = "none";
        localStorage.setItem("activeShow", false);
        document.body.style.overflowY = "scroll";
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (localStorage.getItem("activeShow") == null) {
            document.body.style.overflowY = "hidden";
            localStorage.setItem("activeShow", true);
            dispatch((0,_store_features_lang__WEBPACK_IMPORTED_MODULE_4__/* .changeActiveShow */ .F3)(true));
        } else {
            setActiveshow(JSON.parse(localStorage.getItem("activeShow")));
            dispatch((0,_store_features_lang__WEBPACK_IMPORTED_MODULE_4__/* .changeActiveShow */ .F3)(JSON.parse(localStorage.getItem("activeShow"))));
        }
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: activeShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: wrapper,
            className: "default-lang",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lang-wrap",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "lang-wrap__title",
                        children: "Assalomu aleykum "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "lang-wrap__title",
                        children: "Tilni tanlang"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "lang-btns",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                onClick: ()=>setValueLang("eng")
                                ,
                                value: "eng",
                                className: "lang-btns__item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lang-btns__img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: _assets_images_flag_eng_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                            alt: "flag",
                                            width: "200",
                                            height: "200"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lang-btns__title",
                                        children: "Eng"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                onClick: ()=>setValueLang("ru")
                                ,
                                value: "ru",
                                className: "lang-btns__item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lang-btns__img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: _assets_images_flag_ru_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                            alt: "flag",
                                            width: "200",
                                            height: "200"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lang-btns__title",
                                        children: "Ru"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                onClick: ()=>setValueLang("uz")
                                ,
                                value: "uz",
                                className: "lang-btns__item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lang-btns__img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: _assets_images_flag_uz_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                            alt: "flag",
                                            width: "200",
                                            height: "200"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "lang-btns__title",
                                        children: "Uz"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LangSelectDefault);


/***/ }),

/***/ 1544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_home_shape_19_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(899);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const PatternThree = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        className: "pattern-three",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 3,
            delay: 3.5
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pattern-three__top",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "pattern-three_up",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "pattern-three__img",
                        src: _assets_images_home_shape_19_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                        alt: "pattern three",
                        animate: {
                            y: [
                                0,
                                -20,
                                0
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 6,
                            ease: "easeIn"
                        }
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pattern-three__top",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "pattern-three__img",
                            src: _assets_images_home_shape_19_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                            alt: "pattern three"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pattern-three_right",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "pattern-three__img ",
                            src: _assets_images_home_shape_19_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                            alt: "pattern three",
                            animate: {
                                x: [
                                    0,
                                    20,
                                    0
                                ]
                            },
                            transition: {
                                repeat: Infinity,
                                duration: 6,
                                ease: "easeIn"
                            }
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternThree);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
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
/* harmony import */ var _components_Banner_Banner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(632);
/* harmony import */ var _components_Principles_Principles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9429);
/* harmony import */ var _components_LangSelectDefault_LangSelectDefault__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6386);
/* harmony import */ var utils_urls__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AboutUsHome_AboutUsHome__WEBPACK_IMPORTED_MODULE_2__, _components_OurPartners_OurPartners__WEBPACK_IMPORTED_MODULE_9__, _components_studentOpinion_studentOpinion__WEBPACK_IMPORTED_MODULE_10__, _components_Banner_Banner__WEBPACK_IMPORTED_MODULE_18__]);
([_components_AboutUsHome_AboutUsHome__WEBPACK_IMPORTED_MODULE_2__, _components_OurPartners_OurPartners__WEBPACK_IMPORTED_MODULE_9__, _components_studentOpinion_studentOpinion__WEBPACK_IMPORTED_MODULE_10__, _components_Banner_Banner__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const allComponents = {
    CardFirst: _components_AboutUsHome_AboutUsHome__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    CardSecond: _components_WhyChoose_WhyChoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    CardThird: _components_Universites_Universites__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
    CardFour: _components_Statistics_Statistics__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
    CardFifth: _components_Principles_Principles__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
    CardSix: _components_OurBranches_OurBranches__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    CardSeven: _components_Branch_Branch__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    picInfoFirst: _components_Russia_Russia__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
    picInfoSecond: _components_ReliablePartner_ReliablePartner__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
    Accordion: _components_Questions_Questions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    sliderFirst: _components_OurPartners_OurPartners__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    sliderSecond: _components_studentOpinion_studentOpinion__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    InfoLineSecond: _components_AboutCenter_AboutCenter__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
    InfoLineFirst: _components_FreeConsultation_FreeConsultation__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    InfoLineThird: _components_GreenSection_GreenSection__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
    timeline: _components_Cooperation_Cooperation__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
    richtext: _components_Learning_Learning__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
};
function Home({ data  }) {
    const details = data === null || data === void 0 ? void 0 : data.details;
    const bannerData = data === null || data === void 0 ? void 0 : data.banner;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "wrapper",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Rosuniversitet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "\u0422\u0432\u043E\u0439 \u0432\u044B\u0431\u043E\u0440, \u0442\u0432\u043E\u0451 \u0431\u0443\u0434\u0443\u0449\u0435\u0435"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "\u0425\u043E\u0447\u0435\u0448\u044C \u0441\u0442\u0430\u0442\u044C \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u043C \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u043B\u0443\u0447\u0448\u0438\u0445 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0445 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u043E\u0432?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "/rosuniversites.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "home",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Banner_Banner__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        data: bannerData
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "details-home",
                        children: details.map((detail)=>{
                            const Component = allComponents[detail.style];
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                data: detail
                            }, detail.id);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LangSelectDefault_LangSelectDefault__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const res = await fetch(`https://site.bronme.uz/dev/v1/home`);
    const { data  } = await res.json();
    return {
        props: {
            data: data !== null && data !== void 0 ? data : null
        }
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
var __webpack_exports__ = __webpack_require__.X(0, [686,675,676,664,290,118,5,412,955], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();