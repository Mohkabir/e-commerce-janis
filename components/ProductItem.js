import Image from "next/image"
import Link from "next/link"

import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux"

export const convertString = (str) => {
  let number = str

  return `${number?.toLocaleString()}.00`
}

const ProductItem = ({ product }) => {

  const { carts } = useSelector((state) => state.productReducers)

  const checkCart = carts?.find((cart) => product.id === cart.id)

  console.log(carts, 'checkCartcheckCartcheckCart')

  return (
    <main className="flex flex-col max-w-xs mx-auto shadow-md md:w-[30%] md:mx-auto overflow-hidden bg-white">
      <div className="flex justify-center p-10 border border-t-0 border-x-0 border-b-[#e8e8e8] w-[90%] mx-auto">
        <Image src={product.img} className="w-[100px]" alt="product" width={300} height={300} />
      </div>

      <div className="py-5 px-3  rounded-md">
        <div className="flex gap-3 text-xs items-center">
          <div className="bg-[#26ACAD] first-line:rounded-sm flex items-center gap-1 py-1 px-2 text-white">
            <p className="text-white">{product.star}</p><AiFillStar />
          </div>
          <p>{product.reviews} reviews</p>
        </div>
        <p className="my-2 text-md font-medium">{product.description}</p>

        <div className="flex items-center gap-3 sm:text-lg">
          <p className="font-bold lg:text-xl">#{convertString(product.price)} NGN</p>
          <p className="font-bold text-sm"><del>#{convertString(product.formerPrice)}</del></p>
          <p className="text-green-600 text-sm font-semibold">%{product.discount} off</p>
        </div>

        <div className="mt-7">
          <Link href={`product/${product.id}`}>

            <button className="bg-blue text-white w-full p-2 rounded-md font-bold text-md md:text-lg md:flex-1"><AiOutlineShoppingCart className="inline mb-1 mr-1" /> {checkCart?.inCart ? "in cart" : "Add To Cart"}</button>
          </Link>

        </div>
      </div>
    </main>

  )
}

export default ProductItem