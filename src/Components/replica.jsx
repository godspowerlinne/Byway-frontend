import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Heart, Menu, Search, ShoppingCart, X, Sun, Moon } from 'lucide-react';

// Reusable button component with consistent styling
const Button = ({ btnText, btnStyle, onClick }) => (
    <button
        onClick={onClick}
        className={`transition-all duration-200 ${btnStyle}`}
    >
        {btnText}
    </button>
);

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        setIsDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark));
    }, []);

    // Update theme in localStorage and apply classes
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    // Separate component for search bar to improve readability
    const SearchBar = () => (
        <div className="lg:w-[620px] h-[40px] border border-[#334155] dark:border-slate-600 rounded-md relative">
            <input
                type="search"
                placeholder="Search courses"
                className="w-full h-full rounded-md pl-10 placeholder:text-[#334155] dark:placeholder:text-slate-400 
                 bg-white text-slate-900 dark:text-white focus:outline-none"
            />
            <Search
                className="absolute left-[10px] top-[50%] -translate-y-[50%] text-[#334155] dark:text-slate-400 hover:scale-105"
            />
        </div>
    );

    // Auth buttons component
    const AuthButtons = () => (
        <div className="flex lg:w-auto w-full flex-col lg:flex-row gap-6">
            <Button
                btnText="Login"
                btnStyle="text-[#334155] dark:text-white rounded-[4px] hover:scale-105 lg:w-[61px] h-[40px] 
                 border border-[#334155] dark:border-slate-600 hover:shadow-md p-2 text-center w-full"
            />
            <Button
                btnText="Sign Up"
                btnStyle="bg-[#334155] dark:bg-slate-700 rounded-[4px] text-white hover:scale-105 lg:w-[73px] 
                 h-[40px] hover:shadow-md py-2 text-center w-full"
            />
        </div>
    );

    // User menu component when authenticated
    const UserMenu = () => (
        <div className="flex w-full lg:w-auto flex-col lg:flex-row gap-6">
            <Button
                btnText={<Bell />}
                btnStyle="text-[#334155] dark:text-white hover:scale-105"
            />
            <Link to="/profile">
                <img
                    width="40"
                    height="40"
                    src="/api/placeholder/40/40"
                    alt="User profile"
                    className="rounded-full"
                />
            </Link>
        </div>
    );

    return (
        <nav className="items-center pt-3 h-[80px] px-[28px] w-full fixed bg-white dark:bg-slate-900 
                    lg:px-14 shadow-md mb-24 transition-colors duration-200">
            <Link to="/" className="z-30">
                <img src="/api/placeholder/100/50" alt="Byway logo" className="w-[100px] h-[50px]" />
            </Link>

            <div className="flex flex-col lg:flex-row lg:h-[50px] w-fit ml-auto gap-4 lg:w-[91%] 
                      items-end justify-center lg:-translate-y-[50px] -translate-y-[30px]">
                {/* Mobile menu toggle */}
                <Button
                    btnText={isMobileMenuOpen ? <X className="scale-125" /> : <Menu className="scale-125" />}
                    onClick={toggleMobileMenu}
                    btnStyle="text-[#334155] dark:text-white lg:hidden w-fit"
                />

                {/* Main menu content */}
                <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row lg:flex 
                        items-center lg:h-full bg-slate-300 dark:bg-slate-800 lg:bg-transparent 
                        justify-between gap-4 w-fit p-8 lg:p-0 lg:w-[100%] transition-colors duration-200`}>
                    <Link
                        to="/category-page"
                        className="shadow-md rounded-[4px] lg:shadow-none hover:shadow-black dark:hover:shadow-white 
                     p-2 text-center w-full lg:w-auto text-slate-900 dark:text-white"
                    >
                        Categories
                    </Link>

                    <SearchBar />

                    <Link
                        to="/mentor-page"
                        className="shadow-md rounded-[4px] lg:shadow-none hover:shadow-black dark:hover:shadow-white 
                     p-2 text-center w-full lg:w-auto text-slate-900 dark:text-white"
                    >
                        Teach On Byway
                    </Link>

                    <div className="flex w-full lg:w-auto flex-col lg:flex-row gap-6 items-center">
                        {isAuthenticated && (
                            <Button
                                btnText={<Heart fill={isFavorited ? "currentColor" : "none"} />}
                                btnStyle="text-[#334155] dark:text-white hover:scale-105"
                                onClick={toggleFavorite}
                            />
                        )}

                        <Link
                            to="/shopping-cart"
                            className="shadow-md rounded-[4px] lg:shadow-none hover:shadow-black dark:hover:shadow-white 
                       p-2 text-center w-full lg:w-auto"
                        >
                            <ShoppingCart className="hover:scale-105 m-auto text-slate-900 dark:text-white" />
                        </Link>

                        {isAuthenticated ? <UserMenu /> : <AuthButtons />}

                        {/* Theme toggle button */}
                        <Button
                            btnText={isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            btnStyle="text-[#334155] dark:text-white hover:scale-105 p-2"
                            onClick={toggleDarkMode}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;