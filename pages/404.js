import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import Link from 'next/link'
import Image from 'next/image'

import NotFoundImg from '../assets/images/notFound/not-found.png'

const NotFound = () => {
    const { lang } = useSelector(selectLangSlice)
    const router = useRouter()

    const pushHome = () => {
        setTimeout(() => {
            // navigate('/')
            router.push('/')
        }, 10 * 1000)
    }

    useEffect(() => {
        pushHome()
    }, [])
    return (
        <div className='container'>
            <section className='not-found'>
                <div className='not-found__row'>
                    <div className='not-found__img'>
                        <Image src={NotFoundImg} alt='Not found' />
                    </div>
                </div>
                <div className='not-found__content'>
                    <h1 className='not-found__title'>
                        {lang === 'uz'
                            ? 'Kechirasiz!'
                            : lang === 'ru'
                            ? 'прошу прощения'
                            : 'Excuse me'}
                    </h1>
                    <h1 className='not-found__title'>
                        {' '}
                        {lang === 'uz'
                            ? 'Bunday sahfa topilmadi'
                            : lang === 'ru'
                            ? 'Такой страницы не найдено'
                            : 'No such page found'}
                    </h1>
                    <span className='not-found__desc'>
                        <Link href='/' className='not-found__link'>
                            {lang === 'uz'
                                ? 'Bosh sahifa'
                                : lang === 'ru'
                                ? 'Главная'
                                : 'Home'}
                        </Link>
                    </span>
                </div>
            </section>
        </div>
    )
}

export default NotFound
