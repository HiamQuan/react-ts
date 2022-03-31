import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/admin/Sidebar'
import ProductType from '../type/product'

type Props = {
  products: ProductType[];
  onSignOut: () => JSX.Element;
}

const Admin = (props:Props) => {
  return (
    <div>
      <div className="row">
          <aside className='col-2'>
            <Sidebar products={props.products} onSignOut={props.onSignOut}/>
          </aside>
          <div className="col-10">
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Admin
