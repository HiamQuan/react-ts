import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/admin/Sidebar'
import ProductType from '../type/product'

type Props = {
  products:ProductType[];
}

const Admin = (props:Props) => {
  return (
    <div>
      <div className="row">
          <aside className='col p-0'>
            <Sidebar products={props.products}/>
          </aside>
          <div className="col-10 p-0">
            <Outlet/>
          </div>
        </div>
      </div>
  )
}

export default Admin
