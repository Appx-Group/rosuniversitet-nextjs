import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { selectLangSlice } from 'store/features/lang'
import { Toaster, toast } from 'react-hot-toast'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

import {
    UserSvg,
    EmailSvg,
    EditSvg,
    LocationSvg,
    TelegramSvg,
    CallSvg,
} from '../../assets/icons/Icons'

const Contacts = ({ data }) => {
    const [name, setName] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [text, setText] = useState('')
    const [btnShow, setBtnShow] = useState(false)
    const { lang } = useSelector(selectLangSlice)
    const {
        address,
        address_ru,
        address_uz,
        description,
        description_ru,
        description_uz,
        email,
        form_description,
        form_description_ru,
        form_description_uz,
        form_subtitle,
        form_subtitle_ru,
        form_subtitle_uz,
        form_title,
        form_title_ru,
        form_title_uz,
        image,
        map,
        phone,
        subtitle,
        subtitle_ru,
        subtitle_uz,
        title,
        title_ru,
        title_uz,
    } = data

    const onSubmit = (e) => {
        e.preventDefault()
        setBtnShow(true)

        if (name.length > 0 && emailInput.length > 0 && text.length > 0) {
            toast.promise(
                axios
                    .post('https://site.bronme.uz/dev/v1/message/create')
                    .then((res) => {
                        console.log(res)
                        setName('')
                        setEmailInput('')
                        setText('')
                        setBtnShow(false)
                    }),
                {
                    loading:
                        lang === 'uz'
                            ? 'Yuklanmoqda...'
                            : lang === 'ru'
                            ? 'Загрузка...'
                            : 'Loading...',
                    success:
                        lang === 'uz'
                            ? "Habar muvaffaqiyatli jo'natildi"
                            : lang === 'ru'
                            ? 'Сообщение успешно отправлено'
                            : 'Message successfully sent',
                    error: (err) => err.response.data.msg,
                }
            )
        }
    }
    return (
        <div className='container'>
            <div className='contacts'>
                <Toaster
                    toastOptions={{
                        className: '',
                        style: {
                            zIndex: '44',
                            top: '200px',
                        },
                    }}
                    containerStyle={{
                        top: 20,
                    }}
                />
                <div className='contacts-up'>
                    <div className='contacts-up__left'>
                        <SectionTitle
                            title={
                                lang === 'uz'
                                    ? title_uz
                                    : lang === 'ru'
                                    ? title_ru
                                    : title
                            }
                            titleBlue={
                                lang === 'uz' ? '' : lang === '' ? '' : ''
                            }
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
                        <p className='contacts-up__desc'>
                            {lang === 'uz'
                                ? description_uz
                                : lang === 'ru'
                                ? description_ru
                                : description}
                        </p>

                        <div className='contacts-up__detail'>
                            <div className='contacts-up__detail-item'>
                                <div className='contacts-up__detail-left'>
                                    <LocationSvg className='contacts-up__detail-icon' />
                                </div>
                                <div className='contacts-up__detail-right'>
                                    <h2 className='contacts-up__detail-title'>
                                        {lang === 'uz'
                                            ? 'Manzil'
                                            : lang === 'ru'
                                            ? 'Адрес'
                                            : 'Address'}
                                    </h2>
                                    <p className='contacts-up__detail-desc'>
                                        {lang === 'uz'
                                            ? address_uz
                                            : lang === 'ru'
                                            ? address_ru
                                            : address}
                                    </p>
                                </div>
                            </div>
                            <div className='contacts-up__detail-item'>
                                <div className='contacts-up__detail-left'>
                                    <TelegramSvg className='contacts-up__detail-icon' />
                                </div>
                                <div className='contacts-up__detail-right'>
                                    <h2 className='contacts-up__detail-title'>
                                        {lang === 'uz'
                                            ? 'Pochta'
                                            : lang === 'ru'
                                            ? 'Почта'
                                            : 'Mail'}
                                    </h2>
                                    <p className='contacts-up__detail-desc'>
                                        {email}
                                    </p>
                                </div>
                            </div>
                            <div className='contacts-up__detail-item'>
                                <div className='contacts-up__detail-left'>
                                    <CallSvg className='contacts-up__detail-icon' />
                                </div>
                                <div className='contacts-up__detail-right'>
                                    <h2 className='contacts-up__detail-title'>
                                        {lang === 'uz'
                                            ? 'Kontaktlar'
                                            : lang === 'ru'
                                            ? 'Контакты'
                                            : 'Contacts'}
                                    </h2>
                                    <p className='contacts-up__detail-desc'>
                                        {phone.ru.title} {phone.ru.number}
                                    </p>
                                    <p className='contacts-up__detail-desc'>
                                        {phone.uz.title} {phone.uz.number}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className='contacts-up__right'
                        dangerouslySetInnerHTML={{
                            __html: map,
                        }}
                    />
                </div>
                <div className='contacts-down'>
                    <div className='contacts-down__left'>
                        <Image
                            className='contacts-down__img'
                            src={image ? image : notImage}
                            alt='cotacts img'
                            width={550}
                            height={500}
                        />
                    </div>
                    <div className='contacts-down__right'>
                        <SectionTitle
                            title={
                                lang === 'uz'
                                    ? form_title_uz
                                    : lang === 'ru'
                                    ? form_title_ru
                                    : form_title
                            }
                            titleBlue=''
                            subTitle={
                                lang === 'uz'
                                    ? form_subtitle_uz
                                    : lang === 'ru'
                                    ? form_subtitle_ru
                                    : form_subtitle
                            }
                            theme='white'
                            position='left'
                            textPosition='left'
                            sircleColor='green'
                        />
                        <p className='contacts-up__desc'>
                            {lang === 'uz'
                                ? form_description_uz
                                : lang === 'ru'
                                ? form_description_ru
                                : form_description}
                        </p>

                        <form className='contacts-down__form'>
                            <div className='contacts-down__item'>
                                <input
                                    required
                                    className={`contacts-down__input ${
                                        btnShow
                                            ? name.length === 0 && btnShow
                                                ? 'red'
                                                : 'green'
                                            : ''
                                    }`}
                                    type='text'
                                    onChange={(e) =>
                                        setName(e.target.value.trim())
                                    }
                                    value={name}
                                    placeholder={
                                        lang === 'uz'
                                            ? 'Ismingiz'
                                            : lang === 'ru'
                                            ? 'Имя'
                                            : 'Name'
                                    }
                                />
                                <UserSvg className='contacts-down__icon' />
                            </div>
                            <div className='contacts-down__item'>
                                <input
                                    required
                                    className={`contacts-down__input ${
                                        btnShow
                                            ? emailInput.length === 0 && btnShow
                                                ? 'red'
                                                : 'green'
                                            : ''
                                    }`}
                                    type='email'
                                    value={emailInput}
                                    onChange={(e) =>
                                        setEmailInput(e.target.value.trim())
                                    }
                                    placeholder={
                                        lang === 'uz'
                                            ? 'Elektron pochtangiz'
                                            : lang === 'ru'
                                            ? 'Почта'
                                            : 'Email'
                                    }
                                />
                                <EmailSvg className='contacts-down__icon' />
                            </div>
                            <div className='contacts-down__item'>
                                <textarea
                                    required
                                    id='story'
                                    name='story'
                                    onChange={(e) =>
                                        setText(e.target.value.trim())
                                    }
                                    value={text}
                                    className={`contacts-down__input ${
                                        btnShow
                                            ? text.length === 0 && btnShow
                                                ? 'red'
                                                : 'green'
                                            : ''
                                    }`}
                                    rows='5'
                                    cols='33'
                                    placeholder={
                                        lang === 'uz'
                                            ? 'Xabar...'
                                            : lang === 'ru'
                                            ? 'Сообщение...'
                                            : 'Message...'
                                    }
                                ></textarea>
                                <EditSvg className='contacts-down__icon contacts-down__icon_textarea' />
                            </div>
                            <button
                                onClick={onSubmit}
                                className='contacts-down__btn'
                            >
                                {lang === 'uz'
                                    ? "Bog'lanish"
                                    : lang === 'ru'
                                    ? 'СВЯЗАТЬСЯ'
                                    : 'Connect'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
