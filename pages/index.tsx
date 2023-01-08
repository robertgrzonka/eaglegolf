import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'

import 'bootstrap/dist/css/bootstrap.min.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Eagle Golf</title>
        <meta name="description" content="Eagle Golf — find your golf trip" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className={styles.main}>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
