import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeLang,
    selectLangSlice,
    changeActiveShow,
} from '../../store/features/lang'

import flagImgUz from '../../assets/images/flag/uz.png'
import flagImgRu from '../../assets/images/flag/ru.png'
import flagImgEng from '../../assets/images/flag/eng.png'

const LangSelectDefault = () => {
    const dispatch = useDispatch()
    const wrapper = useRef(null)
    const { activeShow } = useSelector(selectLangSlice)
    const [activeShows, setActiveshow] = useState(true)

    const setValueLang = (el) => {
        localStorage.setItem('lang', el)
        dispatch(changeLang(el))
        wrapper.current.style.display = 'none'
        localStorage.setItem('activeShow', false)
        document.body.style.overflowY = 'scroll'
    }

    useEffect(() => {
        if (localStorage.getItem('activeShow') == null) {
            document.body.style.overflowY = 'hidden'
            localStorage.setItem('activeShow', true)
            dispatch(changeActiveShow(true))
        } else {
            setActiveshow(JSON.parse(localStorage.getItem('activeShow')))
            dispatch(
                changeActiveShow(JSON.parse(localStorage.getItem('activeShow')))
            )
        }
    }, [dispatch])
    return (
        <>
            {activeShow && (
                <div ref={wrapper} className='default-lang'>
                    <div className='lang-wrap'>
                        <h3 className='lang-wrap__title'>Assalomu aleykum </h3>
                        <h3 className='lang-wrap__title'>Tilni tanlang</h3>
                        <ul className='lang-btns'>
                            <li
                                onClick={() => setValueLang('eng')}
                                value='eng'
                                className='lang-btns__item'
                            >
                                <div className='lang-btns__img'>
                                    <Image
                                        src={flagImgEng}
                                        alt='flag'
                                        width='200'
                                        height='200'
                                    />
                                </div>
                                <span className='lang-btns__title'>Eng</span>
                            </li>
                            <li
                                onClick={() => setValueLang('ru')}
                                value='ru'
                                className='lang-btns__item'
                            >
                                <div className='lang-btns__img'>
                                    <Image
                                        src={flagImgRu}
                                        alt='flag'
                                        width='200'
                                        height='200'
                                    />
                                </div>
                                <span className='lang-btns__title'>Ru</span>
                            </li>
                            <li
                                onClick={() => setValueLang('uz')}
                                value='uz'
                                className='lang-btns__item'
                            >
                                <div className='lang-btns__img'>
                                    <Image
                                        src={flagImgUz}
                                        alt='flag'
                                        width='200'
                                        height='200'
                                    />
                                </div>
                                <span className='lang-btns__title'>Uz</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}

export default LangSelectDefault
