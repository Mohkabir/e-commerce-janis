import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import Spinner from '../components/Spinner';
import Main from "../components/Main"
import Meta from "../components/Meta"
import { getProducts } from "../redux/actions"
import Nav from "../components/Nav";
import { staticProducts } from "../data/products"


export default function Home() {
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    let mount = true

    const fecthProducts = () => {
      try {
        if (mount) {
          dispatch(getProducts(staticProducts))
          setIsLoading(false)
        }
      } catch (error) {
        setIsError(true)
      }
    }

    fecthProducts()

    return () => {
      mount = false
    }
  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (

  <div className="bg-[#f5f5f5]">
      <Nav />
      <Meta />
      <Main />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const { data } = await axios.get('https://dummyjson.com/products?skip=5&limit=10')
//   const { products } = data

//   return {
//     props: {
//       products: products
//     }
//   }
// }