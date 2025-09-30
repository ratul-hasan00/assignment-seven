import React from 'react';
import email from '../assets/email.png'
import fb from '../assets/fb.png'
import linkedin from '../assets/linkedin.png'
import x from '../assets/x.png'
import './footer.css'


const Footer = () => {
    return (
        <div className='bg-black mt-10'>
            <div className='footer-container flex justify-between max-w-[1250px] mx-auto py-10 border-b-1 border-gray-900'>
            <div className='margin-buttom'>
                <h1 className='footer-description text-white text-2xl font-semibold'>CS — Ticket System</h1>
                <p className='text-[#a1a1aa] text-sm w-[260px] mt-2 footer-text lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='margin-buttom'>
                <h1 className='text-white text-2xl font-semibold footer-description'>Company</h1>
                <ul className='text-[#a1a1aa] text-sm space-y-3 mt-2 footer-text'>
                    <li>About Us</li>
                    <li>Our Mission</li>
                    <li>Contact Saled</li>
                </ul>
            </div>
            <div className='margin-buttom'>
                <h1 className='text-white text-2xl font-semibold footer-description'>Services</h1>
                <ul className='text-[#a1a1aa] text-sm space-y-3 mt-2 footer-text'>
                    <li>Products & Services</li>
                    <li>Customer Stories</li>
                    <li>Download Apps</li>
                </ul>
            </div>
            <div className='margin-buttom'>
                <h1 className='text-white text-2xl font-semibold footer-description'>Information</h1>
                <ul className='text-[#a1a1aa] text-sm space-y-3 mt-2 footer-text'>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Join Us</li>
                </ul>
            </div>
            <div className='margin-buttom'>
                <h1 className='text-white text-2xl font-semibold footer-description'>Social Links</h1>
                <div className='flex gap-2 items-center mt-2 footer-text'><img className='h-[15px] bg-white rounded-full' src={x} alt="X logo"/><p className='text-[#a1a1aa] text-sm'>@CS — Ticket System</p></div>
                <div className='flex gap-2 items-center mt-2 footer-text'><img className='h-[15px] bg-white rounded-full' src={linkedin} alt="Likedin logo"/><p className='text-[#a1a1aa] text-sm'>@CS — Ticket System</p></div>
                <div className='flex gap-2 items-center mt-2 footer-text'><img className='h-[15px]' src={fb} alt="Fb logo"/><p className='text-[#a1a1aa] text-sm'>@CS — Ticket System</p></div>
                <div className='flex gap-2 items-center mt-2 footer-text'><img className='h-[15px]' src={email} alt="email logo"/><p className='text-[#a1a1aa] text-sm'>support@cst.com</p></div>
            </div>
        </div>
        <div>
            <p className='footer-text text-white text-xs text-center py-5'>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
        </div>
        
    );
};

export default Footer;