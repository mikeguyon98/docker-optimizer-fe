import React from 'react';
import Navbar from '../components/NavBar';
// import tailwind from 'tailwindcss';

function Home() {
    return (
        <div className="h-screen w-full bg-primarydark flex items-center justify-content-center">
        <div className="p-6 max-w-sm mx-auto bg-secondarydark rounded-xl shadow-lg flex items-center justify-content-center space-x-4">
            <div>
                <div className="text-xl font-sans font-medium text-white">ChitChat</div>
                <p className="text-white font-sans">You have a new message!</p>
            </div>
        </div>
        </div>
    )
}

export default Home;