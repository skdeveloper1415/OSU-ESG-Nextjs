import "primereact/resources/themes/lara-light-indigo/theme.css";   
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import "react-toastify/dist/ReactToastify.css";
import '@/styles/globals.css';
import '@/styles/leftmenu.css';
import '@/styles/filtercomponent.css';
import '@/styles/nstyle.css';
import '@/styles/skstyle.css';
import '@/styles/systyle.css'; 
import '@/styles/vsstyle.css';            
import '@/styles/astyle.css';            
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'

const myInter = Inter({
subsets: ['latin'],
  display: "swap",
  variable: '--font-inter', // Optional but recommended
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function App({ Component, pageProps }) {
  return <main className={myInter.className}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} /><ToastContainer autoClose={500} />
      </ThemeProvider>
    </main>
}





