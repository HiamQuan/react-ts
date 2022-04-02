
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../api/auth';
import UserType from '../type/user';
import { authenticated } from '../utils/localStorage';
import React from 'react';


const Signin = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<UserType>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<UserType> = async data => {
        const {data : user} = await signin(data);
        console.log(user);
        // localstorage
        authenticated(user, () => {
            navigate('/');
        })
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder='Email' {...register('email',{"required":true})} />
        {errors.email && <span>Bat buoc nhap truong nay</span>}
        <input type="password" placeholder='Mật khẩu' {...register('password',{"required":true})} />
        {errors.password && <span>Bat buoc nhap truong nay</span>}
        <button>Đăng nhập</button>
    </form>
  )
}

export default Signin