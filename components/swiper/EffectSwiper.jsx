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
                    {data?.map(
                        ({
                            id,
                            title,
                            title_uz,
                            title_ru,
                            subtitle,
                            subtitle_uz,
                            subtitle_ru,
                            person,
                            image,
                        }) => (
                            <SwiperSlide key={id}>
                                <div className='swip'>
                                    <h3 className='swip__title'>
                                        {lang === 'uz'
                                            ? title_uz
                                            : lang === 'ru'
                                            ? title_ru
                                            : title}
                                    </h3>
                                    <p className='swip__desc'>
                                        {lang === 'uz'
                                            ? subtitle_uz
                                            : lang === 'ru'
                                            ? subtitle_ru
                                            : subtitle}
                                    </p>
                                    <div className='swip__person'>
                                        <div className='swip__person-img'>
                                            <Image
                                                src={image ? image : notImage}
                                                alt='person img'
                                                width={150}
                                                height={150}
                                            />
                                        </div>
                                        <div className='swip__person-content'>
                                            <h5>
                                                {lang === 'uz'
                                                    ? person?.name_uz
                                                    : lang === 'ru'
                                                    ? person?.name_ru
                                                    : person?.name}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className='swip__patern'></div>
                                </div>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </section>
    )
}

export default EffectSwiper
