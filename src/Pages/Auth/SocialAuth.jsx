import React from 'react';

const SocialAuth = () => {
    return (
        <>
            <div className='flex items-center gap-5 my-2 px-3'>
                <div className='w-full h-px bg-[#1152783b] rounded-full'></div>
                <div>OR</div>
                <div className='w-full h-px bg-[#1152783b] rounded-full'></div>
            </div>
            <div className="form-control mt-1">
                <button className="border border-secondary text-secondary py-[10px] rounded-full hover:bg-secondary hover:text-white duration-100">Continue with Google</button>
            </div>
        </>
    );
};

export default SocialAuth;