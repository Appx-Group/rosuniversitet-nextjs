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
    const {
        id,
        subtitle,
        subtitle_uz,
        subtitle_ru,
        title,
        title_uz,
        title_ru,
        items,
    } = data
    return (
        <section className='about-us-home'>
            <div className='container'>
                <SectionTitle
                    title={
                        lang === 'uz'
                            ? title_uz
                            : lang === 'ru'
                            ? title_ru
                            : title
                    }
                    titleBlue={lang === 'uz' ? '' : lang === '' ? '' : ''}
                    subTitle={
                        lang === 'uz'
                            ? subtitle_uz
                            : lang === 'ru'
                            ? subtitle_ru
                            : subtitle
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
                    {items?.map(
                        (
                            {
                                id,
                                title,
                                title_ru,
                                title_uz,
                                subtitle,
                                subtitle_ru,
                                subtitle_uz,
                                image,
                            },
                            index
                        ) => (
                            <motion.div
                                key={id}
                                custom={index + 1}
                                variants={cardtAnimation}
                                className='cart-about'
                            >
                                <div className='cart-about__img'>
                                    <Image
                                        src={image ? image : notImage}
                                        alt='about cart img'
                                        width={200}
                                        height={180}
                                    />
                                </div>
                                <div className='cart-about__content'>
                                    <h2 className='cart-about__title'>
                                        {lang === 'uz'
                                            ? title_uz
                                            : lang === 'ru'
                                            ? title_ru
                                            : title}
                                    </h2>
                                    <p className='cart-about__subtitle'>
                                        {lang === 'uz'
                                            ? subtitle_uz
                                            : lang === 'ru'
                                            ? subtitle_ru
                                            : subtitle}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default AboutUsHome
