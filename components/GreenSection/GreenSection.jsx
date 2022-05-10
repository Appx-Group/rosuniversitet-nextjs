import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'

const GreenSection = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)

    return (
        <div className='container'>
            {data?.items?.map((item) => (
                <section key={item?.id} className='section-green'>
                    <h2 className='section-green__title'>
                        {lang === 'uz'
                            ? item?.title_uz
                            : lang === 'ru'
                            ? item?.title_rugit
                            : item?.title}
                    </h2>
                    <p className='section-green__desc'>
                        {lang === 'uz'
                            ? item?.description_uz
                            : lang === 'ru'
                            ? item?.description_ru
                            : item?.description}
                    </p>
                    <a href={item?.link?.url} className='section-green__btn'>
                        {lang === 'uz'
                            ? item?.link?.title_uz
                            : lang === 'ru'
                            ? item?.link?.title_ru
                            : item?.link?.title}
                    </a>
                </section>
            ))}
        </div>
    )
}

export default GreenSection
