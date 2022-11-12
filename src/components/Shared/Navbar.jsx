import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import title from '../../assets/title.png'

const Navbar = () => {
    const [navSize, setnavSize] = useState("60px");
    const [navColor, setnavColor] = useState("transparent");
    const [navText, setnavText] = useState("#115278");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("52px") : setnavSize("60px");
        window.scrollY > 10 ? setnavText("#115278") : setnavText("white");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <header className="bg-base-100 fixed w-full z-50 bg-inherit backdrop-blur-sm shadow">
            <nav
                style={{
                    backgroundColor: navColor,
                    height: navSize,
                    // transition: "background, height 0.5s",
                    color: navText
                }}
                className='px-5 flex justify-between items-center duration-300 font-medium'>
                <a className="text-xl flex items-center">
                    <img className='w-16 mr-1' src={logo} alt="Pharma" />
                    <img className='w-16' src={title} alt="Pharma" />
                </a>
                <ul className="flex gap-8 items-center p-0 text-sm">
                    <li className='hover:bg-white p-3 rounded hover:text-primary cursor-pointer'><a>Home</a></li>
                    <li className='hover:bg-white p-3 rounded hover:text-primary cursor-pointer'><a>About us</a></li>
                    <li className='hover:bg-white p-3 rounded hover:text-primary cursor-pointer'><a>Contact</a></li>
                    <li><button className='btn-theme text-white'>Get Started</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;