import React from 'react';
import vector_1 from '../assets/vector_1.png'
import './progress.css'

const ProgressResolved = ({inProgressCount,resolvedCount}) => {
    return (
            <div className='prog-container flex justify-between max-w-[1250px] mx-auto mt-10'>
            <div className='prog-card flex justify-between w-lg h-[200px] bg-gradient-to-r from-[#632ee3] to-[#9f62f2] rounded-2xl'>
                <img className='prog-img w-50 h-50' src={vector_1} alt="" />
                <div className='prog-text text-center text-white mt-15'>
                    <h1 className='prog-title'>In-Progress</h1>
                    <p className='prog-zero text-4xl font-semibold'>{inProgressCount}</p>
                </div>
                <img className='prog-img w-50 h-50 scale-x-[-1]' src={vector_1} alt="" />
            </div>

             <div className='prog-card flex justify-between w-lg h-[200px] bg-gradient-to-r from-[#54cf68] to-[#00827a] rounded-2xl'>
                <img className='prog-img w-50 h-50' src={vector_1} alt="" />
                <div className='prog-text text-center text-white mt-15'>
                    <h1 className='prog-title'>Resolved</h1>
                    <p className='prog-zero text-4xl font-semibold'>{resolvedCount}</p>
                </div>
                <img className='prog-img w-50 h-50 scale-x-[-1]' src={vector_1} alt="" />
            </div>
        </div>
    );
};

export default ProgressResolved;