import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { create, read } from '../api/products';
import ProductType from '../type/product';
import OrderType from '../type/order';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { isAuthenticate } from '../utils/localStorage';
import { toast } from 'react-toastify';

type Props = {
  addToCart: (order,next) => void;
}


const ProductDetail = (props:Props) => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType>();
    const [input,setInput] = useState("");
    const [hour,setHour] = useState("");
    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors}, reset} = useForm();
    const user = isAuthenticate();

    useEffect(() => {
      
        const getProduct = async() => {
            const { data } = await read(id);
            setProduct(data)
        }
        getProduct();
    }, [id])

    const onSubmit: SubmitHandler<any> = () => {
      
        if(user){
         props.addToCart({
            userId: user.user._id,
            productId: product._id,
            productName: product.name,
            productPrice: product.price,
            productImage: product.img,
            schedule: {
              day:input,
              hour:hour,
            },
            time: new Date(),
            status: false
          },()=>{
            toast.success("Đã thêm sản phẩm vào giỏ hàng");
            navigate("/cart")
          });
        }
        else{
          toast.error("Bạn chưa đăng nhập");
          navigate("/signin");
        }
    }


  return (
<section className="tw-text-gray-700 body-font tw-overflow-hidden tw-bg-white">
  <div className="container tw-px-5 tw-py-24 tw-mx-auto">
    <div className="lg:tw-w-4/5 tw-mx-auto tw-flex tw-flex-wrap">
      <img alt="ecommerce" className="lg:tw-w-1/2 tw-w-full tw-object-cover tw-object-center tw-rounded tw-border tw-border-gray-200" src={product?.img} />
      <form className="lg:tw-w-1/2 tw-w-full lg:tw-pl-10 lg:tw-py-6 tw-mt-6 lg:tw-mt-0" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="tw-text-sm title-font tw-text-gray-500 tw-tracking-widest">BRAND NAME</h2>
        <h1 className="tw-text-gray-900 tw-text-3xl title-font tw-font-medium tw-mb-1">{product?.name}</h1>
        <div className="tw-flex tw-mb-4">
          <span className="tw-flex tw-items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="tw-w-4 tw-h-4 tw-text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="tw-w-4 tw-h-4 tw-text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="tw-w-4 tw-h-4 tw-text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="tw-w-4 tw-h-4 tw-text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="tw-w-4 tw-h-4 tw-text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="tw-text-gray-600 tw-ml-3">4 Reviews</span>
          </span>
          <span className="tw-flex tw-ml-3 tw-pl-3 tw-py-2 tw-border-l-2 tw-border-gray-200">
            <a className="tw-text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="tw-w-5 tw-h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="tw-ml-2 tw-text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="tw-w-5 tw-h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="tw-ml-2 tw-text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="tw-w-5 tw-h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
        <p className="tw-leading-relaxed">{product?.desc}</p>
        <div className="tw-flex tw-mt-6 tw-items-center tw-pb-5 tw-border-b-2 tw-border-gray-200 tw-mb-5">
          <div className="tw-flex tw-ml-6 tw-items-center">
            <span className="tw-mr-3">Lịch học: </span>
            <div className="tw-relative">
              <select defaultValue={"false"} onChange={(e)=>{setInput(e.target.value)}} className="tw-rounded tw-border tw-appearance-none tw-border-gray-400 tw-py-2 focus:tw-outline-none focus:tw-border-red-500 tw-text-base tw-pl-3 tw-pr-10">
                <option value = "false"></option>
                <option value = "0">Sunday</option>
                <option value = "1">Monday</option>
                <option value = "2">Tuesday</option>
                <option value = "3">Wednesday</option>
                <option value = "4">Thursday</option>
                <option value = "5">Friday</option>
                <option value = "6">Saturday</option>
              </select>
              <select defaultValue={"false"} onChange={(e)=>{setHour(e.target.value)}} className="tw-rounded tw-border tw-appearance-none tw-border-gray-400 tw-py-2 focus:tw-outline-none focus:tw-border-red-500 tw-text-base tw-pl-3 tw-pr-10">
                <option value = "false"></option>
                <option value = "13:00 GMT+07:00">13:00</option>
                <option value = "14:00 GMT+07:00">14:00</option>
                <option value = "15:00 GMT+07:00">15:00</option>
                <option value = "16:00 GMT+07:00">16:00</option>
                <option value = "17:00 GMT+07:00">17:00</option>
                <option value = "18:00 GMT+07:00">18:00</option>
                <option value = "20:00 GMT+07:00">20:00</option>
              </select>
              <span className="tw-absolute tw-right-0 tw-top-0 tw-h-full tw-w-10 tw-text-center tw-text-gray-600 tw-pointer-events-none tw-flex tw-items-center tw-justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="tw-w-4 tw-h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="tw-flex">
          <span className="title-font tw-font-medium tw-text-2xl tw-text-gray-900">${product?.price}</span>
          <button type="submit" className="tw-flex tw-ml-auto tw-text-white tw-bg-red-500 tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none hover:tw-bg-red-600 tw-rounded">Tham gia</button>
          <button className="tw-rounded-full tw-w-10 tw-h-10 tw-bg-gray-200 tw-p-0 tw-border-0 tw-inline-flex tw-items-center tw-justify-center tw-text-gray-500 tw-ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="tw-w-5 tw-h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

  )
}

export default ProductDetail