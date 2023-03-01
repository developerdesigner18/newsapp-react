import React, { useEffect, useState } from 'react'
import { setItem, TEST_CURRENT_USER } from '../../utils/LocalStorageManager';
import './UpdateProfile.scss'

const UpdateProfile = ({user, setUser, onHide}) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name){
            alert('Name is required');
            return;
        }
        if(!email){
            alert('Email is required');
            return;
        }
        setUser({name, email, token:user.token});
        setItem(TEST_CURRENT_USER, {name, email, token:user.token});
        onHide();
    }

    return (
        <div className='update-profile'>
            <div className="login-box">
                {/* <h2 className='heading'>Login</h2> */}
                <form onSubmit={handleSubmit}>

                    <label htmlFor="name">Name </label>
                    <input value={name} type="text" className='name' id='name' onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="email">Email</label>
                    <input value={email} type="email" className='email' id='email' onChange={(e) => setEmail(e.target.value)} />

                    <input type="submit" className='submit' />
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile