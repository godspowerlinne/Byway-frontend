import React from "react";

const Statistics = (text) => {
    return (
        <>
            <div className="w-[192px] text-center h-[69px]">
                <h2 className="text-[32px] font-[600]">{text.content}</h2>
                <p className="text-[14px]">{text.description}</p>
            </div>
            <div className={`${text.hidden} h-[3px] lg:h-[53px] w-[80%] lg:w-[3px] bg-[#E2E8F0] dark:bg-[#867CB8]`}></div>
        </>
    );
};
const HomeStatistic = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-0  bg-[#F8FAFC] dark:bg-[#151515] gap-4 lg:h-[149px] my-12">
            <Statistics content="250+" description="Courses by our best mentors" />
            <Statistics content="250+" description="Courses by our best mentors" />
            <Statistics content="250+" description="Courses by our best mentors" />
            <Statistics content="250+" description="Courses by our best mentors" hidden={`hidden`} />
        </div>
    );
};

export default HomeStatistic;
