import React from 'react';
import user1 from '../../assets/reviews/avatar1.jpg'

const Testimonials = () => {
    return (
        <div className='w-10/12 mx-auto text-center text-secondary my-20'>
            <h1 className='text-5xl font-playfair mb-2'>Sweet Dental Experience</h1>
            <p className='text-sm'>Completely synthesize principle-centered information after ethical communities. Efficiently <br /> innovate open-source infrastructures via inexpensive materials.</p>
            <div className='grid grid-cols-4 gap-6 mt-10'>
                <div className='bg-secondary text-white p-10 rounded-lg'>
                    <img className='mx-auto w-28 rounded-full' src={user1} alt="" />
                    <h3 className='text-xl font-playfair my-2'>Best dentist in town!</h3>
                    <p className='text-xs'>Holistically generate open-source applications through bleeding-edge sources supply just in time.</p>
                </div>
                <div className='bg-secondary text-white p-10 rounded-lg'>
                    <img className='mx-auto w-28 rounded-full' src={user1} alt="" />
                    <h3 className='text-xl font-playfair my-2'>Best dentist in town!</h3>
                    <p className='text-xs'>Holistically generate open-source applications through bleeding-edge sources supply just in time.</p>
                </div>
                <div className='bg-secondary text-white p-10 rounded-lg'>
                    <img className='mx-auto w-28 rounded-full' src={user1} alt="" />
                    <h3 className='text-xl font-playfair my-2'>Best dentist in town!</h3>
                    <p className='text-xs'>Holistically generate open-source applications through bleeding-edge sources supply just in time.</p>
                </div>
                <div className='bg-secondary text-white p-10 rounded-lg'>
                    <img className='mx-auto w-28 rounded-full' src={user1} alt="" />
                    <h3 className='text-xl font-playfair my-2'>Best dentist in town!</h3>
                    <p className='text-xs'>Holistically generate open-source applications through bleeding-edge sources supply just in time.</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;