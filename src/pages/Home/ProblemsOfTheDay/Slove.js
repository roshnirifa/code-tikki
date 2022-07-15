import React from 'react';
let output = '';

const Slove = () => {
    const handleSubmitForC = (event) => {
        let c = document.querySelector("#c").value;

        output = document.querySelector(" #output");
        fetch("https://benefique-chaise-56605.herokuapp.com/api", {
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
    return (
        <div className='px-12'>
            < h3 className='text-2xl mt-10 '>C program to check whether the given number is positive or negative</h3>

            <div className='ml-10 mt-5'>
                <h4>C</h4>
                <textarea className='border-2 border-slate-700 w-80 py-10' id="c"> </textarea> <br />
                <button onClick={handleSubmitForC} class="btn btn-primary my-4" >submit</button>
                <div className='text-center'>
                    <h4 >Output</h4>
                    <textarea className='output border-2  py-10 border-slate-700' id="output"></textarea>

                </div>
            </div>
        </div >
    );
};

export default Slove;