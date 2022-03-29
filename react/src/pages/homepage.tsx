import React from 'react'
import ProductListHome from '../components/ProductListHome'
import ProductType from '../type/product'

type Props = {
  products: ProductType[];
}
const HomePage = ({products}:Props) => {
  return (
    <div className='container my-5 '>
      <div className='px-10'>
        <ProductListHome products={products}/>
      </div>
    </div>
  )
}

export default HomePage
