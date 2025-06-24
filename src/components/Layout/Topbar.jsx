import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoTiktok } from 'react-icons/io5';

const Topbar = () => {
    return (
        <div className="bg-[black] text-white">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="hover:text-white text-2xl">
                        <IoLogoFacebook className="h-7 w-7"/>
                    </a>
                    <a href="#" className="hover:text-white text-sm">
                        <IoLogoInstagram className="h-7 w-7"/>
                    </a>
                    <a href="#" className="hover:text-white text-sm">
                        <IoLogoTiktok className="h-7 w-7"/>
                    </a>
                </div>
                <div className="text-xl text-center flex-grow">
                    <span>Beyond trends. Beneath the moon</span>
                </div>
                <div className="text-xl hidden md:block">
                    <a href="tel:+94742285624" className="hover:text-white">
                        +94742285624
                    </a>
                </div> 
            </div>
        </div>
    );
};

export default Topbar;