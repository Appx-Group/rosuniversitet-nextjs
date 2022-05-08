import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'

const Statistics = ({ data }) => {
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
            <div className='statistics'>
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
                <div className='statistics__row'>
                    {items?.map(
                        ({
                            id,
                            title,
                            title_uz,
                            title_ru,
                            subtitle,
                            subtitle_uz,
                            subtitle_ru,
                        }) => (
                            <div key={id} className='statistics__item'>
                                <span className='statistics__num'>
                                    {lang === 'uz'
                                        ? title_uz
                                        : lang === 'ru'
                                        ? title_ru
                                        : title}
                                </span>
                                <h2 className='statistics__title'>
                                    {lang === 'uz'
                                        ? subtitle_uz
                                        : lang === 'ru'
                                        ? subtitle_ru
                                        : subtitle}
                                </h2>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Statistics
