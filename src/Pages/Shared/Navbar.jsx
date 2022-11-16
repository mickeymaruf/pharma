import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'
import title from '../../assets/title.png'
import { useAuth } from '../../contexts/AuthProvider';
import { HiXMark } from 'react-icons/hi2';
import { HiBars3 } from 'react-icons/hi2';


const Navbar = () => {
    const { user, logOut } = useAuth();
    const location = useLocation();
    const [navSize, setnavSize] = useState("60px");
    const [navColor, setnavColor] = useState("transparent");
    const [navText, setnavText] = useState("white");
    const [showMenu, setShowMenu] = useState(false);
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

    const closeMenuBtn = () => {
        setShowMenu(false);
    }
    // shared navlinks
    const navLinks = <>
        <Link onClick={closeMenuBtn} to="/"><li className={`hover:bg-white p-3 rounded hover:text-primary cursor-pointer ${location.pathname !== "/" && "text-secondary"}`}>Home</li></Link>
        <Link onClick={closeMenuBtn} to="/appointment"><li className={`hover:bg-white p-3 rounded hover:text-primary cursor-pointer ${location.pathname !== "/" && "text-secondary"}`}>Appointment</li></Link>
        <Link onClick={closeMenuBtn} to="/"><li className={`hover:bg-white p-3 rounded hover:text-primary cursor-pointer ${location.pathname !== "/" && "text-secondary"}`}>Contact</li></Link>
        {
            user?.uid ?
                <>
                    <Link onClick={closeMenuBtn} to="/dashboard"><li className={`hover:bg-white p-3 rounded hover:text-primary cursor-pointer ${location.pathname !== "/" && "text-secondary"}`}>Dashboard</li></Link>
                    <li onClick={closeMenuBtn}><button onClick={logOut} className='btn-secondary text-white mt-3 md:mt-0'>Log Out</button></li>
                </>
                :
                <li><Link onClick={closeMenuBtn} to="/login"><button className='btn-secondary text-white mt-3 md:mt-0'>Get Started</button></Link></li>
        }
    </>

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
                <ul className="md:flex gap-5 items-center p-0 text-sm font-medium hidden">
                    {navLinks}
                </ul>
                {/* menu sm */}
                <ul className={`flex md:hidden bg-white z-50 flex-col text-2xl gap-5 items-center justify-center p-0 font-medium w-full fixed ${showMenu ? 'left-0' : '-left-[900px]'} top-0 h-screen duration-200 overflow-hidden text-secondary`}>
                    {navLinks}
                    <HiXMark onClick={() => setShowMenu(false)} className='w-10 h-10 block md:hidden cursor-pointer absolute right-0 top-0 mr-5 mt-2' />
                </ul>
                <HiBars3 onClick={() => setShowMenu(true)} className='w-10 h-10 block md:hidden cursor-pointer text-secondary' />
            </nav>
        </header>
    );
};

export default Navbar;