import React from 'react'
import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
}

const PrivateRouter = (props: Props) => {
  const isAuthenticated = () =>{
    if(!localStorage.getItem("user"))
    return;
    return JSON.parse(localStorage.getItem("user")as string);
  }

  const user = isAuthenticated();
  if(user.user.id!==1)
  {
    return <Navigate to="/"/>
  }
  return props.children;


}

export default PrivateRouter
