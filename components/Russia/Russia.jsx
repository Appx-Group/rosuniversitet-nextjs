import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'

const Russia = ({ data }) => {
    const { items } = data
    const { lang } = useSelector(selectLangSlice)
    return (
        <div className='container'>
            <section className='russia'>
                {items.map(
                    (
                        {
                            id,
                            title,
                            title_uz,
                            title_ru,
                            subtitle_ru,
                            subtitle_uz,
                            subtitle,
                            image,
                            text,
                            text_ru,
                            text_uz,
                        },
                        index
                    ) => (
                        <div
                            key={id}
                            className={`russia-section ${
                                (index + 1) % 2 === 0 ? 'reverse' : ''
                            }`}
                        >
                            <div className='russia-section__left '>
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
                                    position='left'
                                    textPosition='left'
                                    sircleColor='green'
                                />
                                <div
                                    className='russia-section__desc'
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
                            </div>
                            <div className='russia-section__right'>
                                <Image
                                    className='russia-section__img'
                                    src={image}
                                    alt='russia img'
                                    layout='fill'
                                />
                            </div>
                        </div>
                    )
                )}
            </section>
        </div>
    )
}

export default Russia
