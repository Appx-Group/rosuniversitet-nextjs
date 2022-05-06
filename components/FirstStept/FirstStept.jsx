import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from '../../store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { motion } from 'framer-motion'
import FirstSteptImgOne from '../../assets/images/home/firstStept/first-stept-one.png'
import FirstSteptImgTwo from '../../assets/images/home/firstStept/first-stept-two.png'
import FirstSteptImgThree from '../../assets/images/home/firstStept/first-stept-three.png'

const firstSteptData = [
    {
        title: 'Выбрать Специальность',
        titleUz: 'Mutaxassislikni Tanlang',
        titleEng: ' Choose a Specialty',
        description:
            ' Росуниверситет предлагает обучение более чем по 500 популярных направлений.',
        descriptionUz:
            "Davlat universiteti 500 dan ortiq mashhur yo'nalishlar bo'yicha treningni taklif qiladi.",
        descriptionEng:
            'The State University offers training in more than 500 popular areas.',
        img: FirstSteptImgOne,
    },
    {
        title: 'Подать Документы',
        titleUz: 'Hujjatlarni Taqdim Etish',
        titleEng: 'Submit Documents',
        description:
            'Заполните заявку чтобы начать строить своё будущее уже сейчас',
        descriptionUz:
            "Arizani to'ldiring endi kelajagingizni qurishni boshlash uchun ",
        descriptionEng:
            'Fill out the application to start building your future now',
        img: FirstSteptImgTwo,
    },
    {
        title: 'Стать Студентом',
        titleUz: "Talaba Bo'lish",
        titleEng: 'Become a Student',
        description:
            'После сбора необходимых документов, мы направим их в выбранный Вами ВУЗ',
        descriptionUz:
            "Kerakli hujjatlarni to'plab bo'lgach, ularni siz tanlagan oliy o'quv yurtiga yo'naltiramiz",
        descriptionEng:
            'After collecting the necessary documents, we will send them to the university of your choice',
        img: FirstSteptImgThree,
    },
]

const cardAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.4 },
    }),
}

const FirstStept = () => {
    const { lang } = useSelector(selectLangSlice)
    return (
        <section className='first-stept'>
            <div className='container'>
                <SectionTitle
                    title={
                        lang === 'uz'
                            ? 'Sizning ehtiyojlaringiz uchun qilingan Davlat universitetlari'
                            : lang === 'ru'
                            ? 'СДЕЛАНО ДЛЯ ВАШИХ ПОТРЕБНОСТЕЙ Государственные ВУЗы'
                            : 'MADE FOR YOUR NEEDS Public UNIVERSITIES'
                    }
                    titleBlue=''
                    subTitle={
                        lang === 'uz'
                            ? 'SIZNING EHTIYOJLARINGIZ UCHUN YARATILGAN'
                            : lang === 'ru'
                            ? 'СДЕЛАНО ДЛЯ ВАШИХ ПОТРЕБНОСТЕЙ '
                            : 'MADE FOR YOUR NEEDS '
                    }
                />

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.2, once: true }}
                    className='first-stept__wrapper'
                >
                    {firstSteptData.map(
                        (
                            {
                                title,
                                titleUz,
                                titleEng,
                                descriptionEng,
                                descriptionUz,
                                description,
                                img,
                            },
                            index
                        ) => (
                            <motion.div
                                key={index}
                                custom={index + 1}
                                variants={cardAnimation}
                                className='first-stept__card'
                            >
                                <div className='first-stept__card-img'>
                                    <Image src={img} alt='first stepd img' />
                                </div>
                                <h2 className='first-stept__card-title'>
                                    {lang === 'uz'
                                        ? titleUz
                                        : lang === 'ru'
                                        ? title
                                        : titleEng}
                                </h2>
                                <p className='first-stept__card-desc'>
                                    {lang === 'uz'
                                        ? descriptionUz
                                        : lang === 'ru'
                                        ? description
                                        : descriptionEng}
                                </p>
                            </motion.div>
                        )
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default FirstStept
