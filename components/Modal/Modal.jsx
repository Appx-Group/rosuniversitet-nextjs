import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from '../../store/features/lang'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

import { InstagramSvg, TelegramSvg2, CallSvg } from 'assets/icons/Icons'

const Modal = ({ open, setOpen, data }) => {
    const { lang } = useSelector(selectLangSlice)
    const [modalShow, setModalShow] = useState(open)

    const closeModal = () => {
        setOpen(false)
        setModalShow(false)
    }

    useEffect(() => {
        const body = document.body
        setModalShow(open)
        open ? body.classList.add('hidden') : body.classList.remove('hidden')
    }, [open, modalShow])

    return (
        <div className={`modal ${modalShow ? 'show' : ''}`}>
            <div className='scroll'>
                <div className='modal-main'>
                    <svg
                        id='Layer_1'
                        data-name='Layer 1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 122.87 122.87'
                        onClick={closeModal}
                        className='modal-main__close'
                    >
                        <title>remove</title>
                        <path d='M18,18A61.45,61.45,0,1,1,0,61.44,61.28,61.28,0,0,1,18,18ZM77.38,39l6.53,6.54a4,4,0,0,1,0,5.63L73.6,61.44,83.91,71.75a4,4,0,0,1,0,5.63l-6.53,6.53a4,4,0,0,1-5.63,0L61.44,73.6,51.13,83.91a4,4,0,0,1-5.63,0L39,77.38a4,4,0,0,1,0-5.63L49.28,61.44,39,51.13a4,4,0,0,1,0-5.63L45.5,39a4,4,0,0,1,5.63,0L61.44,49.28,71.75,39a4,4,0,0,1,5.63,0ZM61.44,10.54a50.91,50.91,0,1,0,36,14.91,50.83,50.83,0,0,0-36-14.91Z' />
                    </svg>
                    <div className='modal-main__left'>
                        <Image
                            src={data?.image ? data?.image : notImage}
                            alt='branch image'
                            layout='fill'
                        />
                    </div>
                    <div className='modal-main__right'>
                        <h1 className='modal-main__title'>
                            {lang === 'uz'
                                ? data?.title_uz
                                : lang === 'ru'
                                ? data?.title_ru
                                : data?.title}
                        </h1>
                        <h4 className='modal-main__subtitle'>
                            {lang === 'uz'
                                ? data?.subtitle_uz
                                : lang === 'ru'
                                ? data?.subtitle_ru
                                : data?.subtitle}
                        </h4>

                        <div className='modal-main__content'>
                            <span className='modal-main__key'>
                                {lang === 'uz'
                                    ? 'Manzil'
                                    : lang === 'ru'
                                    ? 'Адрес'
                                    : 'Address'}
                                :
                            </span>
                            <span className='modal-main__value'>
                                {lang === 'uz'
                                    ? data?.address_uz
                                    : lang === 'ru'
                                    ? data?.address_ru
                                    : data?.address}
                            </span>
                        </div>
                        <div className='modal-main__content'>
                            <span className='modal-main__key'>
                                {lang === 'uz'
                                    ? 'Aloqa'
                                    : lang === 'ru'
                                    ? 'Контакт'
                                    : 'Contact'}
                                :
                            </span>
                            <span className='modal-main__value'>
                                {lang === 'uz'
                                    ? data?.phone
                                    : lang === 'ru'
                                    ? data?.phone
                                    : data?.phone}
                            </span>
                        </div>
                        <div className='modal-main__content'>
                            <span className='modal-main__key'>
                                {lang === 'uz'
                                    ? 'Elektron pochta'
                                    : lang === 'ru'
                                    ? 'Эл. адрес'
                                    : 'Email'}
                                :
                            </span>
                            <span className='modal-main__value'>
                                {lang === 'uz'
                                    ? data?.email
                                    : lang === 'ru'
                                    ? data?.email
                                    : data?.email}
                            </span>
                        </div>
                        <div className='modal-main__content'>
                            <span className='modal-main__key'>
                                {lang === 'uz'
                                    ? 'Ochiq'
                                    : lang === 'ru'
                                    ? 'Открыто'
                                    : 'Open'}
                                :
                            </span>
                            <span className='modal-main__value'>
                                {lang === 'uz'
                                    ? data?.work_day_uz
                                    : lang === 'ru'
                                    ? data?.work_day_ru
                                    : data?.work_day}
                            </span>
                        </div>
                        {data?.social && (
                            <div className='modal-main__social'>
                                <a
                                    href={data?.social?.instagram}
                                    className='modal-main__social-item'
                                    rel='noreferrer'
                                >
                                    <InstagramSvg className='modal-main__social-icon' />
                                </a>
                                <a
                                    href={data?.social?.telegram}
                                    className='modal-main__social-item'
                                    rel='noreferrer'
                                >
                                    <TelegramSvg2 className='modal-main__social-icon' />
                                </a>
                                <a
                                    href={`tel:${data?.social?.telegram}`}
                                    className='modal-main__social-item'
                                >
                                    <CallSvg className='modal-main__social-icon' />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
