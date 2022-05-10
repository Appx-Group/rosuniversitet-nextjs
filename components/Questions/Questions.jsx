import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import Accordion from '../Accordion/Accordion'

const Questions = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)

    return (
        <div className='container'>
            <div className='questions'>
                <div className='questions__content'>
                    <SectionTitle
                        title={
                            lang === 'uz'
                                ? data?.title_uz
                                : lang === 'ru'
                                ? data?.title_ru
                                : data?.title
                        }
                        titleBlue=''
                        subTitle={
                            lang === 'uz'
                                ? data?.subtitle_uz
                                : lang === 'ru'
                                ? data?.subtitle_ru
                                : data?.subtitle
                        }
                        theme='white'
                        position='center'
                        sircleColor='green'
                    />
                </div>
                <Accordion data={data?.items} />
            </div>
        </div>
    )
}

export default Questions
