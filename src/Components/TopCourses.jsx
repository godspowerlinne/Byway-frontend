import React from "react";
import BeginnersGTD from "/BeginnersGTD.svg";
import Top_Contents from "./reusable-components/Top_Contents";
import Top_Link from "./reusable-components/Top_Link";
import Rating from "./reusable-components/Rating";
import { MdStar } from "react-icons/md";

const TopCourses = () => {
    const Description = () => {
        return (
            <Rating
                icons={
                    <div className="text-yellow-500 text-center flex text-[16px] font-[600] w-fit">
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                    </div>
                }
                text={
                    <small>(1200 Ratings)</small>
                }
                described={<p className="text-[12px] my-4 md:text-[14px] lg:text-[12px] text-[#334155] dark:text-[#d1d5db]">22 Total Hours. 155 Lectures. Beginner</p>}
                amount={<sapn>$149.9</sapn>}
            />
        );
    };
    return (
        <div className="my-12">
            <Top_Link name="Top Courses" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Top_Contents
                    img={BeginnersGTD}
                    title="Beginner’s Guide to Design"
                    paragraph="By Ronald Richards"
                    description={<Description />}
                    titleStyle="text-[16px] w-full"
                    paraStyle="text-[12px] w-full"
                    imgStyle="w-full"
                />
                <Top_Contents
                    img={BeginnersGTD}
                    title="Beginner’s Guide to Design"
                    paragraph="By Ronald Richards"
                    description={<Description />}
                    titleStyle="text-[16px] w-full"
                    paraStyle="text-[12px] w-full"
                    imgStyle="w-full"
                />
                <Top_Contents
                    img={BeginnersGTD}
                    title="Beginner’s Guide to Design"
                    paragraph="By Ronald Richards"
                    description={<Description />}
                    titleStyle="text-[16px] w-full"
                    paraStyle="text-[12px] w-full"
                    imgStyle="w-full"
                />
                <Top_Contents
                    img={BeginnersGTD}
                    title="Beginner’s Guide to Design"
                    paragraph="By Ronald Richards"
                    description={<Description />}
                    titleStyle="text-[16px] w-full"
                    paraStyle="text-[12px] w-full"
                    imgStyle="w-full"
                />
            </div>
        </div>
    );
};

export default TopCourses;
