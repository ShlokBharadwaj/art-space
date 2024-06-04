import React from 'react'

const ArtistsSidebar = () => {
    return (
        <div className="w-1/5 bg-white shadow p-4">
            <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Artists</span>
                <span className="text-gray-500">Photographers</span>
            </div>
            <div className="mt-4 space-y-4">
                <div className="flex items-center space-x-4">
                    <img src="/path/to/artist1.jpg" alt="Artist" className="w-12 h-12 rounded-full" />
                    <div>
                        <p className="text-lg font-bold">Thomas Edward</p>
                        <p className="text-gray-500">@thewildwithyou</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <img src="/path/to/artist2.jpg" alt="Artist" className="w-12 h-12 rounded-full" />
                    <div>
                        <p className="text-lg font-bold">Chris Doe</p>
                        <p className="text-gray-500">@thewildwithyou</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <img src="/path/to/artist3.jpg" alt="Artist" className="w-12 h-12 rounded-full" />
                    <div>
                        <p className="text-lg font-bold">Emilie Jones</p>
                        <p className="text-gray-500">@thewildwithyou</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <img src="/path/to/artist4.jpg" alt="Artist" className="w-12 h-12 rounded-full" />
                    <div>
                        <p className="text-lg font-bold">Jessica Williams</p>
                        <p className="text-gray-500">@thewildwithyou</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistsSidebar