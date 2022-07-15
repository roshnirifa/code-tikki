import React from 'react';
import { useParams } from 'react-router-dom';

const CodeDetail = () => {
    const { codeDetailId } = useParams();

    return (
        <div className='text-center'>

            <h3 className='text-2xl mt-5'>Code detail: {codeDetailId}</h3>
        </div>
    );
};

export default CodeDetail;