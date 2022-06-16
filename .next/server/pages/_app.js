"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,820];
exports.modules = {

/***/ 3945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./store/features/lang.js
var features_lang = __webpack_require__(5290);
;// CONCATENATED MODULE: ./store/index.js


const store = (0,toolkit_.configureStore)({
    reducer: {
        langSlice: features_lang/* default */.ZP
    }
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./hooks/usePathName.js

function usePathName() {
    const { 0: windowPathName , 1: setWindowPathName  } = (0,external_react_.useState)({
        path: "/"
    });
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    return windowPathName;
}
/* harmony default export */ const hooks_usePathName = (usePathName);

;// CONCATENATED MODULE: ./components/Header/Menu/Menu.jsx






const Menu = ({ menuData  })=>{
    const url = hooks_usePathName();
    const { lang  } = (0,external_react_redux_.useSelector)(features_lang/* selectLangSlice */.hE);
    const activeParent = (0,external_react_.useRef)(null);
    const activeSircle = (0,external_react_.useRef)(null);
    const avtiveNav = (0,external_react_.useRef)(null);
    const activeSircleChange = (el)=>{
        if (el !== null) {
            const positionInfoParent = activeParent.current.getBoundingClientRect();
            const positionInfoChild = el.getBoundingClientRect();
            const parentX = positionInfoParent.x;
            const childX = positionInfoChild.x;
            const parentZero = childX - parentX;
            const widthChild = Math.floor(positionInfoChild.width / 2);
            const positionX = Math.floor(parentZero + widthChild);
            activeSircle.current.style.transform = `translateX(${positionX}px)`;
        }
    };
    (0,external_react_.useEffect)(()=>{
        activeSircleChange(avtiveNav.current);
    }, [
        url.path
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        ref: activeParent,
        className: "nav__menu",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: activeSircle,
                className: "sircle-active"
            }),
            menuData === null || menuData === void 0 ? void 0 : menuData.map((item1)=>{
                var ref, ref1;
                /*#__PURE__*/ return (0,jsx_runtime_.jsxs)("li", {
                    ref: `/${item1 === null || item1 === void 0 ? void 0 : item1.slug}` === url.path ? avtiveNav : null,
                    className: `nav__menu-item ${`/${item1 === null || item1 === void 0 ? void 0 : item1.slug}` === url.path ? "active" : ""}`,
                    onMouseEnter: (el)=>{
                        return activeSircleChange(el === null || el === void 0 ? void 0 : el.target);
                    },
                    onMouseLeave: ()=>activeSircleChange(document.querySelector(".nav__menu-item.active"))
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/${(item1 === null || item1 === void 0 ? void 0 : item1.slug) === "/" ? "" : item1 === null || item1 === void 0 ? void 0 : item1.slug}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "nav__menu-link",
                                children: [
                                    lang === "uz" ? item1 === null || item1 === void 0 ? void 0 : item1.title_uz : lang === "ru" ? item1 === null || item1 === void 0 ? void 0 : item1.title_ru : item1 === null || item1 === void 0 ? void 0 : item1.title,
                                    (item1 === null || item1 === void 0 ? void 0 : (ref = item1.children) === null || ref === void 0 ? void 0 : ref.length) > 0 && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                                        })
                                    })
                                ]
                            })
                        }),
                        (item1 === null || item1 === void 0 ? void 0 : (ref1 = item1.children) === null || ref1 === void 0 ? void 0 : ref1.length) > 0 && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "sub-menu",
                            children: item1 === null || item1 === void 0 ? void 0 : item1.children.map((item)=>{
                                /*#__PURE__*/ return jsx_runtime_.jsx("li", {
                                    className: "sub-menu__item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/${(item === null || item === void 0 ? void 0 : item.slug) === "/" ? "" : item === null || item === void 0 ? void 0 : item.slug}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "sub-menu__link",
                                            children: lang === "uz" ? item === null || item === void 0 ? void 0 : item.title_uz : lang === "ru" ? item === null || item === void 0 ? void 0 : item.title_ru : item === null || item === void 0 ? void 0 : item.title
                                        })
                                    })
                                }, item === null || item === void 0 ? void 0 : item.id);
                            })
                        })
                    ]
                }, item1 === null || item1 === void 0 ? void 0 : item1.id);
            })
        ]
    });
};
/* harmony default export */ const Menu_Menu = (Menu);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./hooks/useOnClickOutside.js

