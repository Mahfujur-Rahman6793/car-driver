import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';


const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayOut;