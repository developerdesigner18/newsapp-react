import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { getItem, removeItem, TEST_CURRENT_USER } from '../../utils/LocalStorageManager';
import './Navbar.scss';

const MyNavbar = () => {

    const user = getItem(TEST_CURRENT_USER);

    const navigate = useNavigate();

    const logout = () => {
        removeItem(TEST_CURRENT_USER);
        navigate('/login');
    }

    return (

        <Navbar bg="dark">
            <Container>
                <Navbar.Brand href="#home"><span className='user-email'>{user.email}</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link className='link' to='/profile'><span className='my-profile'>My profile</span></Link>
                        <Button onClick={logout} className='ms-4' variant="primary">Logout</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default MyNavbar