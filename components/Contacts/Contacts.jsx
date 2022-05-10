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
    const { lang } = useSelector(selectLangSlice)
    const [name, setName] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [text, setText] = useState('')
    const [btnShow, setBtnShow] = useState(false)

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
                                    ? data?.title_uz
                                    : lang === 'ru'
                                    ? data?.title_ru
                                    : data?.title
                            }
                            titleBlue={
                                lang === 'uz' ? '' : lang === '' ? '' : ''
                            }
                            subTitle={
                                lang === 'uz'
                                    ? data?.subtitle_uz
                                    : lang === 'ru'
                                    ? data?.subtitle_ru
                                    : data?.subtitle
                            }
                            theme='white'
                            position='left'
                            sircleColor='green'
                        />
                        <p className='contacts-up__desc'>
                            {lang === 'uz'
                                ? data?.description_uz
                                : lang === 'ru'
                                ? data?.description_ru
                                : data?.description}
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
                                            ? data?.address_uz
                                            : lang === 'ru'
                                            ? data?.address_ru
                                            : data?.address}
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
                                        {data?.email}
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
                                        {data?.phone?.ru_title}{' '}
                                        <span>
                                            {data?.phone?.ru_number_first}{' '}
                                            <br />{' '}
                                            {data?.phone?.ru_number_second}
                                        </span>
                                    </p>
                                    <p className='contacts-up__detail-desc'>
                                        {data?.phone?.uz_title}{' '}
                                        <span>
                                            {data?.phone?.uz_number_first}{' '}
                                            <br />{' '}
                                            {data?.phone?.uz_number_second}
                                        </span>
                                        {data?.phone?.uz_number}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className='contacts-up__right'
                        dangerouslySetInnerHTML={{
                            __html: data?.map,
                        }}
                    />
                </div>
                <div className='contacts-down'>
                    <div className='contacts-down__left'>
                        <Image
                            className='contacts-down__img'
                            src={data?.image ? data?.image : notImage}
                            alt='cotacts img'
                            width={550}
                            height={500}
                        />
                    </div>
                    <div className='contacts-down__right'>
                        <SectionTitle
                            title={
                                lang === 'uz'
                                    ? data?.form_title_uz
                                    : lang === 'ru'
                                    ? data?.form_title_ru
                                    : data?.form_title
                            }
                            titleBlue=''
                            subTitle={
                                lang === 'uz'
                                    ? data?.form_subtitle_uz
                                    : lang === 'ru'
                                    ? data?.form_subtitle_ru
                                    : data?.form_subtitle
                            }
                            theme='white'
                            position='left'
                            textPosition='left'
                            sircleColor='green'
                        />
                        <p className='contacts-up__desc'>
                            {lang === 'uz'
                                ? data?.form_description_uz
                                : lang === 'ru'
                                ? data?.form_description_ru
                                : data?.form_description}
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
