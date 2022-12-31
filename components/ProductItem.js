import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai"
import productContext from "../context/productContext"

export const convertString = (str) => {
  let number = str

  return `${number?.toLocaleString()}.00`
}

const ProductItem = ({ product }) => {

  const { cart } = useContext(productContext)

  const checkCart = cart?.find((cart) => product.id === cart.id)

  return (
    <main className="flex flex-col w-[48%] shadow-md md:w-[32%] overflow-hidden bg-white">
      <div className="flex justify-center h-[200px] sm:h-[260px] md:h-[270px] lg:h-[340px] py-10 border border-t-0 border-x-0 border-b-[#e8e8e8] w-[90%] mx-auto">
        <Image src={product.img} className="w-[100%] h-[100%]" alt="product" width={300} height={300} />
      </div>

      <div className="py-5 px-3 rounded-md flex flex-col gap-1">
        <p className="text-lg text-center font-medium">{product.title}</p>

        <div className="flex flex-col text-center items-center gap-3">
          <p className="font-bold text-2xl">#{convertString(product.price)} NGN</p>
          <div className="flex flex-wrap justify-center gap-3 items-center">
            <p className="font-bold text-base"><del>#{convertString(product.formerPrice)}</del></p>
            <p className="text-green-600 text-sm font-semibold">%{product.discount} off</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1 text-xs items-center">
          <div className="flex justify-center bg-white text-xl">
            <AiFillStar fill="#26ACAD" />
            <AiFillStar fill="#26ACAD" />
            <AiFillStar fill="#26ACAD" />
            <AiFillStar fill="#26ACAD" />
            <AiFillStar fill="#26ACAD" />
          </div>
          <p className="text-base">{product.reviews} reviews</p>
        </div>
        {/* <p className="text-white">{product.star}</p><AiFillStar /> */}

        <div className="mt-7">
          <Link href={`product/${product.id}`} className="text-sm sm:text-lg">
            <button className="bg-blue text-white w-full p-2 rounded-md font-bold  md:flex-1"><AiOutlineShoppingCart className="inline mb-1 mr-1" /> {checkCart?.inCart ? "in cart" : "Add To Cart"}</button>
          </Link>
        </div>
      </div>
    </main>

  )
}

export default ProductItem