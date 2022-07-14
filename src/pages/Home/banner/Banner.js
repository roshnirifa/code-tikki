import React from 'react';

import img1 from './img1.jpg'
import img2 from './img2.jpg'
const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={img1} class="w-full" alt='' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src={img2} class="w-full" alt='' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div class="carousel-caption  d-md-block">

                <h1>The perfect venue for your </h1>
                <h1>next event</h1>

                <p><small>Premium Wedding Photography, Royal Wedding Planners, Birthday
                    Party Management</small>
                </p>
                <a href="https://www.google.com/" role="button" target="blank"
                    class="btn  btn-success  px-4 py-2 fw-bolder rounded my-4">
                    Book Now</a>


            </div>


        </div>
    );
};

export default Banner;