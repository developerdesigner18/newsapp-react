import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FcSearch } from 'react-icons/fc'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './News.scss'

const News = () => {
    return (
        <Container className='mt-4 d-flex justify-content-end'>

            <InputGroup className="mb-3 search">
                <InputGroup.Text id="basic-addon1"><FcSearch /></InputGroup.Text>
                <Form.Control
                    placeholder="Search here..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <div>
                <Button className='ms-2 mt-1 search-btn' size='sm' variant="outline-primary">Search</Button>
            </div>


        </Container>
    )
}

export default News