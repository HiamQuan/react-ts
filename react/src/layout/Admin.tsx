import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/admin/Sidebar'

const Admin = () => {
  return (
    <div>
      <div className="row">
          <aside className='col-2'>
            <Sidebar/>
          </aside>
          <div className="col-10">
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Admin
