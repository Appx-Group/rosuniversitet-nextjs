import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

const FreeConsultation = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)

    return (
        <div className='container'>
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
            {data?.items?.map((item) => (
                <section key={item?.id} className='free-consultation'>
                    <div className='free-consultation__left'>
                        <h1 className='free-consultation__title'>
                            <span className='free-consultation__title_blue'>
                                {lang === 'uz'
                                    ? item?.title_uz
                                    : lang === 'ru'
                                    ? item?.title_ru
                                    : item?.title}
                            </span>
                        </h1>
                        <p className='free-consultation__desc'>
                            {lang === 'uz'
                                ? item?.description_uz
                                : lang === 'ru'
                                ? item?.description_ru
                                : item?.description}
                        </p>
                    </div>
                    <div className='free-consultation__right'>
                        <div className='free-consultation__img'>
                            <Image
                                src={item?.image ? item?.image : notImage}
                                alt='free consultation img'
                                layout='fill'
                            />
                        </div>

                        <div className='free-consultation__rotate'>
                            <p className='free-consultation__rotate-title'>
                                {lang === 'uz'
                                    ? item?.reverse_uz
                                    : lang === 'ru'
                                    ? item?.reverse_ru
                                    : item?.reverse}
                            </p>
                            <p className='free-consultation__rotate-subtitle'>
                                {lang === 'uz'
                                    ? item?.reverse_desc_uz
                                    : lang === 'ru'
                                    ? item?.reverse_desc_ru
                                    : item?.reverse_desc}
                            </p>
                        </div>
                    </div>

                    <div className='free-consultation__fig'></div>
                </section>
            ))}
        </div>
    )
}

export default FreeConsultation
