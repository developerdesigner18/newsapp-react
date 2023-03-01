import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {getItem, TEST_CURRENT_USER} from '../utils/LocalStorageManager'

const OnlyIfNotLoggedIn = () => {
    const user = JSON.parse(getItem(TEST_CURRENT_USER));

    return (
        user ? <Navigate to='/' /> : <Outlet />
    )
}

export default OnlyIfNotLoggedIn