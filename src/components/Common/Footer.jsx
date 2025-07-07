import React from 'react';
import { IoLogoFacebook } from 'react-icons/io';
import { IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="border-t py-12 bg-white text-black">
            {/* Main Footer Content */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
                {/* About Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <p className="text-gray-600 mb-4">
                        We are a team of passionate individuals dedicated to providing the best service possible.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="p-3 w-full py-5 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-2 rounded-r-md hover:bg-gray-900 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li><a href="#" className="hover:text-black">Men</a></li>
                        <li><a href="#" className="hover:text-black">Women</a></li>
                        <li><a href="#" className="hover:text-black">Profile</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li><a href="#" className="hover:text-black">Contact Us</a></li>
                        <li><a href="#" className="hover:text-black">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex items-center space-x-4 mb-4">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                            <IoLogoFacebook className="h-10 w-10" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                            <IoLogoInstagram className="h-10 w-10" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                            <IoLogoTiktok className="h-10 w-10" />
                        </a>
                    </div>
                    <p className="text-black-500 text-3xl flex items-center">
                        <FiPhoneCall className="mr-2" /> +1 234 567 890
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container mx-auto text-center mt-12 px-4 lg:px-0 border-t border-gray-300 pt-6">
                <p className="text-black-600 text-xl">
                    &copy; {new Date().getFullYear()} OFFMOON. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
