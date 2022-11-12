import React from 'react';
import Carousel from './Carousel';
import GetAQuote from './GetAQuote';
import Services from './Services';

const Home = () => {
    
    return (
        <div>
            <Carousel />
            <Services />
            <GetAQuote />
        </div>
    );
};

export default Home;