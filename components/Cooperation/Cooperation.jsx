import React from 'react'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { SectionTitle } from '../SectionTitle/SectionTitle'

import 'react-vertical-timeline-component/style.min.css'

import { SircleSvg } from 'assets/icons/Icons'

const Cooperation = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)

    return (
        <div className='container'>
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
            <div className='cooperation '>
                <VerticalTimeline lineColor='#F7F7F7'>
                    {data?.items?.map((item, index) => (
                        <VerticalTimelineElement
                            key={item?.id}
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
                                    ? item?.title_uz
                                    : lang === 'ru'
                                    ? item?.title_ru
                                    : item?.title
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
                                    ? item?.description_uz
                                    : lang === 'ru'
                                    ? item?.description_ru
                                    : item?.description}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Cooperation
