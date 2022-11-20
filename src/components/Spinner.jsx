import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className='flex justify-center text-center text-3xl mt-10'>
                {/* Loading... */}
                <div className='mt-10 w-10 h-10 border-8 border-primary border-dashed rounded-full animate-spin'></div>
            </div>
        </div>
    );
};

export default Spinner;