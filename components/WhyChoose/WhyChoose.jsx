import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'

import { notImage } from 'assets/data/PartnersDara/ImagesData'

const WhyChoosse = ({ data }) => {
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
        <div className='why-choose'>
            <div className='container'>
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
                    theme='dark'
                    position='left'
                />
                <div className='why-choose__container'>
                    {items?.map(
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
                            <div key={id} className='why-choose-cart'>
                                <div className='why-choose-cart__left'>
                                    <div className='why-choose-cart__icon'>
                                        <Image
                                            src={image ? image : notImage}
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </div>
                                <div className='why-choose-cart__right'>
                                    <h3 className='why-choose-cart__title'>
                                        {lang === 'uz'
                                            ? title_uz
                                            : lang === 'ru'
                                            ? title_ru
                                            : title}
                                    </h3>
                                    <p className='why-choose-cart__desc'>
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

export default WhyChoosse
