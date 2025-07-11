import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';


const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    };

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            {/* Top Navigation */}
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Left - Logo */}
                <div>
                    <Link to="/" className="text-6xl italic font-wushin font-bold">
                        OFFMOON
                    </Link>
                </div>

                {/* Center - Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <Link to="#" className="text-black hover:text-gray-700 text-4xl font-bold uppercase">
                        Men
                    </Link>
                    <Link to="#" className="text-black hover:text-gray-700 text-4xl font-bold uppercase">
                        Women
                    </Link>
                </div>

                {/* Right - Icons */}
                <div className="flex items-center space-x-4">
                    <Link to="/profile" className="text-black hover:text-gray-700">
                        <HiOutlineUser className="h-10 w-10" />
                    </Link>

                    <button onClick={toggleCartDrawer} className="relative hover:text-black">
                        <HiOutlineShoppingBag className="h-10 w-10" />
                        <span className="absolute -top-0 -right-1 bg-black text-white text-xs font-bold rounded-full px-2 py-0.5">
                            4
                        </span>
                    </button>

                    {/* Search Bar */}
                    <div className="overflow-hidden">
                        <SearchBar />
                    </div>

                    {/* Mobile Menu Icon */}
                    <button onClick={toggleNavDrawer} className="md:hidden">
                        <HiBars3BottomRight className="h-10 w-10 text-black" />
                    </button>
                </div>
            </nav>

            {/* Cart Drawer */}
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

            {/* Mobile Navigation Drawer */}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/3 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleNavDrawer}>
                        <IoMdClose className="h-6 w-6 text-black" />
                    </button>
                </div>
                <div className="p-4">
                    <h2 className="text-5xl font-bold text-black mb-4">Menu</h2>
                    <nav className="space-y-3">
                        <Link to="#" onClick={toggleNavDrawer} className="block text-3xl text-black hover:text-gray-700 mb-2">
                            Men
                        </Link>
                        <Link to="#" onClick={toggleNavDrawer} className="block text-3xl text-black hover:text-gray-700 mb-2">
                            Women
                        </Link>
                        <Link to="#" onClick={toggleNavDrawer} className="block text-3xl text-black hover:text-gray-700 mb-2">
                            Profile
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
