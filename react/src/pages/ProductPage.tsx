import React from 'react'
import ProductListPage from '../components/ProductListPage'
import ProductType from '../type/product'


type Props = {
  products: ProductType[],
}
const ProductPage = ({products}:Props) => {
  return (
    <div className='tw-mx-auto tw-px-10'>
      <div className="tw-grid tw-grid-cols-5 tw-gap-16 tw-mt-10">
        <aside className='tw-text-3xl tw-font-semibold tw-border-b tw-border-red-400 tw-sticky'>Danh mục sản phẩm</aside>
        <div className="tw-col-span-4">
          <ProductListPage products={products}/>
        </div>
      </div>
      
    </div>
  )
}

export default ProductPage
