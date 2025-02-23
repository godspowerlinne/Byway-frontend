import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Dashboard from '../Components/Dashboard'

const DashboardPage = () => {
    return (
        <div>
            <Navbar authenticated={true} />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default DashboardPage