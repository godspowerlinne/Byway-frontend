import React, { useState, useEffect } from "react";
import Button from "../Components/reusable-components/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import byway_header_1 from "/byway_header_1.png";
import byway_header_3 from "/byway_header_2.png";
import byway_header_2 from "/byway_header_3.png";
import byway_header_4 from "/byway_header_4.png";

const HomeHero = () => {
  // Hero Section Text Component
  const HeroSectionText = ({ paragraphText }) => {
    return (
      <div className="HeroSectionText flex flex-col max-w-[592px] justify-center gap-5">
        <h1 className="text-[#0F172A] dark:text-[#dad1db] text-[25px] lg:text-[40px] font-[700] max-w-[483px]">
          Unlock Your Potential with Byway
        </h1>
        <p className="text-[#64748B] dark:text-[#d1d5db]">{paragraphText}</p>
        <Button
          btnText="Start your instructor journey"
          btnStyle="bg-[#2563EB] dark:bg-[#350606] rounded-[8px] py-[10px] max-w-[238px] hover:bg-black dark:hover:bg-[#2d29bf] text-white"
        />
      </div>
    );
  };

  const slides = [
    {
      text: (
        <HeroSectionText paragraphText="Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience." />
      ),
      img: byway_header_1,
      alt: "Byway Header 1",
    },
    {
      text: (
        <HeroSectionText paragraphText="Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience." />
      ),
      img: byway_header_2,
      alt: "Byway Header 2",
    },
    {
      text: (
        <HeroSectionText paragraphText="Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success." />
      ),
      img: byway_header_3,
      alt: "Byway Header 3",
    },
    {
      text: (
        <HeroSectionText paragraphText="Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience. " />
      ),
      img: byway_header_4,
      alt: "Byway Header 4",
    },
  ];

  const HeroSectionContent = ({ heroText, heroImg, alt }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full lg:h-[600px] flex-shrink-0">
        {heroText}
        <img
          className="ml-auto object-cover m-auto w-[90%]"
          src={heroImg}
          alt={alt}
        />
      </div>
    );
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="outline-none container mx-auto  bg-white dark:bg-gray-900 px-4 py-12"
        >
          <HeroSectionContent
            heroText={slide.text}
            heroImg={slide.img}
            alt={slide.alt}
          />
        </div>
      ))}
    </Slider>
  );
};

export default HomeHero;
