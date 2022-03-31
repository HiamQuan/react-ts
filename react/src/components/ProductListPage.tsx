import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProductType from '../type/product';

type Props = {
  products: ProductType[];
}

const ProductListPage = ({products}:Props) => {
  
  return (
    <div className=''>
      <h3 className='tw-text-3xl tw-font-semibold tw-text-center'>Danh sách khóa học</h3>
        <div className='row'>
          {products?.map((item,index)=>{
              return(
                <div className='col-3'>
                  <div className="border py-3 px-2 mt-3" key={index}>
                      <img className="img-fluid" src={item.img} alt="Card image cap" />
                      <div className="d-flex flex-md-column justify-content-around">
                        <h5 className=" mt-2">{item.name}</h5>
                        <p className="card-text">{item.desc}</p>
                        <h6 className='cart-subtitle text-muted'>$ {item.price}</h6>
                        <NavLink to={`/products/`+item._id}><button className='btn btn-danger mt-2 text-light'>Xem chi tiết</button></NavLink>
                      </div>
                  </div>
                </div>
              )
          })}     
        </div>
    </div>
  )
}

export default ProductListPage
