import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'
import title from '../../assets/title.png'
import { useAuth } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const location = useLocation();
    const [navSize, setnavSize] = useState("60px");
    const [navColor, setnavColor] = useState("transparent");
    const [navText, setnavText] = useState("white");
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
        <header className="bg-base-100 fixed top-0 w-full z-50 bg-inherit backdrop-blur-sm shadow">
            <nav
                style={{
                    backgroundColor: navColor,
                    height: navSize,
                    // transition: "background, height 0.5s",
                    color: navText
                }}
                className='px-5 flex justify-between items-center duration-300'>
                <Link to="/" className="text-xl flex items-center">
                    <img className='w-16 mr-1' src={logo} alt="Pharma" />
                    <img className='w-16' src={title} alt="Pharma" />
                </Link>
                <ul className="flex gap-5 items-center p-0 text-sm font-medium">
                    <Link to="/"><li className={`hover:bg-white p-3 rounded hover:text-primary cursor-pointer ${location.pathname !== "/" && "text-secondary"}`}>Home</li></Link>
                    <Link to="/appointment"><li className={`hover:bg-white p-3 rounded hover:text-primary cursor-pointer ${location.pathname !== "/" && "text-secondary"}`}>Appointment</li></Link>
                    <Link to="/"><li className={`hover:bg-white p-3 rounded hover:text-primary cursor-pointer ${location.pathname !== "/" && "text-secondary"}`}>Contact</li></Link>
                    {
                        user?.uid ?
                            <>
                                <Link to="/dashboard"><li className={`hover:bg-white p-3 rounded hover:text-primary cursor-pointer ${location.pathname !== "/" && "text-secondary"}`}>Dashboard</li></Link>
                                <li><button onClick={logOut} className='btn-secondary text-white'>Log Out</button></li>
                            </>
                            :
                            <li><Link to="/login"><button className='btn-secondary text-white'>Get Started</button></Link></li>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;