import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

const Principles = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)
    const {
        id,
        subtitle,
        subtitle_uz,
        subtitle_ru,
        title,
        title_uz,
        title_ru,
        items,
    } = data
    return (
        <div className='container'>
            <div className='principles'>
                <SectionTitle
                    title={
                        lang === 'uz'
                            ? title_uz
                            : lang === 'ru'
                            ? title_ru
                            : title
                    }
                    titleBlue={lang === 'uz' ? '' : lang === '' ? '' : ''}
                    subTitle={
                        lang === 'uz'
                            ? subtitle_uz
                            : lang === 'ru'
                            ? subtitle_ru
                            : subtitle
                    }
                    theme='white'
                    position='center'
                />
                <div className='cart-wrap'>
                    {items.map(
                        ({
                            id,
                            title,
                            title_ru,
                            title_uz,
                            subtitle,
                            subtitle_ru,
                            subtitle_uz,
                            image,
                        }) => (
                            <div key={id} className='cart-about-principles'>
                                <div className='cart-about-principles__img'>
                                    <Image
                                        src={image ? image : notImage}
                                        alt='about cart img'
                                        width={200}
                                        height={180}
                                    />
                                </div>
                                <div className='cart-about-principles__content'>
                                    <h2 className='cart-about-principles__title'>
                                        {lang === 'uz'
                                            ? title_uz
                                            : lang === 'ru'
                                            ? title_ru
                                            : title}
                                    </h2>
                                    <p className='cart-about-principles__subtitle'>
                                        {lang === 'uz'
                                            ? subtitle_uz
                                            : lang === 'ru'
                                            ? subtitle_ru
                                            : subtitle}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Principles
