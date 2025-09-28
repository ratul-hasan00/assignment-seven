import React, { use } from 'react';
import green from '../assets/green.png'
import calender from '../assets/calender.png'

const Card = ({cardPromise}) => {

    const cardDetails = use(cardPromise)
    console.log(cardDetails)

return (
    <div className='max-w-[1250px] mx-auto mt-10'>
        <div className='flex justify-between'>
            <div>
                <p className='text-2xl font-semibold mb-2'>Customer Tickets</p>
                <div className='grid grid-cols-2 gap-10'>
                    {
                    cardDetails.map(cards=>


                    <div className='max-w-[440px] p-2 shadow-xl rounded-md'>
                        <div className='flex justify-between'>
                            <h1 className='font-semibold text-xl'>{cards.title}</h1>
                            <div className='flex gap-1 items-center my-auto px-2 py-1 bg-[#b9f8cf] rounded-2xl'><img className='h-[15px]' src={green} alt="" /><p className='text-[#0b5e06] font-semibold text-sm'>{cards.status}</p></div>
                        </div>

                        <p className='text-sm text-[#627382] mt-2'>{cards.description}</p>

                        <div className='flex justify-between items-center mt-2'>
                            <div className='flex gap-4 text-md items-center'>
                            <p className='text-[#627382]'>#1001</p>
                            <p className='text-[#f83044] font-semibold'>{cards.priority}</p>
                            </div>
                            <div className='flex gap-4 text-[#627382] text-sm items-center'>
                            <p>{cards.customer}</p>
                            <p className='flex items-center gap-1'><img className='w-[20px] h-[20px]' src={calender} alt="" /><span>{cards.createdAt}</span></p>
                            </div>
                        </div>
                    </div>
                        )
                    }
                </div>
           
            </div>

            <div>
            <div>
              <p className='text-2xl font-semibold mb-3'>Task Status</p>
              <div className='shadow-xl max-w-[300px] p-2 text-center rounded-md'>
                <p className='font-semibold text-lg mb-2'>Payment Failed - Card Declined</p>
                <button className='px-20 py-1 rounded-md bg-[#02a53b] text-white text-sm font-semibold'>Complete</button>
              </div>
            </div>
            <div className='mt-3'>
              <p className='text-2xl font-semibold mb-3'>Resolved Task</p>
            </div>
            </div>
        </div>
      </div>
    );
};

export default Card;