import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase_init';
import Loadin from '../../Shared/Loading/Loadin';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsGoogle } from "react-icons/bs";
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        <Loadin></Loadin>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='mx-auto w-80'>
            <div className='d-flex align-items-center mt-2 '>
                <div className='orDiv' ></div>
                <p className='mb-1'>or</p>
                <div className='orDiv'></div>
            </div>
            <div className='flex justify-center'>
                <button class="btn btn-success text-white " onClick={() => signInWithGoogle()} ><BsGoogle className='icon mr-4'></BsGoogle> Signin With Google</button>
            </div>


        </div>
    );
};

export default SocialLogin;