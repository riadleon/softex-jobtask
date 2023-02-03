import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="p-4 shadow-neutral-400">
            <div className="container flex justify-around h-16 mx-auto md:justify-around md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex ">
                    <Link to='#' className="flex">
                        <div className='flex items-center'>
                            <img className='h-5 ' src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" />
                            <p className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent font-semibold">+91 8000 161161</p>
                        </div>
                    </Link>
                    <Link to='#' className="flex">
                        <div className='flex items-center'>
                            <img className='h-5 ' src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="" />
                            <p className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent font-semibold">+1 309 791 4105</p>
                        </div>
                    </Link>
                    <Link to='#' className="flex">
                        <div className='flex items-center'>
                            <img className='h-5 ' src="https://cdn.britannica.com/25/4825-050-977D8C5E/Flag-United-Kingdom.jpg" alt="" />
                            <p className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent font-semibold">+44 20 8133 8639</p>
                        </div>
                    </Link>
                </ul>

                <ul className="items-stretch hidden space-x-3 md:flex">
                    <Link to='#' className="flex">
                        <button className=" px-4 border-b-2 font-semibold rounded-full hover:text-black bg-white w-full">Press Release</button>
                    </Link>
                    <Link to='#' className="flex">
                        <button className=" px-4 border-b-2 font-semibold rounded-full hover:text-black bg-white w-full">Our Fresh Work</button>
                    </Link>
                    <Link to='#' className="flex">
                        <button className=" px-4 border-b-2 font-semibold rounded-full text-white hover:text-black bg-blue-800 w-full">Schedule Call</button>
                    </Link>
                </ul>

            </div>

        </header>
    );
};

export default Header;