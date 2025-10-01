import React, { use, useState } from 'react';
import MapingCards from './MapingCards';
import { toast } from 'react-toastify';
import './cards.css'



const Card = ({cardPromise,setInProgressCount,setResolvedCount}) => {

    const data = use(cardPromise)
    const [cardDetails,setCardDetails] = useState(data);
    const [selectedTitle,setSelectedTitle] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);

return (
    <div className='max-w-[1250px] mx-auto mt-10'>
        <div className='card-container flex justify-between'>
            <div>
                <p className='customer-ticket text-2xl font-semibold mb-2'>Customer Tickets</p>
                <div className='card-cards grid grid-cols-2 gap-10'>
                    {
                    cardDetails.map((cards,id)=><MapingCards key={id} cards={cards} onClick={() =>{setSelectedTitle(titles=>[...titles,cards.title]);
                      setInProgressCount(prog => prog + 1);
                       toast.success("In Progress...")}}></MapingCards>)
                    }
                </div>
           
            </div>

            <div>
            <div className='bg-white shadow-xl p-2 rounded-xl progress-status-div'>
              <p className='customer-ticket text-2xl font-semibold mb-3'>Task Status</p>

              {
                selectedTitle.length===0?
                
                (<div className='progress-div bg-[#b9f8cf] w-[300px] p-2 text-center rounded-md'>
                  <p className='font-semibold text-lg mb-2 text-[#627382]'>No Tasks In Progress<br/><span className='text-sm text-[#6273828a]'>Click On A Ticket To Start Working</span></p>
                </div>):

                (selectedTitle.map((titless,id)=>(
                  <div key={id} className='progress-div mb-5 bg-[#b9f8cf] w-[300px] py-4 px-2 text-center rounded-md'>
                <p className='font-semibold text-lg mb-2'>{titless}</p>
                <button onClick={()=>{
                 let newTasks = [...selectedTitle];
                 newTasks.splice(id,1);
                 setSelectedTitle(newTasks);
                 toast.success("Completed!");
                 setInProgressCount((count)=> count-1);
                 setResolvedTasks((resolved)=>[...resolved,titless]);
                 setResolvedCount((setResolved)=>setResolved+1);
                 setCardDetails(prev => {
                      const updated = [...prev];
                      updated.splice(id, 1); 
                        return updated;
                        });
                 
                }} className='primary-click px-20 py-1 rounded-md bg-[#02a53b] text-white text-sm font-semibold'>Complete</button>
              </div>

                )))
              }
            </div>


            <div className='mt-3 bg-white shadow-xl p-2 rounded-xl progress-status-div'>
              <p className='customer-ticket text-2xl font-semibold mb-3'>Resolved Task</p>
              {
                resolvedTasks.length===0?(
                    <div className='progress-div bg-[#b9f8cf] w-[300px] p-2 text-center rounded-md'>
                      <p className=' font-semibold text-lg mb-2 text-[#627382]'>No Resolved Tasks Yet</p>
                    </div>):(
                      resolvedTasks.map((task,id)=>(

                        <div key={id} className='progress-div mb-5 bg-[#b9f8cf] w-[300px] py-4 px-2 text-center rounded-md'>
                        <p className='font-semibold text-lg'>{task}</p>
                          <div className='flex justify-between items-center'>
                              <p className='text-[#02a53b]'>✔ <span className='font-semibold'>Completed</span></p>
                              <p onClick={()=>{
                                let newResolved = [...resolvedTasks];
                                newResolved.splice(id,1);
                                setResolvedTasks(newResolved);
                                setResolvedCount((subs)=>subs-1);
                                toast.success("Removed From Resolved Task!")
                              }} className='primary-click text-[#627382] text-xs'>Click to Remove</p>
                        </div>
                        </div>
                      ))
                    )
              }

            </div>
            </div>
        </div>
      </div>
      
    );
};

export default Card;