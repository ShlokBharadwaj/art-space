import React from 'react';

const ArtistsSidebar = () => {
    return (
        <div className="w-64 bg-gray-100 p-5 min-h-screen">
            <button className="w-full bg-[#88C2BB] text-white p-5 rounded-md mb-10">Become a Seller</button>
            <div className="mb-4">
                <div className="font-semibold mb-2">Artists</div>
                <ul>
                    <li className="relative mb-2">
                        <img src="./svgs/artistssidebar/pexels-ekaterina-12203460.png" alt="John Smith" className="w-full" />
                        <div className="absolute inset-0 bg-black opacity-[0.15] rounded-md"></div>
                        <div className="absolute bottom-0 left-0 p-2 flex items-center">
                            <div className="relative">
                                <img src="./svgs/artistssidebar/pexels-anastasia-shuraeva-4406721.png" alt="Thomas Edward" className="w-10 h-10 rounded-md mr-3" />
                                <div className="absolute -top-1 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="text-white">
                                <p className="font-medium text-sm">Thomas Edward</p>
                                <p className="text-xs">@thewildwithyou</p>
                            </div>
                        </div>
                    </li>
                    <li className="relative mb-2">
                        <img src="./svgs/artistssidebar/pexels-genaro-servín-763210.png" alt="Jane Doe" className="w-full" />
                        <div className="absolute inset-0 bg-black opacity-[0.15] rounded-md"></div>
                        <div className="absolute bottom-0 left-0 p-2 flex items-center">
                            <div className="relative">
                                <img src="./svgs/artistssidebar/pexels-andrea-piacquadio-3771118.png" alt="Chris Doe" className="w-10 h-10 rounded-md mr-3" />
                                <div className="absolute -top-1 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="text-white">
                                <p className="font-medium text-sm">Chris Doe</p>
                                <p className="text-xs">@thewildwithyou</p>
                            </div>
                        </div>
                    </li>
                    <li className="relative mb-2">
                        <img src="./svgs/artistssidebar/pexels-pixabay-164455.png" alt="Alice Brown" className="w-full" />
                        <div className="absolute inset-0 bg-black opacity-[0.15] rounded-md"></div>
                        <div className="absolute bottom-0 left-0 p-2 flex items-center">
                            <div className="relative">
                                <img src="./svgs/artistssidebar/pexels-antoni-shkraba-4442102.png" alt="Emilie Jones" className="w-10 h-10 rounded-md mr-3" />
                                <div className="absolute -top-1 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="text-white">
                                <p className="font-medium text-sm">Emilie Jones</p>
                                <p className="text-xs">@thewildwithyou</p>
                            </div>
                        </div>
                    </li>
                    <li className="relative mb-2">
                        <img src="./svgs/artistssidebar/pexels-steve-johnson-1269968.png" alt="Bob White" className="w-full" />
                        <div className="absolute inset-0 bg-black opacity-[0.15] rounded-md"></div>
                        <div className="absolute bottom-0 left-0 p-2 flex items-center">
                            <div className="relative">
                                <img src="./svgs/artistssidebar/pexels-antoni-shkraba-4442005.png" alt="Jessica Williams" className="w-10 h-10 rounded-md mr-3" />
                                <div className="absolute -top-1 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="text-white">
                                <p className="font-medium text-sm">Jessica Williams</p>
                                <p className="text-xs">@thewildwithyou</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="flex justify-between text-[0.55rem] text-gray-400 mt-3 space-x-4">
                    <p>Privacy</p>
                    <p>Terms of Service</p>
                    <p>Cookie Notice</p>
                </div>
            </div>
        </div>
    );
};

export default ArtistsSidebar;