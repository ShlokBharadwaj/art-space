import React from 'react';

function Navbar() {
    return (
        <div className="bg-white shadow">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-xl font-bold">LOGO</div>
                <div>
                    <input type="text" placeholder="Search here..." className="border rounded px-3 py-1" />
                </div>
                <div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Become a Seller</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
