import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../api/auth';
import React from 'react';
import UserType from '../type/user';

const Signup = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<UserType>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserType> = async (data) => {
    console.log(data);
     await signup(data);
      navigate("/signin");
  }
return (
  <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder='Tên' {...register('name')} />
      <input type="email" placeholder='Email' {...register('email')} />
      <input type="password" placeholder='Mật khẩu' {...register('password')} />
      <button>Đăng ký</button>
  </form>
)
}

export default Signup