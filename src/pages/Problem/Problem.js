import React from 'react';
import useCodes from './useCodes/useCodes';

import "./Problem.css"
import ProblemCols from './ProblemsCols/ProblemCols';

const Problem = () => {
    const [codes] = useCodes();


    return (
        <div class="overflow-x-auto my-5 flex justify-center">
            <table class="table w-4/5 table-success  table-hover">

                <thead>
                    <tr>
                        <th>No</th>
                        <th className='text-lg'>Code</th>
                        <th className='text-lg'> Name</th>
                        <th className='text-lg'>Difficulty</th>

                    </tr>
                </thead>

                {

                    codes.map(code => <ProblemCols

                        key={code.id}
                        code={code}
                    >

                    </ProblemCols>)
                }

            </table>
        </div>

    );
};

export default Problem;