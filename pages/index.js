import Head from 'next/head'
import MailchimpFormContainer from '../components/MailchimpFormContainer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Valaxy is coming...</title>
        <meta name="description" content="Valaxy is a tokenized community for the universe of wine. Sign up to be notified when we launch!" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className='font-comfortaa'>
        <div className="min-h-screen bg-white py-6 flex flex-col justify-center relative overflow-hidden sm:py-12 art-bg">
          <div className="relative px-6 pt-10 pb-8 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-6">
            <div className="flex flex-col space-y-6 md:space-y-8 max-w-md mx-auto text-center">
              <h1 className="text-3xl font-bold">
                Valaxy is coming...
              </h1>
              <p className='leading-loose'>
              Valaxy is a tokenized community for the universe of wine. Sign up to be notified when we launch!
              </p>
              <MailchimpFormContainer />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
