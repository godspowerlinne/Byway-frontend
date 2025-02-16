import React, { useContext, useState } from "react";
import Byway from "/Byway_logo.svg";
import DarkByway from "/Footer_logo.svg";
import { Link } from "react-router-dom";
import {
  Bell,
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingCart,
  SunDim,
  X,
} from "lucide-react";
import Button from "./reusable-components/Button";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle favorite
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  // Search bar component
  const SearchBar = () => {
    return (
      <div className="lg:w-[620px]  w-full h-[50px] lg:h-[40px] border border-[#334155] dark:border-[#f8fafc]  rounded-md relative">
        <input
          type="search"
          placeholder="Search courses"
          className="w-full h-full rounded-md pl-10 pr-4 placeholder:text-[#334155] dark:placeholder:text-[#f8fafc] bg-white  dark:bg-[#9a9] lg:dark:bg-inherit focus:outline-none focus:border-[#111d5e] dark:focus:border-[#f00] focus:border "
        />
        <Search className="absolute left-[10px] top-[50%] -translate-y-[50%] text-[#334155] dark:text-[#f8fafc] hover:scale-105" />
      </div>
    );
  };

  // Unauthenticated users component
  const UnauthenticatedUser = () => {
    return (
      <div className="flex lg:w-auto w-full flex-col lg:flex-row gap-6">
        <Button
          btnText="Login"
          btnStyle="text-[#334155] hover:bg-[#334155]  dark:text-[#f8fafc] hover:text-[#f8fafc] rounded-[2px] lg:w-[61px] h-[50px] text-[19px] lg:text-[16px] lg:h-[40px] border border-[#334155] dark:border-[#f8fafc] hover:shadow-md p-2 text-center w-full"
        />
        <Button
          btnText="Sign Up"
          btnStyle="bg-[#334155] dark:bg-[#f8fafc] rounded-[2px] hover:bg-white dark:hover:bg-[#ddd] text-white dark:text-black hover:text-[#334155] lg:w-[73px] h-[50px] text-[19px] lg:text-[16px] lg:h-[40px] border border-[#334155] dark:border-[#f8fafc] hover:shadow-md py-2 text-center w-full"
        />
      </div>
    );
  };

  // Authenticated users component
  const AuthenticatedUser = () => {
    return (
      <div className="flex w-full lg:w-auto flex-col lg:flex-row gap-6">
        <Button
          btnText={<Bell />}
          btnStyle="text-[#334155] dark:text-[#f8fafc] hover:scale-105"
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
  };

  return (
    <header className="h-[80px]">
      <nav className=" items-center pt-3 z-30 h-[80px] px-[28px] w-full max-w-[1444px]  fixed bg-white dark:bg-[#0f172a] lg:px-14 shadow-md dark:shadow-[#1e293b] mb-24">
        <Link to="/" className="z-30">
          <img
            src={Byway}
            alt="Byway logo"
            className="w-[100px] h-[50px] block dark:hidden"
          />
          <img
            src={DarkByway}
            alt="Byway logo"
            className="w-[100px] h-[50px] hidden dark:block"
          />
        </Link>
        <button
          onClick={toggleTheme}
          className="p-1 rounded-full bg-gray-700 hover:bg-gray-800 dark:bg-gray-500 absolute top-0 left-[65.5%] z-50 translate-y-[70%] "
        >
          {isDarkMode ? (
            <SunDim className="scale-125 text-yellow-300 hover:text-yellow-500" />
          ) : (
            <Moon className="scale-125 text-gray-400" />
          )}
        </button>
        <div className="flex flex-col lg:flex-row lg:h-[50px] w-fit ml-auto gap-4 lg:w-[91%]  items-end justify-center lg:-translate-y-[50px] -translate-y-[40px]">
          {/* Mobile menu toggle  */}
          <Button
            btnText={
              isMobileMenuOpen ? (
                <X className="scale-125 w-[35px] h-[35px]" />
              ) : (
                <Menu className="scale-125  w-[35px] h-[35px]" />
              )
            }
            onClick={toggleMobileMenu}
            btnStyle="text-[#334155] dark:text-[#f8fafc] lg:hidden w-fit lg:hidden "
          />

          {/* Main menu items  */}
          <div
            className={`${isMobileMenuOpen ? "flex" : "hidden"
              } flex-col lg:flex-row lg:flex items-center lg:h-full bg-slate-300 dark:bg-[#564848] rounded lg:rounded-none hover:shadow-2xl lg:hover:shadow-none lg:dark:bg-transparent lg:bg-transparent justify-between gap-4 w-[80vw] h-[80vh]  p-8 py-16 lg:p-0 lg:w-[100%]`}
            id="menu"
          >
            {/* Link to Categories page  */}
            <Link
              to="/category-page"
              className="rounded-[4px] shadow-md lg:shadow-none hover:shadow-slate-400 dark:hover:shadow-[#1e293b] hover:text-[#3B82F6] dark:hover:text-[#109191] text-[19px] lg:text-[16px]  p-4 lg:p-2 text-center w-full lg:w-auto"
            >
              Categories
            </Link>

            {/* Search bar component */}
            <SearchBar />

            {/* Link to Mentors page  */}
            <Link
              to="/mentor-page"
              className="rounded-[4px] shadow-md lg:shadow-none hover:shadow-slate-400 dark:hover:shadow-[#1e293b] text-[19px] lg:text-[16px] hover:text-[#3B82F6] dark:hover:text-[#109191]   p-4 lg:p-2  text-center w-full  lg:w-auto"
            >
              Teach On Byway
            </Link>

            {/* Favorite List for auth users */}
            <div className=" flex   w-full lg:w-auto flex-col lg:flex-row gap-6 items-center">
              {isAuthenticated && (
                <Button
                  btnText={
                    <Heart fill={isFavorited ? "currentColor" : "none"} />
                  }
                  btnStyle=" text-[#334155] dark:text-[#f8fafc]  hover:scale-105"
                  onClick={toggleFavorite}
                />
              )}

              {/* Link to Shopping Cart */}
              <Link
                to="/shopping-cart"
                className="shadow-md rounded-[4px] text-[19px] lg:text-[16px]  lg:shadow-none hover:shadow-slate-400 dark:hover:shadow-[#1e293b] hover:text-[#3B82F6] dark:hover:text-[#109191]  p-4 lg:p-2  text-center w-full  lg:w-auto"
              >
                <ShoppingCart className=" hover:scale-105 m-auto" />
              </Link>
              {/* User profile for auth users and unauthenticated users with a link to sign up or login */}
              {isAuthenticated ? (
                <AuthenticatedUser />
              ) : (
                <UnauthenticatedUser />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
