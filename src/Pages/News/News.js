import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const News = () => {
    useTitle('News')
    const news = useLoaderData()
    const { category_id, title, author, details, image_url, rating } = news;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className='d-flex justify-content-between'>
                    <p>Author : {author?.name}</p>
                    <p>Published date : {author?.published_date}</p>
                    <div>
                        <FaStar className='text-warning me-1'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                </div>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}><Button variant="primary">All News in this Category</Button></Link>
            </Card.Body>
        </Card >
    );
};

export default News;