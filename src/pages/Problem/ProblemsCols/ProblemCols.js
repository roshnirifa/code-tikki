import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProblemCols = ({ code }) => {

    const navigate = useNavigate();

    const handleCode = (id) => {
        navigate(`/codeDetail/${id}`)
    }
    return (

        <tbody key={code._id}>
            <tr>
                <td>{code.id}</td>
                <td>{code.code}</td>
                <td className='text-primary cursor-pointer' onClick={() => handleCode(code.id)} >{code.name}</td>
                <td>{code.difficulty}</td>
            </tr>
        </tbody>

    );
};

export default ProblemCols;