import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { motion } from 'framer-motion'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

const cardtAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.4 },
    }),
}

const AboutUsHome = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)

    return (
        <section className='about-us-home'>
            <div className='container'>
                <SectionTitle
                    title={
                        lang === 'uz'
                            ? data?.title_uz
                            : lang === 'ru'
                            ? data?.title_ru
                            : data?.title
                    }
                    titleBlue={lang === 'uz' ? '' : lang === '' ? '' : ''}
                    subTitle={
                        lang === 'uz'
                            ? data?.subtitle_uz
                            : lang === 'ru'
                            ? data?.subtitle_ru
                            : data?.subtitle
                    }
                    theme='white'
                    position='center'
                />

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.4, once: true }}
                    className='cart-wrap'
                >
                    {data?.items?.map((item, index) => (
                        <motion.div
                            key={item?.id}
                            custom={index + 1}
                            variants={cardtAnimation}
                            className='cart-about'
                        >
                            <div className='cart-about__img'>
                                <Image
                                    src={item?.image ? item?.image : notImage}
                                    alt='about cart img'
                                    width={200}
                                    height={180}
                                />
                            </div>
                            <div className='cart-about__content'>
                                <h2 className='cart-about__title'>
                                    {lang === 'uz'
                                        ? item?.title_uz
                                        : lang === 'ru'
                                        ? item?.title_ru
                                        : item?.title}
                                </h2>
                                <p className='cart-about__subtitle'>
                                    {lang === 'uz'
                                        ? item?.subtitle_uz
                                        : lang === 'ru'
                                        ? item?.subtitle_ru
                                        : item?.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default AboutUsHome
