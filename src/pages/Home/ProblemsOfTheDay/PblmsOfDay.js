import React from 'react';
import { Link } from "react-router-dom";
const PblmsOfDay = () => {
    return (
        <div className='px-12 mb-5'>
            <h1 className='text-4xl font-bold text-center my-8'>Problems Of The Day</h1>
            <div className='text-center'>
                <h1 className=' text-3xl font-bold ' >C program</h1>
                <h3 className='text-2xl  '>C program to check whether the given number is positive or negative</h3>
                <Link to='/slove' className='btn btn-primary w-25 mt-5'>Slove</Link>
            </div>
        </div>
    );
};

export default PblmsOfDay;