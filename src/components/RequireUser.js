import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getItem, TEST_CURRENT_USER } from '../utils/LocalStorageManager';


const RequireUser = () => {

    const user = getItem(TEST_CURRENT_USER);

  return (
    user? <Outlet/> : <Navigate to='/login'/>
  )
}

export default RequireUser