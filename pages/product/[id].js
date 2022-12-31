import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Image from 'next/image'
import { AiFillStar, AiOutlineArrowLeft, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs'
import Link from 'next/link'
import Nav from '../../components/Nav'
import { convertString } from '../../components/ProductItem'
import productContext from '../../context/productContext'
import { staticProducts } from '../../data/products'


const ProductItem = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const { id } = router.query

  const { product, getProduct, cart, addToCart, quantityChange } = useContext(productContext)

  useEffect(() => {
    getProduct(id)
  }, [id])

  const addToQuantity = (type, product) => {
    quantityChange(type, product)
  }

  if (product === undefined) {
    return <h3>Loading</h3>
  }

  const checkCart = cart?.find((cart) => product.id === cart.id)

  return (
    <div className='bg-[#F5F5F5]'>
      <Nav />
      <main className="w-full my-10 mx-auto max-w-[400px] md:max-w-[1200px]">
        <div className="btn pl-5">
          <Link href="/">
            <button className='flex gap-1 items-center py-3 px-4 mb-4 rounded-md bg-gray-600 text-white'><AiOutlineArrowLeft /> <span>Back</span></button>
          </Link>
        </div>

        <div className='md:flex gap-5 justify-between'>
          <div className="md:w-[50%] bg-[#f8f8f8] shadow-sm mx-auto max-w-xl flex justify-center">
            <Image src={product.img} alt="product" width={100} height={100}
              layout="fill" priority className="block my-20 w-[400px] md:rounded-xl" />
          </div>

          <div className="flex flex-col gap-2 md:w-[50%] py-5 px-3">
            <div className="info">
              <p className="my-2 text-4xl lg:text-6xl font-semibold">{product.title}</p>

              <p className="my-2 text-md md:text-xl font-medium">{product.description}</p>
              <p>By <span className='text-[#22B7B2] font-semibold'>{product.author} {">"}</span></p>
            </div>

            <div className="flex gap-3 text-xs items-center justify-center md:w-[100%]">
              <div className="flex gap-2">
                <div className="flex text-[#26ACAD] text-xl">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className='text-[13px]'>
                  <span className='font-extrabold'>{product.star}</span> ( {product.reviews} reviews )
                </p>
              </div>

              <div className="emoji flex text-[25px] gap-4 text-[#ADADAD]">
                <AiOutlineHeart className='bg-[#F7F7F7] h-[30px] p-1 rounded-full' />
                <BsFillShareFill className='bg-[#F7F7F7] h-[30px] p-1 rounded-full' />
              </div>
            </div>

            <div className="sm:text-lg bg-[#ffffff] py-1 md:text-xl text-center my-3">

              <div className="flex flex-col items-center gap-2 ">
                <p className="font-bold "><span className='text-4xl text-[#818191]'>#{convertString(product.price)} NGN</span></p>
                <span className="text-gray-400 text-base">MRP: <del>#{convertString(product.formerPrice)}</del></span>
                <p className="text-green-600 text-base font-bold">%{product.discount} off</p>
              </div>

            </div>

            <div className=''>

              <div className="flex justify-between items-center my-5 p-4 rounded-lg bg-gray-200 font-extrabold text-2xl sm:text-3xl md:p-3 md:w-40">

                <button className="text-gray-500" onClick={() => addToQuantity('DECREMENT', product.id)}>-</button>

                <p className="text-lg md:text-xl">{product.qtn}</p>

                <button className="text-gray-500" onClick={() => addToQuantity('INCREMENT', product.id)}>+</button>
              </div>

              <Link href="/">
                <button
                  onClick={addToCart}
                  className=' bg-blue text-white w-full p-3 rounded-lg font-bold text-md md:text-lg md:flex-1'
                >
                  <AiOutlineShoppingCart className="inline mb-1 mr-1" />{!checkCart?.inCart ? "Add To Cart" : "change cart"}</button>
              </Link>

            </div>
          </div>
        </div>
      </main>
      </div>
  )
}

export default ProductItem