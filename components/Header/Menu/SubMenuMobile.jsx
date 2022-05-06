import React, { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'

const SubMenuMobile = ({
    id,
    title,
    title_uz,
    title_ru,
    slug,
    subMenu,
    changeBurgerFn,
}) => {
    const { lang } = useSelector(selectLangSlice)
    const [openAcc, setOpenAcc] = useState(false)
    return (
        <li key={id} className='mobil-menu__main-item'>
            <div className='mobil-menu__main-item-top'>
                <Link
                    onClick={changeBurgerFn}
                    href={`/${slug === '/' ? '' : slug}`}
                >
                    <a className='mobil-menu__main-link'>
                        {lang === 'uz'
                            ? title_uz
                            : lang === 'ru'
                            ? title_ru
                            : title}
                    </a>
                </Link>
                {subMenu?.length > 0 && (
                    <div
                        onClick={() => setOpenAcc(!openAcc)}
                        className={`mobil-menu__main-acc-btn ${
                            openAcc ? 'active' : ''
                        }`}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                        >
                            <path d='M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z'></path>
                        </svg>
                    </div>
                )}
            </div>
            {subMenu?.length > 0 && (
                <div className={`sub-menu-mobil ${openAcc ? 'active' : ''}`}>
                    {subMenu.map(({ title, title_ru, title_uz, slug, id }) => (
                        <Link
                            key={id}
                            href={`/${slug === '/' ? '' : slug}`}
                            onClick={changeBurgerFn}
                        >
                            <a className='sub-menu-mobil__link'>
                                {lang === 'uz'
                                    ? title_uz
                                    : lang === 'ru'
                                    ? title_ru
                                    : title}
                            </a>
                        </Link>
                    ))}
                </div>
            )}
        </li>
    )
}

export default SubMenuMobile
