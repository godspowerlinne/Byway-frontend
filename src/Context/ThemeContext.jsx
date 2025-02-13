import { createContext, useEffect, useState} from "react";

// Create a reservoir where we can access the functionality of the context. This is the top-level component that will wrap our entire application 
export const ThemeContext = createContext();

// Provider component that will be used to provide the theme context to our app.

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(()=>{
        return localStorage.getItem("theme") === "dark";
    }); // Get the current theme, if its dark returns true if not returns false.

    // Function to change the theme
    const toggleTheme = () => {
        setIsDarkMode((prevMode)=>{
            const newTheme = !prevMode
            localStorage.setItem("theme", newTheme? "dark" : "light");
            return newTheme;
        }); 
    };

    // Apply theme to document element 
    useEffect(()=>{
        document.documentElement.className = isDarkMode ? "dark" : "light";
    }, [isDarkMode]); 

    // Render the Provider component and pass down the theme state and the toggleTheme function as props
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;