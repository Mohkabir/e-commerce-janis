import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import axios from 'axios';

import productImg1 from '../assets/img/product1.jpeg'

import Spinner from '../components/Spinner';
import Main from "../components/Main"
import Meta from "../components/Meta"
import Nav from "../components/Nav"
import { getProducts } from "../redux/actions"


export const products = [
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
  },{
    iz: 6,
    img: productImg1,
    title: "Whey Proteing isolate",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus!",
    author: "Muscleblaze",
    star: 4.5,
    reviews: 568,
    formerPrice: 4000,
    price: 3499,
    discount: 29,
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
        const pro = products?.map((cart) => cart.id ? { ...cart, qtn: 1 } : cart)
        if (mount) {
          dispatch(getProducts(pro))
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