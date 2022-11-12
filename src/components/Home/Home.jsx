import React from 'react';
import BannerImage1 from '../../assets/BannerImage1.jpg'
import BannerImage2 from '../../assets/BannerImage2.jpg'
import BannerImage3 from '../../assets/BannerImage3.jpg'

const Home = () => {
    return (
        <div className='w-full'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={BannerImage1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="text-white text-3xl">❮</a>
                        <a href="#slide2" className="text-white text-3xl">❯</a>
                    </div>
                    <div className='text-white absolute top-1/2 -translate-y-1/2 left-28'>
                        <h2 className='text-4xl text-slate-600 font-light'>Awesome Smiles</h2>
                        <h1 className='text-6xl font-bold'>Great Care</h1>
                        <small className='block w-[48%] mt-3'>Cultivate one to one customer service with robust ideas. Dynamically innovate resource leveling customer service for state of the art customer service.</small>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={BannerImage2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="text-white text-3xl">❮</a>
                        <a href="#slide3" className="text-white text-3xl">❯</a>
                    </div>
                    <div className='text-white absolute top-1/2 -translate-y-1/2 left-28'>
                        <h2 className='text-4xl text-slate-600 font-light'>Awesome Smiles</h2>
                        <h1 className='text-6xl font-bold'>Great Care</h1>
                        <small className='block w-[48%] mt-3'>Cultivate one to one customer service with robust ideas. Dynamically innovate resource leveling customer service for state of the art customer service.</small>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={BannerImage3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="text-white text-3xl">❮</a>
                        <a href="#slide1" className="text-white text-3xl">❯</a>
                    </div>
                    <div className='text-white absolute top-1/2 -translate-y-1/2 left-28'>
                        <h2 className='text-4xl text-slate-600 font-light'>Awesome Smiles</h2>
                        <h1 className='text-6xl font-bold'>Great Care</h1>
                        <small className='block w-[48%] mt-3'>Cultivate one to one customer service with robust ideas. Dynamically innovate resource leveling customer service for state of the art customer service.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;