import React, { useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from '../../store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import Modal from '../Modal/Modal'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

const Branch = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)
    const [modalData, setModalData] = useState(null)
    const [open, setOpen] = useState(false)

    const openModal = (item) => {
        setOpen(true)
        setModalData(item)
    }

    return (
        <div className='branches'>
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
                <div className='branches__row'>
                    {data?.items?.map((item) => (
                        <div
                            onClick={(e) => openModal(item)}
                            key={item.id}
                            className='branches__item'
                        >
                            <div className='branches__img'>
                                <Image
                                    className='branches__img-bg'
                                    src={item?.image ? item?.image : notImage}
                                    alt='branches'
                                    layout='fill'
                                />
                            </div>
                            <div className='branches__content'>
                                <h2 className='branches__title'>
                                    {lang === 'uz'
                                        ? item?.title_uz
                                        : lang === 'ru'
                                        ? item?.title_ru
                                        : item?.title}
                                </h2>
                                <h4 className='branches__subtitle'>
                                    {lang === 'uz'
                                        ? item?.subtitle_uz
                                        : lang === 'ru'
                                        ? item?.subtitle_ru
                                        : item?.subtitle}
                                </h4>
                                <button className='branches__btn'>
                                    {lang === 'uz'
                                        ? item.button_text_uz ??
                                          "ko'proq ko'rish"
                                        : lang === 'ru'
                                        ? item?.button_text_ru ??
                                          'узнать больше'
                                        : item?.button_text ?? 'see more'}
                                </button>
                                <div className='branches__pattern'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {modalData && (
                <Modal open={open} setOpen={setOpen} data={modalData} />
            )}
        </div>
    )
}

export default Branch
