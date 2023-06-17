import GlobalStyle from '@/styles/globalStyles'
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '600', '800'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
})

export default function App({Component, pageProps}) {
  return (
    <main className={poppins.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  )
}
