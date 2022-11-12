import React from 'react';
import logo from '../../assets/logo.png'
import title from '../../assets/title.png'

const Navbar = () => {
    return (
        <div className="bg-base-100 fixed w-full z-50 bg-inherit backdrop-blur-sm shadow">
            <div className='px-5 text-white flex justify-between items-center py-3'>
                <div>
                    <a className="text-xl flex items-center">
                        <img className='w-16 mr-1' src={logo} alt="Pharma" />
                        <img className='w-16' src={title} alt="Pharma" />
                    </a>
                </div>
                <div>
                    <ul className="flex gap-8 items-center p-0 text-sm">
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