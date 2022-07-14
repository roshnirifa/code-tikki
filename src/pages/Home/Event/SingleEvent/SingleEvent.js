import React from 'react';
import Time from 'react-time'

const SingleEvent = ({ props }) => {
    let now = new Date()

    // const { name, description } = props.event
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd67cPfisXBGKID6rwcDaajU55rgtHXVz-ng&usqp=CAU" alt="code" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    Blank Coding
                    {/* {name} */}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>Its a programming contest</p>
                {/* <p>{description}</p> */}
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