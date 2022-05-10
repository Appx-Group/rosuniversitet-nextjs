import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

const Russia = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)
    return (
        <div className='container'>
            <section className='russia'>
                {data?.items.map((item, index) => (
                    <div
                        key={item?.id}
                        className={`russia-section ${
                            (index + 1) % 2 === 0 ? 'reverse' : ''
                        }`}
                    >
                        <div className='russia-section__left '>
                            <SectionTitle
                                title={
                                    lang === 'uz'
                                        ? item?.title_uz
                                        : lang === 'ru'
                                        ? item?.title_ru
                                        : item?.title
                                }
                                titleBlue=''
                                subTitle={
                                    lang === 'uz'
                                        ? item?.subtitle_uz
                                        : lang === 'ru'
                                        ? item?.subtitle_ru
                                        : item?.subtitle
                                }
                                theme='white'
                                position='left'
                                textPosition='left'
                                sircleColor='green'
                            />
                            <div
                                className='russia-section__desc'
                                key={item?.d}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        lang === 'uz'
                                            ? item?.text_uz
                                            : lang === 'ru'
                                            ? item?.text_ru
                                            : item?.text,
                                }}
                            />
                        </div>
                        <div className='russia-section__right'>
                            <Image
                                className='russia-section__img'
                                src={item?.image ? item?.image : notImage}
                                alt='russia img'
                                layout='fill'
                            />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Russia
