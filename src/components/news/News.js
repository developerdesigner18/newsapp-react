import React, {useEffect, useRef, useState} from "react";
import {Button, Container} from "react-bootstrap";
import {FcSearch} from "react-icons/fc";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {updatShowNewsData} from "../../utils/utilFunctions";
import "./News.scss";
import {useNavigate} from "react-router-dom";
import {getItem, TEST_CURRENT_USER} from "../../utils/LocalStorageManager";
import dummy from "../../assets/default news img.jpg";

const News = ({setCurrentArticle}) => {
    const limit = 9;
    const [index, setIndex] = useState(0);
    const [newsData, setNewsData] = useState([]);
    const [newsDataToShow, setNewsDataToShow] = useState([]);
    const [query, setQuery] = useState("react");
    const searchRef = useRef(null);

    const navigate = useNavigate();

    const user = getItem(TEST_CURRENT_USER);

    const fetchNewsData = async () => {
        try {
            const res = await fetch(
                `https://newsapi.org/v2/everything?q=${query}&apiKey=${user.token}`
            );
            const data = await res.json();

            setNewsData(data.articles);
            setIndex(0);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        let timeout = setTimeout(() => {
            fetchNewsData();
        }, 800);

        return () => clearTimeout(timeout);
    }, [query]);

    useEffect(() => {
        setNewsDataToShow(updatShowNewsData(limit, index, newsData));
    }, [newsData]);

    useEffect(() => {
        setNewsDataToShow(updatShowNewsData(limit, index, newsData));
    }, [index]);

    const handleClick = () => {
        setQuery(searchRef.current.value);
    };

    const handleChange = (e) => {
        if (!e.target.value) {
            setQuery("react");
        } else {
            setQuery(e.target.value);
        }
    };

    const changeIndex = (value) => {
        if (value == "Inc") {
            setIndex(index + 1);
        } else {
            if (index > 0) {
                setIndex(index - 1);
            }
        }
    };

    const goToFullArticlePage = (article) => {
        setCurrentArticle(article);
        navigate("/fullArticle");
    };

    return (
        <>
            <Container className="mt-4 d-flex justify-content-end">
                <InputGroup className="mb-3 search">
                    <InputGroup.Text id="basic-addon1">
                        <FcSearch />
                    </InputGroup.Text>
                    <Form.Control
                        placeholder="Search here..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={handleChange}
                        ref={searchRef}
                    />
                </InputGroup>
                <div>
                    <Button
                        onClick={handleClick}
                        className="ms-2 mt-1 search-btn"
                        size="sm"
                        variant="outline-primary"
                    >
                        Search
                    </Button>
                </div>
            </Container>

            <Container>
                <div className="news-container">
                    {newsDataToShow?.map((news, index) => {
                        let title = news.title;
                        let desc = news.description;

                        if (title && title.length > 30) {
                            title = news.title.slice(0, 30) + "...";
                        }

                        if (desc && desc.length > 50) {
                            desc = news.description.slice(0, 50) + "...";
                        }

                        return (
                            <div key={index} className="news-card">
                                <div className="left">
                                    <img
                                        src={
                                            news?.urlToImage
                                                ? news?.urlToImage
                                                : dummy
                                        }
                                        alt=""
                                        onError={(e) => {
                                            e.target.src = `${dummy}`;
                                        }}
                                    />
                                </div>
                                <div className="right">
                                    <p className="news-title">{title}</p>
                                    <p className="news-desc">{desc}</p>
                                    <Button
                                        onClick={() =>
                                            goToFullArticlePage({...news})
                                        }
                                        size="sm"
                                        variant="outline-primary"
                                    >
                                        Show more
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="navigation-btn">
                    <Button
                        onClick={() => changeIndex("Desc")}
                        variant="outline-primary"
                    >
                        Prev
                    </Button>
                    <Button
                        onClick={() => changeIndex("Inc")}
                        variant="outline-primary"
                    >
                        Next
                    </Button>
                </div>
            </Container>
        </>
    );
};

export default News;
