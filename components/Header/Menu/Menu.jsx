import React, { useRef, useEffect } from 'react'
import usePathName from 'hooks/usePathName'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'

const Menu = ({ menuData }) => {
    const url = usePathName()
    const { lang } = useSelector(selectLangSlice)
    const activeParent = useRef(null)
    const activeSircle = useRef(null)
    const avtiveNav = useRef(null)

    const activeSircleChange = (el) => {
        if (el !== null) {
            const positionInfoParent =
                activeParent.current.getBoundingClientRect()
            const positionInfoChild = el.getBoundingClientRect()
            const parentX = positionInfoParent.x
            const childX = positionInfoChild.x

            const parentZero = childX - parentX
            const widthChild = Math.floor(positionInfoChild.width / 2)

            const positionX = Math.floor(parentZero + widthChild)

            activeSircle.current.style.transform = `translateX(${positionX}px)`
        }
    }

    useEffect(() => {
        activeSircleChange(avtiveNav.current)
    }, [url.path])

    return (
        <ul ref={activeParent} className='nav__menu'>
            <div ref={activeSircle} className='sircle-active'></div>
            {menuData?.map((item) => (
                <li
                    key={item?.id}
                    ref={`/${item?.slug}` === url.path ? avtiveNav : null}
                    className={`nav__menu-item ${
                        `/${item?.slug}` === url.path ? 'active' : ''
                    }`}
                    onMouseEnter={(el) => activeSircleChange(el?.target)}
                    onMouseLeave={() =>
                        activeSircleChange(
                            document.querySelector('.nav__menu-item.active')
                        )
                    }
                >
                    <Link href={`/${item?.slug === '/' ? '' : item?.slug}`}>
                        <a className='nav__menu-link'>
                            {lang === 'uz'
                                ? item?.title_uz
                                : lang === 'ru'
                                ? item?.title_ru
                                : item?.title}
                            {item?.children?.length > 0 && (
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                >
                                    <path d='M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z'></path>
                                </svg>
                            )}
                        </a>
                    </Link>

                    {item?.children?.length > 0 && (
                        <ul className='sub-menu'>
                            {item?.children.map((item) => (
                                <li key={item?.id} className='sub-menu__item'>
                                    <Link
                                        href={`/${
                                            item?.slug === '/' ? '' : item?.slug
                                        }`}
                                    >
                                        <a className='sub-menu__link'>
                                            {lang === 'uz'
                                                ? item?.title_uz
                                                : lang === 'ru'
                                                ? item?.title_ru
                                                : item?.title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default Menu
