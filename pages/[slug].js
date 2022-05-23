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
import Error from './_error'

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

export default function Pages({ data, slug, statusCode }) {
    if (statusCode) return <Error statusCode={statusCode} />
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

export const getStaticProps = async (context) => {
    const slug = context.params.slug
    if (slug === 'submit-an-application') {
        return
    }
    const res = await fetch(`https://site.bronme.uz/dev/v1/menu/slug/${slug}`)
    const statusCode = res.status > 200 ? res.status : false
    const { data } = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data: data,
            slug: slug,
            statusCode,
        },
        revalidate: 10,
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://site.bronme.uz/dev/v1/menu')
    console.log(res)
    const { data } = await res.json()

    function someCostom(array, cb) {
        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) return true
        }

        return false
    }

    const some = (arr, element) => {
        return someCostom(arr, (item) => item.slug === element)

        // return arr.some(item => { item.slug == element  })
    }

    const sortSlug = (arr) => {
        const newArray = []

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i]

            if (!some(newArray, element.slug)) {
                newArray.push({ slug: element.slug })
            }

            if (element.children) {
                for (let i = 0; i < element.children.length; i++) {
                    if (!some(newArray, element.children[i].slug)) {
                        newArray.push({ slug: element.children[i].slug })
                    }
                }
            }
        }
        return newArray.filter(
            (item) => item.slug !== '/' && item.slug !== 'submit-an-application'
        )
    }

    const allPath = sortSlug(data)

    const paths = allPath.map((curElem) => {
        return {
            params: {
                slug: curElem.slug.toString(),
            },
        }
    })

    return {
        paths,
        fallback: false,
    }
}
