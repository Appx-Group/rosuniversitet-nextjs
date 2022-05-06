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
        <section className='student-opinion'>
            <div className='container'>
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
            </div>
            <EffectSwiper data={items} />
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
