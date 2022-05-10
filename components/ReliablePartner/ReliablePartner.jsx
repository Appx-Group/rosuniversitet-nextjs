import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

const ReliablePartner = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)

    return (
        <div className='container'>
            <section className='reliable-partner'>
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
                {}
                {data?.items.map((item) => (
                    <div key={item?.id} className='reliable-partner__row'>
                        <div className='reliable-partner__left'>
                            <Image
                                src={item?.image ? item?.image : notImage}
                                alt='ReliablePartnerImg'
                                layout='fill'
                            />
                        </div>
                        <div className='reliable-partner__right'>
                            <div className='reliable-partner__content'>
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

                                <ul className='reliable-partner__content-row'>
                                    <div
                                        // className='reliable-partner__content-item'
                                        key={item?.id}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                lang === 'uz'
                                                    ? item?.text_uz
                                                    : lang === 'ru'
                                                    ? item?.text_ru
                                                    : item?.text,
                                        }}
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default ReliablePartner
