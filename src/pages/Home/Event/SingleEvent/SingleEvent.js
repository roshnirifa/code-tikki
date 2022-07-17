import React from 'react';
import Time from 'react-time'

const SingleEvent = ({ props }) => {
    let now = new Date()

    // const { name, description } = props.event
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure ><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">Blank Coding <span class="badge badge-secondary">NEW</span></h2>

                <p>Its a programming contest</p>

                <div class="card-actions justify-end">
                    <p>Today is <Time value={now} format="DD/MM/YYYY " /></p>
                    <p>Time <Time value={now} format=" HH:mm" /></p>
                    <button className='btn btn-primary'>Set Reminder</button>
                </div>


            </div>
        </div>

    );

};

export default SingleEvent;