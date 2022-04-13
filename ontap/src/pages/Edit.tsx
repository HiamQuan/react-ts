import axios from 'axios'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import ProductType from './Type'

type Props = {
    onEdit: (data:Input,id:any)=> void;   
}

type Input={
    name:string,
    desc: string,
    img: string,
    price: number
}

const Edit = (props:Props) => {

    const {id} = useParams();
    const {register,handleSubmit,formState:{errors},reset} = useForm<Input>();

    useEffect(()=>{
        const getProduct = async ()=>{
            const {data} = await axios.get("http://localhost:3002/products/"+id);
            reset(data);
        }
        getProduct();
    },[])

    const navigate = useNavigate();
    const onSubmit : SubmitHandler<Input> = (data)=>{
        props.onEdit(data,id);
        navigate("/products");
    }

  return (
    <div className='p-10 bg-gray-800'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400">Name</label>
            <textarea {...register("name",{required:true,minLength:5})} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a name..." defaultValue={""} />
            {errors.name && <span> Bắt buộc nhập</span>}
            <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400">Describe</label>
            <textarea {...register("desc",{required:true})} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a name..." defaultValue={""} />
            {errors.desc && <span> Bắt buộc nhập</span>}
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400">Price</label>
            <input type="number" {...register("price",{required:true,min:1})} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a name..." defaultValue={""} />
            {errors.price && <span> Bắt buộc nhập</span>}
            <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400">Image</label>
            <textarea {...register("img",{required:true})} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a name..." defaultValue={""} />
            {errors.img && <span> Bắt buộc nhập</span>}
            <button className='px-3 py-1 bg-indigo-600 rounded-lg my-4 text-gray-200'>Save</button>
        </form>
    </div>
  )
}

export default Edit

