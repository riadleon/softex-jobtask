import React from 'react';
import CalendarLayout from './CalendarLayout';
import CallToAction from './CallToAction';
import Social from './Social';

const Home = () => {
    return (
        <div>
            <CalendarLayout />
            <Social />
            <CallToAction />
        </div>
    );
};

export default Home;