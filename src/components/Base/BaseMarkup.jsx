import React from 'react';
import ToolBar from './ToolBar';

import './BaseMarkup.less';
import Footer from './Footer';
const BaseMarkup = ({ children }) => {
    return (
        <>
            <ToolBar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default BaseMarkup
