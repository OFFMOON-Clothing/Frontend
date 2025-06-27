import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2';
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Left - Logo */}
                <div>
                    <Link to="/" className="text-5xl italic font-wushin font-bold">
                        OFFMOON
                    </Link>
                </div>

                {/* Center - Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <Link to="#" className="text-black hover:text-gray-700 text-2xl font-bold uppercase">
                        Men
                    </Link>
                    <Link to="#" className="text-black hover:text-gray-700 text-2xl font-bold uppercase">
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

                    <div className="overflow-hidden">
                        <SearchBar />
                    </div>

                    <button className="md:hidden">
                        <HiBars3BottomRight className="h-10 w-10 text-black" />
                    </button>
                </div>
            </nav>

            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
        </>
    );
};

export default Navbar;
