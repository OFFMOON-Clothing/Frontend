 import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight} from 'react-icons/hi2';
import SearchBar from './SearchBar';

 const Navbar = () => {
    return (
        <>
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">

            {/* Left - Logo */}
            <div>
            <Link to="/" className="text-xl italic font-Wushin font-bold">
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
            {/* Right - Contact and Cart */}
            <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-black hover:text-gray-700 text-2xl font-bold uppercase">
                    <HiOutlineUser className="h-6 w-6 text-black" />
                </Link>
                <button className="relative hover:text-black ">
                    <HiOutlineShoppingBag className="h-6 w-6 text-black"/>
                    <span className="absolute -top-0 -right-1 bg-black text-white text-xs font-bold rounded-full px-2 py-0.5 ">
                        4
                    </span>
                </button>
                {/*Search*/}
                <SearchBar/>

                <button className="md:hidden text-black hover:text-gray-700">
                    <HiBars3BottomRight className="h-6 w-6 text-black" />
                </button>
            </div>
        </nav>
        </>
        )
};

export default Navbar;