import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"


import productImg1 from '../assets/img/product1.jpeg'

import Spinner from '../components/Spinner';
import Main from "../components/Main"
import Meta from "../components/Meta"
import { getProducts } from "../redux/actions"
import Nav from "../components/Nav";


export const staticProducts = [
  {
    id: 1,
    img: productImg1,
    title: "Whey Proteing isolate",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus!",
    author: "Muscleblaze",
    star: 4.5,
    reviews: 568,
    formerPrice: 4000,
    price: 3499,
    discount: 29,
    qtn: 1
  },
  {
    id: 2,
    img: productImg1,
    title: "Whey Proteing isolate",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus!",
    author: "Muscleblaze",
    star: 4.5,
    reviews: 568,
    formerPrice: 4000,
    price: 3499,
    discount: 29,
    qtn: 1
  }, {
    id: 3,
    img: productImg1,
    title: "Whey Proteing isolate",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus!",
    author: "Muscleblaze",
    star: 4.5,
    reviews: 568,
    formerPrice: 4000,
    price: 3499,
    discount: 29,
    qtn: 1
  },{
    id: 4,
    img: productImg1,
    title: "Whey Proteing isolate",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus!",
    author: "Muscleblaze",
    star: 4.5,
    reviews: 568,
    formerPrice: 4000,
    price: 3499,
    discount: 29,
    qtn: 1
  },{
    id: 5,
    img: productImg1,
    title: "Whey Proteing isolate",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus!",
    author: "Muscleblaze",
    star: 4.5,
    reviews: 568,
    formerPrice: 4000,
    price: 3499,
    discount: 29,
    qtn: 1
  },{
    id: 6,
    img: productImg1,
    title: "Whey Proteing isolate",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus!",
    author: "Muscleblaze",
    star: 4.5,
    reviews: 568,
    formerPrice: 4000,
    price: 3499,
    discount: 29,
    qtn: 1
  },
]

export default function Home() {
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    let mount = true

    const fecthProducts = () => {
      try {
        // const pro = staticProducts?.map((cart) => cart.id ? { ...cart, qtn: 1 } : cart)
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
    <>
      <Nav/>
      <Meta />
      <Main />
    </>
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