import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import News from './components/news/News'
import OnlyIfNotLoggedIn from './components/OnlyIfNotLoggedIn'
import Profile from './components/profile/Profile'
import RequireUser from './components/RequireUser'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<RequireUser />}>
          <Route element={<Home />} >
            <Route path='/' element={<News/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
        </Route>

        <Route element={<OnlyIfNotLoggedIn />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
