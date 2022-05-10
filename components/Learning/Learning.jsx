import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { SectionTitle } from '../SectionTitle/SectionTitle'

const Learning = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)
    return (
        <div className='container'>
            <section className='learning'>
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

                <ul className='learning-list'>
                    {data?.items.map((item) => (
                        <div
                            className='text-container learning-list-row'
                            key={item?.id}
                            dangerouslySetInnerHTML={{
                                __html:
                                    lang === 'uz'
                                        ? item?.text_uz
                                        : lang === 'ru'
                                        ? item?.text_ru
                                        : item?.text,
                            }}
                        />
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Learning
