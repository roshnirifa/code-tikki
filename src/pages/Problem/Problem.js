import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Problem = () => {
    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <div className='flex justify-center mt-5'>
                    <div class="w-1/2  navbar justify-around bg-base-300">
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                <li><Link to='/problem/problems'>Problems</Link></li>
                                <li><Link to='/problem/problemCore'>Problem Core</Link></li>

                                <li><Link to='/problem/difficultLevel'>Difficult Levels</Link></li>

                                <li><Link to='/problem/solution'>Solution</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li><Link to='/problem/problems'>Problems</Link></li>
                    <li><Link to='/problem/problemCore'>Problem Core</Link></li>

                    <li><Link to='/problem/difficultLevel'>Difficult Levels</Link></li>

                    <li><Link to='/problem/solution'>Solution</Link></li>


                </ul>

            </div>
        </div>

        // <div class="drawer">
        //     <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        //     <div class="drawer-content flex flex-col">

        //         <div className='flex justify-center'>
        //             <div class="w-1/2  navbar justify-around  bg-base-300 mt-5">
        //                 <ul class="menu menu-horizontal ">
        //                     <li><Link to='/problem/problemCore'>Problem Core</Link></li>
        //                     <li><Link to='/problem/problems'>Problems</Link></li>
        //                     <li><Link to='/problem/difficultLevel'>Difficult level</Link></li>
        //                     <li><Link to='/problem/solution'>Solution</Link></li>
        //                 </ul>

        //             </div>

        //         </div>
        //     </div>
        //     <Outlet />
        // </div>


    );
};

export default Problem;