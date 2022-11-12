import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import title from '../../assets/title.png'

const Navbar = () => {
    const [navSize, setnavSize] = useState("4rem");
    const [navColor, setnavColor] = useState("transparent");
    const [navText, setnavText] = useState("black");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("55px") : setnavSize("4rem");
        window.scrollY > 10 ? setnavText("black") : setnavText("white");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div className="bg-base-100 fixed w-full z-50 bg-inherit backdrop-blur-sm shadow">
            <div
                style={{
                    backgroundColor: navColor,
                    height: navSize,
                    // transition: "background, height 0.5s",
                    color: navText
                }}
                className='px-5 flex justify-between items-center duration-300'>
                <a className="text-xl flex items-center">
                    <img className='w-16 mr-1' src={logo} alt="Pharma" />
                    <img className='w-16' src={title} alt="Pharma" />
                </a>
                <ul className="flex gap-8 items-center p-0 text-sm">
                    <li className='hover:bg-white p-3 rounded hover:text-black cursor-pointer'><a>Home</a></li>
                    <li className='hover:bg-white p-3 rounded hover:text-black cursor-pointer'><a>About us</a></li>
                    <li className='hover:bg-white p-3 rounded hover:text-black cursor-pointer'><a>Contact</a></li>
                    <li><button className='btn-theme text-white'>Get Started</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;