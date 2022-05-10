import React, { useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from '../../store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import Modal from '../Modal/Modal'

import {
    ShareSvg,
    InstagramSvg,
    TelegramSvg2,
    CallSvg,
} from '../../assets/icons/Icons'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

const OurBranches = ({ data }) => {
    const [open, setOpen] = useState(false)
    const { lang } = useSelector(selectLangSlice)
    const [modalData, setModalData] = useState(null)

    const openModal = (item) => {
        setOpen(true)
        setModalData(item)
    }

    return (
        <div className='our-branches'>
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
                <div className='our-branches__row'>
                    {data?.items.map((item) => (
                        <div
                            onClick={(e) => openModal(item)}
                            key={item.id}
                            className='our-branches__item'
                        >
                            <div className='our-branches__img'>
                                <Image
                                    className='our-branches__img-bg'
                                    src={item?.image ? item?.image : notImage}
                                    alt='branches'
                                    layout='fill'
                                />
                                {item?.social && (
                                    <div className='our-branches__social'>
                                        <div className='our-branches__social-item'>
                                            <ShareSvg className='our-branches__social-item-icon' />
                                        </div>
                                        <a
                                            href={item?.social['instagram']}
                                            rel='noreferrer'
                                            className='our-branches__social-item'
                                        >
                                            <InstagramSvg className='our-branches__social-item-icon' />
                                        </a>
                                        <a
                                            href={item?.social['telegram']}
                                            rel='noreferrer'
                                            className='our-branches__social-item'
                                        >
                                            <TelegramSvg2 className='our-branches__social-item-icon' />
                                        </a>
                                        <a
                                            href={`tel:${item?.social['telegram']}`}
                                            className='our-branches__social-item'
                                        >
                                            <CallSvg className='our-branches__social-item-icon' />
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className='our-branches__content'>
                                <h2 className='our-branches__title'>
                                    {lang === 'uz'
                                        ? item?.title_uz
                                        : lang === 'ru'
                                        ? item?.title_ru
                                        : item?.title}
                                </h2>
                                <h4 className='our-branches__subtitle'>
                                    {lang === 'uz'
                                        ? item?.subtitle_uz
                                        : lang === 'ru'
                                        ? item?.subtitle_ru
                                        : item?.subtitle}
                                </h4>
                                <div className='our-branches__pattern'></div>
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

export default OurBranches
