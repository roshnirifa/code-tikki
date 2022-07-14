import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>

            <div className='mt-20'>

                <h1 className='text-5xl font-bold'>404!</h1>
                <p className='text-xl'>This page does not exist</p>
            </div>
            <Link to='/home' className='btn btn-primary my-4'>Back to home</Link>
        </div>
    );
};

export default NotFound;