import React from 'react';

const ArtistsSidebar = () => {
    return (
        <div className="w-64 bg-gray-100 p-5 min-h-screen">
            <button className="w-full bg-[#88C2BB] text-white p-5 rounded-md mb-10">Become a Seller</button>
            <div className="mb-4">
                <div className="font-semibold mb-2">Artists</div>
                <ul>
                    <li className="flex items-center mb-2">
                        <img src="./svgs/artistssidebar/pexels-anastasia-shuraeva-4406721.png" alt="Thomas Edward" className="w-10 h-10 rounded-full mr-3" />
                        Thomas Edward
                    </li>
                    <li className="flex items-center mb-2">
                        <img src="./svgs/artistssidebar/pexels-andrea-piacquadio-3771118.png" alt="Chris Doe" className="w-10 h-10 rounded-full mr-3" />
                        Chris Doe
                    </li>
                    <li className="flex items-center mb-2">
                        <img src="./svgs/artistssidebar/pexels-antoni-shkraba-4442102.png" alt="Emilie Jones" className="w-10 h-10 rounded-full mr-3" />
                        Emilie Jones
                    </li>
                    <li className="flex items-center mb-2">
                        <img src="./svgs/artistssidebar/pexels-antoni-shkraba-4442005.png" alt="Jessica Williams" className="w-10 h-10 rounded-full mr-3" />
                        Jessica Williams
                    </li>
                </ul>
            </div>
            <div>
                <div className="font-semibold mb-2">Photographers</div>
                <ul>
                    <li className="flex items-center mb-2">
                        <img src="./svgs/artistssidebar/pexels-ekaterina-12203460.png" alt="John Smith" className="w-10 h-10 rounded-full mr-3" />
                        John Smith
                    </li>
                    <li className="flex items-center mb-2">
                        <img src="./svgs/artistssidebar/pexels-genaro-servín-763210.png" alt="Jane Doe" className="w-10 h-10 rounded-full mr-3" />
                        Jane Doe
                    </li>
                    <li className="flex items-center mb-2">
                        <img src="./svgs/artistssidebar/pexels-pixabay-164455.png" alt="Alice Brown" className="w-10 h-10 rounded-full mr-3" />
                        Alice Brown
                    </li>
                    <li className="flex items-center mb-2">
                        <img src="./svgs/artistssidebar/pexels-steve-johnson-1269968.png" alt="Bob White" className="w-10 h-10 rounded-full mr-3" />
                        Bob White
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
