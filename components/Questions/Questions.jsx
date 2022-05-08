import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import Accordion from '../Accordion/Accordion'

const Questions = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)
    const {
        subtitle,
        subtitle_ru,
        subtitle_uz,
        title,
        title_ru,
        title_uz,
        items,
    } = data
    return (
        <div className='container'>
            <div className='questions'>
                <div className='questions__content'>
                    <SectionTitle
                        title={
                            lang === 'uz'
                                ? title_uz
                                : lang === 'ru'
                                ? title_ru
                                : title
                        }
                        titleBlue=''
                        subTitle={
                            lang === 'uz'
                                ? subtitle_uz
                                : lang === 'ru'
                                ? subtitle_ru
                                : subtitle
                        }
                        theme='white'
                        position='center'
                        sircleColor='green'
                    />
                </div>
                <Accordion data={items} />
            </div>
        </div>
    )
}

export default Questions
