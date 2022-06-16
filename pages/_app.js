import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'

import { store } from '../store'
import Header from '@/components/Header/Header'
import Loading from '@/components/Loading/Loading'
import Footer from '@/components/Footer/Footer'
import ScrollToTop from 'react-scroll-to-top'
import { UpSvg } from 'assets/icons/Icons'
import '@/styles/main.scss'
import '../styles/components/loading/loading.css'
import Error from './_error'

function MyApp({ Component, pageProps, data, footerData, statusCode }) {
    if (statusCode) return <Error statusCode={statusCode} />

    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export default MyApp

MyApp.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.rosuniversitet.com/dev/v1/menu')
    const { data } = await res.json()
    const resFooter = await fetch('https://api.rosuniversitet.com/dev/v1/footer')
    const footerData = await resFooter.json()
    const statusCode =
        res.status > 200 || resFooter.status > 200 ? res.status : false

    return { data: data, footerData: footerData['data']['footer'], statusCode }
}
