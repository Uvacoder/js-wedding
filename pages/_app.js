import '@styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function Application({ Component, pageProps }) {
  return (
    <div className="flex items-center flex-col min-h-screen justify-center mx-auto bg-black text-gray-100 antialiased">
      <Head>
        <title>Jenessa & Sasha's NYE Wedding</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Roboto:wght@100;300;400&display=optional" rel="stylesheet" />
      </Head>

      <Header title="J & S" />
      <main className="w-full mx-auto flex flex-col flex-1 items-center">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  )
}

export default Application
