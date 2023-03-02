import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import './FullArticle.scss'
import dummy from '../../assets/default news img.jpg'

const FullArticle = ({ currentArticle }) => {

    const navigate = useNavigate();

    return (
        <Container>
            <Button className='mt-4 mb-4' variant="outline-primary" onClick={() => navigate('/')}>
                <HiOutlineArrowNarrowLeft style={{ fontSize: '1.5rem' }} />
            </Button>
            <div className='full-article'>
                <div className="full-article-left">
                    <img src={currentArticle?.urlToImage ? currentArticle?.urlToImage : dummy} alt="" onError={(e) => { e.target.src = `${dummy}` }} />
                </div>
                <div className="full-article-right">
                    <p><span>Title:</span> {currentArticle?.title}</p>
                    <p><span>Description:</span> {currentArticle?.description}</p>
                    <p><span>Content:</span> {currentArticle?.content}</p>
                    <p><span>Author:</span> {currentArticle?.author ? currentArticle?.author : 'Unknown'}</p>
                    <p><span>Published on:</span> {(new Date(currentArticle.publishedAt)).toLocaleDateString()}</p>
                    <p><span>Source:</span> {currentArticle.source.name}</p>
                    <a href={currentArticle?.url} target='_blank'><Button variant='outline-primary'>Go to orignal url</Button></a>
                </div>
            </div>
        </Container>
    )
}

export default FullArticle