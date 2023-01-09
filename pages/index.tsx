import Head from 'next/head'
// import { Inter } from '@next/font/google'
import Hero from '../components/hero'

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
      <Hero />
    </>
  )
}
