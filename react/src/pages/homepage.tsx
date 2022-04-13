import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Scrollbar,Pagination } from 'swiper';

type Props = {

}
const HomePage = (props:Props) => {
  return (
    <div className='tw-min-h-screen '>

      <div className='banner tw-px-20 tw-py-24'>
        <div className="tw-flex">
          <div className='tw-flex tw-flex-col'>
            <h2 className=' tw-text-5xl tw-font-bold tw-text-gray-700'>Trang bị cho bạn năng lực</h2>
            <h2 className='tw-text-7xl tw-font-bold tw-text-blue-700'>Lập trình & Giải thuật toán</h2>
            <p className='tw-text-2xl tw-font-bold tw-mt-10'>Trực tiếp 1:1, lớp học các công nghệ thông minh nhất</p>
            <p className='tw-text-2xl tw-font-bold tw-mt-10'>Các khóa học từ cơ bản tới nâng cao. Bạn có thể hoàn thành hầu hết các dự án thường gặp sau khi tốt nghiệp</p>
                <div className="tw-flex tw-justify-start tw-mt-10">
                  <div className="tw-mb-3 xl:tw-min-w-96">
                    <div className="input-group tw-relative tw-flex tw-flex-wrap tw-items-stretch tw-w-full tw-mb-4">
                      <input type="search" className="form-control tw-relative tw-flex-auto tw-min-w-0 tw-block tw-w-full tw-px-4 tw-py-1.5 tw-text-xl tw-font-semibold tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none" placeholder="Số điện thoại" aria-label="Search" aria-describedby="button-addon2" />
                      <button className="btn tw-inline-block tw-px-6 tw-py-2.5 tw-bg-blue-600 tw-font-medium tw-text-xs tw-leading-tight tw-uppercase tw-rounded tw-shadow-md hover:tw-bg-blue-700 hover:tw-shadow-lg focus:tw-bg-blue-700  focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0 active:tw-bg-blue-800 active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out tw-flex tw-items-center" type="button" id="button-addon2">
                      <h4 className='tw-text-xl tw-text-white'>Đăng ký học thử</h4>
                      </button>
                    </div>
                  </div>
                </div>
          </div>
          <img className='' src="https://res.cloudinary.com/quannaph18209/image/upload/v1648853143/hqyebs3wblcly7oqsrbb.png"/>
        </div>
      </div>

      <div className='tw-px-10 tw-mt-40 tw-flex tw-flex-col tw-items-center'>
        <h3 className='tw-text-5xl tw-font-bold'> Lộ trình đường dài để trở thành Senior Website Developer</h3>
        <img className='tw-mt-10' src="https://res.cloudinary.com/quannaph18209/image/upload/v1648854060/qkb6dvyvf1tofrclku7c.png"/>
        <Link className='' to="/products"><button className=' hover:tw-bg-blue-600 hover:tw-translate-y-2 tw-text-xl tw-font-bold tw-text-white tw-bg-blue-700 tw-px-20 tw-py-2 tw-rounded-xl'>Bắt đầu lộ trình thôi nào</button></Link>
      </div>

    <div className='tw-bg-gray-200 tw-px-10 tw-mt-40 tw-flex tw-flex-col tw-items-center tw-p-10'>
        <h3 className='tw-text-5xl tw-font-bold tw-my-24'>Gồm rất nhiều chuyên gia đã từng thực chiến tại rất nhiều công ty lớn</h3>
        <div className='tw-grid-cols-4 tw-grid tw-gap-8'>
          <div className='tw-bg-yellow-500 tw-rounded-xl tw-text-white tw-p-5 tw-relative'>
            <ul className='tw-flex tw-flex-col '>
              <li>* Trường đại học Bách Khoa Hà Nội</li>
              <li>* Nhà huấn luyện chương trình STEM</li>
              <li>* Nhà vô địch của cuộc thi Không Gian Mạng Quốc Gia</li>
              <li><img className='tw-w-24 tw-rounded-full tw-mx-auto img-senior tw-absolute' src="https://res.cloudinary.com/quannaph18209/image/upload/v1648855565/kys2ay2bwkx1bt9dyxbq.jpg"/></li>
            </ul>
          </div>

          <div className='tw-bg-gradient-to-r tw-from-blue-800 tw-to-blue-600 tw-rounded-xl tw-text-white tw-p-5 tw-relative tw-h-48'>
            <ul className='tw-flex tw-flex-col '>
              <li>* Trường đại học Bách Khoa Hà Nội</li>
              <li>* Nhà huấn luyện chương trình STEM</li>
              <li>* Nhà vô địch của cuộc thi Không Gian Mạng Quốc Gia</li>
              <li><img className='tw-w-24 tw-rounded-full tw-mx-auto img-senior tw-absolute' src="https://res.cloudinary.com/quannaph18209/image/upload/v1648855565/kys2ay2bwkx1bt9dyxbq.jpg"/></li>
            </ul>
          </div>
          
          <div className='tw-bg-gradient-to-r tw-from-indigo-800 tw-to-indigo-600 tw-rounded-xl tw-text-white tw-p-5 tw-relative'>
            <ul className='tw-flex tw-flex-col '>
              <li>* Trường đại học Bách Khoa Hà Nội</li>
              <li>* Nhà huấn luyện chương trình STEM</li>
              <li>* Nhà vô địch của cuộc thi Không Gian Mạng Quốc Gia</li>
              <li><img className='tw-w-24 tw-rounded-full tw-mx-auto img-senior tw-absolute' src="https://res.cloudinary.com/quannaph18209/image/upload/v1648855565/kys2ay2bwkx1bt9dyxbq.jpg"/></li>
            </ul>
          </div>
          
          <div className='tw-bg-gradient-to-r tw-from-green-600 tw-to-green-500 tw-rounded-xl tw-text-white tw-p-5 tw-relative'>
            <ul className='tw-flex tw-flex-col '>
              <li>* Trường đại học Bách Khoa Hà Nội</li>
              <li>* Nhà huấn luyện chương trình STEM</li>
              <li>* Nhà vô địch của cuộc thi Không Gian Mạng Quốc Gia</li>
              <li><img className='tw-w-24 tw-rounded-full tw-mx-auto img-senior tw-absolute' src="https://res.cloudinary.com/quannaph18209/image/upload/v1648855565/kys2ay2bwkx1bt9dyxbq.jpg"/></li>
            </ul>
          </div>
        </div>

        <div className='tw-grid tw-grid-cols-3 tw-gap-8 tw-px-20 tw-my-40'>
          <div className='tw-grid tw-grid-cols-2 tw-w-full tw-bg-white tw-rounded-xl tw-p-4'>
            <img className=' tw-rounded-full' src="https://res.cloudinary.com/quannaph18209/image/upload/v1648856937/lbrjknsjyj39bwhql976.png"/>
            <p className="">Tât cả các chuyên gia giảng viên này đều được huấn luyện qua một chương trình được thiết kế đặc biệt để đảm bảo rằng tất cả các bé đều có niềm đam mê sáng tạo học tập cao nhất.</p>
          </div>
          <div className='tw-grid tw-grid-cols-2 tw-bg-white tw-rounded-xl tw-w-full tw-p-4'>
            <img className=' tw-rounded-full' src="https://res.cloudinary.com/quannaph18209/image/upload/v1648856937/lbrjknsjyj39bwhql976.png"/>
            <p className="">Các giảng viên được chọn từ quá trình phỏng vấn nghiêm ngặt. Chúng tôi chỉ chọn được một trong số 100 ứng viên ứng tuyển.</p>
          </div>
          <div className='tw-grid tw-grid-cols-2 tw-bg-white tw-rounded-xl tw-w-full tw-p-4'>
            <img className=' tw-rounded-full' src="https://res.cloudinary.com/quannaph18209/image/upload/v1648856937/lbrjknsjyj39bwhql976.png"/>
            <p className="">Các giảng viên sẽ làm một bản tường trình báo cáo chi tiết về quá trình học của học viên sau mỗi 4 buổi dạy.</p>
          </div>
          
        </div>
        <Link className='' to="/products"><button className=' hover:tw-bg-blue-600 hover:tw-translate-y-2 tw-text-xl tw-font-bold tw-text-white tw-bg-blue-700 tw-px-20 tw-py-2 tw-rounded-xl'>Hãy tham gia lớp học từ những chuyên gia giảng viên của chúng tôi</button></Link>
      </div>

      <div className='tw-px-10 tw-mt-40 tw-flex tw-flex-col tw-items-center'>
        <h3 className='tw-text-5xl tw-font-bold'> Hơn 10000 học viên đã tham gia và đều trở thành những Senior lớn</h3>
        <img className='tw-mt-10' src="https://res.cloudinary.com/quannaph18209/image/upload/v1648857595/fhvcdd9mao0byqo7hnkx.png"/>
        <Link className='' to="/signup"><button className=' hover:tw-bg-blue-600 hover:tw-translate-y-2 tw-text-xl tw-font-bold tw-text-white tw-bg-blue-700 tw-px-20 tw-py-2 tw-rounded-xl tw-my-10'>Hãy là thành viên của chúng tôi</button></Link>
      </div>

      <h3 className='tw-text-center tw-text-4xl tw-font-bold tw-mt-20'>Các nhà tài trợ của chúng tôi</h3>
      <Swiper className='tw-px-20 tw-my-10'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="https://res.cloudinary.com/quannaph18209/image/upload/v1648857972/go6relcraubsc6pqevul.png"/></SwiperSlide>
      <SwiperSlide><img src="https://res.cloudinary.com/quannaph18209/image/upload/v1648857972/m6spwopgod5mntlrs7zn.png"/></SwiperSlide>
      <SwiperSlide><img src="https://res.cloudinary.com/quannaph18209/image/upload/v1648857972/k0cyvszm9y94z525dq32.png"/></SwiperSlide>
      <SwiperSlide><img src="https://res.cloudinary.com/quannaph18209/image/upload/v1648857972/v0iji4sqvkm7jbm5l1ud.png"/></SwiperSlide>
      <SwiperSlide><img src="https://res.cloudinary.com/quannaph18209/image/upload/v1648857972/t81svviccx5uasfo7yoj.png"/></SwiperSlide>
      
    </Swiper> 

    </div>
  )
}

export default HomePage
