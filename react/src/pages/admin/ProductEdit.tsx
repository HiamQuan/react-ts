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
    price: number
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
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', { required: true})} />
        {errors.name && <span> This field is required</span>}
        <input type="number" {...register('price')} />
        <button>Update</button>
    </form>
  )
}

export default ProductEdit