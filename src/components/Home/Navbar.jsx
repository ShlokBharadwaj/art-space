import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-white shadow">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-xl font-bold">LOGO</div>
                <div className="flex-1 mx-4">
                    <input type="text" placeholder="Search here..." className="w-full border rounded px-3 py-1" />
                </div>
                <div>
                    <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600">Become a Seller</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar