import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const CallToAction = () => {
    return (
        <section className="w-4/5 py-6 dark:bg-indigo-400 dark:text-gray-900 mx-auto -mt-8 h-auto">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                <h1 className="text-3xl font-bold text-center">Let’s Create Big Stories Together</h1>
                <p className="pt-2 pb-8 text-xl font-medium text-center">Mobile is in our nerves. We don’t just build apps, we create brand. <br />Choosing us will be your best decision</p>
                <button className="px-8 py-3 text-lg font-semibold rounded bg-red-600 dark:text-gray-50">
                    Get A Quotes <span><FaArrowAltCircleRight className='text-center'></FaArrowAltCircleRight></span>

                </button>
            </div>
        </section>
    );
};

export default CallToAction;