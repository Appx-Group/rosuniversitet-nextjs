import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import Router from 'next/router'
import Header from '@/components/Header/Header'
import Loading from '@/components/Loading/Loading'
import Footer from '@/components/Footer/Footer'
import ScrollToTop from 'react-scroll-to-top'
import { UpSvg } from 'assets/icons/Icons'
import '@/styles/main.scss'
import '../styles/components/loading/loading.css'

function MyApp({ Component, pageProps, data, footerData }) {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const start = () => {
            setLoading(true)
        }
        const end = () => {
            setLoading(false)
        }
        Router.events.on('routeChangeStart', start)
        Router.events.on('routeChangeComplete', end)
        Router.events.on('routeChangeError', end)
        return () => {
            Router.events.off('routeChangeStart', start)
            Router.events.off('routeChangeComplete', end)
            Router.events.off('routeChangeError', end)
        }
    }, [])
    return (
        <Provider store={store}>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <Header menuData={data} />
                    <ScrollToTop
                        smooth
                        top={20}
                        color='#fff'
                        component={<UpSvg />}
                    />
                    <Component {...pageProps} />
                    <Footer footerData={footerData} />
                </div>
            )}
        </Provider>
    )
}

export default MyApp

MyApp.getInitialProps = async (ctx) => {
    const res = await fetch('https://site.bronme.uz/dev/v1/menu')
    const { data } = await res.json()
    const resFooter = await fetch('https://site.bronme.uz/dev/v1/footer')
    const footerData = await resFooter.json()
    return { data: data, footerData: footerData['data']['footer'] ?? null }
}
