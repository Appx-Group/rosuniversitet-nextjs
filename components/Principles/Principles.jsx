import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

const Principles = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)

    return (
        <div className='container'>
            <div className='principles'>
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
                    theme='white'
                    position='center'
                />
                <div className='cart-wrap'>
                    {data?.items.map((item) => (
                        <div key={id} className='cart-about-principles'>
                            <div className='cart-about-principles__img'>
                                <Image
                                    src={item?.image ? item?.image : notImage}
                                    alt='about cart img'
                                    width={200}
                                    height={180}
                                />
                            </div>
                            <div className='cart-about-principles__content'>
                                <h2 className='cart-about-principles__title'>
                                    {lang === 'uz'
                                        ? item?.title_uz
                                        : lang === 'ru'
                                        ? item?.title_ru
                                        : item?.title}
                                </h2>
                                <p className='cart-about-principles__subtitle'>
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

export default Principles
