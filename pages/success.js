import Link from 'next/link'
import React, { useContext } from 'react'

import { IoMdCheckmark } from 'react-icons/io'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import productContext from '../context/productContext'


const Success = () => {

  const { setCart } = useContext(productContext)



  return (
    <div className='flex bg-[#EBF0F4] flex-col items-center justify-center w-[100%] mx-auto h-screen'>
      <div className='p-[100px] px-[50px] bg-white shadow-md flex flex-col items-center justify-center text-center max-w-sm w-[90%]'>
        <div className='flex justify-center items-center text-[#7BC331] bg-[#F8FAF5] h-[90px] w-[90px] rounded-full text-6xl text-center'>
          <IoMdCheckmark />
        </div>
        <h1 className='text-green-500 text-xl'>
          Success</h1>
        <p className='text-sm text-gray-400'>We recieved your purchase request we will be intouch shortly</p>
        <Link href='/' onClick={() => setCart([])} >
          <p className='flex items-center text-blue text-sm mt-4 capitalize'><AiOutlineArrowLeft /> <span>go back to shop</span></p></Link>
      </div>
    </div>
  )
}

export default Success