import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-base-100 fixed w-full z-50 bg-inherit backdrop-blur-sm shadow">
            <div className='w-10/12 mx-auto text-white flex justify-between items-center py-3'>
                <div>
                    <a className="text-xl">daisyUI</a>
                </div>
                <div>
                    <ul className="flex gap-8 items-center p-0">
                        <li className='hover:bg-white p-3 rounded hover:text-black cursor-pointer'><a>Home</a></li>
                        <li className='hover:bg-white p-3 rounded hover:text-black cursor-pointer'><a>About us</a></li>
                        <li className='hover:bg-white p-3 rounded hover:text-black cursor-pointer'><a>Contact</a></li>
                        <li><button className='btn-theme'>Get Started</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;