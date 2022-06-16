"use strict";
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 5290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F3": () => (/* binding */ changeActiveShow),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "hE": () => (/* binding */ selectLangSlice),
/* harmony export */   "t4": () => (/* binding */ changeLang)
/* harmony export */ });
/* unused harmony exports langSlice, changeEng, changeRu */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    lang: "ru",
    activeShow: false
};
const langSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "lang",
    initialState,
    reducers: {
        changeRu: (state)=>{
            state.lang = "ru";
        },
        changeEng: (state)=>{
            state.lang = "eng";
        },
        changeLang: (state, action)=>{
            state.lang = action.payload;
        },
        changeActiveShow: (state, action)=>{
            state.activeShow = action.payload;
        }
    }
});
const { changeEng , changeRu , changeLang , changeActiveShow  } = langSlice.actions;
const selectLangSlice = (state)=>state.langSlice
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (langSlice.reducer);


/***/ })

};
;