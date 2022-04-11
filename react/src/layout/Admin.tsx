import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Socket } from 'socket.io-client'
import Sidebar from '../components/admin/Sidebar'
import ProductType from '../type/product'
import { notification } from 'antd';




type Props = {
  products:ProductType[];
  socket: {},
}

const Admin = ({products,socket}) => {

    const [noti,setNoti] = useState([]);
  useEffect(()=>{
    socket.on("getNotification", data =>{
      setNoti((pre)=>[...pre,data])
      notification.open({
        message: 'Đăng ký mới',
        description:
          'Bạn có 1 tin nhắn mới',
      });
    })

  },[socket])
  return (
    <div>
      <div className="row">
          <aside className='col p-0'>
            <Sidebar products={products}/>
          </aside>
          <div className="col-10 p-0">
            <Outlet/>
          </div>
        </div>
      </div>
  )
}

export default Admin
