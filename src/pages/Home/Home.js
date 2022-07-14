import React from 'react';
import Banner from './banner/Banner';
import Blog from './Blog/Blog';
import Events from './Event/Events/Events';
import PblmsOfDay from './ProblemsOfTheDay/PblmsOfDay';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Events></Events>
            <Blog></Blog>
            <PblmsOfDay></PblmsOfDay>
        </div>
    );
};

export default Home;