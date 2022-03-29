import React from 'react'
import ProductListPage from '../components/ProductListPage'
import ProductType from '../type/product'


type Props = {
  products: ProductType[],
}
const ProductPage = ({products}:Props) => {
  return (
    <div className='container'>
      <div className="row">
        <aside className='col-2'>Category</aside>
        <div className="col-9">
          <ProductListPage products={products}/>
        </div>
      </div>
      
    </div>
  )
}

export default ProductPage
