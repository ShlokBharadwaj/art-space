import React from 'react';
import Post from '../Post';

const MainContent = () => {
    return (
        <div className="flex-1 bg-gray-50 p-4">
            <Post
                username="Lara Leones"
                imageUrl="/path/to/image1.jpg"
                likes="9.8k"
                comments="8.6k"
                shares="7.2k"
            />
            <Post
                username="Thomas J."
                imageUrl="/path/to/image2.jpg"
                likes="9.8k"
                comments="8.6k"
                shares="7.2k"
            />
            <div className="flex space-x-4 mt-6">
                <div className="bg-white shadow p-4 rounded-lg">
                    <img src="/path/to/image3.jpg" alt="Artwork" className="w-full rounded-lg" />
                    <p className="mt-2 text-xl font-bold">$199.99</p>
                    <p className="mt-1 text-yellow-500">★★★★★</p>
                </div>
                <div className="bg-white shadow p-4 rounded-lg">
                    <img src="/path/to/image4.jpg" alt="Artwork" className="w-full rounded-lg" />
                    <p className="mt-2 text-xl font-bold">$199.99</p>
                    <p className="mt-1 text-yellow-500">★★★★★</p>
                </div>
                <div className="bg-white shadow p-4 rounded-lg">
                    <img src="/path/to/image5.jpg" alt="Artwork" className="w-full rounded-lg" />
                    <p className="mt-2 text-xl font-bold">$199.99</p>
                    <p className="mt-1 text-yellow-500">★★★★★</p>
                </div>
            </div>
        </div>
    )
}

export default MainContent