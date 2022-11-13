import React from 'react';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Carousel = () => {
    const carouselItems = [
        {
            _id: 1,
            slogan: 'Awesome Smiles',
            title: 'Great Care',
            desc: "Cultivate one to one customer service with robust ideas. Dynamically innovate resource leveling customer service for state of the art customer service.",
            image: banner1,
            prev: 3,
            next: 2
        },
        {
            _id: 2,
            slogan: 'Awesome Smiles',
            title: 'Great Care',
            desc: "Cultivate one to one customer service with robust ideas. Dynamically innovate resource leveling customer service for state of the art customer service.",
            image: banner2,
            prev: 1,
            next: 3
        },
        {
            _id: 3,
            slogan: 'Awesome Smiles',
            title: 'Great Care',
            desc: "Cultivate one to one customer service with robust ideas. Dynamically innovate resource leveling customer service for state of the art customer service.",
            image: banner3,
            prev: 2,
            next: 1
        }
    ]
    return (
        <section className="carousel w-full">

            {
                carouselItems.map(item => <div key={`slide${item._id}`} id={`slide${item._id}`} className="carousel-item relative w-full">
                    <img src={item.image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#slide${item.prev}`} className="text-white text-3xl"><BsChevronLeft /></a>
                        <a href={`#slide${item.next}`} className="text-white text-3xl"><BsChevronRight /></a>
                    </div>
                    <div className='text-white absolute top-1/2 -translate-y-1/2 left-28'>
                        <h2 className='text-4xl text-slate-600 font-light'>Awesome Smiles</h2>
                        <h1 className='text-6xl font-bold'>Great Care</h1>
                        <small className='block w-[48%] mt-3'>Cultivate one to one customer service with robust ideas. Dynamically innovate resource leveling customer service for state of the art customer service.</small>
                        <div className='mt-8'>
                            <button className='btn-secondary mr-3 py-3 px-6'>View Our Services</button>
                            <button className='btn-white py-3 px-6'>Denticare solutions</button>
                        </div>
                    </div>
                </div>
                )
            }
        </section>
    );
};

export default Carousel;