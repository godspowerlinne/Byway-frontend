import React from "react";
import Button from "./reusable-components/Button";
import CTA_female from "/CTA_female.png";
import CTA_male from "/CTA_male.png";

const Intrusctors = (CallToAction) => {
    return (
        <div
            className={`${CallToAction.displayStyle}  flex flex-col gap-4 justify-between items-center`}
        >
            {/* Image of Instructor */}
            <div className="max-w-[400px]">
                <img src={CallToAction.img} alt={CallToAction.alt} className="w-auto h-fit object-cover" />
            </div>
            {/*  Text content */}
            <div className="flex max-w-[540px] flex-col gap-4">
                <h2>{CallToAction.title}</h2>
                <p>{CallToAction.paragraph}</p>
                <Button btnText={CallToAction.btnText} btnStyle="bg-[#020617] dark:bg-[#350606] rounded-[8px] py-[10px] max-w-[238px] hover:bg-[#111d5e] dark:hover:bg-[#2d29bf] text-white" />
            </div>
        </div>
    );
};
const CTA = () => {
    return (
        <div className="flex flex-col gap-8">
            <Intrusctors
                displayStyle="md:flex-row"
                img={CTA_female}
                alt="Instructor"
                title="Become an Instructor"
                paragraph="Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love."
                btnText="Start Your Instructor Journey"
            />
            <Intrusctors
                displayStyle={"md:flex-row-reverse"}
                img={CTA_male}
                alt="Instructor"
                title="Transform your life through education"
                paragraph="Learners around the world are launching new careers, advancing in their fields, and enriching their lives."
                btnText="Checkout Courses"
            />
        </div>
    );
};

export default CTA;
