import React from 'react';
// import './MainContent.css';

const MainContent = () => {
    return (
        <div className="flex-1 p-5 bg-gray-50">
            {/* Search bar and filter */}
            <div className="flex items-center bg-white p-5 rounded-lg shadow-md mb-11">
                <div className="flex items-center w-full">
                    <img src="./svgs/maincontent/component32.svg" alt="Search" className="w-5 h-5 text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full border-none outline-none"
                    />
                </div>
                <img src="./svgs/maincontent/component39-2.svg" alt="Filter" className="w-5 h-5 text-gray-500 ml-4 cursor-pointer" />
                <p className="font-normal text-sm ml-2">
                    Filters
                </p>
            </div>

            {/* Post 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                        <img src="./svgs/maincontent/pexels-ali-pazani-2613260.png" alt="Profile" className="w-10 h-10 rounded-md mr-2" />
                        <div>
                            <div className="font-semibold">Lara Leones</div>
                            <div className="text-sm text-gray-500">@thewallart</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end items-center">
                        <div className="w-1 h-1 bg-black rounded-full mb-1"></div>
                        <div className="w-1 h-1 bg-black rounded-full mb-1"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                    </div>
                </div>
                <div className="mb-2">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    <span className="text-[#FF5E8A] cursor-pointer">Read More</span>
                </div>
                <div className="relative">
                    <img src="./svgs/maincontent/pexels-humphrey-muleba-2045248.png" alt="Post" className="w-full h-60 object-cover rounded-lg mb-2" />
                    <img src="./svgs/maincontent/heart.svg" className="w-6 h-6 absolute top-4 right-4" />
                </div>
                <div className="border-b-2 border-gray-300 -mx-4" /> {/* Full width border */}
                <div className="flex justify-start space-x-8 mt-5 ml-5 text-black font-bold">
                    <div><img src="./svgs/maincontent/heart-1.svg" className="w-6 h-6"></img> 9.8k</div>
                    <div><img src="./svgs/maincontent/comment.svg" className="w-6 h-6"></img> 8.6k</div>
                    <div><img src="./svgs/maincontent/share.svg" className="w-6 h-6"></img> 7.2k</div>
                </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                        <img src="./svgs/maincontent/pexels-imad-clicks-9810659.png" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
                        <div>
                            <div className="font-semibold">Thomas J.</div>
                            <div className="text-sm text-gray-500">@thecustomcreator</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end items-center">
                        <div className="w-1 h-1 bg-black rounded-full mb-1"></div>
                        <div className="w-1 h-1 bg-black rounded-full mb-1"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                    </div>
                </div>
                <div className="mb-2">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    <span className="text-[#FF5E8A] cursor-pointer">Read More</span>
                </div>
                <div className="relative">
                    <img src="./svgs/maincontent/pexels-tobias-bjørkli-2236382.png" alt="Post" className="w-full h-60 object-cover rounded-lg mb-2" />
                    <img src="./svgs/maincontent/heart.svg" className="w-6 h-6 absolute top-4 right-4" />
                </div>
                <div className="border-b-2 border-gray-300 -mx-4" /> {/* Full width border */}
                <div className="flex justify-start space-x-8 mt-5 ml-5 text-black font-bold">
                    <div><img src="./svgs/maincontent/heart-1.svg" className="w-6 h-6"></img> 9.8k</div>
                    <div><img src="./svgs/maincontent/comment.svg" className="w-6 h-6"></img> 8.6k</div>
                    <div><img src="./svgs/maincontent/share.svg" className="w-6 h-6"></img> 7.2k</div>
                </div>
            </div>

            {/* Horizontal Scrollbar */}
            <div className="flex overflow-x-auto py-4 space-x-4">
                <div className="max-w-60 flex-shrink-0">
                    <img src="./svgs/maincontent/pexels-pixabay-164455.png" alt="Image 3" className="h-36 object-cover rounded-lg" />
                    <h4 className="text-xs font-bold mt-2">Modern Wall Decor Framed Painting</h4>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-lg font-bold">$199.90</span>
                        <div className="flex">
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                        </div>
                    </div>
                </div>
                <div className="max-w-60 flex-shrink-0">
                    <img src="./svgs/maincontent/Image40.png" alt="Image 3" className="h-36 object-cover rounded-lg" />
                    <h4 className="text-xs font-bold mt-2">Modern Wall Decor Framed Painting</h4>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-lg font-bold">$199.90</span>
                        <div className="flex">
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                        </div>
                    </div>
                </div>
                <div className="max-w-60 flex-shrink-0">
                    <img src="./svgs/maincontent/Image39@2x.png" alt="Image 3" className="w-full h-36 object-cover rounded-lg" />
                    <h4 className="text-xs font-bold mt-2">Modern Wall Decor Framed Painting</h4>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-lg font-bold">$199.90</span>
                        <div className="flex">
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                        </div>
                    </div>
                </div>
                <div className="max-w-60 flex-shrink-0">
                    <img src="./svgs/maincontent/pexels-max-vakhtbovych-6782342.png" alt="Image 3" className="h-36 object-cover rounded-lg" />
                    <h4 className="text-xs font-bold mt-2">Modern Wall Decor Framed Painting</h4>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-lg font-bold">$199.90</span>
                        <div className="flex">
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                            <img src="./svgs/maincontent/star.svg" alt="Rating" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MainContent;
