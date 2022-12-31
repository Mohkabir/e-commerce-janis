import '../styles/globals.css'
import { ProductContextProvider } from '../context/productContext';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <ProductContextProvider>
      <Component {...pageProps} />
      <Footer/>
    </ProductContextProvider>
  )
}

export default MyApp
