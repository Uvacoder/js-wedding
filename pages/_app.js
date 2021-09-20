import '@styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function Application({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <div className="container mx-auto bg-black text-gray-100">
      <Head>
        <title>Jenessa & Sasha's NYE Wedding</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Roboto:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>

      <Header title="J & S" />
      <main className="w-full">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  )
}

export default Application
