import React from 'react'

import './style.css'

import logo from './need1.jpeg'

function Header() {
    return (
        <div>
            <header class="text-gray-600 body-font bg-blue-200">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row ">
              <a class="flex title-font font-medium  text-gray-900 mb-4 md:mb-0 items-center text-center">
                <img src={logo} alt="logo" className="logoImg" />
                <span class="ml-3 text-3xl">Devine</span>
              </a>
            </div>
        </header>
            
        </div>
    )
}

export default Header
