import React from 'react';
import './Blog.css'
import { FaRegStickyNote, FaClock } from 'react-icons/fa';
import Time from 'react-time/lib/Time';

const Blog = () => {
    let now = new Date()
    return (
        <div className='blog-container mt-10'>
            <h1 className='text-2xl ml-48 py-5 font-bold'>Read Recent Blogs</h1>
            <div className='px-48 pb-10'>

                <div>
                    <div>
                        <h1 className='flex items-center text-xl'><FaRegStickyNote className="mr-4"></FaRegStickyNote>Exciting Updates for the month of June 2022</h1>

                    </div>

                    <div className='flex  items-center mt-4'>
                        <div>
                            <h2 className='text-primary text-xl  flex items-center'><a href="">Afsana Ifat</a><div className='vl'></div></h2>
                        </div>
                        <div className='flex items-center'>
                            <FaClock className='mr-5'></FaClock>
                            <div className='flex'>
                                <p className='mr-4'><Time value={now} format="DD/MM/YYYY " />
                                </p>
                                <p>Time <Time value={now} format=" HH:mm" /></p>
                            </div>
                        </div>
                    </div>

                    <hr />
                </div>
                <div>
                    <div>
                        <h1 className='flex items-center text-xl'><FaRegStickyNote className="mr-4"></FaRegStickyNote>Exciting Updates for the month of June 2022</h1>

                    </div>

                    <div className='flex  items-center mt-4'>
                        <div>
                            <h2 className='text-primary text-xl  flex items-center'><a href="">Afsana Ifat</a><div className='vl'></div></h2>
                        </div>
                        <div className='flex items-center'>
                            <FaClock className='mr-5'></FaClock>
                            <div className='flex'>
                                <p className='mr-4'><Time value={now} format="DD/MM/YYYY " />
                                </p>
                                <p>Time <Time value={now} format=" HH:mm" /></p>
                            </div>
                        </div>
                    </div>

                    <hr />
                </div>
                <div>
                    <div>
                        <h1 className='flex items-center text-xl'><FaRegStickyNote className="mr-4"></FaRegStickyNote>Exciting Updates for the month of June 2022</h1>

                    </div>

                    <div className='flex  items-center mt-4'>
                        <div>
                            <h2 className='text-primary text-xl  flex items-center'><a href="">Afsana Ifat</a><div className='vl'></div></h2>
                        </div>
                        <div className='flex items-center'>
                            <FaClock className='mr-5'></FaClock>
                            <div className='flex'>
                                <p className='mr-4'><Time value={now} format="DD/MM/YYYY " />
                                </p>
                                <p>Time <Time value={now} format=" HH:mm" /></p>
                            </div>
                        </div>
                    </div>

                    <hr />
                </div>
            </div>


        </div>
    );
};

export default Blog;