import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-50 min-h-screen p-5 text-left">
            <div className="text-2xl font-bold mb-10 bg-white rounded-md p-5 flex justify-center items-center shadow-md">LOGO</div>
            <div className="relative">
                <div className="absolute left-0 top-4 w-1 h-7 bg-[#88C2BB]"></div>
                <div className="bg-white p-4 rounded-md min-h-[75vh] flex flex-col pl-3 shadow-md">
                    <ul className="mb-auto space-y-4">
                        <li className="flex items-center font-bold">
                            <img src="./svgs/sidebar/home.svg" alt="Home" className="mr-2" />
                            Home
                        </li>
                        <li className="flex items-center text-[#8D8D8D]">
                            <img src="./svgs/sidebar/notification.svg" alt="Notifications" className="mr-2" />
                            Notifications
                        </li>
                        <li className="flex items-center text-[#8D8D8D]">
                            <img src="./svgs/sidebar/heart.svg" alt="Shop" className="mr-2" />
                            Shop
                        </li>
                        <li className="flex items-center text-[#8D8D8D]">
                            <img src="./svgs/sidebar/message.svg" alt="Conversation" className="mr-2" />
                            Conversation
                        </li>
                        <li className="flex items-center text-[#8D8D8D]">
                            <img src="./svgs/sidebar/message-1.svg" alt="Wallet" className="mr-2" />
                            Wallet
                        </li>
                        <li className="flex items-center text-[#8D8D8D]">
                            <img src="./svgs/sidebar/favorite.svg" alt="Subscription" className="mr-2" />
                            Subscription
                        </li>
                        <li className="flex items-center text-[#8D8D8D]">
                            <img src="./svgs/sidebar/profile.svg" alt="My Profile" className="mr-2" />
                            My Profile
                        </li>
                        <li className="flex items-center text-[#8D8D8D]">
                            <img src="./svgs/sidebar/setting.svg" alt="Settings" className="mr-2" />
                            Settings
                        </li>
                    </ul>
                    <button className="mt-auto flex items-center text-teal-500 text-left">
                        <img src="./svgs/sidebar/logout.svg" alt="Log out" className="mr-2" />
                        Log out
                    </button>
                </div>
                <div className="flex justify-between text-[0.55rem] text-gray-400 mt-3 space-x-4">
                    <p>2022©logo name</p>
                    <p>Developed by Ivan Infotech</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;