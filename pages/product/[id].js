import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getProduct, quantityChange } from '../../redux/actions'
import Image from 'next/image'
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs'
import Link from 'next/link'


const ProductItem = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()

  const product = useSelector((state) => state.productReducers.product)

  useEffect(() => {
    dispatch(getProduct(id))
  }, [id, dispatch])

  const addToQuantity = (type, product) => {
    return dispatch(quantityChange(type, product))
  }

  const handleAddCart = () => {
    dispatch(addToCart(product))
  }

  if (product === undefined) {
    console.log('proroor')
    return <h3>Loading</h3>
  }

  const convertString = (str) => {
    let number = str
    return number?.toLocaleString()
  }


  return (
    <main className="w-full my-10 mx-auto max-w-[400px] md:max-w-[1200px]">
      <div className="btn">
        <Link href="/">
          <button className='py-3 px-6 mb-4 bg-gray-600 text-white'>Back</button>
        </Link>

      </div>



      <div className='md:flex gap-5 justify-between '>
        <div className="md:w-[50%] bg-[#F7F7F7] mx-auto max-w-xl flex justify-center">
          <Image src={product.img} alt="product" width={100} height={100}
            layout="fill" priority className="block my-20 w-[150px] md:rounded-xl" />
        </div>

        <div className="flex flex-col gap-2 md:w-[50%] py-5 px-3">

          <div className="info">
            <p className="my-2 text-md font-semibold text-[#22B7B2]">{product.title}</p>

            <p className="my-2 text-md md:text-xl font-medium">{product.description}</p>
            <p>By <span className='text-[#22B7B2] font-semibold'>{product.author} {">"}</span></p>
          </div>

          <div className="flex gap-3 text-xs items-center justify-between w-[65%]">
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

          <div className="sm:text-lg md:text-xl">
            <span className="text-gray-400 text-base">MRP: <del>#{convertString(product.formerPrice)}</del></span>

            <div className="flex items-center gap-2">

              <p className="font-bold">Price: <span className='text-2xl'>#{convertString(product.price)}</span></p>
              <p className="text-green-600 text-base font-bold">%{product.discount} off</p>
            </div>

          </div>

          <div className="mt-7">

            <div className="flex justify-between items-center my-5 p-4 rounded-lg bg-gray-200 font-extrabold text-2xl sm:text-3xl md:p-3 md:w-40">

              <button className="text-orange" onClick={() => addToQuantity('DECREMENT', product.id)}>-</button>

              <p className="text-lg md:text-xl">{product.qtn}</p>

              <button className="text-orange" onClick={() => addToQuantity('INCREMENT', product.id)}>+</button>
            </div>

            <button className="border border-orange bg-[#F8FCF3] text-orange w-full p-3 rounded-lg font-bold text-md md:text-lg md:flex-1" onClick={handleAddCart}><AiOutlineShoppingCart className="inline mb-1 mr-1" /> Add To Cart</button>
          </div>
        </div>
      </div>

    </main>
  )
}

export default ProductItem