import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { listByCategory } from '../api/products';
import ProductType from '../type/product';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {

}

const Fe = (props:Props) => {
    const [products,setProducts] = useState<ProductType[]>([]);

    useEffect(()=>{
        const getProduct= async () =>{
            const { data } = await listByCategory("fe");
            setProducts(data);
        }
        getProduct();
    },[])
  
  return (
    <div>
      <h3 className='mb-4 tw-text-3xl tw-font-bold tw-text-gray-200 tw-py-5 tw-rounded-tr-full tw-rounded-tl-full tw-text-center tw-bg-blue-800'>Khóa học Front End</h3>
      <Swiper className=''
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {products?.map((item,index)=>{
        return(
            <SwiperSlide key={index}>      
                <div className=''>
                    <div className="border py-3 px-2 mt-3">
                        <img className="img-fluid" src={item.img} alt="Card image cap" />
                        <div className="d-flex flex-md-column justify-content-around">
                        <h5 className=" mt-2 tw-text-xl tw-font-bold">{item.name}</h5>
                        <p className="card-text">{item.desc}</p>
                        <h6 className='cart-subtitle text-muted'>$ {item.price}</h6>
                        <NavLink to={`/products/`+item._id}><button className='btn btn-danger mt-2 text-light'>Xem chi tiết</button></NavLink>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            )
        })} 
    </Swiper> 
    <h3 className='mb-4 tw-text-3xl tw-font-bold tw-text-gray-200 tw-py-5 tw-rounded-br-full tw-rounded-bl-full tw-text-center tw-bg-blue-800'></h3> 
    </div>
  )
}

export default Fe



  
