import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProductType from '../type/product';
import Fe from './Fe';

type Props = {
  products: ProductType[];
}

const ProductListHome = ({products}:Props) => {
  
  return (
    <div>
      <h3 className='my-4'>Danh sách sản phẩm</h3>
        <Fe/>
    </div>
  )
}

export default ProductListHome
