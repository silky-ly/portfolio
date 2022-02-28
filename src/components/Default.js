import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

const Default = ({ children }) => {
  return (
        <>
            <Navbar />
            { children }
            {/* <Footer /> */}
        </>
    );
};

export default Default;
