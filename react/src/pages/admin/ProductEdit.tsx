import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { read,update } from '../../api/products';
import  ProductType  from '../../type/product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    desc:string,
    img:string,
    price: number,
    category:string
}

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    },[]);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data)
        navigate("/admin/products");
    }
  return (
<div className="tw-bg-gray-900 tw-py-10 tw-min-h-screen">
    <form action="" onSubmit={handleSubmit(onSubmit)} className="tw-px-24">
        <h3 className='tw-text-4xl tw-text-gray-200 tw-mb-14'>Chỉnh sửa sản phẩm</h3>
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
      
      <button className="tw-bg-indigo-600 tw-px-5 tw-py-1 tw-rounded-full dark:tw-text-gray-200 tw-my-4">Update</button>
  </form>
</div>
  )
}

export default ProductEdit