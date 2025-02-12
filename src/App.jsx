import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// Component imports 

// Page imports 
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import HomePage from './Pages/HomePage';
import ShoppingCartPage from './Pages/ShoppingCartPage';
import CoursePage from './Pages/CoursePage';
import CategoryPage from './Pages/CategoryPage';
import CheckOutPage from './Pages/CheckOutPage';
import OrderCompletePage from './Pages/OrderCompletePage';
import MentorPage from './Pages/MentorPage';
export default function App() {
  return (
    <div className="min-h-screen text-[#334155] font-Inter  overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Auth User's Page  */}
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/category-page" element={<CategoryPage />} />
          <Route path="/checkout-page" element={<CheckOutPage />} />
          <Route path="/order-completed" element={<OrderCompletePage />} />
          <Route path="/mentor-page" element={<MentorPage />} />
        </Routes>
      </Router>
    </div>
  )
}