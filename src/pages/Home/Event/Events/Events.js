import React from 'react';
import SingleEvent from '../SingleEvent/SingleEvent';
import useEvents from '../useEvents';
import './Events.css'



const Events = () => {
    const [events] = useEvents();
    return (
        <div className=' mb-5'>
            <h1 className='text-4xl font-bold text-center my-8'>Upcoming Event</h1>
            <div className='flex justify-center align-center'>


                <div class="grid grid-cols-1 gap-10 events w-2/3 ">


                    {
                        events.map(event => <SingleEvent key={event.id}
                            event={event}
                        ></SingleEvent>)
                    }

                </div>
            </div>
        </div>
    )
};

export default Events;