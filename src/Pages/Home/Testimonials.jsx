import React from 'react';
import user1 from '../../assets/reviews/user1.jpg'
import user2 from '../../assets/reviews/user2.jpg'
import user3 from '../../assets/reviews/user3.jpg'
import user4 from '../../assets/reviews/user4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const reviews = [
    {
        _id: 1,
        title: "One great experience.",
        desc: "Efficiently enable enabled sources and cost produc synthesize principle-centered information.",
        image: user1
    },
    {
        _id: 2,
        title: "Best dentist in town!",
        desc: "Holistically generate open-source applications through bleeding-edge sources supply just in time.",
        image: user2
    },
    {
        _id: 3,
        title: "Best dentist in town!",
        desc: "Holistically generate open-source applications through bleeding-edge sources supply just in time.",
        image: user3
    },
    {
        _id: 4,
        title: "Best dentist in town!",
        desc: "Holistically generate open-source applications through bleeding-edge sources supply just in time.",
        image: user4
    }
]

const Testimonials = () => {
    return (
        <div className='w-10/12 mx-auto text-center text-secondary my-20'>
            <h1 className='text-5xl font-playfair mb-2'>Sweet Dental Experience</h1>
            <p className='text-sm'>Completely synthesize principle-centered information after ethical communities. Efficiently <br /> innovate open-source infrastructures via inexpensive materials.</p>
            <div className='mt-10'>
                <Swiper
                    breakpoints={{
                        // when window width is >= 0px
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        // when window width is >= 900px
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        // when window width is >= 1536px
                        1536: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }
                    }}
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={4}
                >
                    {
                        reviews.map(review => <SwiperSlide key={`review${review._id}`}>
                            <div className='bg-secondary text-white p-10 rounded-lg'>
                                <img className='mx-auto w-28 rounded-full' src={review.image} alt="" />
                                <h3 className='text-xl font-playfair my-2'>{review.title}</h3>
                                <p className='text-xs'>{review.desc}</p>
                            </div>
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;