import React from 'react';
import MainFillContainer from "./MainFillContainer";
import LeftEditSidebar from "./LeftEditSidebar";
import PageNavigation from "./PageNavigation";

const HelpPage = () => (
    <div>
        <LeftEditSidebar />
        <PageNavigation/>
        <div className="main-content">
            <MainFillContainer />
        </div>
    </div>
);

export default HelpPage;