import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import Navbar from '../Pages/Shared/Header/Navbar';

const Main = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;