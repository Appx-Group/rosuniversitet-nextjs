import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { selectLangSlice } from 'store/features/lang'

const Universities = ({ data, slug }) => {
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
            <section className='universities'>
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
                <div className='universities__wrapper'>
                    {items?.map(
                        (
                            {
                                title,
                                title_uz,
                                title_ru,
                                subtitle,
                                subtitle_uz,
                                subtitle_ru,
                                image,
                            },
                            index
                        ) => (
                            <div key={index} className='universities__card'>
                                <div className='universities__card-img'>
                                    <Image
                                        src={image}
                                        alt='first stepd img'
                                        // layout='fill'
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <h2 className='universities__card-title'>
                                    {lang === 'uz'
                                        ? title_uz
                                        : lang === 'ru'
                                        ? title_ru
                                        : title}
                                </h2>
                                {slug === 'universities' ? (
                                    <></>
                                ) : (
                                    <p className='universities__card-subtitle'>
                                        {lang === 'uz'
                                            ? subtitle_uz
                                            : lang === 'ru'
                                            ? subtitle_ru
                                            : subtitle}
                                    </p>
                                )}
                            </div>
                        )
                    )}
                </div>
            </section>
        </div>
    )
}

export default Universities
