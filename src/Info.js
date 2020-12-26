import React from 'react'

import photo from './photo1.jpg'

function Info() {
    return (
        <div>
            <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img class="object-cover object-center rounded" alt="hero" src={photo}/>
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Devine
                </h1>
                <p class="mb-8 leading-relaxed">Divine is here for your Safety Help Care,
                    This app has many functions like</p>
                
                
                <p class="mb-2 leading-relaxed text-lg"><span class="text-gray-900 "> Shake the phone- </span> Help message will send automatically.</p>
                <p class="mb-2 leading-relaxed text-lg"><span class="text-gray-900 "> Call -</span> Helpline call available(POLICE, AMBULANCE, FIRE BRIGADE).</p>
                <p class="mb-2 leading-relaxed text-lg"><span class="text-gray-900 "> Battery Drain - </span> Automatic message send to your family/Best friend for safety .</p>
                <p class="mb-2 leading-relaxed text-lg"><span class="text-gray-900 "> Network - </span> App sends location based on GPS and if no GPS is there then Internet Service Provider </p>

                <div class="flex justify-center">
                    <button class="bg-blue-300 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
                          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                        </svg>
                        <span class="ml-4 flex items-start flex-col leading-none">
                          <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                          <span class="title-font font-medium">Google Play</span>
                        </span>
                      </button>
                </div>
              </div>
            </div>
          </section>
            
        </div>
    )
}

export default Info
