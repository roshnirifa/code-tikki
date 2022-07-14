import React from 'react';
import './Ide.css'
let output = '';

const Ide = () => {
    const handleSubmitForC = (event) => {
        let c = document.querySelector("#c").value;

        output = document.querySelector(" #output");
        fetch("http://localhost:8000/api", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                code: c
            })
        })
            .then((res) => res.json()).then(data => {
                output.value = (data?.body?.output);
            })
        // event.target
    }
    const handleSubmitForCpp = (event) => {
        let cpp = document.querySelector("#cpp").value;

        output = document.querySelector(" #output");
        fetch("http://localhost:8000/apicpp", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                code: cpp
            })
        })
            .then((res) => res.json()).then(data => {
                output.value = (data?.body?.output);
            })
        // event.target
    }



    const handleSubmitForPython = () => {
        let python = document.querySelector("#python").value;

        output = document.querySelector(" #output");
        fetch("http://localhost:8000/apipython", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                code: python
            })
        })
            .then((res) => res.json()).then(data => {
                output.value = (data?.body?.output);
            })

    }
    const handleSubmitForJava = () => {
        let java = document.querySelector("#java").value;

        output = document.querySelector("#output");
        fetch("http://localhost:8000/apijava", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                code: java
            })
        })
            .then((res) => res.json()).then(data => {
                output.value = (data?.body?.output);
            })

    }

    return (
        <div>



            <div class=" ml-80 text-center mt-5">
                <div class="input-group">
                    <button class="btn">Languages</button>
                    <select class="select select-bordered">
                        <option disabled selected>C</option>
                        <option>C++</option>
                        <option>Python</option>
                        <option>Java</option>
                    </select>

                </div>
            </div>



            <div className=' px-10 mt-10'>
                <div class="grid grid-cols-3  gap-20">
                    <div >
                        <h4>C</h4>
                        <textarea className='border-2 border-slate-700 w-80 py-10' id="c"> </textarea> <br />
                        <button onClick={handleSubmitForC} class="btn btn-primary my-4" >submit</button>
                    </div>
                    <div >
                        <h4>C++</h4>
                        <textarea className='border-2 border-slate-700 w-80 py-10' id="cpp"> </textarea> <br />
                        <button onClick={handleSubmitForCpp} class="btn btn-primary  my-4" >submit</button>
                    </div>
                    <div>
                        <h4>Python</h4>
                        <textarea className='border-2 border-slate-700 w-80 py-10' id="python"> </textarea> <br />
                        <button onClick={handleSubmitForPython} class="btn btn-primary w-75 my-4" >submit</button>
                    </div>
                    <div >
                        <h4>Java</h4>
                        <textarea className='border-2 border-slate-700 w-80 py-10' id="java"> </textarea> <br />
                        <button onClick={handleSubmitForJava} class="btn btn-primary w-75 my-4" >submit</button>
                    </div>


                </div>
                <div className='text-center'>
                    <h4 >Output</h4>
                    <textarea className='output border-2  py-10 border-slate-700' id="output"></textarea>

                </div>
            </div>
        </div>


        // <div>
        //     <div class="input-group mb-3 justify-content-center mt-5">
        //         <div class="input-group-prepend">
        //             <label class="input-group-text" for="inputGroupSelect01">Languages</label>
        //         </div>
        //         <select class="custom-select w-25" id="inputGroupSelect01">

        //             <option selected id='c-input'>C</option>
        //             <option value="C++" id="cpp-input">C++</option>
        //             <option value="Java" >Java</option>
        //             <option value="Python">Python</option>
        //         </select>
        //     </div>
        //     <div class="mt-3 p-4  " >
        //         <div class=" ide grid grid-rows-4 grid-flow-col gap-4" id='result-body'>
        //             <div>
        //                 <h4>C</h4>
        //                 <textarea id="c"> </textarea> <br />
        //                 <button onClick={handleSubmitForC} class="btn btn-primary w-75 my-4" >submit</button>
        //             </div>


        //             <div >
        //                 <h4>C++</h4>
        //                 <textarea id="cpp"> </textarea> <br />
        //                 <button onClick={handleSubmitForCpp} class="btn btn-primary w-75 my-4" >submit</button>
        //             </div>



        //             <div>
        //                 <h4>Python</h4>
        //                 <textarea id="python"> </textarea> <br />
        //                 <button onClick={handleSubmitForPython} class="btn btn-primary w-75 my-4" >submit</button>
        //             </div>
        //             <div >
        //                 <h4>Java</h4>
        //                 <textarea id="java"> </textarea> <br />
        //                 <button onClick={handleSubmitForJava} class="btn btn-primary w-75 my-4" >submit</button>
        //             </div>



        //             <div className='text-center'>
        //                 <h4>Output</h4>
        //                 <textarea className='output' id="output"></textarea>

        //             </div>

        //         </div>
        //     </div>

        // </div>

    );
};

export default Ide;