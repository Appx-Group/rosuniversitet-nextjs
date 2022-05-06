import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { PlusSvg, MinusSvg } from '../../assets/icons/Icons'

const AccordionItem = ({
    title,
    title_uz,
    title_ru,
    description,
    description_uz,
    description_ru,
}) => {
    const { lang } = useSelector(selectLangSlice)
    const subElemet = useRef(null)
    const element = useRef(null)

    const handleClick = () => {
        if (subElemet.current.classList.contains('show')) {
            element.current.style.maxHeight = '0px'
            subElemet.current.classList.remove('show')
        } else {
            element.current.style.maxHeight =
                element.current.scrollHeight + 'px'
            subElemet.current.classList.add('show')
        }
    }
    return (
        <div ref={subElemet} className='accordion__element'>
            <div onClick={handleClick} className='accordion__item'>
                <h2 className='accordion__title'>
                    {lang === 'uz'
                        ? title_uz
                        : lang === 'ru'
                        ? title_ru
                        : title}
                </h2>
                <div className='accordion__svg-wrap'>
                    <PlusSvg className='accordion__svg accordion__svg_plus ' />
                    <MinusSvg className='accordion__svg accordion__svg_minus ' />
                </div>
            </div>
            <div ref={element} className='accordion__show'>
                <p className='accordion__desc'>
                    {lang === 'uz'
                        ? description_uz
                        : lang === 'ru'
                        ? description_ru
                        : description}
                </p>
            </div>
        </div>
    )
}

export default AccordionItem
