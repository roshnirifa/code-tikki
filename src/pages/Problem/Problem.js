import React from 'react';
import useCodes from './useCodes/useCodes';
import "./Problem.css"
import ProblemCols from './ProblemsCols/ProblemCols';
const Problem = () => {
    const [codes] = useCodes();
    const easy = () => {
        let table = document.getElementById("table_filter")
        console.log(table);
        let tr = table.querySelector("tbody").getElementsByTagName("tr")
        console.log(tr);

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
                                    <li><button type='link' id="hard">Hard</button></li>
                                </ul>
                            </div>
                        </th>

                    </tr>
                </thead>

                {

                    codes.map(code => <ProblemCols

                        key={code.id}
                        code={code}
                    >

                    </ProblemCols>)
                }

            </table >
        </div >

    );
};

export default Problem;