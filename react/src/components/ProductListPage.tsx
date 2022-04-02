import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProductType from '../type/product';
import Be from './Be';
import Fe from './Fe';

type Props = {
  products: ProductType[];
}

const ProductListPage = ({products}:Props) => {
  
  return (
    <div className=''>
      <div className=''>
        <Fe/>
        <div className='tw-my-28'>
          <Be/>
        </div>       
      </div>
    </div>
  )
}

export default ProductListPage
