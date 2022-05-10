import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { notImage } from 'assets/data/PartnersDara/ImagesData'

const EffectSwiper = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)
    return (
        <section className='effect-swiper'>
            <div className='container'>
                <Swiper
                    effect={'coverflow'}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    grabCursor={true}
                    loop={true}
                    fadeEffect={{
                        crossFade: true,
                    }}
                    coverflowEffect={{
                        rotate: 1, // Slide rotate in degrees
                        stretch: 1, // Stretch space between slides (in px)
                        depth: 60, // Depth offset in px (slides translate in Z axis)
                        modifier: 12, // Effect multipler 8
                        slideShadows: true, // Enables slides shadows
                    }}
                    modules={[EffectCoverflow, Pagination]}
                >
                    {data?.map((item) => (
                        <SwiperSlide key={item?.id}>
                            <div className='swip'>
                                <h3 className='swip__title'>
                                    {lang === 'uz'
                                        ? item?.title_uz
                                        : lang === 'ru'
                                        ? item?.title_ru
                                        : item?.title}
                                </h3>
                                <p className='swip__desc'>
                                    {lang === 'uz'
                                        ? item?.subtitle_uz
                                        : lang === 'ru'
                                        ? item?.subtitle_ru
                                        : item?.subtitle}
                                </p>
                                <div className='swip__person'>
                                    <div className='swip__person-img'>
                                        <Image
                                            src={
                                                item?.image
                                                    ? item?.image
                                                    : notImage
                                            }
                                            alt='person img'
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <div className='swip__person-content'>
                                        <h5>
                                            {lang === 'uz'
                                                ? item?.person?.name_uz
                                                : lang === 'ru'
                                                ? item?.person?.name_ru
                                                : item?.person?.name}
                                        </h5>
                                    </div>
                                </div>
                                <div className='swip__patern'></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default EffectSwiper
