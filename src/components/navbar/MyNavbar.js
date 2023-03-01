import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { getItem, removeItem, TEST_CURRENT_USER } from '../../utils/LocalStorageManager';

const MyNavbar = () => {

    const user = getItem(TEST_CURRENT_USER);

    const navigate = useNavigate();

    const logout = () => {
        removeItem(TEST_CURRENT_USER);
        navigate('/login');
    }

    return (

        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">{user.email}</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to='/profile'>My Profile</Link>
                        <Button onClick={logout} className='ms-4' variant="outline-primary">Logout</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default MyNavbar