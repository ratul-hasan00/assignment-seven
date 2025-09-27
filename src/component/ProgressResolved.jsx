import React from 'react';
import vector_1 from '../assets/vector_1.png'

const ProgressResolved = () => {
    return (
            <div className='flex justify-between max-w-[1250px] mx-auto mt-10'>
            <div className='flex justify-between w-lg h-[200px] bg-gradient-to-r from-[#632ee3] to-[#9f62f2] rounded-2xl'>
                <img className='w-50 h-50' src={vector_1} alt="" />
                <div className='text-center text-white mt-15'>
                    <h1 className=''>In-Progress</h1>
                    <p className='text-4xl font-semibold'>0</p>
                </div>
                <img className='w-50 h-50 scale-x-[-1]' src={vector_1} alt="" />
            </div>

             <div className='flex justify-between w-lg h-[200px] bg-gradient-to-r from-[#54cf68] to-[#00827a] rounded-2xl'>
                <img className='w-50 h-50' src={vector_1} alt="" />
                <div className='text-center text-white mt-15'>
                    <h1 className=''>Resolved</h1>
                    <p className='text-4xl font-semibold'>0</p>
                </div>
                <img className='w-50 h-50 scale-x-[-1]' src={vector_1} alt="" />
            </div>
        </div>
    );
};

export default ProgressResolved;