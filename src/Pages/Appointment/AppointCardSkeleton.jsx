import React from 'react';
import Skeleton from 'react-loading-skeleton'

const AppointCardSkeleton = () => {
    return (
        <div className='w-10/12 mx-auto grid grid-cols-3 gap-8 py-36'>
                {
                    [...Array(6).keys()].map((item, idx) => <div key={'appoinmentsSkeleton' + idx} className='shadow-md border px-12 py-5 rounded-lg text-center'>
                        <h4 className='text-lg font-medium text-primary mb-1'><Skeleton baseColor="#23C3BB" /> </h4>
                        <p className='text-sm'><Skeleton /> </p>
                        <p className='text-sm mb-2'><Skeleton /> </p>
                        <label htmlFor="BookAppointModal" className="inline-block bg-[#11527832] px-20 rounded-full text-sm text-white py-3 mt-1 font-medium"><Skeleton /> </label>
                    </div>)
                }
            </div>
    );
};

export default AppointCardSkeleton;