import React from 'react'

import './style.css'

function Video() {
    return (
        <div>
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
            <h1 class="text-3xl text-gray-900 mb-5 videoHeading">Video demo</h1>      
                <div class="lg:w-3/6 md:w-4/6 w-5/6  h-96 mb-10 object-cover object-center rounded" >
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>
              
            </div>
        </section>
            
        </div>
    )
}

export default Video
