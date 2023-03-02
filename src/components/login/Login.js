import React, { useState } from 'react'
import './Login.scss'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { setItem, TEST_CURRENT_USER } from '../../utils/LocalStorageManager';
import { useNavigate } from 'react-router-dom';
import MyModal from '../mymodal/MyModal';
import { Button } from 'react-bootstrap';

const Login = () => {

    const [modalShow, setModalShow] = useState(false);

    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            alert('email is required');
            return;
        }
        if (!token) {
            alert('token is required');
            return;
        }
        setItem(TEST_CURRENT_USER, { name: '', email, token });
        navigate('/');
    }

    const handleIconClick = (e) => {
        e.preventDefault();
        setModalShow(true);
    }

    return (
        <div className='Login'>
            <div className="login-box">
                <h2 className='heading'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" className='email' id='email' onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="token">Token <AiOutlineExclamationCircle onClick={handleIconClick} className='icon' /></label>
                    <input type="text" className='token' id='token' onChange={(e) => setToken(e.target.value)} />

                    <input type="submit" className='submit' />
                </form>
            </div>

            <MyModal title='How to get api key?' show={modalShow} onHide={() => setModalShow(false)}>
                <div className='user-alert'>
                    <p>Go to the below link and fill your details to get token.</p>
                    <a href="https://newsapi.org/register" target='_blank'><Button variant='outline-primary'>Click here</Button></a>
                </div>
            </MyModal>
        </div>
    )
}

export default Login