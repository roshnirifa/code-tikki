import React from 'react';
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase_init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div class="navbar  bg-orange-400">

            <Link to="/" class="btn btn-ghost normal-case text-xl ml-13">Code Tikki</Link>
            <div class="navbar-end">
                <div class="dropdown mr-12">
                    <label tabindex="0" class="btn btn-ghost lg:hidden mr-12">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 mr-12">
                        < Link to='/home'>Home</Link>
                        <Link to='/ide'>IDE</Link>
                        <Link to='/problem'>Problem</Link>
                        <Link to='/blogs'>Blogs</Link>
                        {
                            user ? <Link onClick={handleSignOut} as={Link} to="/login" >Signout</Link>
                                :
                                <Link to='/login'>Login</Link>
                        }
                        <p> {user && user.displayName}</p>


                    </ul>
                </div>

            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 mr-20 font-bold">
                    < Link to='/home'>Home</Link>
                    <Link to='/ide'>IDE</Link>
                    <Link to='/problem'>Problem</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/userProfile'> {user && user.displayName}</Link>
                    {
                        user ? <Link onClick={handleSignOut} as={Link} to="/login" >Signout</Link>
                            :
                            <Link to='/login'>Login</Link>
                    }



                </ul>
            </div>

        </div>
        // <div class="navbar bg-orange-400">
        //     <div class="navbar-start">

        //         <Link to="/" class="btn btn-ghost normal-case text-xl ml-20">Code Tikki</Link>
        //     </div>
        //     <div class="navbar-end hidden lg:flex">
        //         <ul class="menu menu-horizontal p-0  mr-20 font-bold" >

        //             <Link to='/home'>Home</Link>
        //             <Link to='/ide'>IDE</Link>
        //             <Link to='/problem'>Problem</Link>
        //             <Link to='/blogs'>Blogs</Link>
        //             {
        //                 user ? <Link onClick={handleSignOut} as={Link} to="/login" >Signout</Link>
        //                     :
        //                     <Link to='/login'>Login</Link>
        //             }
        //             <p> {user && user.displayName}</p>

        //         </ul>
        //     </div>

        // </div>
    );
};

export default Header;