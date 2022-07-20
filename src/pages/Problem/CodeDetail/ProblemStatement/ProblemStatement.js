import React from 'react';
import useCodes from '../../useCodes/useCodes';

const ProblemStatement = () => {
    let [codes] = useCodes();
    console.log(codes);



    return (
        <div>
            <h1 className='text-2xl text-center'>Problem</h1>
        </div>
    );
};

export default ProblemStatement;