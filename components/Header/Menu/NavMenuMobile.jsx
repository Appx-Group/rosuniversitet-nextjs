import React from 'react'
import SubMenuMobile from './SubMenuMobile'

const NavMenuMobile = ({
    menuData,
    setBurgerActive,
    burgerActive,
    changeBurger,
    status,
    setStatus,
}) => {
    return (
        <>
            <div
                className={`menu-mobil-wrapper ${
                    burgerActive === 'active' ? 'active' : ''
                }`}
                onClick={() => changeBurger()}
            ></div>
            <div
                className={`mobil-menu ${
                    burgerActive === 'active' ? 'active' : ''
                }`}
            >
                <div className='mobil-menu__top'>
                    <span className='nav__logo-mobi'>Rosuniversitet</span>
                    <div
                        onClick={() => changeBurger()}
                        className='nav__burger nav-burger__mobi'
                    >
                        <span className={status}></span>
                        <span className={status}></span>
                        <span className={status}></span>
                    </div>
                </div>
                <ul className='mobil-menu__main'>
                    {menuData.map(
                        ({ id, title, title_ru, title_uz, slug, children }) => (
                            <SubMenuMobile
                                key={id}
                                id={id}
                                title_ru={title_ru}
                                title={title}
                                title_uz={title_uz}
                                slug={slug}
                                subMenu={children}
                                changeBurgerFn={changeBurger}
                            />
                        )
                    )}
                </ul>
            </div>
        </>
    )
}

export default NavMenuMobile
