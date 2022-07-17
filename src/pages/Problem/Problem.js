import React from 'react';
import useCodes from './useCodes/useCodes';
import "./Problem.css"
import ProblemCols from './ProblemsCols/ProblemCols';
import { useNavigate } from 'react-router-dom';


const Problem = () => {

    const [codes] = useCodes();

    const navigate = useNavigate();

    const handleCode = (id) => {
        navigate(`/codeDetail/${id}`)
    }
    const easy = () => {
        let table = document.getElementById('table_filter');


        let tr = table.querySelector('tbody').getElementsByTagName('tr');
        console.log(tr);

        // for (var i = 0; i < tr.length; i++) {
        //     console.log(tr[i]);
        //         if (tr[i].getElementsByTagName('td')[3].innerText.indexOf('easy') > -1) {
        //             tr[i].classList.remove('donotShow_row')
        //         } else {
        //             tr[i].classList.add('donotShow_row')
        //         }
        //     }


    }
    const hard = () => {
        let table = document.getElementById('table_filter');
        let tr = table.querySelector('tbody').getElementsByTagName('tr');
        for (var i = 0; i < tr.length; i++) {
            if (tr[i].getElementsByTagName('td')[3].innerText.indexOf('hard') > -1) {
                tr[i].classList.remove('donotShow_row')
            } else {
                tr[i].classList.add('donotShow_row')
            }
        }
    }



    return (
        <div class="overflow-x-auto my-5 flex justify-center">
            <table class="table w-4/5 table-secondary table-bordered  table-hover" id='table_filter'>

                <thead className='table-primary' >
                    <tr>
                        <th className='text-base text-center'>No</th>
                        <th className='text-base text-center'>Code</th>
                        <th className='text-base text-center'> Name</th>
                        <th>
                            <div class="dropdown  cursor-pointer text-base text-center">
                                <li className='menu' tabindex="0" >Difficulty</li>
                                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><button type='link' onClick={easy}>Easy</button></li>
                                    <li><button type='link' is="medium">Medium</button></li>
                                    <li><button type='link' onClick={hard}>Hard</button></li>
                                </ul>
                            </div>
                        </th>

                    </tr>
                </thead>
                {/* <tbody>
                    <tr>
                        <td>1</td>
                        <td>sum</td>
                        <td>sum of two</td>
                        <td>easy</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>sum</td>
                        <td>sum of two</td>
                        <td>easy</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>sum</td>
                        <td>sum of two</td>
                        <td>hard</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>sum</td>
                        <td>sum of two</td>
                        <td>hard</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>sum</td>
                        <td>sum of two</td>
                        <td>hard</td>
                    </tr>
                </tbody> */}

                {

                    codes.map(code => <tbody key={code.id}>
                        <tr>
                            <td>{code.id}</td>
                            <td>{code.code}</td>
                            <td className='text-primary cursor-pointer' onClick={() => handleCode(code.id)} >{code.name}</td>
                            <td>{code.difficulty}</td>
                        </tr>
                    </tbody>)
                }

            </table >
        </div >

    );
};

export default Problem;