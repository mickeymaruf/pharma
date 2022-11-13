import React from 'react';
import Carousel from './Carousel';
import GetAQuote from './GetAQuote';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    
    return (
        <div>
            <Carousel />
            <Services />
            <GetAQuote />
            <Testimonials />
        </div>
    );
};

export default Home;