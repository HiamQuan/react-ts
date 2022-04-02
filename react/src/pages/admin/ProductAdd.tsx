import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { toast } from "react-toastify";

type Inputs = { // kiểu dữ liệu của từng input
    name: string,
    price: number,
    desc: string,
    img: string,
    category:string,
  };
  
type ProductAddProps = {
    onAdd: (product: Inputs) => void
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors}} = useForm<Inputs>()
    
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs>  = (dataInput) => {
        props.onAdd(dataInput);
        // chuyển trang
        navigate("/admin/products");
        toast.success("Thêm thành công");
    }
  return (
   <div className="tw-bg-gray-900 tw-py-10 tw-min-h-screen">
      <form action="" onSubmit={handleSubmit(onSubmit)} className="tw-px-10">
      <h3 className='tw-text-4xl tw-text-gray-200 tw-mb-14'>Thêm sản phẩm</h3>
        <label htmlFor="name"  className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-400">Name</label>
        <textarea id="name" {...register('name', { required: true})} rows={4} className="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="Leave a comment..."></textarea>
        {errors.name && <span> This field is required</span>}
        <label htmlFor="desc"  className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-400">Describe</label>
        <textarea id="desc" {...register('desc', { required: true})} rows={4} className="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="Leave a comment..."></textarea>
        {errors.desc && <span> This field is required</span>}
        <label htmlFor="price"  className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-400">Price</label>
        <textarea id="price"  {...register('price', {required: true})} rows={4} className="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="Leave a comment..."></textarea>
        {errors.price && <span> This field is required</span>}
        <label htmlFor="category"  className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-400">Category</label>
        <textarea id="category" {...register('category',{required:true})} rows={4} className="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="Leave a comment..."></textarea>
        {errors.category && <span> This field is required</span>}
        
        <button className="tw-bg-indigo-600 tw-px-5 tw-py-1 tw-rounded-full dark:tw-text-gray-200 tw-my-4">Add</button>
    </form> 
  </div>

  )
}

export default ProductAdd
