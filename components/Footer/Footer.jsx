import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectLangSlice } from '../../store/features/lang'
import {
    InstagramSvg,
    TelegramSvg,
    EmailSvg,
    LocationSvg,
    TelegramSvg2,
    CallSvg,
} from '../../assets/icons/Icons'

const Footer = ({ footerData }) => {
    const nowYear = new Date().getFullYear()
    const { lang } = useSelector(selectLangSlice)
    if (footerData === null) {
        return <div className='api-error'></div>
    }

    const {
        contact,
        popular,
        social,
        subtitle,
        subtitle_ru,
        subtitle_uz,
        title,
        title_ru,
        title_uz,
    } = footerData

    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-top'>
                    <div className='footer__item'>
                        <h1 className='footer__logo'>
                            {lang === 'uz'
                                ? title_uz
                                : lang === 'ru'
                                ? title_ru
                                : title}
                        </h1>
                        <p className='footer__desc'>
                            {lang === 'uz'
                                ? subtitle_uz
                                : lang === 'ru'
                                ? subtitle_ru
                                : subtitle}
                        </p>
                        <div className='footer__social'>
                            <a
                                className='footer__social-item'
                                href={social.instagram}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <InstagramSvg />
                            </a>
                            <a
                                className='footer__social-item'
                                href={social.telegram}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <TelegramSvg />
                            </a>
                            <a
                                className='footer__social-item'
                                href={`mailto:${social.email}`}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <EmailSvg />
                            </a>
                        </div>
                    </div>
                    <div className='footer__item'>
                        <h3 className='footer__title'>
                            {lang === 'uz'
                                ? 'ALOQA'
                                : lang === 'ru'
                                ? 'КОНТАКТЫ'
                                : 'CONTACTS'}
                        </h3>
                        <div className='footer__item-info'>
                            <LocationSvg className='footer__item-info-icon' />
                            <span className='footer__item-info-text'>
                                {lang === 'uz'
                                    ? contact.address_uz
                                    : lang === 'ru'
                                    ? contact.address_ru
                                    : contact.address}
                            </span>
                        </div>
                        <div className='footer__item-info'>
                            <TelegramSvg2 className='footer__item-info-icon' />

                            <span className='footer__item-info-text'>
                                {social.email}
                            </span>
                        </div>
                        <div className='footer__item-info'>
                            <CallSvg className='footer__item-info-icon' />

                            <div className='footer__item-info-text'>
                                <h3>
                                    {contact.phone.phone_ru.title}{' '}
                                    {contact.phone.phone_ru.number}
                                </h3>
                                <h3>
                                    {contact.phone.phone_uz.title}{' '}
                                    {contact.phone.phone_uz.number}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='footer__item'>
                        <h3 className='footer__title'>
                            {' '}
                            {lang === 'uz'
                                ? 'MASHHUR SAHIFALAR'
                                : lang === 'ru'
                                ? 'ПОПУЛЯРНЫЕ СТРАНИЦЫ'
                                : 'POPULAR PAGES'}
                        </h3>
                        {popular.map(
                            ({ id, title, title_ru, title_uz, slug }) => (
                                <Link
                                    key={id}
                                    href={`/${slug === '/' ? '' : slug}`}
                                >
                                    <a className='footer__item-link'>
                                        {lang === 'uz'
                                            ? title_uz
                                            : lang === 'ru'
                                            ? title_ru
                                            : title}
                                    </a>
                                </Link>
                            )
                        )}
                    </div>
                    <div className='footer__item'>
                        <h3 className='footer__title'>
                            {' '}
                            {lang === 'uz'
                                ? 'Yangi sahifa'
                                : lang === 'ru'
                                ? 'Новая страница'
                                : 'New page'}
                        </h3>
                        <Link href='/'>
                            <a className='footer__item-link'>
                                {lang === 'uz'
                                    ? 'Bosh sahifa'
                                    : lang === 'ru'
                                    ? 'Дом'
                                    : 'Home'}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='footer__line'></div>
                <div className='footer-bottom'>
                    <span className='footer-bottom__about'>
                        {lang === 'uz'
                            ? 'Veb-sayt yaratuvchisi'
                            : lang === 'ru'
                            ? 'Создатель сайта'
                            : 'Website Creator'}
                        :
                        <a
                            className='footer-bottom__link footer-bottom__link_red'
                            href='http://appx.uz/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {' '}
                            Appx Group
                        </a>
                    </span>
                    <span className='footer-bottom__text'>
                        Copyright © {nowYear}{' '}
                        <span className='footer-bottom__link'>
                            ROSUNIVERSITET
                        </span>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
