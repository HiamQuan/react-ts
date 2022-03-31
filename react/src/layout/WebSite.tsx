import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


type Props = {
  onSignOut : () => JSX.Element;
}

const WebSite = ({onSignOut}:Props) => {
  return (
    <div>
        <Header onSignOut={onSignOut}/>
        <Outlet/>
    </div>
  )
}


export default WebSite
