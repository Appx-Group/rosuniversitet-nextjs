import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { selectLangSlice } from 'store/features/lang'
import { Toaster, toast } from 'react-hot-toast'
import { notImage } from 'assets/data/PartnersDara/ImagesData'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import {
    UserSvg,
    EmailSvg,
    EditSvg,
    LocationSvg,
    TelegramSvg,
    CallSvg,
    CallSvg2,
    UniversitesSvg,
    CitySvg,
    PositionStudentSvg,
} from '../../assets/icons/Icons'

const GlobalForm = () => {
    const { lang } = useSelector(selectLangSlice)
    const [name, setName] = useState('')
    const [tel, setTel] = useState('+998')
    const [university, setUniversity] = useState('')
    const [city, setCity] = useState('')
    const [place, setPlace] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [text, setText] = useState('')
    const [btnShow, setBtnShow] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        setBtnShow(true)

        if (
            name.length > 0 &&
            emailInput.length > 0 &&
            text.length > 0 &&
            tel.length > 0 &&
            university.length > 0 &&
            city.length > 0 &&
            place.length > 0
        ) {
            toast.promise(
                axios
                    .post('https://site.bronme.uz/dev/v1/message/create', {
                        type: 'feedback',
                        name: name,
                        city: city,
                        email: emailInput,
                        phone: tel,
                        text: text,
                        organization: university,
                        position: place,
                    })
                    .then((res) => {
                        console.log(res)
                        setName('')
                        setCity('')
                        setTel('')
                        setEmailInput('')
                        setText('')
                        setPlace('')
                        setUniversity('')
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
                    error: (err) => console.log(error),
                }
            )
        }
    }
    return (
        <div className='form-wrap'>
            <div className='container '>
                <SectionTitle
                    title={
                        lang === 'uz'
                            ? 'XABAR QOLDIRISH'
                            : lang === 'ru'
                            ? 'Feedback form'
                            : 'LEAVE A MESSAGE'
                    }
                    titleBlue={lang === 'uz' ? '' : lang === '' ? '' : ''}
                    subTitle={
                        lang === 'uz'
                            ? 'Fikr-mulohaza shakli'
                            : lang === 'ru'
                            ? 'Форма обратной связи'
                            : 'Feedback form'
                    }
                    theme='white'
                    position='center'
                />
                <form className='global-form'>
                    <div className='global-form__item'>
                        <div className='global-form__left'>
                            {' '}
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
                                            ? 'Aloqa qiluvchi shaxs'
                                            : lang === 'ru'
                                            ? 'Контактное лицо'
                                            : 'The contact person'
                                    }
                                />
                                <UserSvg className='contacts-down__icon' />
                            </div>
                        </div>
                        <div className='global-form__right'>
                            {' '}
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
                                        setUniversity(e.target.value.trim())
                                    }
                                    value={university}
                                    placeholder={
                                        lang === 'uz'
                                            ? 'Universitet nomi'
                                            : lang === 'ru'
                                            ? 'Наименование вуза'
                                            : 'University name'
                                    }
                                />
                                <UniversitesSvg className='contacts-down__icon' />
                            </div>
                        </div>
                    </div>
                    <div className='global-form__item'>
                        <div className='global-form__left'>
                            {' '}
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
                                        setCity(e.target.value.trim())
                                    }
                                    value={city}
                                    placeholder={
                                        lang === 'uz'
                                            ? 'Shahar'
                                            : lang === 'ru'
                                            ? 'Город'
                                            : 'City'
                                    }
                                />
                                <CitySvg className='contacts-down__icon' />
                            </div>
                        </div>
                        <div className='global-form__right'>
                            {' '}
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
                                        setPlace(e.target.value.trim())
                                    }
                                    value={place}
                                    placeholder={
                                        lang === 'uz'
                                            ? 'Lavozim'
                                            : lang === 'ru'
                                            ? 'Должность'
                                            : 'Position '
                                    }
                                />
                                <PositionStudentSvg className='contacts-down__icon' />
                            </div>
                        </div>
                    </div>
                    <div className='global-form__item'>
                        <div className='global-form__left'>
                            <PhoneInput
                                containerClass={` ${
                                    btnShow
                                        ? name.length === 0 && btnShow
                                            ? 'border-red'
                                            : 'border-green'
                                        : ''
                                }`}
                                country={'Uzbekistan'}
                                value={tel}
                                inputClass={`contacts-down__input `}
                                placeholder={
                                    lang === 'uz'
                                        ? 'Telefon raqami'
                                        : lang === 'ru'
                                        ? 'Номер телефона'
                                        : 'Phone number'
                                }
                                onChange={(phone) => setTel(phone.trim())}
                                inputStyle={{
                                    border: '1px solid #d6d5d7',
                                    borderRadius: '8px',
                                    height: '50px',
                                    width: '100%',
                                    margin: ' 0',
                                    fontSize: '16px',
                                    letterSpacing: '1.3px',
                                }}
                            />
                        </div>
                        <div className='global-form__right'>
                            {' '}
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
                                    type='email'
                                    onChange={(e) =>
                                        setEmailInput(e.target.value.trim())
                                    }
                                    value={emailInput}
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
                        </div>
                    </div>
                    <div className='contacts-down__item'>
                        <textarea
                            required
                            id='story'
                            name='story'
                            onChange={(e) => setText(e.target.value.trim())}
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

                    <button onSubmit={onSubmit} className='contacts-down__btn'>
                        {lang === 'uz'
                            ? "Bog'lanish"
                            : lang === 'ru'
                            ? 'СВЯЗАТЬСЯ'
                            : 'Connect'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default GlobalForm
