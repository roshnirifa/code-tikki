import React from 'react';

const Blog = () => {
    return (
        <div className='px-12 mb-5'>
            <h1 className='text-4xl font-bold text-center my-8'>Blogs</h1>
            <div class="grid grid-cols-2 gap-10">
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;