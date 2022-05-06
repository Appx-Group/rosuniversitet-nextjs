import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import useWindowSize from 'hooks/useWindowSize'

import 'swiper/css'

const SwiperOur = ({ data }) => {
    const size = useWindowSize()
    return (
        <div className='swiper-our'>
            <Swiper
                slidesPerView={size.width < 640 ? 3 : size.width < 768 ? 5 : 7}
                loop={true}
                className='swiper-wrapper'
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {data.map((item) => (
                    <SwiperSlide key={item?.id} className='slide'>
                        <div className='slide-content'>
                            <Image
                                src={item?.image}
                                alt='slide'
                                width={100}
                                height={100}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperOur
