import React, { useState } from "react";
import Byway from "/Byway_logo.svg";
import { Link } from "react-router-dom";
import { Bell, Heart, Menu, Search, ShoppingCart, X, } from "lucide-react";
import Button from "./reusable-components/Button";

const Navbar = () => {
  // Mobile Menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    showMobileMenu();
  };
  // Show mobileMenu
  const showMobileMenu = () => {
    const menu = document.getElementById("menu");
  };
  // Favorite
  const [isFavorited, setIsFavorited] = useState(false);
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  // Authentication  (User Login/Logout)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Change Theme 
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <nav className=" items-center pt-3 h-[80px] px-[28px] w-full fixed bg-white lg:px-14 shadow-md mb-24">
      <Link to="/" className="z-30">
        <img src={Byway} alt="Byway logo" className="w-[100px] h-[50px]" />
      </Link>
      <div className="flex flex-col lg:flex-row lg:h-[50px] w-fit ml-auto gap-4 lg:w-[91%]  items-end justify-center lg:-translate-y-[50px] -translate-y-[30px]">
        <Button
          btnText={isMobileMenuOpen ? <X className="scale-125" /> : <Menu className="scale-125" />}
          onClick={toggleMobileMenu}
          btnStyle="text-[#334155] lg:hidden w-fit lg:hidden "
        />
        <div
          className={`${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row lg:flex items-center lg:h-full bg-slate-300 lg:bg-transparent justify-between gap-4 w-fit p-8 lg:p-0 lg:w-[100%]`}
          id="menu"
        >
          <Link to="/category-page" className="shadow-md rounded-[4px]  lg:shadow-none hover:shadow-black p-2 text-center w-full lg:w-auto">Categories</Link>
          <div className="lg:w-[620px] h-[40px] border border-[#334155] rounded-md relative">
            <input
              type="search"
              placeholder="Search courses"
              className="w-full h-full rounded-md pl-10 placeholder:text-[#334155] focus:outline-none"
            />
            <Search className="absolute left-[10px] top-[50%] -translate-y-[50%] text-[#334155] hover:scale-105" />
          </div>
          <Link to="/mentor-page" className="shadow-md rounded-[4px]  lg:shadow-none hover:shadow-black p-2 text-center w-full  lg:w-auto">Teach On Byway</Link>
          <div className=" flex   w-full lg:w-auto flex-col lg:flex-row gap-6 items-center">
            {isAuthenticated ? (
              <Button
                btnText={<Heart fill={isFavorited ? "currentColor" : "none"} />}
                btnStyle=" text-[#334155]  hover:scale-105"
                onClick={() => {
                  toggleFavorite();
                }}
              />
            ) : null}
            <Link to="/shopping-cart" className="shadow-md rounded-[4px]  lg:shadow-none hover:shadow-black p-2 text-center w-full  lg:w-auto">
              <ShoppingCart className=" hover:scale-105 m-auto" />
            </Link>
            {isAuthenticated ? (
              <div className="flex w-full  lg:w-auto flex-col lg:flex-row gap-6">
                <Button
                  btnText={<Bell />}
                  btnStyle="text-[#334155] hover:scale-105"
                />
                <Link to="/profile">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                    alt="user-male-circle"
                  />
                </Link>
              </div>
            ) : (
              <div className="flex  lg:w-auto w-full flex-col lg:flex-row gap-6">
                <Button
                  btnText="Login"
                  btnStyle="text-[#334155]  rounded-[4px] hover:scale-105 lg:w-[61px] h-[40px] border border-[#334155] hover:shadow-md p-2 text-center w-full"
                />
                <Button
                  btnText="Sign Up"
                  btnStyle="bg-[#334155]  rounded-[4px] text-white hover:scale-105 lg:w-[73px] h-[40px] hover:shadow-md py-2 text-center w-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
