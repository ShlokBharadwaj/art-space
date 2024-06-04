import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-100 min-h-screen p-5">
            <div className="text-2xl font-bold mb-10 bg-white rounded-md p-5">LOGO</div>
            <div className="bg-white p-4 rounded-md">
                <ul>
                    <li className="mb-4">Home</li>
                    <li className="mb-4">Notifications</li>
                    <li className="mb-4">Shop</li>
                    <li className="mb-4">Conversation</li>
                    <li className="mb-4">Wallet</li>
                    <li className="mb-4">Subscription</li>
                    <li className="mb-4">My Profile</li>
                    <li className="mb-4">Settings</li>
                </ul>
                <button className="mt-auto text-teal-500">Log out</button>
            </div>
        </div>
    );
};

export default Sidebar;
