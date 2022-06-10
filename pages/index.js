import Head from 'next/head'
import AboutUsHome from '@/components/AboutUsHome/AboutUsHome'
import Learning from '@/components/Learning/Learning'
import WhyChoosse from '@/components/WhyChoose/WhyChoose'
import Questions from '@/components/Questions/Questions'
import Branch from '@/components/Branch/Branch'
import OurBranches from '@/components/OurBranches/OurBranches'
import FreeConsultation from '@/components/FreeConsultation/FreeConsultation'
import OurPartners from '@/components/OurPartners/OurPartners'
import StudentOpinion from '@/components/studentOpinion/studentOpinion'
import AboutCenter from '@/components/AboutCenter/AboutCenter'
import Statistics from '@/components/Statistics/Statistics'
import GreenSection from '@/components/GreenSection/GreenSection'
import Russia from '@/components/Russia/Russia'
import ReliablePartner from '@/components/ReliablePartner/ReliablePartner'
import Cooperation from '@/components/Cooperation/Cooperation'
import Universities from '@/components/Universites/Universites'
import Banner from '@/components/Banner/Banner'
import Principles from '@/components/Principles/Principles'
import LangSelectDefault from '@/components/LangSelectDefault/LangSelectDefault'
import { domain } from 'utils/urls'
import Error from './_error'

const allComponents = {
    CardFirst: AboutUsHome,
    CardSecond: WhyChoosse,
    CardThird: Universities,
    CardFour: Statistics,
    CardFifth: Principles,
    CardSix: OurBranches,
    CardSeven: Branch,
    picInfoFirst: Russia,
    picInfoSecond: ReliablePartner,
    Accordion: Questions,
    sliderFirst: OurPartners,
    sliderSecond: StudentOpinion,
    InfoLineSecond: AboutCenter,
    InfoLineFirst: FreeConsultation,
    InfoLineThird: GreenSection,
    timeline: Cooperation,
    richtext: Learning,
}

export default function Home({ data, statusCode }) {
    if (statusCode) return <Error statusCode={statusCode} />
    const details = data?.details
    const bannerData = data?.banner
    return (
        <div className='wrapper'>
            <Head>
                <title>Rosuniversitet</title>
                <meta property='og:title' content='Твой выбор, твоё будущее' />
                <meta
                    name='description'
                    content='Хочешь стать студентом одного из лучших Российских университетов?'
                />
                <meta property='og:image' content='/rosuniversites.png'></meta>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='home'>
                <Banner data={bannerData} />
                <div className='details-home'>
                    {details.map((detail) => {
                        const Component = allComponents[detail.style]
                        return <Component key={detail.id} data={detail} />
                    })}
                </div>
                <LangSelectDefault />
            </div>
        </div>
    )
}
// getServerSideProps
// getStaticProps

export const getStaticProps = async () => {
    const res = await fetch(`http://site.bronme.uz/dev/v1/home`)
    const statusCode = res.status > 200 ? res.status : false
    const { data } = await res.json()

    return {
        props: {
            data: data,
            statusCode: statusCode,
        },
        revalidate: 10,
    }
}
