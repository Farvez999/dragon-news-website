import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCart = ({ news }) => {
    const { _id, title, author, details, image_url, rating, total_view } = news;
    console.log(news);
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <Image
                            className='me-2'
                            src={author.img}
                            style={{ height: 60 }}
                            roundedCircle
                        ></Image>
                    </div>
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt className='ms-2'></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.length > 250 ? <p>{details.slice(0, 250) + '...'} <Link to={`/new/${_id}`}>Read More</Link></p> : <p>{details}</p>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCart;