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
    const [emailInput, setEmailInput] = useState('')
    const [text, setText] = useState('')
    const [btnShow, setBtnShow] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        // this is where we'll call our future formatPhoneNumber function that we haven't written yet.
        const formattedPhoneNumber = formatPhoneNumber(e.target.value)
        // we'll set the input value using our setInputValue
        setInputValue(formattedPhoneNumber)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setBtnShow(true)

        if (name.length > 0 && emailInput.length > 0 && text.length > 0) {
            toast.promise(
                axios
                    .post('https://site.bronme.uz/dev/v1/message/create', {
                        name: name,
                        email: emailInput,
                        text: text,
                    })
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
            <SectionTitle
                title={
                    lang === 'uz'
                        ? 'number'
                        : lang === 'ru'
                        ? 'number'
                        : 'number'
                }
                titleBlue={lang === 'uz' ? '' : lang === '' ? '' : ''}
                subTitle={
                    lang === 'uz'
                        ? 'number'
                        : lang === 'ru'
                        ? 'number'
                        : 'number'
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
                                onChange={(e) => setName(e.target.value.trim())}
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
                                onChange={(e) => setName(e.target.value.trim())}
                                value={name}
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
                                onChange={(e) => setName(e.target.value.trim())}
                                value={name}
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
                                onChange={(e) => setName(e.target.value.trim())}
                                value={name}
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
                            country={'Uzbekistan'}
                            value={'+998'}
                            inputClass='contacts-down__input'
                            onChange={(phone) => console.log(phone)}
                            inputStyle={{
                                border: '1px solid #d6d5d7',
                                borderRadius: '8px',
                                height: '50px',
                                width: '100%',
                                margin: ' 0',
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
                                type='text'
                                onChange={(e) => setName(e.target.value.trim())}
                                value={name}
                                placeholder={
                                    lang === 'uz'
                                        ? 'Ismingiz'
                                        : lang === 'ru'
                                        ? 'Имя'
                                        : 'Name'
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

                <button onClick={onSubmit} className='contacts-down__btn'>
                    {lang === 'uz'
                        ? "Bog'lanish"
                        : lang === 'ru'
                        ? 'СВЯЗАТЬСЯ'
                        : 'Connect'}
                </button>
            </form>
        </div>
    )
}

export default GlobalForm
