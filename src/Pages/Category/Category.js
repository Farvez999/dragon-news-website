import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import NewsCart from '../Shared/NewsCart';

const Category = () => {
    const categoryNews = useLoaderData();
    useTitle('Category');
    return (
        <div>
            <h2>This is category has new {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsCart
                    key={news._id}
                    news={news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Category;