import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'

const AboutCenter = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)
    return (
        <section className='about-center'>
            <div className='container'>
                {data?.items.map((item) => (
                    <div key={item?.id}>
                        <h3 className='about-center__title'>
                            {lang === 'uz'
                                ? item?.title_uz
                                : lang === 'ru'
                                ? item?.title_ru
                                : item?.title}
                        </h3>
                        <p className='about-center__desc'>
                            {lang === 'uz'
                                ? item?.description_uz
                                : lang === 'ru'
                                ? item?.description_ru
                                : item?.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutCenter
