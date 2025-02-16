import React from "react";
import RonaldRichards from "/RonaldRichards.svg"
import Top_Contents from "./reusable-components/Top_Contents";
import Top_Link from "./reusable-components/Top_Link";
import Rating from "./reusable-components/Rating";
import { MdStar } from "react-icons/md";

const TopInstructors = () => {
    const Description = () => {
        return (
            <Rating
                icons={
                    <div className="text-yellow-500 text-center flex text-[16px] font-[600] w-fit">
                        <MdStar />
                        <span className="text-[#0F172A] dark:text-[#d1d5db] text-[12px]">4.9</span>
                    </div>
                }
                text={
                    <small>2400 Students</small>
                }
            />
        );
    };
    return (
        <div className="my-12">
            <Top_Link name="Top Instructors" />
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                <Top_Contents
                    img={RonaldRichards}
                    title="Ronald Richards"
                    paragraph="UI/UX Designer"
                    description={<Description />}
                    titleStyle="text-[16px] w-full lg:w-auto"
                    paraStyle="text-[12px] w-full lg:w-auto"
                    imgStyle="w-full"
                />
                <Top_Contents
                    img={RonaldRichards}
                    title="Ronald Richards"
                    paragraph="UI/UX Designer"
                    description={<Description />}
                    titleStyle="text-[16px] w-full lg:w-auto"
                    paraStyle="text-[12px] w-full lg:w-auto"
                    imgStyle="w-full"
                />
                <Top_Contents
                    img={RonaldRichards}
                    title="Ronald Richards"
                    paragraph="UI/UX Designer"
                    description={<Description />}
                    titleStyle="text-[16px] w-full lg:w-auto"
                    paraStyle="text-[12px] w-full lg:w-auto"
                    imgStyle="w-full"
                />
                <Top_Contents
                    img={RonaldRichards}
                    title="Ronald Richards"
                    paragraph="UI/UX Designer"
                    description={<Description />}
                    titleStyle="text-[16px] w-full lg:w-auto"
                    paraStyle="text-[12px] w-full lg:w-auto"
                    imgStyle="w-full"
                />
                <Top_Contents
                    img={RonaldRichards}
                    title="Ronald Richards"
                    paragraph="UI/UX Designer"
                    description={<Description />}
                    titleStyle="text-[16px] w-full lg:w-auto"
                    paraStyle="text-[12px] w-full lg:w-auto"
                    imgStyle="w-full"
                />
            </div>
        </div>
    );
};

export default TopInstructors;
