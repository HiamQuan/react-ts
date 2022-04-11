import moment from "moment";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { listOrder, removeOrder, updateOrder } from "../../api/order";

const Inbox = () =>{
    const [inbox, setInbox] = useState([]);
    const navigate = useNavigate();

    const confirmOrder = async (id) =>{
        await updateOrder({
        _id: id,
        status: true,
        });
        navigate("/admin/inbox");
        toast.success("Cập nhập thành công")
    }

    const remove = async (id) =>{
        await removeOrder(id);
        setInbox(inbox.filter(item => item._id !== id));
        toast.error("Xóa thành công")
    }
    

    const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    useEffect(()=>{
        const getInbox = async () =>{
            const { data } = await listOrder();
            setInbox(data);
        }
        getInbox();
    },[]);


    return (
        <div className="tw-px-8 tw-py-5">
            <ToastContainer/>
        <h1 className="tw-text-3xl tw-font-medium tw-text-center">Inbox</h1>
              {inbox.map((items,index)=>
                <div className="tw-flex tw-justify-between tw-items-center tw-mt-6 tw-py-6 tw-border-b tw-border-gray-300" key={index}>
                <div className="tw-flex tw-flex-col tw-items-center"> <img src={items.userId.img} width={60} className="tw-rounded-full " />
                    <div className="tw-flex tw-flex-col tw-gap-5 tw-ml-3"> 
                        <span className="md:tw-text-xl tw-font-medium">{items.userId.name}</span>
                        <div><p className="tw-text-lg tw-text-gray-600">Môn học: {items.productId.name}</p></div>
                        <div><p className="tw-text-lg tw-text-gray-600">Học phí: ${items.productId.price}</p></div>
                        <div><p className="tw-text-lg tw-text-gray-600">Lịch đăng ký: {new Date(items.schedule.day,0,0).toLocaleDateString('vi-Vi',{weekday:"long"})} ({items.schedule.hour})</p></div>
                        <span className="tw-text-base tw-font-light tw-text-gray-600">{moment(items.time).startOf("hour").calendar()}</span>
                    </div>
                  
                </div>
                <div className="tw-flex tw-justify-between tw-items-center tw-gap-8 tw-text-lg ">
                  <span>{weekDay[items.schedule]}</span>
                  <div className="tw-pr-8 "> <span className="tw-text-xl tw-font-medium"><button onClick={()=>confirmOrder(items._id)} className="tw-bg-blue-500 tw-text-gray-100 tw-rounded-lg tw-px-3 tw-py-1">Xác nhận</button></span> </div>
                  <div><button className="tw-bg-red-400 tw-text-gray-100 tw-px-2 tw-py-1 tw-rounded-lg" onClick={()=>remove(items._id) }><i className="fa fa-close tw-text-xl tw-font-medium" /></button> </div>
                </div>
              </div>
              )}
        </div>
    );
}

export default Inbox;