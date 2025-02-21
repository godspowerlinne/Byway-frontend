import React, { useRef } from 'react'
import janeDoe from '/janeDoe.svg'
import quotes from '/quotes.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './reusable-components/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews = () => {
    return (
        <div className='flex flex-col gap-4 max-w-[432px] p-6  rounded-2xl border-[1px] border-[#E2E8F0] dark:border-[#867CB8] hover:bg-[#DBF4FA] dark:hover:bg-[#282e2f] hover:scale-95 duration-300 bg-white dark:bg-[#3B82F61F]'>
            <div className="p-2">
                <img src={quotes} alt="Quote" />
            </div>
            <q>Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. </q>
            <div className='flex items-center gap-2'>
                <img src={janeDoe} className='rounded-full' alt="A LAdy" />
                <div>
                    <h5 className='text-[18px] font-[600]'>Jane Doe</h5>
                    <small className='text-[14px] font-[400]'>Designer</small>
                </div>
            </div>
        </div>
    )
}


const CustomersReviews = () => {
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        infinite: true,
        speed: 500,
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='bg-[#F8FAFC]  dark:bg-[#0f172a] py-10'>
            <div className='flex items-center justify-between'>
                <h3 className='max-w-[308px] text-[19px] md:text-[24px] font-[600]'>What Our Customer Say About Us</h3>
                <div className="hidden lg:flex gap-4">
                    <Button btnText={<ChevronLeft />} onClick={previous} btnStyle={`w-[56px] h-[40px] flex text-white items-center justify-center rounded-md bg-[#D6BBfb] hover:bg-[#94A3B8] dark:hover:bg-[#D6BBfb] dark:bg-[#94A3B8]`} />
                    <Button btnText={<ChevronRight />} onClick={next} btnStyle={`w-[56px] h-[40px] flex text-white items-center justify-center rounded-md bg-[#D6BBfb] hover:bg-[#94A3B8] dark:hover:bg-[#D6BBfb] dark:bg-[#94A3B8]`} />
                </div>
            </div>
            <Slider ref={sliderRef} {...settings} className='my-10'>
                <Reviews />
                <Reviews />
                <Reviews />
                <Reviews />
            </Slider>
        </div>
    );
};

export default CustomersReviews;