"use strict";
exports.id = 5;
exports.ids = [5];
exports.modules = {

/***/ 7886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ notImage)
});

;// CONCATENATED MODULE: ./assets/images/NotImg/not-img.png
/* harmony default export */ const not_img = ({"src":"/_next/static/media/not-img.9bd3b734.png","height":499,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmklEQVR42mOAAR59GyYQ5tS1YubVt2FmIAkoW7mIypg6zpMycVgkYWy/Q8rUYa22vacAXIGcuZOKtKnDKaCCR+LG9v8lTRz+qdu4S8EVKFm6yEia2H+RNXMsVbBwtgXiIqCYFrICCXlzp0kKli4BcubOgYoWzsUatu7iYEkBfRtGmEI1G3cODVsPjtCUHLAY0FpGJJcaMWLzAACzER7+wAdN4QAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./assets/data/PartnersDara/ImagesData.jsx
// Not Images

const notImage = not_img;


/***/ }),

/***/ 869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ SectionTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SectionTitle = ({ title , subTitle , titleBlue , theme ="white" , position ="center" , textPosition ="" , sircleColor ="green"  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `section__content ${position}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: `section__sub-title ${theme}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `section__sub-title_sircle ${sircleColor}`
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: `section__title ${theme} ${textPosition}`,
                children: [
                    subTitle,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "section__title_blue",
                        children: [
                            " ",
                            titleBlue
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;