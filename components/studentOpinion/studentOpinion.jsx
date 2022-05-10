import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectLangSlice } from 'store/features/lang'
import EffectSwiper from '../swiper/EffectSwiper'
import { SectionTitle } from '../SectionTitle/SectionTitle'

import ImgFlagOne from '../../assets/images/home/studentOpinion/flagOne.png'
import ImgFlagTwo from '../../assets/images/home/studentOpinion/flagTwo.png'
import ImgFlagThree from '../../assets/images/home/studentOpinion/flagThree.png'

const StudentOpinion = ({ data }) => {
    const { lang } = useSelector(selectLangSlice)

    return (
        <section className='student-opinion'>
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
            </div>
            <EffectSwiper data={data?.items} />
            <div className='student-opinion__flag student-opinion__flag_one'>
                <Image src={ImgFlagOne} alt='flag' />
            </div>
            <div className='student-opinion__flag student-opinion__flag_two'>
                <Image src={ImgFlagTwo} alt='flag' />
            </div>
            <div className='student-opinion__flag student-opinion__flag_three'>
                <Image src={ImgFlagThree} alt='flag' />
            </div>
        </section>
    )
}

export default StudentOpinion
