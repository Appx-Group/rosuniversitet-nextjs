import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Menu from './Menu/Menu'
import LangSelect from '../LangSelect/LangSelect'
import NavMenuMobile from './Menu/NavMenuMobile'

const Header = ({ menuData }) => {
    const [status, setStatus] = useState('close')
    const [burgerActive, setBurgerActive] = useState('')

    const changeBurger = () => {
        setStatus(status === 'open' ? 'close' : 'open')
        setBurgerActive(burgerActive === 'active' ? 'noActive' : 'active')

        const body = document.body
        status === 'open'
            ? body.classList.remove('hidden')
            : body.classList.add('hidden')
    }

    useEffect(() => {
        const body = document.body
        let lastScroll = 0

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset
            if (currentScroll <= 0) {
                body.classList.remove('scroll-up')
                return
            }

            if (
                currentScroll > lastScroll &&
                !body.classList.contains('scroll-down')
            ) {
                body.classList.remove('scroll-up')
                body.classList.add('scroll-down')
            } else if (
                currentScroll < lastScroll &&
                body.classList.contains('scroll-down')
            ) {
                body.classList.remove('scroll-down')
                body.classList.add('scroll-up')
            }
            lastScroll = currentScroll
        })
    }, [])
    return (
        <header className='header'>
            <div className='container'>
                <nav className='nav'>
                    <div onClick={() => changeBurger()} className='nav__burger'>
                        <span className={status}></span>
                        <span className={status}></span>
                        <span className={status}></span>
                    </div>
                    <Link href='/'>
                        <a className='nav__logo'>Rosuniversitet</a>
                    </Link>
                    <Menu menuData={menuData} />
                    <LangSelect />
                </nav>
            </div>
            <NavMenuMobile
                status={status}
                setStatus={setStatus}
                setBurgerActive={setBurgerActive}
                burgerActive={burgerActive}
                changeBurger={changeBurger}
                menuData={menuData}
            />
        </header>
    )
}

export default Header
