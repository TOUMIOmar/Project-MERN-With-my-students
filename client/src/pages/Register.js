import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux'
import { RegisterUser } from '../redux/slices/UserSlice';
import { useNavigate } from 'react-router-dom';



const Register = () => {
  const {isAuth}=useSelector(state=>state.user)
  const navigate=useNavigate()
  useEffect(()=>{
    if(isAuth){
      navigate('/home')
    }
  },[isAuth])
  const dispatch=useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      dispatch(RegisterUser(data))
    };
    console.log(errors);
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="name" {...register("name",{})} />
        <input type="email" placeholder="email" {...register("email", {})} />
        <input type="password" placeholder="password" {...register("password", {})} />
        <input type="submit" />
      </form>
    );
}

export default Register