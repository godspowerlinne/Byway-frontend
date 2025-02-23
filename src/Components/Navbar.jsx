import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingCart,
  SunDim,
  UserIcon,
  X,
  BookOpen,
  ChevronDown,
  Settings,
  LogOut,
  Bell as BellIcon,
} from "lucide-react";
import Button from "./reusable-components/Button";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = ({ authenticated = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New course available in your wishlist!", isNew: true },
    { id: 2, text: "Your course progress has been updated", isNew: true },
    { id: 3, text: "Weekend special: 20% off on all courses!", isNew: false },
  ]);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const SearchBar = () => {
    const [searchFocused, setSearchFocused] = useState(false);
    const [recentSearches] = useState([
      "JavaScript Basics",
      "React Development",
      "Python for Beginners"
    ]);

    return (
      <div className="lg:w-[620px] w-full relative">
        <div className="relative">
          <input
            type="search"
            placeholder="Search courses"
            onFocus={() => setSearchFocused(true)}
            className="w-full h-[50px] lg:h-[40px] rounded-md pl-10 pr-4 
              border border-[#334155] dark:border-[#f8fafc]
              placeholder:text-[#334155] dark:placeholder:text-[#f8fafc]
              bg-white dark:bg-inherit
              focus:outline-none focus:border-[#111d5e] dark:focus:border-[#f00]
              focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
          />
          <Search className="absolute left-[10px] top-1/2 -translate-y-1/2 
            text-[#334155] dark:text-[#f8fafc] hover:scale-105" />
        </div>

        {searchFocused && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-[#1e293b] 
            rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Recent Searches
              </h3>
              <ul className="space-y-2">
                {recentSearches.map((search, index) => (
                  <li key={index} className="flex items-center space-x-2 cursor-pointer
                    hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded">
                    <BookOpen className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {search}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  const NotificationPanel = () => (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-[#1e293b] 
      rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-900 dark:text-gray-100">Notifications</h3>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Mark all as read
          </button>
        </div>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className={`flex items-start space-x-3 p-2 rounded
              ${notification.isNew ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
              <div className="flex-shrink-0">
                <BellIcon className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  {notification.text}
                </p>
                {notification.isNew && (
                  <span className="inline-block mt-1 text-xs text-blue-600 dark:text-blue-400">
                    New
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProfileMenu = () => (
    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-[#1e293b] 
      rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
      <div className="p-2">
        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">John Doe</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
        </div>
        <Link to="/profile" className="flex items-center space-x-2 px-4 py-2 text-sm
          text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <UserIcon className="w-4 h-4" />
          <span>Profile</span>
        </Link>
        <Link to="/settings" className="flex items-center space-x-2 px-4 py-2 text-sm
          text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </Link>
        <button className="w-full flex items-center space-x-2 px-4 py-2 text-sm
          text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  const AuthenticatedUser = () => {
    return (
      <div className="flex w-full lg:w-auto flex-col lg:flex-row gap-6 items-center">
        <div className="relative" ref={notificationRef}>
          <Button
            btnText={
              <div className="relative">
                <Bell className="w-6 h-6" />
                {notifications.some(n => n.isNew) && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </div>
            }
            btnStyle="text-[#334155] dark:text-[#f8fafc] hover:scale-105"
            onClick={() => setShowNotifications(!showNotifications)}
          />
          {showNotifications && <NotificationPanel />}
        </div>
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <UserIcon className="w-10 h-10 text-[#334155] dark:text-[#f8fafc] 
              hover:scale-105 bg-blue-200 dark:bg-blue-950 p-2 rounded-full" />
            <ChevronDown className={`w-4 h-4 transition-transform duration-200
              ${showProfileMenu ? 'rotate-180' : ''}`} />
          </button>
          {showProfileMenu && <ProfileMenu />}
        </div>
      </div>
    );
  };

  const UnauthenticatedUser = () => {
    return (
      <div className="flex lg:w-auto w-full flex-col lg:flex-row gap-6">
        <Link to="/login">
          <Button
            btnText="Login"
            btnStyle="text-[#334155] hover:bg-[#334155] dark:text-[#f8fafc] 
              hover:text-[#f8fafc] rounded-md lg:w-[61px] h-[50px] 
              text-[19px] lg:text-[16px] lg:h-[40px] border border-[#334155] 
              dark:border-[#f8fafc] hover:shadow-md p-2 text-center w-full
              transition-all duration-200 ease-in-out"
          />
        </Link>
        <Link to="/signup">
          <Button
            btnText="Sign Up"
            btnStyle="bg-[#334155] dark:bg-[#f8fafc] rounded-md 
              hover:bg-opacity-90 dark:hover:bg-opacity-90
              text-white dark:text-black lg:w-[73px] h-[50px] 
              text-[19px] lg:text-[16px] lg:h-[40px] border 
              border-[#334155] dark:border-[#f8fafc] hover:shadow-md 
              py-2 text-center w-full transition-all duration-200 ease-in-out"
          />
        </Link>
      </div>
    );
  };

  return (
    <header className="h-[80px]">
      <nav className="fixed w-full max-w-[1444px] h-[80px] z-30 bg-white dark:bg-[#0f172a] 
        shadow-md dark:shadow-[#1e293b] px-[28px] lg:px-14 pt-3
        transition-colors duration-200">
        <div className="flex items-center gap-5">
          <Link to="/" className="z-30 transition-transform hover:scale-105 duration-200">
            <img
              src="/Byway_logo.svg"
              alt="Byway logo"
              className="w-[100px] h-[50px] block dark:hidden"
            />
            <img
              src="/Footer_logo.svg"
              alt="Byway logo"
              className="w-[100px] h-[50px] hidden dark:block"
            />
          </Link>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-800 
              dark:bg-gray-500 z-50 transition-all duration-200 scale-[0.8] hover:scale-75"
          >
            {isDarkMode ? (
              <SunDim className="w-5 h-5 text-yellow-300 hover:text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:h-[50px] gap-4 ml-auto w-fit items-end justify-center 
          -translate-y-[40px] lg:-translate-y-[50px]">
          <Button
            btnText={
              isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )
            }
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            btnStyle="text-[#334155] dark:text-[#f8fafc] lg:hidden w-fit 
              hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2
              transition-all duration-200"
          />

          <div
            className={`${isMobileMenuOpen ? 'flex' : 'hidden'
              } flex-col lg:flex-row lg:flex items-center lg:h-full 
              bg-slate-300 dark:bg-[#564848] lg:dark:bg-transparent lg:bg-transparent 
              rounded-lg lg:rounded-none shadow-2xl lg:shadow-none
              gap-4 w-[80vw] h-[80vh] lg:w-full p-8 py-16 lg:p-0
              transition-all duration-300`}
          >
            <Link
              to="/category-page"
              className="rounded-md text-[19px] lg:text-[16px] p-4 lg:p-2 
                text-center w-full lg:w-auto hover:text-blue-600 
                dark:hover:text-blue-400 transition-all duration-200
                hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Categories
            </Link>

            <SearchBar />

            <Link
              to="/mentor-page"
              className="rounded-md text-[19px] lg:text-[16px] p-4 lg:p-2 
                text-center w-fit lg:w-auto hover:text-blue-600 
                dark:hover:text-blue-400 transition-all duration-200
                hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Teach On Byway
            </Link>

            <div className="flex w-full lg:w-auto flex-col lg:flex-row gap-6 items-center">
              {authenticated && (
                <Button
                  btnText={<Heart fill={isFavorited ? "currentColor" : "none"} />}
                  btnStyle="text-[#334155] dark:text-[#f8fafc] hover:scale-105
                    transition-transform duration-200"
                  onClick={() => setIsFavorited(!isFavorited)}
                />
              )}

              <Link
                to="/shopping-cart"
                className="rounded-md text-[19px] lg:text-[16px] p-4 lg:p-2
              text-center w-fit lg:w-auto relative group"
              >
                <ShoppingCart className="hover:scale-105 m-auto transition-transform duration-200" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white 
                  text-xs rounded-full w-5 h-5 flex items-center justify-center
                  group-hover:scale-110 transition-transform duration-200">
                  3
                </span>
              </Link>

              {authenticated ? <AuthenticatedUser /> : <UnauthenticatedUser />}
            </div>
          </div>
        </div>
      </nav>

      {/* Dropdown Backdrop */}
      {
        (showProfileMenu || showNotifications) && (
          <div
            className="fixed inset-0 bg-black bg-opacity-20 dark:bg-opacity-50 z-40"
            onClick={() => {
              setShowProfileMenu(false);
              setShowNotifications(false);
            }}
          />
        )
      }
    </header >
  );
};

export default Navbar;