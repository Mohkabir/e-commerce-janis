import { useContext } from "react"
import productContext from "../context/productContext"
import ProductItem from "./ProductItem"

const Main = () => {

    const { products } = useContext(productContext)

    return (
        <div className='flex flex-col lg:flex-row w-full my-10 mx-auto max-w-7xl'>
            <div className="flex flex-wrap justify-between items-start gap-y-10  md:gap-x-0 md:gap-y-10 w-[90%] mx-auto">
                {products?.map((product) => <ProductItem key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default Main
