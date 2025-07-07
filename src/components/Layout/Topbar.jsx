import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoTiktok } from 'react-icons/io5';

const Topbar = () => {
    return (
        <div className="bg-[black] text-white">
            <div className="container mx-auto flex justify-between items-center px-2 py-3 min-h-[30px]">
                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:text-white text-xl">
                        <IoLogoFacebook className="h-8 w-8"/>
                    </a>
                    <a href="#" className="hover:text-white text-xl">
                        <IoLogoInstagram className="h-8 w-8"/>
                    </a>
                    <a href="#" className="hover:text-white text-xl">
                        <IoLogoTiktok className="h-8 w-8"/>
                    </a>
                </div>
                <div className="flex-1 flex justify-center">
                    <span className="text-xl font-medium tracking-wide">Wear the moon. Be the trend.</span>
                </div>
                <div className="w-32"></div>
            </div>
        </div>
    );
};

export default Topbar;