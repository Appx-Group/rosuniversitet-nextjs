import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'

const AboutCenter = ({ data }) => {
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
        <section className='about-center'>
            <div className='container'>
                {/* <SectionTitle
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
                /> */}
                {items.map(
                    ({
                        id,
                        title,
                        title_uz,
                        title_ru,
                        description,
                        description_uz,
                        description_ru,
                    }) => (
                        <div key={id}>
                            <h3 className='about-center__title'>
                                {lang === 'uz'
                                    ? title_uz
                                    : lang === 'ru'
                                    ? title_ru
                                    : title}
                            </h3>
                            <p className='about-center__desc'>
                                {lang === 'uz'
                                    ? description_uz
                                    : lang === 'ru'
                                    ? description_ru
                                    : description}
                            </p>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}

export default AboutCenter
