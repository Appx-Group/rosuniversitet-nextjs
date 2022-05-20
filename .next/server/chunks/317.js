"use strict";
exports.id = 317;
exports.ids = [317];
exports.modules = {

/***/ 7317:
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(869);
/* harmony import */ var store_features_lang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5290);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_data_PartnersDara_ImagesData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7886);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5452);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_icons_Icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5118);













const Contacts = ({ data  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6;
    const { lang  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(store_features_lang__WEBPACK_IMPORTED_MODULE_6__/* .selectLangSlice */ .hE);
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: emailInput , 1: setEmailInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: number , 1: setNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("+998");
    const { 0: text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: btnShow , 1: setBtnShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onSubmit = (e)=>{
        e.preventDefault();
        if (name.length > 0 && emailInput.length > 0 && text.length > 0 && number.length >= 12) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.toast.promise(axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://site.bronme.uz/dev/v1/message/create", {
                type: "message",
                name: name,
                phone: number,
                email: emailInput,
                text: text
            }).then((res)=>{
                console.log(res);
                setName("");
                setEmailInput("");
                setText("");
                setNumber("+998");
                setBtnShow(false);
            }), {
                loading: lang === "uz" ? "Yuklanmoqda..." : lang === "ru" ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : "Loading...",
                success: lang === "uz" ? "Habar muvaffaqiyatli jo'natildi" : lang === "ru" ? "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E" : "Message successfully sent",
                error: (err)=>console.log(error)
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "contacts",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.Toaster, {
                    toastOptions: {
                        className: "",
                        style: {
                            zIndex: "44",
                            top: "200px"
                        }
                    },
                    containerStyle: {
                        top: 20
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "contacts-up",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "contacts-up__left",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__/* .SectionTitle */ .N, {
                                    title: lang === "uz" ? data === null || data === void 0 ? void 0 : data.title_uz : lang === "ru" ? data === null || data === void 0 ? void 0 : data.title_ru : data === null || data === void 0 ? void 0 : data.title,
                                    titleBlue: lang === "uz" ? "" : lang === "" ? "" : "",
                                    subTitle: lang === "uz" ? data === null || data === void 0 ? void 0 : data.subtitle_uz : lang === "ru" ? data === null || data === void 0 ? void 0 : data.subtitle_ru : data === null || data === void 0 ? void 0 : data.subtitle,
                                    theme: "white",
                                    position: "left",
                                    sircleColor: "green"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "contacts-up__desc",
                                    children: lang === "uz" ? data === null || data === void 0 ? void 0 : data.description_uz : lang === "ru" ? data === null || data === void 0 ? void 0 : data.description_ru : data === null || data === void 0 ? void 0 : data.description
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "contacts-up__detail",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "contacts-up__detail-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "contacts-up__detail-left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_icons_Icons__WEBPACK_IMPORTED_MODULE_11__/* .LocationSvg */ .iO, {
                                                        className: "contacts-up__detail-icon"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "contacts-up__detail-right",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "contacts-up__detail-title",
                                                            children: lang === "uz" ? "Manzil" : lang === "ru" ? "\u0410\u0434\u0440\u0435\u0441" : "Address"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "contacts-up__detail-desc",
                                                            children: lang === "uz" ? data === null || data === void 0 ? void 0 : data.address_uz : lang === "ru" ? data === null || data === void 0 ? void 0 : data.address_ru : data === null || data === void 0 ? void 0 : data.address
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "contacts-up__detail-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "contacts-up__detail-left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_icons_Icons__WEBPACK_IMPORTED_MODULE_11__/* .TelegramSvg */ .SV, {
                                                        className: "contacts-up__detail-icon"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "contacts-up__detail-right",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "contacts-up__detail-title",
                                                            children: lang === "uz" ? "Pochta" : lang === "ru" ? "\u041F\u043E\u0447\u0442\u0430" : "Mail"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "contacts-up__detail-desc",
                                                            children: data === null || data === void 0 ? void 0 : data.email
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "contacts-up__detail-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "contacts-up__detail-left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_icons_Icons__WEBPACK_IMPORTED_MODULE_11__/* .CallSvg */ .j6, {
                                                        className: "contacts-up__detail-icon"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "contacts-up__detail-right",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "contacts-up__detail-title",
                                                            children: lang === "uz" ? "Kontaktlar" : lang === "ru" ? "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" : "Contacts"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "contacts-up__detail-desc",
                                                            children: [
                                                                data === null || data === void 0 ? void 0 : (ref = data.phone) === null || ref === void 0 ? void 0 : ref.ru_title,
                                                                " ",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        data === null || data === void 0 ? void 0 : (ref1 = data.phone) === null || ref1 === void 0 ? void 0 : ref1.ru_number_first,
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                        " ",
                                                                        data === null || data === void 0 ? void 0 : (ref2 = data.phone) === null || ref2 === void 0 ? void 0 : ref2.ru_number_second
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "contacts-up__detail-desc",
                                                            children: [
                                                                data === null || data === void 0 ? void 0 : (ref3 = data.phone) === null || ref3 === void 0 ? void 0 : ref3.uz_title,
                                                                " ",
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        data === null || data === void 0 ? void 0 : (ref4 = data.phone) === null || ref4 === void 0 ? void 0 : ref4.uz_number_first,
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                        " ",
                                                                        data === null || data === void 0 ? void 0 : (ref5 = data.phone) === null || ref5 === void 0 ? void 0 : ref5.uz_number_second
                                                                    ]
                                                                }),
                                                                data === null || data === void 0 ? void 0 : (ref6 = data.phone) === null || ref6 === void 0 ? void 0 : ref6.uz_number
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "contacts-up__right",
                            dangerouslySetInnerHTML: {
                                __html: data === null || data === void 0 ? void 0 : data.map
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "contacts-down",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "contacts-down__left",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "contacts-down__img",
                                src: (data === null || data === void 0 ? void 0 : data.image) ? data === null || data === void 0 ? void 0 : data.image : assets_data_PartnersDara_ImagesData__WEBPACK_IMPORTED_MODULE_8__/* .notImage */ .x,
                                alt: "cotacts img",
                                width: 550,
                                height: 500
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "contacts-down__right",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__/* .SectionTitle */ .N, {
                                    title: lang === "uz" ? data === null || data === void 0 ? void 0 : data.form_title_uz : lang === "ru" ? data === null || data === void 0 ? void 0 : data.form_title_ru : data === null || data === void 0 ? void 0 : data.form_title,
                                    titleBlue: "",
                                    subTitle: lang === "uz" ? data === null || data === void 0 ? void 0 : data.form_subtitle_uz : lang === "ru" ? data === null || data === void 0 ? void 0 : data.form_subtitle_ru : data === null || data === void 0 ? void 0 : data.form_subtitle,
                                    theme: "white",
                                    position: "left",
                                    textPosition: "left",
                                    sircleColor: "green"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "contacts-up__desc",
                                    children: lang === "uz" ? data === null || data === void 0 ? void 0 : data.form_description_uz : lang === "ru" ? data === null || data === void 0 ? void 0 : data.form_description_ru : data === null || data === void 0 ? void 0 : data.form_description
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    className: "contacts-down__form",
                                    onSubmit: onSubmit,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "contacts-down__item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    required: true,
                                                    className: clsx__WEBPACK_IMPORTED_MODULE_10___default()("contacts-down__input ", btnShow && name.length > 0 && "border-green", btnShow && name.length === 0 && "border-red "),
                                                    type: "text",
                                                    onChange: (e)=>setName(e.target.value)
                                                    ,
                                                    value: name,
                                                    placeholder: lang === "uz" ? "Ismingiz" : lang === "ru" ? "\u0418\u043C\u044F" : "Name"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_icons_Icons__WEBPACK_IMPORTED_MODULE_11__/* .UserSvg */ .vw, {
                                                    className: "contacts-down__icon"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "contacts-down__item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_phone_input_2__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                containerClass: clsx__WEBPACK_IMPORTED_MODULE_10___default()(btnShow && number.length >= 12 && "border-green", btnShow && number.length < 12 && "border-red "),
                                                country: "Uzbekistan",
                                                value: number,
                                                inputClass: `contacts-down__input `,
                                                placeholder: lang === "uz" ? "Telefon raqami" : lang === "ru" ? "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430" : "Phone number",
                                                onChange: (phone)=>setNumber(phone)
                                                ,
                                                inputStyle: {
                                                    border: "1px solid #d6d5d7",
                                                    borderRadius: "8px",
                                                    height: "50px",
                                                    width: "100%",
                                                    margin: " 0",
                                                    fontSize: "16px",
                                                    letterSpacing: "1.3px"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "contacts-down__item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    required: true,
                                                    className: clsx__WEBPACK_IMPORTED_MODULE_10___default()("contacts-down__input ", btnShow && emailInput.length > 0 && "border-green", btnShow && emailInput.length === 0 && "border-red "),
                                                    type: "email",
                                                    value: emailInput,
                                                    onChange: (e)=>setEmailInput(e.target.value)
                                                    ,
                                                    placeholder: lang === "uz" ? "Elektron pochtangiz" : lang === "ru" ? "\u041F\u043E\u0447\u0442\u0430" : "Email"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_icons_Icons__WEBPACK_IMPORTED_MODULE_11__/* .EmailSvg */ .$r, {
                                                    className: "contacts-down__icon"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "contacts-down__item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    required: true,
                                                    id: "story",
                                                    name: "story",
                                                    onChange: (e)=>setText(e.target.value)
                                                    ,
                                                    value: text,
                                                    className: clsx__WEBPACK_IMPORTED_MODULE_10___default()("contacts-down__input ", btnShow && text.length > 0 && "border-green", btnShow && text.length === 0 && "border-red "),
                                                    rows: "5",
                                                    cols: "33",
                                                    placeholder: lang === "uz" ? "Xabar..." : lang === "ru" ? "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435..." : "Message..."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_icons_Icons__WEBPACK_IMPORTED_MODULE_11__/* .EditSvg */ .V3, {
                                                    className: "contacts-down__icon contacts-down__icon_textarea"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: (e)=>setBtnShow(true)
                                            ,
                                            className: "contacts-down__btn",
                                            children: lang === "uz" ? "Bog'lanish" : lang === "ru" ? "\u0421\u0412\u042F\u0417\u0410\u0422\u042C\u0421\u042F" : "Connect"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contacts);


/***/ })

};
;