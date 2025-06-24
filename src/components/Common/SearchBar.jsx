import { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex items-center justify-center transition-all duration-300 ${isOpen
            ? "absolute top-0 left-0 w-full bg-white h-24 z-50"
            : "w-auto"}`}>
            {isOpen ? (
                <form className="relative flex items-center justify-center w-full">
                    <div className="relative w-1/2">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="w-full px-4 py-2 bg-black text-white rounded-md focus:outline-none"
                        />
                    </div>
                </form>
            ) : (
                <button onClick={handleSearchToggle} className="text-black">
                    <HiMagnifyingGlass className="h-6 w-6" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
