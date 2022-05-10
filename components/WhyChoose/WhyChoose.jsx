import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'

import { notImage } from 'assets/data/PartnersDara/ImagesData'

const WhyChoosse = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)

    return (
        <div className='why-choose'>
            <div className='container'>
                <SectionTitle
                    title={
                        lang === 'uz'
                            ? data?.title_uz
                            : lang === 'ru'
                            ? data?.title_ru
                            : data?.title
                    }
                    titleBlue={lang === 'uz' ? '' : lang === '' ? '' : ''}
                    subTitle={
                        lang === 'uz'
                            ? data?.subtitle_uz
                            : lang === 'ru'
                            ? data?.subtitle_ru
                            : data?.subtitle
                    }
                    theme='dark'
                    position='left'
                />
                <div className='why-choose__container'>
                    {data?.items?.map((item) => (
                        <div key={item?.id} className='why-choose-cart'>
                            <div className='why-choose-cart__left'>
                                <div className='why-choose-cart__icon'>
                                    <Image
                                        src={
                                            item?.image ? item?.image : notImage
                                        }
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </div>
                            <div className='why-choose-cart__right'>
                                <h3 className='why-choose-cart__title'>
                                    {lang === 'uz'
                                        ? item?.title_uz
                                        : lang === 'ru'
                                        ? item?.title_ru
                                        : item?.title}
                                </h3>
                                <p className='why-choose-cart__desc'>
                                    {lang === 'uz'
                                        ? item?.subtitle_uz
                                        : lang === 'ru'
                                        ? item?.subtitle_ru
                                        : item?.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyChoosse
