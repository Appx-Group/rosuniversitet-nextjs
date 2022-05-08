import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

const FreeConsultation = ({ data }) => {
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

    const obj = {
        image: 'https://site.bronme.uz/images/image-1651926994135.png',
    }
    return (
        <div className='container'>
            <SectionTitle
                title={
                    lang === 'uz' ? title_uz : lang === 'ru' ? title_ru : title
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
            {items?.map(
                ({
                    id,
                    description,
                    description_ru,
                    description_uz,
                    image,
                    reverse,
                    reverse_uz,
                    reverse_ru,
                    reverse_desc,
                    reverse_desc_ru,
                    reverse_desc_uz,
                    title,
                    title_ru,
                    title_uz,
                }) => (
                    <section key={id} className='free-consultation'>
                        <div className='free-consultation__left'>
                            <h1 className='free-consultation__title'>
                                <span className='free-consultation__title_blue'>
                                    {lang === 'uz'
                                        ? title_uz
                                        : lang === 'ru'
                                        ? title_ru
                                        : title}
                                </span>
                            </h1>
                            <p className='free-consultation__desc'>
                                {lang === 'uz'
                                    ? description_uz
                                    : lang === 'ru'
                                    ? description_ru
                                    : description}
                            </p>
                        </div>
                        <div className='free-consultation__right'>
                            <div className='free-consultation__img'>
                                <Image
                                    src={image ? image : notImage}
                                    alt='free consultation img'
                                    layout='fill'
                                />
                            </div>

                            <div className='free-consultation__rotate'>
                                <p className='free-consultation__rotate-title'>
                                    {lang === 'uz'
                                        ? reverse_uz
                                        : lang === 'ru'
                                        ? reverse_ru
                                        : reverse}
                                </p>
                                <p className='free-consultation__rotate-subtitle'>
                                    {lang === 'uz'
                                        ? reverse_desc_uz
                                        : lang === 'ru'
                                        ? reverse_desc_ru
                                        : reverse_desc}
                                </p>
                            </div>
                        </div>

                        <div className='free-consultation__fig'></div>
                    </section>
                )
            )}
        </div>
    )
}

export default FreeConsultation
