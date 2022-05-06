import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { selectLangSlice } from '../../store/features/lang'
import { useDispatch, useSelector } from 'react-redux'
import { changeLang } from '../../store/features/lang'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import flagImgUz from '../../assets/images/flag/uz.png'
import flagImgRu from '../../assets/images/flag/ru.png'
import flagImgEng from '../../assets/images/flag/eng.png'

const LangSelect = () => {
    const dispatch = useDispatch()
    const { lang } = useSelector(selectLangSlice)
    const [activeFlag, setActiveFlag] = useState('eng')
    const parentBox = useRef(null)
    const select = useRef(null)
    const menu = useRef(null)
    const flagUz = useRef(null)
    const flagRu = useRef(null)
    const flagEng = useRef(null)

    const LangData = {
        eng: {
            id: 1,
            title: 'Eng',
            img: flagImgEng,
        },
        ru: {
            id: 1,
            title: 'Ru',
            img: flagImgRu,
        },
        uz: {
            id: 1,
            title: 'uz',
            img: flagImgUz,
        },
    }

    const closeMenu = () => {
        menu.current.style.maxHeight = '0px'
        select.current.classList.remove('show')
        window.removeEventListener('click', addActive)
    }

    const addActive = () => {
        menu.current.style.maxHeight = menu.current.scrollHeight + 'px'
        select.current.classList.add('show')
    }

    const handleClick = () => {
        if (select.current.classList.contains('show')) {
            closeMenu()
            window.removeEventListener('click', addActive)
        } else {
            addActive()
            window.removeEventListener('click', closeMenu)
        }
    }

    const setValueLang = (el) => {
        localStorage.setItem('langShow', 'noShow')
        localStorage.setItem('lang', el.current.getAttribute('value'))
        setActiveFlag(el.current.getAttribute('value'))
        dispatch(changeLang(el.current.getAttribute('value')))
        closeMenu()
    }

    useOnClickOutside(parentBox, closeMenu)

    useEffect(() => {
        dispatch(changeLang(localStorage.getItem('lang')))
        setActiveFlag(lang ?? 'eng')
    }, [lang, dispatch])
    return (
        <div ref={parentBox} className='lang-select'>
            <div
                ref={select}
                onClick={handleClick}
                className='lang-select__main'
            >
                <div className='lang-select__img'>
                    <Image
                        src={LangData[activeFlag].img}
                        width='100'
                        height='100'
                        alt='flag'
                    />
                </div>
                <span className='lang-select__title'>
                    {LangData[activeFlag].title}
                </span>
            </div>
            <ul ref={menu} className='lang-select__menu'>
                <li
                    ref={flagEng}
                    onClick={() => setValueLang(flagEng)}
                    value='eng'
                    className={`lang-select__item ${
                        flagEng?.current?.getAttribute('value') === lang
                            ? 'lang-select__item_active'
                            : ''
                    } `}
                >
                    <div className='lang-select__img'>
                        <Image
                            src={flagImgEng}
                            width='100'
                            height='100'
                            alt='flag'
                        />
                    </div>
                    <span className='lang-select__title'>Eng</span>
                </li>
                <li
                    ref={flagRu}
                    onClick={() => setValueLang(flagRu)}
                    value='ru'
                    className={`lang-select__item ${
                        flagRu?.current?.getAttribute('value') === lang
                            ? 'lang-select__item_active'
                            : ''
                    } `}
                >
                    <div className='lang-select__img'>
                        <Image
                            src={flagImgRu}
                            width='100'
                            height='100'
                            alt='flag'
                        />
                    </div>
                    <span className='lang-select__title'>Ру</span>
                </li>
                <li
                    ref={flagUz}
                    onClick={() => setValueLang(flagUz)}
                    value='uz'
                    className={`lang-select__item ${
                        flagUz?.current?.getAttribute('value') === lang
                            ? 'lang-select__item_active'
                            : ''
                    } `}
                >
                    <div className='lang-select__img'>
                        <Image
                            src={flagImgUz}
                            width='100'
                            height='100'
                            alt='flag'
                        />
                    </div>
                    <span className='lang-select__title'>Uz</span>
                </li>
            </ul>
        </div>
    )
}

export default LangSelect
