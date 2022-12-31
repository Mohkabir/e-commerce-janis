import { useContext, useEffect, useState } from "react"
import Spinner from '../components/Spinner';
import Main from "../components/Main"
import Meta from "../components/Meta"
import Nav from "../components/Nav";
import { staticProducts } from "../data/products"
import productContext from "../context/productContext";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const { setProducts } = useContext(productContext)

  useEffect(() => {
    let mount = true

    const fecthProducts = () => {
      try {
        if (mount) {

          // if (!localStorage.getItem("products")) {
            setProducts(staticProducts)
          // }
          // else if (localStorage.getItem("products")) {
          //   setProducts(localStorage.getItem("products"))
          // }
          console.log('fetchccfetchccfetchccfetchcc')
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
  }, [])


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
