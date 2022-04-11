import { parse } from '@fortawesome/fontawesome-svg-core';
import moment from 'moment';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {toast, ToastContainer} from "react-toastify"
import { createOrder } from '../api/order';
import UserIndex from './admin/UserIndex';

type Props = {
  socket: {},
  user: {}
}

const Cart = ({socket,user}) => {

  const navigate = useNavigate();
  let currentCart = []
  if(localStorage.getItem("cart")){
    currentCart = JSON.parse(localStorage.getItem("cart"))
  }
  let totalPrice = 0;
  
  currentCart.forEach(item => totalPrice += item.productPrice);

  const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const removeCart = (id, next) => {
      
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if(confirm){
      currentCart = (currentCart.filter(item => item.productId !== id));
    }
    localStorage.setItem('cart', JSON.stringify(currentCart)); 
    next();
  }

  const sendOrder =  (type:any) =>{
    currentCart.forEach( async (item) => {
      await createOrder(item)
      await socket.emit("sendNotification",{
        senderName: user?.name,
        receiverName: user?.name,
        type
      })
    })
  }

  return (

<div className="tw-h-screen tw-w-full tw-bg-gray-300">
  <div className="tw-py-12 tw-min-h-screen">
  <ToastContainer/>
    <div className="tw-max-w-full tw-mx-auto tw-bg-gray-100 tw-shadow-lg tw-rounded-lg md:tw-max-w-full">
      <div className="md:tw-flex ">
        <div className="tw-w-full tw-p-4 tw-px-5 tw-py-5">
          <div className="md:tw-grid md:tw-grid-cols-3 tw-gap-2 ">
            <div className="tw-col-span-2 tw-p-5">
              <h1 className="tw-text-xl tw-font-medium ">Shopping Cart</h1>
              {currentCart?.map((items,index)=>
                <div className="tw-flex tw-justify-between tw-items-center tw-mt-6 tw-pt-6" key={index}>
                <div className="tw-flex tw-items-center"> <img src="https://i.imgur.com/EEguU02.jpg" width={60} className="tw-rounded-full " />
                  <div className="tw-flex tw-flex-col tw-ml-3"> <span className="md:tw-text-xl tw-font-medium">{items.productName}</span> <span className="tw-text-base tw-font-light tw-text-gray-600">{moment(items.time).calendar()}</span> </div>
                </div>
                <span className='tw-text-xl md:tw-text-lg'>Lịch học: {new Date(items.schedule.day,0,0).toLocaleDateString('vi-Vi',{weekday:"long"})} ({items.schedule.hour})</span>
                <div className="tw-flex tw-justify-left tw-items-center tw-gap-5 tw-text-lg ">
                  <div className="tw-pr-8 "> <span className="tw-text-xl tw-font-medium">${items.productPrice}</span> </div>
                  <div><button onClick={()=>removeCart(items.productId,()=>{navigate("/cart");toast.error("Đã xóa thành công"); })}><i className="fa fa-close tw-text-xl tw-font-medium" /></button> </div>
                </div>
              </div>
              )}

              <div className="tw-flex tw-justify-between tw-items-center tw-mt-6 tw-pt-6 tw-border-t">
                <div className="tw-flex tw-items-center"> 
                  <i className="fa fa-arrow-left tw-text-sm tw-pr-2" />
                  <Link to="/products"> 
                    <span className="tw-text-xl tw-font-medium tw-text-blue-500">Continue Shopping</span>
                  </Link> 
                </div>
                <div className="tw-flex tw-justify-center tw-items-end"> <span className="tw-text-sm tw-font-medium tw-text-gray-400 tw-mr-1">Subtotal:</span> <span className="tw-text-lg tw-font-bold tw-text-gray-800 "> ${totalPrice}</span> </div>
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
              </div> <button onClick={()=>{sendOrder(1); toast.success("Thanh toán thành công")}} className="tw-h-12 tw-w-full tw-bg-blue-500 tw-rounded focus:tw-outline-none tw-text-white hover:tw-bg-blue-600">Check Out</button>
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
