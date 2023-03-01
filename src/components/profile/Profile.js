import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { getItem, TEST_CURRENT_USER } from '../../utils/LocalStorageManager';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { FaRegEdit } from 'react-icons/fa'
import './Profile.scss'
import UpdateProfile from '../updateProfile/UpdateProfile';
import MyModal from '../mymodal/MyModal';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const [user, setUser] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setUser(getItem(TEST_CURRENT_USER));
    }, [])

    return (
        <Container>
            <Button className='mt-4' variant="outline-primary" onClick={()=>navigate('/')}>
                <HiOutlineArrowNarrowLeft style={{ fontSize: '1.5rem' }} />
            </Button>
            <Container className='mt-4'>
                <Row className='mt-2'>
                    <Col className='label'>Name: <span>{user?.name}</span></Col>
                </Row>
                <Row className='mt-2'>
                    <Col className='label'>Email: <span>{user?.email}</span></Col>
                </Row>
                <Row className='mt-2'>
                    <Col className='label'>Token: <span>{user?.token}</span></Col>
                </Row>
            </Container>
            <Button
                className='mt-4 d-flex align-items-center justify-content-center'
                variant="outline-primary"
                onClick={() => setModalShow(true)}>
                Edit
            </Button>

            <MyModal show={modalShow} onHide={() => setModalShow(false)}>
                <UpdateProfile user={user} setUser={setUser} onHide={() => setModalShow(false)}/>
            </MyModal>
        </Container>
    )
}

export default Profile