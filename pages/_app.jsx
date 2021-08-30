import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

// eslint-disable-next-line
import Header from '../src/component/header/Header'
// eslint-disable-next-line
import MainStyle from '../src/component/MainStyle'

export function MainApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mehdi Meddour | Développeur Freelance WEB / MOBILE / LOGICIEL</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <MainStyle />
      <Header />
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
      <Script
        strategy="beforeInteractive"
        src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
      />
    </>
  )
}

export default MainApp
