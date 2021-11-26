import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Navbar />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
