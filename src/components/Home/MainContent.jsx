import React from 'react';

const MainContent = () => {
    return (
        <div className="flex-1 p-5">
            <div className="flex flex-col gap-4">
                {/* Post 1 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div className="ml-2">
                            <div className="font-semibold">Lara Leones</div>
                            <div className="text-sm text-gray-500">@thewallart</div>
                        </div>
                    </div>
                    <div className="mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className="text-blue-500 cursor-pointer">Read More</span></div>
                    <div className="w-full h-60 bg-gray-200 rounded-lg"></div>
                    <div className="flex justify-between mt-2 text-gray-500">
                        <div>9.8k</div>
                        <div>8.6k</div>
                        <div>7.2k</div>
                    </div>
                </div>
                {/* Post 2 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div className="ml-2">
                            <div className="font-semibold">Thomas J.</div>
                            <div className="text-sm text-gray-500">@thecustomcreator</div>
                        </div>
                    </div>
                    <div className="mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className="text-blue-500 cursor-pointer">Read More</span></div>
                    <div className="w-full h-60 bg-gray-200 rounded-lg"></div>
                    <div className="flex justify-between mt-2 text-gray-500">
                        <div>9.8k</div>
                        <div>8.6k</div>
                        <div>7.2k</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
