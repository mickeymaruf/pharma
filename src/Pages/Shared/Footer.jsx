import React from 'react';
import { Link } from 'react-router-dom';
import footerCurve from '../../assets/footerCurve.svg'
import logo from '../../assets/logo-white.png'
import title from '../../assets/title-white.png'
import award from '../../assets/img-award.png'
import { BsTelephoneFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footerCurve})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "26rem",
                marginTop: "-20rem",
            }}
        >
            <div className="w-9/12 mx-auto text-white flex flex-col items-center pt-36 lg:pt-0">
                <Link to="/" className="text-xl flex items-center">
                    <img className='w-16' src={logo} alt="Pharma" />
                    <img className='w-20' src={title} alt="Pharma" />
                </Link>
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2 pb-10 pt-6 gap-16 text-xs border-t-2 border-[#ffffff35]">
                    <div>
                        <p className='leading-snug'>
                            We are a friendly team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment you require.
                        </p>
                        <p className='font-playfair text-secondary text-base mt-3'>24/7 Emergency phone</p>
                        <a className='flex gap-2 items-center mt-2 mb-[3px]' href=""><BsTelephoneFill className='text-secondary' /> 415-205-XXX0</a>
                        <a className='flex gap-2 items-center' href=""><BsTelephoneFill className='text-secondary' /> 515-305-XXX0</a>
                    </div>
                    <div>
                        <p className='font-playfair text-[18px] mb-4'>About DentiCare</p>
                        <div className='grid gap-2'>
                            <p>Our Dental Team</p>
                            <p>Our Awards</p>
                            <p>Dental Services</p>
                            <p>Pricing & Pricelist</p>
                            <p>Our Solutions</p>
                            <p>Clients & Testimonials</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-playfair text-[18px] mb-5'>Our Awards</p>
                        <img className='w-36 mb-5' src={award} alt="" />
                        <div className='grid gap-1'>
                            <p>Best Patient Care 2019</p>
                            <p>Best Practice & Best Team 2018</p>
                            <p>Best Team & Practice 2017</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-playfair text-[18px] mb-4'>Working Hours</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td className='text-[#ffffffab]'>8AM - 9PM</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td className='text-[#ffffffab]'>8AM - 9PM</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td className='text-[#ffffffab]'>9AM - 6:30PM</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td className='text-[#ffffffab]'>8AM - 9PM</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td className='text-[#ffffffab]'>8AM - 9PM</td>
                                </tr>
                                <tr>
                                    <td className='pr-5'>Saturday - Sunday</td>
                                    <td className='text-[#ffffffab]'>Closed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </footer>
            </div>
        </footer>
    );
};

export default Footer;