import React from 'react'
import ProductListPage from '../components/ProductListPage'
import ProductType from '../type/product'


type Props = {
  products: ProductType[],
}
const ProductPage = ({products}:Props) => {
  return (
    <div className=' productpage tw-mx-auto  tw-px-10 tw-py-10 tw-bg-fixed'>
      <div className="">
        <div className="form-search">
                <div className="tw-flex tw-justify-center">
                  <div className="tw-mb-3 xl:tw-w-96">
                    <div className="input-group tw-relative tw-flex tw-flex-wrap tw-items-stretch tw-w-full tw-mb-4">
                      <input type="search" className="form-control tw-relative tw-flex-auto tw-min-w-0 tw-block tw-w-full tw-px-2 tw-py-1.5 tw-text-base tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                      <button className="btn tw-inline-block tw-px-6 tw-py-2.5 tw-bg-blue-600 tw-text-white tw-font-medium tw-text-xs tw-leading-tight tw-uppercase tw-rounded tw-shadow-md hover:tw-bg-blue-700 hover:tw-shadow-lg focus:tw-bg-blue-700  focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0 active:tw-bg-blue-800 active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out tw-flex tw-items-center" type="button" id="button-addon2">
                      <i className="fa-solid fa-magnifying-glass tw-text-xl"></i>
                      </button>
                    </div>
                  </div>
                </div>
        </div>
        <div>
          <img className='img-fluid tw-mx-auto tw-w-24 tw-my-10' src="https://res.cloudinary.com/quannaph18209/image/upload/v1648840965/fzjdc0rt7xz8pyohtmxw.png"/>
        </div>
        <div className=" tw-my-24">
          <ProductListPage products={products}/>
        </div>
      </div>
      
    </div>
  )
}

export default ProductPage
