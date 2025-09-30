import React from 'react';
import green from '../assets/green.png'
import calender from '../assets/calender.png'
import yellow from '../assets/yellow.png'
import './cards.css'


const MapingCards = ({cards,onClick}) => {

        

    return (
         <div className='card-card max-w-[440px] p-2 shadow-xl rounded-md' onClick={onClick}>
            
                        <div className='flex justify-between items-center'>
                            <h1 className='cards-title font-semibold text-xl'>{cards.title}</h1>

                            <div className={`cards-status flex gap-1 items-center my-auto px-2 py-1 rounded-2xl ${cards.status==="Open"?"bg-[#b9f8cf]":"bg-[#f8f3b9]"}`}><img className='cards-img h-[15px]' src={`${cards.status==="Open"?green:yellow}`} alt="" /><p className={`${cards.status==="Open"?"text-[#0b5e06]":"text-[#9c7700]"} font-semibold text-sm cards-status-text`}>{cards.status}</p></div>
                        </div>

                        <p className='cards-description text-sm text-[#627382] mt-2'>{cards.description}</p>

                        <div className='flex justify-between items-center mt-2'>
                            <div className='flex gap-4 text-md items-center cards-priority'>
                            <p className=' text-[#627382]'>#1001</p>
                            <p className={` font-semibold ${cards.priority === "High Priority"?"text-[#f83044]":cards.priority === "Medium Priority"?"text-[#febb0c]":"text-[#02a53b]"}`}>{cards.priority}</p>
                            </div>
                            <div className='cards-priority flex gap-4 text-[#627382] text-sm items-center'>
                            <p>{cards.customer}</p>
                            <p className='flex items-center gap-1'><img className='cards-img-date w-[20px] h-[20px]' src={calender} alt="" /><span>{cards.createdAt}</span></p>
                            </div>
                        </div>
                    </div>
    );
};

export default MapingCards;