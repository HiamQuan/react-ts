
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../api/auth';
import UserType from '../type/user';
import { authenticated } from '../utils/localStorage';


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
        <input type="email" placeholder='Email' {...register('email')} />
        <input type="password" placeholder='Mật khẩu' {...register('password')} />
        <button>Đăng nhập</button>
    </form>
  )
}

export default Signin