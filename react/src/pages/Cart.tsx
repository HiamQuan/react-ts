import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (

<div className="tw-h-screen tw-w-full tw-bg-gray-300">
  <div className="tw-py-12 tw-min-h-screen">
    <div className="tw-max-w-full tw-mx-auto tw-bg-gray-100 tw-shadow-lg tw-rounded-lg md:tw-max-w-full">
      <div className="md:tw-flex ">
        <div className="tw-w-full tw-p-4 tw-px-5 tw-py-5">
          <div className="md:tw-grid md:tw-grid-cols-3 tw-gap-2 ">
            <div className="tw-col-span-2 tw-p-5">
              <h1 className="tw-text-xl tw-font-medium ">Shopping Cart</h1>
              <div className="tw-flex tw-justify-between tw-items-center tw-mt-6 tw-pt-6">
                <div className="tw-flex tw-items-center"> <img src="https://i.imgur.com/EEguU02.jpg" width={60} className="tw-rounded-full " />
                  <div className="tw-flex tw-flex-col tw-ml-3"> <span className="md:tw-text-xl tw-font-medium">Chicken momo</span> <span className="tw-text-base tw-font-light tw-text-gray-600">#41551</span> </div>
                </div>
                <div className="tw-flex tw-justify-center tw-items-center">
                  <div className="tw-pr-8 tw-flex "> <span className="tw-font-semibold">-</span> <input type="text" className="focus:tw-outline-none tw-bg-gray-100 tw-border tw-h-6 tw-w-8 tw-rounded tw-text-sm tw-px-2 tw-mx-2" defaultValue={1} /> <span className="tw-font-semibold">+</span> </div>
                  <div className="tw-pr-8 "> <span className="tw-text-xl tw-font-medium">$10.50</span> </div>
                  <div> <i className="fa fa-close tw-text-xl tw-font-medium" /> </div>
                </div>
              </div>

              <div className="tw-flex tw-justify-between tw-items-center tw-mt-6 tw-pt-6 tw-border-t">
                <div className="tw-flex tw-items-center"> 
                  <i className="fa fa-arrow-left tw-text-sm tw-pr-2" />
                  <Link to="/products"> 
                    <span className="tw-text-xl tw-font-medium tw-text-blue-500">Continue Shopping</span>
                  </Link> 
                </div>
                <div className="tw-flex tw-justify-center tw-items-end"> <span className="tw-text-sm tw-font-medium tw-text-gray-400 tw-mr-1">Subtotal:</span> <span className="tw-text-lg tw-font-bold tw-text-gray-800 "> $24.90</span> </div>
              </div>
            </div>
            <div className=" tw-p-5 tw-bg-gray-800 tw-rounded tw-overflow-visible">
              <div className="tw-overflow-visible tw-flex tw-justify-between tw-items-center tw-mt-2">

              </div>
              <div className="tw-flex tw-justify-center tw-flex-col tw-pt-3"> <label className="tw-text-xl tw-text-gray-400 ">Name on Card</label> <input type="text" className="focus:tw-outline-none tw-w-full tw-h-6 tw-bg-gray-800 tw-text-white tw-placeholder-gray-300 tw-text-sm tw-border-b tw-border-gray-600 tw-py-4" placeholder="Giga Tamarashvili" /> </div>
              <div className="tw-flex tw-justify-center tw-flex-col tw-pt-3"> <label className="tw-text-xl tw-text-gray-400 ">Card Number</label> <input type="text" className="focus:tw-outline-none tw-w-full tw-h-6 tw-bg-gray-800 tw-text-white tw-placeholder-gray-300 tw-text-sm tw-border-b tw-border-gray-600 tw-py-4" placeholder="**** **** **** ****" /> </div>
              <div className="tw-grid tw-grid-cols-3 tw-gap-2 tw-pt-2 tw-mb-3">
                <div className="tw-col-span-2 "> <label className="tw-text-xl tw-text-gray-400">Expiration Date</label>
                  <div className="tw-grid tw-grid-cols-2 tw-gap-2"> <input type="text" className="focus:tw-outline-none tw-w-full tw-h-6 tw-bg-gray-800 tw-text-white tw-placeholder-gray-300 tw-text-sm tw-border-b tw-border-gray-600 tw-py-4" placeholder="mm" /> <input type="text" className="focus:tw-outline-none tw-w-full tw-h-6 tw-bg-gray-800 tw-text-white tw-placeholder-gray-300 tw-text-sm tw-border-b tw-border-gray-600 tw-py-4" placeholder="yyyy" /> </div>
                </div>
                <div> <label className="tw-text-xl tw-text-gray-400">CVV</label> <input type="text" className="focus:tw-outline-none tw-w-full tw-h-6 tw-bg-gray-800 tw-text-white tw-placeholder-gray-300 tw-text-sm tw-border-b tw-border-gray-600 tw-py-4" placeholder="XXX" /> </div>
              </div> <button className="tw-h-12 tw-w-full tw-bg-blue-500 tw-rounded focus:tw-outline-none tw-text-white hover:tw-bg-blue-600">Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Cart
