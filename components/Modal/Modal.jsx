import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { selectLangSlice } from '../../store/features/lang'
import { useSelector } from 'react-redux'
import { InstagramSvg, TelegramSvg2, CallSvg } from 'assets/icons/Icons'

const Modal = ({ open, setOpen, data }) => {
    const { lang } = useSelector(selectLangSlice)
    const [modalShow, setModalShow] = useState(open)
    const mainModal = useRef(null)
    const {
        address,
        address_ru,
        address_uz,
        button_text,
        button_text_ru,
        button_text_uz,
        email,
        image,
        phone,
        social,
        subtitle,
        subtitle_ru,
        subtitle_uz,
        title,
        title_ru,
        title_uz,
        work_day,
        work_day_ru,
        work_day_uz,
    } = data

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
            <div onClick={closeModal} className='modal__bg'></div>

            <div className='container'>
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
                        <Image src={image} alt='branch' layout='fill' />
                    </div>
                    <div className='modal-main__right'>
                        <h1 className='modal-main__title'>
                            {lang === 'uz'
                                ? title_uz
                                : lang === 'ru'
                                ? title_ru
                                : title}
                        </h1>
                        <h4 className='modal-main__subtitle'>
                            {lang === 'uz'
                                ? subtitle_uz
                                : lang === 'ru'
                                ? subtitle_ru
                                : subtitle}
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
                                    ? address_uz
                                    : lang === 'ru'
                                    ? address_ru
                                    : address}
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
                                    ? phone
                                    : lang === 'ru'
                                    ? phone
                                    : phone}
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
                                    ? email
                                    : lang === 'ru'
                                    ? email
                                    : email}
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
                                    ? work_day_uz
                                    : lang === 'ru'
                                    ? work_day_ru
                                    : work_day}
                            </span>
                        </div>
                        {social && (
                            <div className='modal-main__social'>
                                <a
                                    href={social['instagram']}
                                    className='modal-main__social-item'
                                    rel='noreferrer'
                                >
                                    <InstagramSvg className='modal-main__social-icon' />
                                </a>
                                <a
                                    href={social['telegram']}
                                    className='modal-main__social-item'
                                    rel='noreferrer'
                                >
                                    <TelegramSvg2 className='modal-main__social-icon' />
                                </a>
                                <a
                                    href={`tel:${social['telegram']}`}
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

const svgClose = (props) => (
    <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 122.87 122.87'
        {...props}
        width={45}
        height={45}
        fill='red'
    >
        <title>{'remove'}</title>
        <path d='M18 18A61.45 61.45 0 1 1 0 61.44 61.28 61.28 0 0 1 18 18Zm59.38 21 6.53 6.54a4 4 0 0 1 0 5.63L73.6 61.44l10.31 10.31a4 4 0 0 1 0 5.63l-6.53 6.53a4 4 0 0 1-5.63 0L61.44 73.6 51.13 83.91a4 4 0 0 1-5.63 0L39 77.38a4 4 0 0 1 0-5.63l10.28-10.31L39 51.13a4 4 0 0 1 0-5.63l6.5-6.5a4 4 0 0 1 5.63 0l10.31 10.28L71.75 39a4 4 0 0 1 5.63 0ZM61.44 10.54a50.91 50.91 0 1 0 36 14.91 50.83 50.83 0 0 0-36-14.91Z' />
    </svg>
)
