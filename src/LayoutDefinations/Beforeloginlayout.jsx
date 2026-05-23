import React from 'react';
import Navbar from '../components/HomeComponents/Navbar';

const Beforeloginlayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default Beforeloginlayout;
