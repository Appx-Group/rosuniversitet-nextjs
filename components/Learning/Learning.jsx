import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'

const Learning = ({ data }) => {
    const {
        subtitle,
        subtitle_ru,
        subtitle_uz,
        title,
        title_ru,
        title_uz,
        items,
    } = data
    const { lang } = useSelector(selectLangSlice)
    return (
        <div className='container'>
            <section className='learning'>
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

                <ul className='learning-list'>
                    {items.map(({ id, text, text_uz, text_ru }) => (
                        <div
                            className='text-container learning-list-row'
                            key={id}
                            dangerouslySetInnerHTML={{
                                __html:
                                    lang === 'uz'
                                        ? text_uz
                                        : lang === 'ru'
                                        ? text_ru
                                        : text,
                            }}
                        />
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Learning
