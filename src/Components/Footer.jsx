import React from 'react';
import Byway from '/Footer_logo.svg';
import Socials from '/socials.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='p-8 py-14 lg:px-12 xl:px-14 2xl:px-16 flex flex-col-reverse  lg:flex-row gap-12 justify-between items-start h-fit bg-[#1E293B] text-[#CBD5E1]'>
        <div className='text-[14px] font-[400] 2xl:text-[16px] md:w-[416px]'>
            <Link to = '/'><img  className='mb-4' src={Byway} alt="Byway logo" /></Link>
            <p>Empowering learners through accessible and engaging online education.</p>
            <p>Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences. </p>
        </div>
        <div>
            <h3  className='text-[#F1F5F9] font-[600] text-[18px] mb-4'>Company</h3>
            <ul>
                <li className='hover:underline underline-offset-2'><Link to = '#'>Contact Us</Link></li>
                <li className='hover:underline underline-offset-2'><Link to = '#'>Latest Articles</Link></li>
                <li className='hover:underline underline-offset-2'><Link to = '#'>FAQ</Link></li>
            </ul>
        </div>
        <div>
        <h3  className='text-[#F1F5F9] font-[600] text-[18px] mb-4'>Programs</h3>
            <ul>
                <li className='hover:underline underline-offset-2'><Link to = '#'>Art & Design</Link></li>
                <li className='hover:underline underline-offset-2'><Link to = '#'>Business</Link></li>
                <li className='hover:underline underline-offset-2'><Link to = '#'>IT & Software</Link></li>
                <li className='hover:underline underline-offset-2'><Link to = '#'>Languages</Link></li>
                <li className='hover:underline underline-offset-2'><Link to = '#'>Programming</Link></li>
            </ul>
        </div>
        <div>
        <h3  className='text-[#F1F5F9] font-[600] text-[18px] mb-4'>Contact Us</h3>
            <ul>
                <li className='hover:underline underline-offset-2'>Address: 123 Main Street, Anytown, CA 12345</li>
                <li className='hover:underline underline-offset-2'>Tel: +(123) 456-7890</li>
                <li className='hover:underline underline-offset-2'>Mail: bywayedu@webkul.in</li>
            </ul>
            <div className='mt-6'>
                <img src={Socials} alt="" />
            </div>
        </div>
    </footer>
  )
}

export default Footer