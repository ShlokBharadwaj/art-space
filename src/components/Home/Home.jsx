import React from 'react';
import Navbar from '../Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import ArtistsSidebar from './ArtistsSidebar';

function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <MainContent />
                <ArtistsSidebar />
            </div>
        </div>
    );
}

export default Home;
