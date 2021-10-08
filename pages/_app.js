import '@styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { motion } from 'framer-motion';

function Application({ Component, pageProps, router }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <div className="flex items-center flex-col h-screen justify-center mx-auto bg-black text-gray-100">
      <Head>
        <title>Jenessa & Sasha's NYE Wedding</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Roboto:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>

      <Header title="J & S" />
      <main className="w-full flex flex-col flex-1 items-center px-0 pt-28 md:pb-5 md:pt-10">
        {/* <motion.div key={router.route}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear' }} > */}
        <motion.div key={router.route}
          // variants={variants}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl">
          <Component {...pageProps} />
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default Application
