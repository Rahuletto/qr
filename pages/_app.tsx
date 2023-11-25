// NextJS Stuff
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Fonts
import { Space_Grotesk } from 'next/font/google';
const sg = Space_Grotesk({
  weight: ['500', '700'],
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--root-font',
});

import '../styles/mobile.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {

  return (
    <>
      <style jsx global>
        {`
            html {
              --root-font: ${sg.style.fontFamily};=
            }
          `}
      </style>

      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="description"
          content="Just a regular ol- qr code generator"
        ></meta>
        <meta name="viewport" content="width=device-width"></meta>
        <link rel="icon" type="image/svg+xml" href="/qrmake.svg"></link>
        <title>QR Generator</title>
      </Head>

      <Component className={sg.variable} {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;