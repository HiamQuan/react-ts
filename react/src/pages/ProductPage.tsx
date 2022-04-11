import React from 'react'
import ProductListPage from '../components/ProductListPage'
import ProductType from '../type/product'


type Props = {
  products: ProductType[],
}
const ProductPage = () => {
  return (
    <div className=' productpage tw-mx-auto  tw-px-10 tw-py-10 tw-bg-fixed'>
        <div className="">
          <ProductListPage/>
        </div> 
    </div>
  )
}

export default ProductPage
