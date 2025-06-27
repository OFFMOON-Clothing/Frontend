import React from 'react';
import { IoMdClose } from 'react-icons/io';

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
    return (
        <div 
            className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            {/* Close Button */}
            <div className="flex justify-end p-4">
                <button onClick={toggleCartDrawer}>
                    <IoMdClose className="h-8 w-8 text-black" />
                </button>
            </div>

            {/* Cart Contents (scrollable) */}
            <div className="flex-1 p-4 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                {/* Cart items will go here */}
                {/* Example item */}
                <p className="text-gray-500">Your cart is empty for now 🛒</p>
            </div>

            {/* Checkout button (fixed at bottom) */}
            <div className="p-4 border-t">
                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-black border transition">
                    Checkout
                </button>
                <p className="text-sm tracking-tighter text-black mt-2 text-center">
                    Shipping, taxes, and discounts calculated at checkout
                </p>
            </div>
        </div>
    );
};

export default CartDrawer;
