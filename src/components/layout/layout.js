import Top from "./top";
import Left from "./left";
import Head from "next/head";
import { Inter } from 'next/font/google'

const myInter = Inter({
    subsets: ['latin'],
    display: "swap",
    variable: '--font-inter' // Optional but recommended
})

export default function Layout({ children, ...pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to Redington Productivity Dashboard</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <>
        <Top pageTitle={pageProps.pageTitle} pageName={pageProps.pageName} />         
        <Left />
        <div className={`${myInter.className} pl-[118px] xl:pl-[128px] pr-4 xl:pr-[0.833vw]  pt-4 xl:pt-[0.833vw] pb-6 xl:pb-[1.25vw] dark:bg-[#0F1013]`}>
          <main>
            {children}
          </main>
        </div>
      </>
    </>
  );
}
