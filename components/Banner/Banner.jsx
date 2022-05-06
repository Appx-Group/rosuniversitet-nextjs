import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { motion } from 'framer-motion'
import PatternThree from '../PattertThree/PatternThree'

import bgPattern from '../../assets/images/home/banner-pattern.png'
import russiaFlag from '../../assets/images/home/russia-flag.jpg'
import americanFlag from '../../assets/images/home/american-flag.jpg'
import turkeyFlag from '../../assets/images/home/turkey-flag.png'
import chinaFlag from '../../assets/images/home/china-flag.png'

const textAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: { delay: Number(custom * 0.4) + Number(2) },
    }),
}

const flagAnimation = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: (custom) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: Number(custom * 0.4) + Number(3) },
    }),
}

const patternAnimation = {
    hidden: {
        x: '-100%',
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: Number(custom * 0.4) + Number(2) },
    }),
}

const Banner = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)
    const {
        subtitle,
        subtitle_ru,
        subtitle_uz,
        title,
        title_ru,
        title_uz,
        link,
        image,
    } = data
    return (
        <div className='container-full'>
            <motion.section
                className='banner'
                initial='hidden'
                viewport={{ amount: 0.2, once: true }}
                whileInView={'visible'}
            >
                <div className='container'>
                    <div className='banner__bg-color'></div>
                    <div className='banner__bg'>
                        <Image
                            className='banner__bg'
                            src={image}
                            alt='bg banner'
                            layout='fill'
                        />
                    </div>
                    <div className='banner__pattern'>
                        <Image
                            unoptimized={true}
                            custom={4}
                            variants={patternAnimation}
                            src={bgPattern}
                            layout='fill'
                            alt='bg Pattern'
                        />
                    </div>

                    <div className='banner__content'>
                        <motion.h1
                            className='banner__title'
                            custom={1}
                            variants={textAnimation}
                        >
                            {lang === 'uz'
                                ? title_uz
                                : lang === 'ru'
                                ? title_ru
                                : title}
                            {/* <br />
                            <span className='banner__title_active'>
                                {lang === 'uz'
                                    ? 'kelajagingiz!'
                                    : lang === 'ru'
                                    ? 'твоё будущее! '
                                    : 'your future!'}
                            </span> */}
                        </motion.h1>
                        <motion.h3
                            className='banner__subtitle'
                            custom={2}
                            variants={textAnimation}
                        >
                            {lang === 'uz'
                                ? subtitle_uz
                                : lang === 'ru'
                                ? subtitle_ru
                                : subtitle}
                        </motion.h3>
                        <motion.div custom={3} variants={textAnimation}>
                            <Link href={link.url}>
                                <a className='default__btn'>
                                    {lang === 'uz'
                                        ? link?.title_uz
                                        : lang === 'ru'
                                        ? link?.title_ru
                                        : link?.title}
                                </a>
                            </Link>
                        </motion.div>
                    </div>

                    <PatternThree />
                    <div>
                        <motion.div
                            custom={1}
                            variants={flagAnimation}
                            className='flag-wrapper flag-russia'
                        >
                            <div className='flag-cart'>
                                <div className='flag-cart__img'>
                                    <Image
                                        layout='fill'
                                        src={russiaFlag}
                                        alt=''
                                    />
                                </div>
                                <span className='flag-cart__text'>Russia</span>
                            </div>
                        </motion.div>
                        <motion.div
                            custom={2}
                            variants={flagAnimation}
                            className='flag-wrapper flag-america'
                        >
                            <div className='flag-cart'>
                                <div className='flag-cart__img'>
                                    <Image
                                        className='flag-cart__img'
                                        unoptimized={true}
                                        loading='eager'
                                        layout='fill'
                                        src={americanFlag}
                                        alt=''
                                    />
                                </div>
                                <span className='flag-cart__text'>America</span>
                            </div>
                        </motion.div>
                        <motion.div
                            custom={3}
                            variants={flagAnimation}
                            className='flag-wrapper flag-turkey'
                        >
                            <div className='flag-cart'>
                                <div className='flag-cart__img'>
                                    <Image
                                        layout='fill'
                                        src={turkeyFlag}
                                        alt=''
                                    />
                                </div>
                                <span className='flag-cart__text'>Turkey</span>
                            </div>
                        </motion.div>
                        <motion.div
                            custom={4}
                            variants={flagAnimation}
                            className='flag-wrapper flag-china'
                        >
                            <div className='flag-cart'>
                                <div className='flag-cart__img'>
                                    <Image
                                        layout='fill'
                                        src={chinaFlag}
                                        alt=''
                                    />
                                </div>
                                <span className='flag-cart__text'>China</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default Banner
