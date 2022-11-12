import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import { BsChevronRight } from 'react-icons/bs'

const Home = () => {
    return (
        <div>
            <Carousel />
            <div className='w-10/12 mx-auto text-gray-600 mt-28'>
                <h1 className='text-5xl text-primary font-playfair mb-2'>Be Proud Of Your Smile</h1>
                <small>
                    Seamlessly visualize quality intellectual capital without superior collaboration and idea<br />-sharing. Holistically pontificate installed base portals after maintainable products.
                </small>
                <div className='flex gap-8 text-center my-12'>
                    <div>
                        <img className='w-48 mx-auto' src="https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/home-service-1.png" alt="" />
                        <h4 className='font-playfair text-2xl mt-8'>General Dentistry</h4>
                        <small className='block my-1'>
                            Enthusiastically mesh long term high impact infrastructures efficient customer service.
                        </small>
                        <small className='flex items-center justify-center gap-5 text-theme font-medium'><Link>Read more</Link><BsChevronRight /></small>
                    </div>
                    <div>
                        <img className='w-48 mx-auto' src="https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/home-service-2.png" alt="" />
                        <h4 className='font-playfair text-2xl mt-8'>General Dentistry</h4>
                        <small className='block my-1'>
                            Enthusiastically mesh long term high impact infrastructures efficient customer service.
                        </small>
                        <small className='flex items-center justify-center gap-5 text-theme font-medium'><Link>Read more</Link><BsChevronRight /></small>
                    </div>
                    <div>
                        <img className='w-48 mx-auto' src="https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/home-service-4.png" alt="" />
                        <h4 className='font-playfair text-2xl mt-8'>General Dentistry</h4>
                        <small className='block my-1'>
                            Enthusiastically mesh long term high impact infrastructures efficient customer service.
                        </small>
                        <small className='flex items-center justify-center gap-5 text-theme font-medium'><Link>Read more</Link><BsChevronRight /></small>
                    </div>
                    <div>
                        <img className='w-48 mx-auto' src="https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/home-service-3.png" alt="" />
                        <h4 className='font-playfair text-2xl mt-8'>General Dentistry</h4>
                        <small className='block my-1'>
                            Enthusiastically mesh long term high impact infrastructures efficient customer service.
                        </small>
                        <small className='flex items-center justify-center gap-5 text-theme font-medium'><Link>Read more</Link><BsChevronRight /></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;