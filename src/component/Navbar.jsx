import React from 'react';
import './navbar.css'

const Navbar = () => {
return (
    <div className='shadow-xs'>
        <div className=' nav-container flex justify-between items-center max-w-[1250px] mx-auto mt-3 pb-2  px-2'>
          <div>
              <h1 className='nav-title text-3xl font-bold'>CS — Ticket System</h1>
          </div>

        <div className='nav-li-btn flex items-center gap-4'>
            <div>
                <ul className='nav-list flex gap-4'>
                <li>Home</li>
                <li>FAQ</li>
                <li>Changelog</li>
                <li>Blog</li>
                <li>Download</li>
                <li>Contact</li>
            </ul>
            </div>
            <div>
                <button className='nav-button px-4 py-2 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white'>+ New Ticket</button>
            </div>
           
        </div>
      </div>
        </div>
        
    );
};

export default Navbar;