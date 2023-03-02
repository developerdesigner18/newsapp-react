import React, { useState } from 'react'
import './Login.scss'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { setItem, TEST_CURRENT_USER } from '../../utils/LocalStorageManager';
import { useNavigate } from 'react-router-dom';
import MyModal from '../mymodal/MyModal';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dummy from '../../assets/default news img.jpg'
import FormContainer from '../formContainer/FormContainer';
import loginImg from '../../assets/login img.jpg'

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
        <div className="home">
            {/* ---------------------------------------Hero Section--------------------------------------- */}
            <div className="home__left">
                <img src={loginImg} alt="" />
            </div>

            {/* ---------------------------------------Login Section--------------------------------------- */}
            <div className="home__right">


                <h1 className="hero__title font-bold mb-5">Login to your account</h1>



                <FormContainer>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="token" className='mt-2'>
                            <Form.Label>Token <AiOutlineExclamationCircle onClick={handleIconClick} className='icon' /></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter token"
                                onChange={(e) => setToken(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Button
                            className="mt-3"
                            type="submit"
                            variant="primary"
                        >
                            Submit
                        </Button>
                    </Form>
                </FormContainer>

                <MyModal contentTitle='How to get api key?' show={modalShow} onHide={() => setModalShow(false)}>
                    <div className='user-alert'>
                        <p>Go to the below link and fill your details to get token.</p>
                        <a href="https://newsapi.org/register" target='_blank'><Button variant='outline-primary'>Click here</Button></a>
                    </div>
                </MyModal>
            </div>
        </div>
    );
}

export default Login