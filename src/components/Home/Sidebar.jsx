import React from 'react'

const Sidebar = () => {
    return (
        <div className="w-1/5 bg-white shadow p-4">
            <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                    <i className="fas fa-home"></i>
                    <span>Home</span>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fas fa-bell"></i>
                    <span>Notifications</span>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fas fa-store"></i>
                    <span>Shop</span>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fas fa-comments"></i>
                    <span>Conversation</span>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fas fa-wallet"></i>
                    <span>Wallet</span>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fas fa-file-invoice"></i>
                    <span>Subscription</span>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fas fa-user"></i>
                    <span>My Profile</span>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fas fa-cog"></i>
                    <span>Settings</span>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Log out</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar