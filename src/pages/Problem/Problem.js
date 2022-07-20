import React from 'react';
import useCodes from './useCodes/useCodes';
import "./Problem.css"
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';


const Problem = () => {

    const [codes] = useCodes();
    // console.log(codes);

    const navigate = useNavigate();

    const handleCode = (id) => {
        navigate(`/codeDetail/${id}`)
    }
    const easy = () => {
        let table = document.getElementById('table_filter');


        let tr = table.querySelector('tbody').getElementsByTagName('tr');
        console.log(tr);

        for (var i = 0; i < tr.length; i++) {
            console.log(tr[i]);
            if (tr[i].getElementsByTagName('td')[2].innerText.indexOf('easy') > -1) {
                tr[i].classList.remove('donotShow_row')
            } else {
                tr[i].classList.add('donotShow_row')
            }
        }


    }

    const medium = () => {
        let table = document.getElementById('table_filter');
        let tr = table.querySelector('tbody').getElementsByTagName('tr');
        for (var i = 0; i < tr.length; i++) {
            if (tr[i].getElementsByTagName('td')[2].innerText.indexOf('medium') > -1) {
                tr[i].classList.remove('donotShow_row')
            } else {
                tr[i].classList.add('donotShow_row')
            }
        }
    }

    const hard = () => {
        let table = document.getElementById('table_filter');
        let tr = table.querySelector('tbody').getElementsByTagName('tr');
        for (var i = 0; i < tr.length; i++) {
            if (tr[i].getElementsByTagName('td')[2].innerText.indexOf('hard') > -1) {
                tr[i].classList.remove('donotShow_row')
            } else {
                tr[i].classList.add('donotShow_row')
            }
        }
    }



    return (
        <div class="overflow-x-auto my-5 container">
            <table class="table   table-hover" id='table_filter'>

                <thead className='thead' >
                    <tr>

                        <th className='text-base text-white'>Code</th>
                        <th className='text-base text-white'> Name</th>
                        <th>
                            <div class="dropdown  cursor-pointer text-base ">
                                <li className='menu flex flex-row text-white items-center ' tabindex="0" >Difficulty<FaArrowUp /> <FaArrowDown></FaArrowDown> </li>
                                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><button type='link' onClick={easy}>Easy</button></li>
                                    <li><button type='link' onClick={medium} >Medium</button></li>
                                    <li><button type='link' onClick={hard}>Hard</button></li>
                                </ul>
                            </div>
                        </th>

                    </tr>
                </thead>

                <tbody>
                    {
                        codes.map(code => <tr key={code.id}>

                            <td className=''>{code.code}</td>
                            <td className='text-primary cursor-pointer ' onClick={() => handleCode(code.id)} >{code.name} <span class="badge  ">new</span></td>
                            <td>{code.difficulty}</td>
                        </tr>)
                    }
                </tbody>

            </table >
        </div >

    );
};

export default Problem;