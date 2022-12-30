import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { RiDeleteBin5Line } from "react-icons/ri"


import { FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, getCart } from '../redux/actions'

import { checkout } from '../checkout'
import { convertString } from './ProductItem'

const Nav = () => {
    const [viewCart, setViewCart] = useState(false)

    const dispatch = useDispatch()

    const {carts} = useSelector(state => state.productReducers)

    const total = carts?.map((x) => x.price * x.qtn)

    const handleDelete = (cart) => {
        dispatch(deleteFromCart(cart))
    }
    
    useEffect(() => {
        dispatch(getCart())
    },[dispatch])

    

    return (
        <>
            <nav className='relative border-b border-gray-100 px-2 mx-auto flex justify-between md:mb-20 max-w-[1300px] z-10'>
                <div className='w-[90%] md:70% mx-auto py-4 flex justify-between items-center md:py-6'>
                    <div className="flex-1">
                        <input type="text" placeholder='Search for items' className='bg-[#F7F7F7] p-3 w-[100%]' />
                    </div>

                    <div className='flex flex-1 items-center justify-end gap-3 md:w-[10%]'>
                        <div className='relative cursor-pointer flex items-center' onClick={() => setViewCart(!viewCart)}>
                            <AiOutlineShoppingCart className='text-2xl font-extrabold' />
                            <i className='absolute text-sm text-white bottom-3 left-2 b bg-orange  leading-4 w-6 h-4 text-center rounded-full'>{carts.length}</i>
                        </div>
                    </div>
                </div>
















                {<div className={`absolute transition-all duration-300 bg-white top-[85px] ${!viewCart ? 'left-[100%] md:left-[100%] lg:md:left-[120%]' : 'left-[0px] md:left-[62%]'} right-0 rounded-lg w-[95%] max-w-lg m-auto shadow-xl p-1 z-30 md:w-[35%] md:right-0 md:m-0`}
                >
                    <div>
                        <h4 className='text-black p-5 border-gray-200 border-b font-bold text-md'>Cart</h4>
                    </div>

                    {
                        carts.length > 0 ? (
                            <>
                                {carts?.map((cart, i) => (
                                    <div className='p-4' key={i}>
                                        <div className='flex items-center justify-between gap-3 text-gray-400 w-full'>

                                            <Image className='rounded w-[30px]' src={cart.img.src} alt='pro-imgage' width={100} height={100} />

                                            <div className="flex-1 text-sm">
                                                <p>{cart.title}</p>

                                                <p>{`${convertString(cart.price)} * ${cart.qtn}`} 
                                                {" "}{"="} <b className='text-black'> 
                                                    {`#${convertString(cart.price * cart.qtn)}`} 
                                                    </b>
                                                </p>
                                            </div>

                                            <i className='text-xl cursor-pointer' onClick={() => handleDelete(cart)}><RiDeleteBin5Line /></i>
                                        </div>
                                    </div>
                                ))}
                                <h3 className='mr-3 text-right text-gray-400'>Total : <b className='text-black '>#{total.length > 0 ? convertString(total.reduce((a, b) => a + b)) : 0}</b></h3>
                            </>
                        ) : (
                            <div className='flex justify-center items-center py-20 text-gray-400 font-bold'>
                                <h3>Your cart is empty</h3>
                            </div>
                        )
                    }
                    <div className='text-center'>
                        <button
                            onClick={() => checkout({
                                lineItems: pro
                            })}

                            className="border border-orange my-4 w-11/12 p-3 rounded-lg text-black font-bold text-sm md:text-md"
                        >
                            <i className='not-italic'>Checkout</i>
                        </button>
                    </div>
                </div>}
            </nav>
        </>
    )
}

export default Nav