import React from 'react';
import Navbar from '../components/Home/Navbar';
import Sidebar from '../components/Home/Sidebar';
import MainContent from '../components/Home/MainContent';
import ArtistsSidebar from '../components/Home/ArtistsSidebar';

const HomePage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <MainContent />
            <ArtistsSidebar />
        </div>
    )
}

export default HomePage