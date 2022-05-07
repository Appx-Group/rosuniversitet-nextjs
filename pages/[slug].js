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
import Principles from '@/components/Principles/Principles'
import Contacts from '@/components/Contacts/Contacts'
import { domain } from 'utils/urls'

const allComponents = {
    CardFirst: AboutUsHome,
    CardSecond: WhyChoosse,
    CardThird: Universities,
    CardFour: Statistics,
    CardFifth: Principles,
    CardSix: OurBranches,
    CardSeven: Branch,
    picInfoFirst: ReliablePartner,
    picInfoSecond: Russia,
    Accordion: Questions,
    sliderFirst: OurPartners,
    sliderSecond: StudentOpinion,
    InfoLineSecond: AboutCenter,
    InfoLineFirst: FreeConsultation,
    InfoLineThird: GreenSection,
    timeline: Cooperation,
    richtext: Learning,
}

export default function Pages({ data, slug }) {
    const details = data?.details
    return (
        <div className='wrapper'>
            <Head>
                <title>{data.title}</title>
                <meta property='og:title' content='Твой выбор, твоё будущее' />
                <meta property='og:image' content='/rosuniversites.png'></meta>
                <meta
                    name='description'
                    content='Хочешь стать студентом одного из лучших Российских университетов?'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='details'>
                {details.map((detail) => {
                    const Component = allComponents[detail.style]
                    return (
                        <Component key={detail.id} data={detail} slug={slug} />
                    )
                })}
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const slug = context.params.slug
    if (slug === 'submit-an-application') {
        return
    }
    const res = await fetch(`https://site.bronme.uz/dev/v1/menu/slug/${slug}`)
    const { data } = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: data ?? null,
            slug: slug ?? null,
        },
    }
}
