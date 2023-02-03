import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaClock } from 'react-icons/fa';

const CalendarLayout = () => {
    return (
        <div className='flex items-center justify-around bg-slate-100'>

            <article className="w-1/4  mx-auto space-y-12 border-gray-500 bg-white h-2/3">
                <div className="w-full mx-auto text-center">

                    <img className='h-20' src={logo} alt="" />

                </div>
                <div className="pt-12 border-t dark:border-gray-700">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">

                        <div className="flex flex-col p-8">
                            <h1 className='text-gray-600'>Hyperlink Infosystem</h1>
                            <h4 className="text-2xl font-bold">Introduction Call With <br /> Hyperlink Infosystem</h4><br />
                            <div className='flex items-center'>
                                <FaClock className='text-gray-600' />
                                <p>30 min</p>
                            </div>
                            <br />

                            <p>Agenda:</p>
                            <ol>
                                <li>1.Introduction of Hyperlink infosystem</li>
                                <li>2.Requirement understanding</li>
                                <li>3.Similar work showcase</li>
                                <li>4.Next actions</li>
                            </ol>
                            <br /><br /><br />
                            <Link className='text-blue-600' to="#">Cookie Settings</Link>
                        </div>
                    </div>

                </div>
            </article>

            <div className='mr-40 w-1/4  mx-auto space-y-12 border-gray-500 bg-white h-2/3'>
                <h2 className='text-xl font-bold'>Select Date & Time</h2>
                <DayPicker />
            </div>
        </div>
    );
};

export default CalendarLayout;
