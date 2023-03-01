import React from 'react'
import MyNavbar from '../navbar/MyNavbar'
import { Outlet } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div>
        <MyNavbar/>
        <Outlet/>
    </div>
  )
}

export default Home