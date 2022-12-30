import { useSelector } from "react-redux"
import ProductItem from "./ProductItem"

const Main = () => {

    const products = useSelector((state) => state.productReducers.products)

    return (
        <div className='flex flex-col lg:flex-row gap-5 w-full my-10 mx-auto max-w-7xl'>
            <div className="flex flex-wrap gap-5 md:gap-x-0 md:gap-y-32 w-[90%] mx-auto">
                {products?.map((product) => <ProductItem key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default Main
