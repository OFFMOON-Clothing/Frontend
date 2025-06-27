import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoTiktok } from 'react-icons/io5';

const Topbar = () => {
    return (
        <div className="bg-[black] text-white">
            <div className="container mx-auto flex justify-between items-center px-2 py-3 min-h-[64px]">
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="hover:text-white text-2xl">
                        <IoLogoFacebook className="h-10 w-10"/>
                    </a>
                    <a href="#" className="hover:text-white text-2xl">
                        <IoLogoInstagram className="h-10 w-10"/>
                    </a>
                    <a href="#" className="hover:text-white text-2xl">
                        <IoLogoTiktok className="h-10 w-10"/>
                    </a>
                </div>
                <div className="text-4xl text-center flex-grow ml-60">
                    <span>Fashion is Your Passion</span>
                </div>
                <div className="text-3xl hidden md:block ml-12">
                    <a href="tel:+94742285624" className="hover:text-white">
                        +94742285624
                    </a>
                </div> 
            </div>
        </div>
    );
};

export default Topbar;