import '../styles/globals.css'
import { ProductContextProvider } from '../context/productContext';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <ProductContextProvider>
      <Component {...pageProps} />
    </ProductContextProvider>
  )
}

export default MyApp
