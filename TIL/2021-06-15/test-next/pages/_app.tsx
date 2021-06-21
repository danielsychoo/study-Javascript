import '../styles/globals.css'
import { Header, Footer } from '../components/_layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>

)
}
export default MyApp
