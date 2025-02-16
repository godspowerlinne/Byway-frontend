import React from "react";
import { Link } from "react-router-dom";
import Button from "./reusable-components/Button";
import Development from "/Development.svg";
import Astrology from "/Astrology.svg";
import Marketing from "/Marketing.svg";
import Physics from "/Physics.svg";
import Top_Link from "./reusable-components/Top_Link";

const Category = ({ CategoryImg, CategoryName, CategoryDescription }) => {
    return (
        <div className="border-[1px] border-[#E2E8F0] py-6 flex flex-col gap-4 rounded-md justify-center items-center h-[224px] w-full md:w-[60%] m-auto lg:w-[315px]  hover:bg-[#DBF4FA] dark:hover:bg-[#282e2f] hover:scale-105 duration-300  ">
            <img src={CategoryImg} alt={CategoryName} />
            <h3 className="text-[20px] font-[600]">{CategoryName}</h3>
            <p className="text-[#334155] dark:text-[#bcc3cf]">
                {CategoryDescription}
            </p>
        </div>
    );
};

const TopCategories = () => {
    return (
        <div>
            <Top_Link name="Top Categories" />
            <div className="flex flex-col lg:flex-row gap-8">
                <Category
                    CategoryImg={Astrology}
                    CategoryName="Astrology"
                    CategoryDescription="11 Courses"
                />
                <Category
                    CategoryImg={Development}
                    CategoryName="Development"
                    CategoryDescription="12 Courses"
                />
                <Category
                    CategoryImg={Marketing}
                    CategoryName="Marketing"
                    CategoryDescription="12 Courses"
                />
                <Category
                    CategoryImg={Physics}
                    CategoryName="Physics"
                    CategoryDescription="14 Courses"
                />
            </div>
        </div>
    );
};

export default TopCategories;
