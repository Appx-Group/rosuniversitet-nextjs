import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'

const ReliablePartner = ({ data }) => {
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
            <section className='reliable-partner'>
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
                {}
                {items.map(
                    ({
                        id,
                        title,
                        title_ru,
                        title_uz,
                        subtitle,
                        subtitle_uz,
                        subtitle_ru,
                        text,
                        text_ru,
                        text_uz,
                        image,
                    }) => (
                        <div key={id} className='reliable-partner__row'>
                            <div className='reliable-partner__left'>
                                <Image
                                    src={image}
                                    alt='ReliablePartnerImg'
                                    layout='fill'
                                />
                            </div>
                            <div className='reliable-partner__right'>
                                <div className='reliable-partner__content'>
                                    {/* <div className='sircle__img'>
                                <img src={ImgSircle} alt='img sircle' />
                            </div> */}
                                    {}
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

                                    <ul className='reliable-partner__content-row'>
                                        <li
                                            className='reliable-partner__content-item'
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </section>
        </div>
    )
}

export default ReliablePartner
