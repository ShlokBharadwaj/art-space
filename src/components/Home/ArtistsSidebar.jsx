import React from 'react';

const ArtistsSidebar = () => {
    return (
        <div className="w-64 bg-gray-100 p-5 min-h-screen">
            <button className="w-full bg-[#88C2BB] text-white p-5 rounded-md mb-10">Become a Seller</button>
            <div className="mb-4">
                <div className="font-semibold mb-2">Artists</div>
                <ul>
                    <li className="mb-2">Thomas Edward</li>
                    <li className="mb-2">Chris Doe</li>
                    <li className="mb-2">Emilie Jones</li>
                    <li className="mb-2">Jessica Williams</li>
                </ul>
            </div>
            <div>
                <div className="font-semibold mb-2">Photographers</div>
                <ul>
                    <li className="mb-2">John Smith</li>
                    <li className="mb-2">Jane Doe</li>
                    <li className="mb-2">Alice Brown</li>
                    <li className="mb-2">Bob White</li>
                </ul>
            </div>
        </div>
    );
};

export default ArtistsSidebar;
