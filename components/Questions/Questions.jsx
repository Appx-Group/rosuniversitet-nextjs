import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import Accordion from '../Accordion/Accordion'

const Questions = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)
    const {
        subtitle,
        subtitle_ru,
        subtitle_uz,
        title,
        title_ru,
        title_uz,
        items,
    } = data
    return (
        <div className='container'>
            <div className='questions'>
                <div className='questions__content'>
                    <SectionTitle
                        title={
                            lang === 'uz'
                                ? title_uz
                                : lang === 'ru'
                                ? title_ru
                                : title
                        }
                        titleBlue=''
                        subTitle={
                            lang === 'uz'
                                ? subtitle_uz
                                : lang === 'ru'
                                ? subtitle_ru
                                : subtitle
                        }
                        theme='white'
                        position='center'
                        sircleColor='green'
                    />
                    {/* <h1 className='questions__title'>
                        {lang === 'uz'
                            ? "Ko'p so'raladigan savollar"
                            : lang === 'ru'
                            ? 'Часто задаваемые вопросы'
                            : 'Frequently asked Questions'}
                    </h1> */}
                    {/* <h3 className='questions__subtitle'>
                        {lang === 'uz'
                            ? 'Bu yerda siz barcha savollaringizga javob topishingiz mumkin!'
                            : lang === 'ru'
                            ? 'Здесь Вы можете найти все ответы на Ваши вопросы!'
                            : 'Here you can find all the answers to your questions!'}
                    </h3> */}
                </div>
                <Accordion data={items} />
            </div>
        </div>
    )
}

export default Questions
