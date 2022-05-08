import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'

const GreenSection = ({ data }) => {
    const { items } = data
    const { lang } = useSelector(selectLangSlice)
    return (
        <div className='container'>
            {items?.map(
                ({
                    id,
                    title,
                    title_uz,
                    title_ru,
                    description,
                    description_uz,
                    description_ru,
                    link,
                }) => (
                    <section key={id} className='section-green'>
                        <h2 className='section-green__title'>
                            {lang === 'uz'
                                ? title_uz
                                : lang === 'ru'
                                ? title_ru
                                : title}
                        </h2>
                        <p className='section-green__desc'>
                            {lang === 'uz'
                                ? description_uz
                                : lang === 'ru'
                                ? description_ru
                                : description}
                        </p>
                        <a href={link?.url} className='section-green__btn'>
                            {lang === 'uz'
                                ? link?.title_uz
                                : lang === 'ru'
                                ? link?.title_ru
                                : link?.title}
                        </a>
                    </section>
                )
            )}
        </div>
    )
}

export default GreenSection
