import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions'

export const convertString = (str) => {
  let number = str
  return number?.toLocaleString()
}

const ProductItem = ({ product }) => {

  const dispatch = useDispatch()


  const handleAddCart = () => {
    dispatch(addToCart(product))
  }

 


  return (
    <main className="flex flex-col max-w-xs mx-auto md:w-[30%] md:mx-auto border border-[#fbfbfb] rounded-lg overflow-hidden">
      <Link href={`product/${product.id}`}>
        <div className="flex justify-center bg-[#F7F7F7] p-10 hover:opacity-75">
          <Image src={product.img} className="cursor-pointer w-[100px]" alt="product" width={300} height={300} />
        </div>
      </Link>

      <div className="py-5 px-3 border border-[#e8e8e8] rounded-md">
        <div className="flex gap-3 text-xs items-center">
          <div className="bg-[#26ACAD] rounded-sm flex items-center gap-1 py-1 px-2 text-white">
            <p>{product.star}</p><AiFillStar />
          </div>
          <p>{product.reviews} reviews</p>
        </div>
        <p className="my-2 text-md font-medium">{product.description}</p>

        <div className="flex items-center gap-3 sm:text-lg md:text-xl">
          <p className="font-bold">#{convertString(product.price)}</p>
          <p className="text-gray-400 text-base"><del>#{convertString(product.formerPrice)}</del></p>
          <p className="text-green-600 text-base font-semibold">%{product.discount} off</p>
        </div>
        <div className="mt-7">

          <button className="border border-orange bg-[#F8FCF3] text-orange w-full p-2 rounded-lg font-bold text-md md:text-lg md:flex-1" onClick={handleAddCart}><AiOutlineShoppingCart className="inline mb-1 mr-1" /> Add To Cart</button>
          
        </div>
      </div>
    </main>

  )
}

export default ProductItem