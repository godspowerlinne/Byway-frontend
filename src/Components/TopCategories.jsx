import React from "react";
import { Link } from "react-router-dom";
import Development from "/Development.svg";
import Astrology from "/Astrology.svg";
import Marketing from "/Marketing.svg";
import Physics from "/Physics.svg";
import Top_Link from "./reusable-components/Top_Link";
import Top_Contents from "./reusable-components/Top_Contents";

const TopCategories = () => {
    return (
        <div>
            <Top_Link name="Top Categories" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <Top_Contents
                    img={Astrology}
                    title="Astrology"
                    paragraph="11 Courses"
                    titleStyle="text-[20px]"
                />
                <Top_Contents
                    img={Development}
                    title="Development"
                    paragraph="12 Courses"
                    titleStyle="text-[20px]"
                />
                <Top_Contents
                    img={Marketing}
                    title="Marketing"
                    paragraph="12 Courses"
                    titleStyle="text-[20px]"
                />
                <Top_Contents
                    img={Physics}
                    title="Physics"
                    paragraph="14 Courses"
                    titleStyle="text-[20px]"
                />
            </div>
        </div>
    );
};

export default TopCategories;
