import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { SircleSvg } from 'assets/icons/Icons'

import 'react-vertical-timeline-component/style.min.css'
import { SectionTitle } from '../SectionTitle/SectionTitle'

const Cooperation = ({ data }) => {
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
            <SectionTitle
                title={
                    lang === 'uz' ? title_uz : lang === 'ru' ? title_ru : title
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
            <div className='cooperation '>
                <VerticalTimeline lineColor='#F7F7F7'>
                    {items.map(
                        (
                            {
                                id,
                                title,
                                title_uz,
                                title_ru,
                                description,
                                description_uz,
                                description_ru,
                            },
                            index
                        ) => (
                            <VerticalTimelineElement
                                key={id}
                                position={` ${
                                    (index + 1) % 2 === 0 ? 'left' : 'right'
                                }`}
                                className='vertical-timeline-element--work cooperation__item'
                                contentStyle={{
                                    background: '#fff',
                                    color: '#1b2336',
                                    boxShadow:
                                        '11px 10px 38px 0 rgb(46 63 99 / 15%)',
                                    borderRadius: '8px',
                                }}
                                contentArrowStyle={{
                                    display: 'none',
                                }}
                                date={
                                    lang === 'uz'
                                        ? title_uz
                                        : lang === 'ru'
                                        ? title_ru
                                        : title
                                }
                                dateClassName='cooperation__title'
                                iconStyle={{
                                    width: '30px',
                                    height: '30px',
                                    background: 'white',
                                    marginLeft: '-15px',
                                    transform: 'transleteY(-100%)',
                                    boxShadow:
                                        '11px 10px 38px 0 rgb(46 63 99 / 15%)',
                                }}
                                icon={<SircleSvg />}
                            >
                                <p className='cooperation__desc'>
                                    {lang === 'uz'
                                        ? description_uz
                                        : lang === 'ru'
                                        ? description_ru
                                        : description}
                                </p>
                            </VerticalTimelineElement>
                        )
                    )}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Cooperation
