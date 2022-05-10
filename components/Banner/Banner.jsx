import React from 'react'
import useWindowSize from 'hooks/useWindowSize'
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
import { notImage } from 'assets/data/PartnersDara/ImagesData'

const Banner = ({ data }) => {
    const size = useWindowSize()
    const { lang } = useSelector(selectLangSlice)
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
                            src={data?.image ? data?.image : notImage}
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
                                ? data?.title_uz
                                : lang === 'ru'
                                ? data?.title_ru
                                : data?.title}
                        </motion.h1>
                        <motion.h3
                            className='banner__subtitle'
                            custom={2}
                            variants={textAnimation}
                        >
                            {lang === 'uz'
                                ? data?.subtitle_uz
                                : lang === 'ru'
                                ? data?.subtitle_ru
                                : data?.subtitle}
                        </motion.h3>
                        <motion.div custom={3} variants={textAnimation}>
                            <Link href={data?.link.url}>
                                <a className='default__btn'>
                                    {lang === 'uz'
                                        ? data?.link?.title_uz
                                        : data?.lang === 'ru'
                                        ? data?.link?.title_ru
                                        : data?.link?.title}
                                </a>
                            </Link>
                        </motion.div>
                    </div>

                    <PatternThree />
                    <div className='pattrn-flags'>
                        <motion.div
                            custom={1}
                            variants={flagAnimation}
                            className='flag-wrapper'
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
                                        alt='flag'
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
                        <motion.div
                            custom={5}
                            variants={flagAnimation}
                            className='flag-wrapper flag-five'
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
                        <motion.div
                            custom={6}
                            variants={flagAnimation}
                            className='flag-wrapper flag-six'
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
                        <motion.div
                            custom={7}
                            variants={flagAnimation}
                            className='flag-wrapper flag-seven'
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
                        <motion.div
                            custom={8}
                            variants={flagAnimation}
                            className='flag-wrapper flag-eight'
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
                        <motion.div
                            custom={9}
                            variants={flagAnimation}
                            className='flag-wrapper flag-nine'
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
                        <motion.div
                            custom={10}
                            variants={flagAnimation}
                            className='flag-wrapper flag-ten'
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
