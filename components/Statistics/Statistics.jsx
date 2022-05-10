import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'

const Statistics = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)

    return (
        <div className='container'>
            <div className='statistics'>
                <SectionTitle
                    title={
                        lang === 'uz'
                            ? data?.title_uz
                            : lang === 'ru'
                            ? data?.title_ru
                            : data?.title
                    }
                    titleBlue=''
                    subTitle={
                        lang === 'uz'
                            ? data?.subtitle_uz
                            : lang === 'ru'
                            ? data?.subtitle_ru
                            : data?.subtitle
                    }
                    theme='white'
                    position='center'
                    sircleColor='green'
                />
                <div className='statistics__row'>
                    {data?.items?.map((item) => (
                        <div key={item?.id} className='statistics__item'>
                            <span className='statistics__num'>
                                {lang === 'uz'
                                    ? item?.title_uz
                                    : lang === 'ru'
                                    ? item?.title_ru
                                    : item?.title}
                            </span>
                            <h2 className='statistics__title'>
                                {lang === 'uz'
                                    ? item?.subtitle_uz
                                    : lang === 'ru'
                                    ? item?.subtitle_ru
                                    : item?.subtitle}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Statistics
