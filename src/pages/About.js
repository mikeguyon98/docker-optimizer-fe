import React from 'react';
import Navbar from '../components/NavBar';
// import tailwind from 'tailwindcss';

function About() {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div>
                <div className="text-xl font-medium text-black">About Page</div>
                <p className="text-gray-500">Information</p>
            </div>
        </div>
    )
}

export default About;