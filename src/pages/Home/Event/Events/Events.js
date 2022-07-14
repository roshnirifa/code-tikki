import React from 'react';
import SingleEvent from '../SingleEvent/SingleEvent';
import useEvents from '../useEvents';
import './Events.css'



const Events = () => {
    const [events] = useEvents();
    return (
        <div className='px-12 mb-5'>
            <h1 className='text-4xl font-bold text-center my-8'>Upcoming Event</h1>
            <div class="grid grid-cols-3 gap-10 events">


                {
                    events.map(event => <SingleEvent key={event.id}
                        event={event}
                    ></SingleEvent>)
                }

            </div>
        </div>
    )
};

export default Events;