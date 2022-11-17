import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import title from '../../assets/title.png'
import { useAuth } from '../../contexts/AuthProvider';

const DashboardNav = () => {
    const { user, logOut } = useAuth();

    // shared navlinks
    const navLinks = <>
        <Link to="/"><li className="hover:bg-white p-3 rounded hover:text-primary cursor-pointer">Home</li></Link>
        <Link to="/appointment"><li className="hover:bg-white p-3 rounded hover:text-primary cursor-pointer">Appointment</li></Link>
        <Link to="/"><li className="hover:bg-white p-3 rounded hover:text-primary cursor-pointer">Contact</li></Link>
        {
            user?.uid ?
                <>
                    <Link to="/dashboard"><li className="hover:bg-white p-3 rounded hover:text-primary cursor-pointer">Dashboard</li></Link>
                    <li><button onClick={logOut} className='btn-secondary text-white mt-3 md:mt-0'>Log Out</button></li>
                </>
                :
                <li><Link to="/login"><button className='btn-secondary text-white mt-3 md:mt-0'>Get Started</button></Link></li>
        }
    </>
    return (
        <header>
            <nav className='px-5 flex justify-between items-center bg-[#23C3BB] text-white py-2 md:py-0'>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost md:hidden">
                    <BsArrowRight className='w-6 h-6' />
                </label>
                <Link to="/" className="text-xl flex items-center absolute md:static left-1/2 -translate-x-1/2 md:-translate-x-0 mr-auto">
                    <img className='w-16 mr-1' src={logo} alt="Pharma" />
                    <img className='w-16' src={title} alt="Pharma" />
                </Link>
                <ul className="md:flex gap-5 items-center p-0 text-sm font-medium hidden">
                    {navLinks}
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-secondary rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default DashboardNav;