const useOnClickOutside = (ref, handler)=>{
    (0,external_react_.useEffect)(()=>{
        const listener = (event)=>{
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener, {
            capture: true
        });
        document.addEventListener("touchstart", listener, {
            capture: true
        });
        return ()=>{
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [
        ref,
        handler
    ]);
};

// EXTERNAL MODULE: ./assets/images/flag/uz.png
var uz = __webpack_require__(3538);
// EXTERNAL MODULE: ./assets/images/flag/ru.png
var ru = __webpack_require__(1773);
// EXTERNAL MODULE: ./assets/images/flag/eng.png
var eng = __webpack_require__(3146);
;// CONCATENATED MODULE: ./components/LangSelect/LangSelect.jsx










const LangSelect = ()=>{
    var ref, ref1, ref2;
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { lang  } = (0,external_react_redux_.useSelector)(features_lang/* selectLangSlice */.hE);
    const { 0: activeFlag , 1: setActiveFlag  } = (0,external_react_.useState)("eng");
    const parentBox = (0,external_react_.useRef)(null);
    const select = (0,external_react_.useRef)(null);
    const menu = (0,external_react_.useRef)(null);
    const flagUz = (0,external_react_.useRef)(null);
    const flagRu = (0,external_react_.useRef)(null);
    const flagEng = (0,external_react_.useRef)(null);
    const LangData = {
        eng: {
            id: 1,
            title: "Eng",
            img: eng/* default */.Z
        },
        ru: {
            id: 1,
            title: "Ru",
            img: ru/* default */.Z
        },
        uz: {
            id: 1,
            title: "uz",
            img: uz/* default */.Z
        }
    };
    const closeMenu = ()=>{
        menu.current.style.maxHeight = "0px";
        select.current.classList.remove("show");
        window.removeEventListener("click", addActive);
    };
    const addActive = ()=>{
        menu.current.style.maxHeight = menu.current.scrollHeight + "px";
        select.current.classList.add("show");
    };
    const handleClick = ()=>{
        if (select.current.classList.contains("show")) {
            closeMenu();
            window.removeEventListener("click", addActive);
        } else {
            addActive();
            window.removeEventListener("click", closeMenu);
        }
    };
    const setValueLang = (el)=>{
        localStorage.setItem("langShow", "noShow");
        localStorage.setItem("lang", el.current.getAttribute("value"));
        setActiveFlag(el.current.getAttribute("value"));
        dispatch((0,features_lang/* changeLang */.t4)(el.current.getAttribute("value")));
        closeMenu();
    };
    useOnClickOutside(parentBox, closeMenu);
    (0,external_react_.useEffect)(()=>{
        dispatch((0,features_lang/* changeLang */.t4)(localStorage.getItem("lang")));
        setActiveFlag(lang !== null && lang !== void 0 ? lang : "eng");
    }, [
        lang,
        dispatch
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: parentBox,
        className: "lang-select",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: select,
                onClick: handleClick,
                className: "lang-select__main",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "lang-select__img",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: LangData[activeFlag].img,
                            width: "100",
                            height: "100",
                            alt: "flag"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "lang-select__title",
                        children: LangData[activeFlag].title
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                ref: menu,
                className: "lang-select__menu",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        ref: flagEng,
                        onClick: ()=>setValueLang(flagEng)
                        ,
                        value: "eng",
                        className: `lang-select__item ${(flagEng === null || flagEng === void 0 ? void 0 : (ref = flagEng.current) === null || ref === void 0 ? void 0 : ref.getAttribute("value")) === lang ? "lang-select__item_active" : ""} `,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "lang-select__img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: eng/* default */.Z,
                                    width: "100",
                                    height: "100",
                                    alt: "flag"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "lang-select__title",
                                children: "Eng"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        ref: flagRu,
                        onClick: ()=>setValueLang(flagRu)
                        ,
                        value: "ru",
                        className: `lang-select__item ${(flagRu === null || flagRu === void 0 ? void 0 : (ref1 = flagRu.current) === null || ref1 === void 0 ? void 0 : ref1.getAttribute("value")) === lang ? "lang-select__item_active" : ""} `,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "lang-select__img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: ru/* default */.Z,
                                    width: "100",
                                    height: "100",
                                    alt: "flag"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "lang-select__title",
                                children: "\u0420\u0443"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        ref: flagUz,
                        onClick: ()=>setValueLang(flagUz)
                        ,
                        value: "uz",
                        className: `lang-select__item ${(flagUz === null || flagUz === void 0 ? void 0 : (ref2 = flagUz.current) === null || ref2 === void 0 ? void 0 : ref2.getAttribute("value")) === lang ? "lang-select__item_active" : ""} `,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "lang-select__img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: uz/* default */.Z,
                                    width: "100",
                                    height: "100",
                                    alt: "flag"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "lang-select__title",
                                children: "Uz"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const LangSelect_LangSelect = (LangSelect);

;// CONCATENATED MODULE: ./components/Header/Menu/SubMenuMobile.jsx






const SubMenuMobile = ({ id: id1 , title: title1 , title_uz: title_uz1 , title_ru: title_ru1 , slug: slug1 , subMenu , changeBurgerFn ,  })=>{
    const url = hooks_usePathName();
    const { lang  } = (0,external_react_redux_.useSelector)(features_lang/* selectLangSlice */.hE);
    const { 0: openAcc , 1: setOpenAcc  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "mobil-menu__main-item",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mobil-menu__main-item-top",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        onClick: changeBurgerFn,
                        href: `/${slug1 === "/" ? "" : slug1}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: `mobil-menu__main-link  ${`/${slug1}` === url.path ? "active" : ""}`,
                            children: lang === "uz" ? title_uz1 : lang === "ru" ? title_ru1 : title1
                        })
                    }),
                    (subMenu === null || subMenu === void 0 ? void 0 : subMenu.length) > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>setOpenAcc(!openAcc)
                        ,
                        className: `mobil-menu__main-acc-btn ${openAcc ? "active" : ""}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                            })
                        })
                    })
                ]
            }),
            (subMenu === null || subMenu === void 0 ? void 0 : subMenu.length) > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `sub-menu-mobil ${openAcc ? "active" : ""}`,
                children: subMenu === null || subMenu === void 0 ? void 0 : subMenu.map(({ title , title_ru , title_uz , slug , id  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/${slug === "/" ? "" : slug}`,
                        onClick: changeBurgerFn,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: `sub-menu-mobil__link  ${`/${slug}` === url.path ? "active" : ""}`,
                            children: lang === "uz" ? title_uz : lang === "ru" ? title_ru : title
                        })
                    }, id)
                )
            })
        ]
    }, id1);
};
/* harmony default export */ const Menu_SubMenuMobile = (SubMenuMobile);

;// CONCATENATED MODULE: ./components/Header/Menu/NavMenuMobile.jsx



const NavMenuMobile = ({ menuData , setBurgerActive , burgerActive , changeBurger , status , setStatus ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `menu-mobil-wrapper ${burgerActive === "active" ? "active" : ""}`,
                onClick: ()=>changeBurger()
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `mobil-menu ${burgerActive === "active" ? "active" : ""}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mobil-menu__top",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "nav__logo-mobi",
                                children: "Rosuniversitet"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                onClick: ()=>changeBurger()
                                ,
                                className: "nav__burger nav-burger__mobi",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: status
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: status
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: status
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "mobil-menu__main",
                        children: menuData === null || menuData === void 0 ? void 0 : menuData.map(({ id , title , title_ru , title_uz , slug , children  })=>/*#__PURE__*/ jsx_runtime_.jsx(Menu_SubMenuMobile, {
                                id: id,
                                title_ru: title_ru,
                                title: title,
                                title_uz: title_uz,
                                slug: slug,
                                subMenu: children,
                                changeBurgerFn: changeBurger
                            }, id)
                        )
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Menu_NavMenuMobile = (NavMenuMobile);

;// CONCATENATED MODULE: ./components/Header/Header.jsx






const Header = ({ menuData  })=>{
    const { 0: status , 1: setStatus  } = (0,external_react_.useState)("close");
    const { 0: burgerActive , 1: setBurgerActive  } = (0,external_react_.useState)("");
    const changeBurger = ()=>{
        setStatus(status === "open" ? "close" : "open");
        setBurgerActive(burgerActive === "active" ? "noActive" : "active");
        const body = document.body;
        status === "open" ? body.classList.remove("hidden") : body.classList.add("hidden");
    };
    (0,external_react_.useEffect)(()=>{
        const body = document.body;
        let lastScroll = 0;
        window.addEventListener("scroll", ()=>{
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                body.classList.remove("scroll-up");
                return;
            }
            if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
            }
            lastScroll = currentScroll;
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "nav",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>changeBurger()
                            ,
                            className: "nav__burger",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: status
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: status
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: status
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "nav__logo",
                                children: "Rosuniversitet"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Menu_Menu, {
                            menuData: menuData
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LangSelect_LangSelect, {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Menu_NavMenuMobile, {
                status: status,
                setStatus: setStatus,
                setBurgerActive: setBurgerActive,
                burgerActive: burgerActive,
                changeBurger: changeBurger,
                menuData: menuData
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./components/Loading/Loading.jsx


const Loading = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "wrap-loading",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "loading",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "loading__square"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "loading__square"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "loading__square"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "loading__square"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "loading__square"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "loading__square"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "loading__square"
                })
            ]
        })
    });
};
/* harmony default export */ const Loading_Loading = ((/* unused pure expression or super */ null && (Loading)));

// EXTERNAL MODULE: ./assets/icons/Icons.jsx
var Icons = __webpack_require__(5118);
;// CONCATENATED MODULE: ./components/Footer/Footer.jsx






const Footer = ({ footerData  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12;
    const nowYear = new Date().getFullYear();
    const { lang  } = (0,external_react_redux_.useSelector)(features_lang/* selectLangSlice */.hE);
    if (footerData === null) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "api-error"
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-top",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer__item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "footer__logo",
                                    children: lang === "uz" ? footerData === null || footerData === void 0 ? void 0 : footerData.title_uz : lang === "ru" ? footerData === null || footerData === void 0 ? void 0 : footerData.title_ru : footerData === null || footerData === void 0 ? void 0 : footerData.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "footer__desc",
                                    children: lang === "uz" ? footerData === null || footerData === void 0 ? void 0 : footerData.subtitle_uz : lang === "ru" ? footerData === null || footerData === void 0 ? void 0 : footerData.subtitle_ru : footerData === null || footerData === void 0 ? void 0 : footerData.subtitle
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer__social",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "footer__social-item",
                                            href: footerData === null || footerData === void 0 ? void 0 : (ref = footerData.social) === null || ref === void 0 ? void 0 : ref.instagram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* InstagramSvg */.K2, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "footer__social-item",
                                            href: footerData === null || footerData === void 0 ? void 0 : (ref1 = footerData.social) === null || ref1 === void 0 ? void 0 : ref1.telegram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* TelegramSvg */.SV, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "footer__social-item",
                                            href: `mailto:${footerData === null || footerData === void 0 ? void 0 : (ref2 = footerData.social) === null || ref2 === void 0 ? void 0 : ref2.email}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* EmailSvg */.$r, {})
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer__item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "footer__title",
                                    children: lang === "uz" ? "ALOQA" : lang === "ru" ? "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B" : "CONTACTS"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer__item-info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Icons/* LocationSvg */.iO, {
                                            className: "footer__item-info-icon"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "footer__item-info-text",
                                            children: lang === "uz" ? footerData === null || footerData === void 0 ? void 0 : (ref3 = footerData.contact) === null || ref3 === void 0 ? void 0 : ref3.address_uz : lang === "ru" ? footerData === null || footerData === void 0 ? void 0 : (ref4 = footerData.contact) === null || ref4 === void 0 ? void 0 : ref4.address_ru : footerData === null || footerData === void 0 ? void 0 : (ref5 = footerData.contact) === null || ref5 === void 0 ? void 0 : ref5.address
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer__item-info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Icons/* TelegramSvg2 */.JG, {
                                            className: "footer__item-info-icon"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "footer__item-info-text",
                                            children: footerData === null || footerData === void 0 ? void 0 : (ref6 = footerData.social) === null || ref6 === void 0 ? void 0 : ref6.email
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer__item-info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Icons/* CallSvg */.j6, {
                                            className: "footer__item-info-icon"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer__item-info-text",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                    children: [
                                                        footerData === null || footerData === void 0 ? void 0 : (ref7 = footerData.contact) === null || ref7 === void 0 ? void 0 : ref7.phone_title_ru,
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            children: [
                                                                footerData === null || footerData === void 0 ? void 0 : (ref8 = footerData.contact) === null || ref8 === void 0 ? void 0 : ref8.phone_ru_first,
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                footerData === null || footerData === void 0 ? void 0 : (ref9 = footerData.contact) === null || ref9 === void 0 ? void 0 : ref9.phone_ru_second
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                    children: [
                                                        footerData === null || footerData === void 0 ? void 0 : (ref10 = footerData.contact) === null || ref10 === void 0 ? void 0 : ref10.phone_title_uz,
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            children: [
                                                                footerData === null || footerData === void 0 ? void 0 : (ref11 = footerData.contact) === null || ref11 === void 0 ? void 0 : ref11.phone_uz_first,
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                footerData === null || footerData === void 0 ? void 0 : (ref12 = footerData.contact) === null || ref12 === void 0 ? void 0 : ref12.phone_uz_second
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer__item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "footer__title",
                                    children: [
                                        " ",
                                        lang === "uz" ? "MASHHUR SAHIFALAR" : lang === "ru" ? "\u041F\u041E\u041F\u0423\u041B\u042F\u0420\u041D\u042B\u0415 \u0421\u0422\u0420\u0410\u041D\u0418\u0426\u042B" : "POPULAR PAGES"
                                    ]
                                }),
                                footerData === null || footerData === void 0 ? void 0 : footerData.popular.map((item)=>{
                                    /*#__PURE__*/ return jsx_runtime_.jsx((link_default()), {
                                        href: `/${(item === null || item === void 0 ? void 0 : item.slug) === "/" ? "" : item === null || item === void 0 ? void 0 : item.slug}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "footer__item-link",
                                            children: lang === "uz" ? item === null || item === void 0 ? void 0 : item.title_uz : lang === "ru" ? item === null || item === void 0 ? void 0 : item.title_ru : item === null || item === void 0 ? void 0 : item.title
                                        })
                                    }, item === null || item === void 0 ? void 0 : item.id);
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer__line"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-bottom",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "footer-bottom__about",
                            children: [
                                lang === "uz" ? "Veb-sayt yaratuvchisi" : lang === "ru" ? "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u0439\u0442\u0430" : "Website Creator",
                                ":",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "footer-bottom__link footer-bottom__link_red",
                                    href: "http://appx.uz/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        " ",
                                        "Appx Group"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "footer-bottom__text",
                            children: [
                                "Copyright \xa9 ",
                                nowYear,
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "footer-bottom__link",
                                    children: "ROSUNIVERSITET"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: external "react-scroll-to-top"
const external_react_scroll_to_top_namespaceObject = require("react-scroll-to-top");
var external_react_scroll_to_top_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_to_top_namespaceObject);
// EXTERNAL MODULE: ./pages/_error.js
var _error = __webpack_require__(3157);
;// CONCATENATED MODULE: ./pages/_app.js












function MyApp({ Component , pageProps , data , footerData , statusCode  }) {
    if (statusCode) return /*#__PURE__*/ jsx_runtime_.jsx(_error["default"], {
        statusCode: statusCode
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {
                    menuData: data
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_scroll_to_top_default()), {
                    smooth: true,
                    top: 20,
                    color: "#fff",
                    component: /*#__PURE__*/ jsx_runtime_.jsx(Icons/* UpSvg */.L_, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {
                    footerData: footerData
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);
MyApp.getInitialProps = async (ctx)=>{
    const res = await fetch("https://api.rosuniversitet.com/dev/v1/menu");
    const { data  } = await res.json();
    const resFooter = await fetch("https://api.rosuniversitet.com/dev/v1/footer");
    const footerData = await resFooter.json();
    const statusCode = res.status > 200 || resFooter.status > 200 ? res.status : false;
    return {
        data: data,
        footerData: footerData["data"]["footer"],
        statusCode
    };
};


/***/ }),

/***/ 3157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const errorData = {
    404: "Not found "
};
const ErrorPage = ({ statusCode  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "error",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "error__title",
            children: [
                "Error ",
                statusCode
            ]
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [686,675,676,664,290,118,955], () => (__webpack_exec__(3945)));
module.exports = __webpack_exports__;

})();