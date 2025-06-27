import { useState } from 'react';
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Team:", searchTerm);
        setIsOpen(false);
    }

    return (
        <div className={`flex items-center justify-center transition-all duration-300 ${isOpen
            ? "absolute top-0 left-0 w-full bg-white h-24 z-50"
            : "w-auto"}`}>
            {isOpen ? (
                <form 
                onSubmit={handleSearch}
                className="relative flex items-center justify-center w-full">
                    <div className="relative w-1/2">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="w-full px-4 py-2 pr-12 bg-black text-white rounded-lg focus:outline-none
                            placeholder:text-gray-400"
                        />
                        {/* Search Icon */}
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white
                            hover:text-gray-400">
                            <HiMagnifyingGlass className="h-6 w-6" />
                        </button>
                    </div>
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={handleSearchToggle}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-800">
                        <HiMiniXMark className="h-6 w-6" />
                    </button>
                </form>
            ) : (
                <button onClick={handleSearchToggle} className="text-black">
                    <HiMagnifyingGlass className="h-10 w-10" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
