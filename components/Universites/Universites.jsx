import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { selectLangSlice } from 'store/features/lang'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

const Universities = ({ data, slug }) => {
    const { lang } = useSelector(selectLangSlice)

    return (
        <div className='container'>
            <section className='universities'>
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
                <div className='universities__wrapper'>
                    {data?.items?.map((item, index) => (
                        <div key={index} className='universities__card'>
                            <div className='universities__card-img'>
                                <Image
                                    src={item?.image ? item?.image : notImage}
                                    alt='first stepd img'
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <h2 className='universities__card-title'>
                                {lang === 'uz'
                                    ? item?.title_uz
                                    : lang === 'ru'
                                    ? item?.title_ru
                                    : item?.title}
                            </h2>
                            {slug === 'universities' ? null : (
                                <p className='universities__card-subtitle'>
                                    {lang === 'uz'
                                        ? item?.subtitle_uz
                                        : lang === 'ru'
                                        ? item?.subtitle_ru
                                        : item?.subtitle}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Universities
