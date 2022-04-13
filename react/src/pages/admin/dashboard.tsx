import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { readByUser } from '../../api/order';
import { isAuthenticate } from '../../utils/localStorage'


type Props = {

}
const Dashboard = (props:Props) => {
  const user = isAuthenticate();
  const [userClass,setUserClass] = useState<any>([]);
  useEffect(() =>{
    const getClass = async () =>{

      const { data } = await readByUser(user.user._id);
      const todayClass = data.filter( item => item.schedule.day == new Date().getDay());
      setUserClass(todayClass);
    }
    getClass();
  },[])

  const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return (
    <div>
      <h1 className="tw-text-3xl tw-font-medium tw-text-center">Today Classes</h1>
              {userClass.map((items,index)=>
                <div className="tw-flex tw-justify-between tw-items-center tw-mt-6 tw-py-6 tw-border-b tw-border-gray-300" key={index}>
                  <div className="tw-flex tw-flex-col tw-items-center"> <img src={items.userId.img} width={60} className="tw-rounded-full " />
                      <div className="tw-flex tw-flex-col tw-gap-5 tw-ml-3"> 
                          <span className="md:tw-text-xl tw-font-medium">{items.userId.name}</span>
                          <div><p className="tw-text-lg tw-text-gray-600">Môn học: {items.productId.name}</p></div>
                          <div><p className="tw-text-lg tw-text-gray-600">Học phí: ${items.productId.price}</p></div>
                          <div><p className="tw-text-lg tw-text-gray-600">Lịch đăng ký: {new Date(items.schedule.day,0,0).toLocaleDateString('vi-Vi',{weekday:"long"})} ({items.schedule.hour})</p></div>
                          
                      </div>
                    
                  </div>
                  <div className="tw-flex tw-justify-between tw-items-centertw-text-lg ">
                    <a href='https://meet.google.com/' target="_blank"><button className='tw-px-3 tw-py-1 tw-rounded-lg tw-bg-indigo-600'>{items.schedule.hour}</button></a>
                  </div>
              </div>
              )}
    </div>
  )
}

export default Dashboard
