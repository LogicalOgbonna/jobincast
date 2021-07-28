import React from 'react';
import ToolBar from './ToolBar';

import './BaseMarkup.scss';
import Footer from './Footer';
const BaseMarkup = ({ children, className }) => {
    return (
        <>
            <ToolBar />
            <main className={`main-content ${className}`}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default BaseMarkup
