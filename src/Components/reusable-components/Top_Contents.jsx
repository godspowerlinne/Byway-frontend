import React from 'react'

const Top_Contents = (Content) => {
    return (
        <div className="border-[1px] border-[#E2E8F0] dark:border-[#867CB8] p-5 flex flex-col gap-4 rounded-md justify-center items-center min-h-[224px] w-full m-auto lg:max-w-[315px] cursor-pointer  hover:bg-[#DBF4FA] dark:hover:bg-[#282e2f] hover:scale-105 duration-300  ">
            <img src={Content.img} alt={Content.title} className={`${Content.imgStyle}`} />
            <h3 className={`${Content.titleStyle} font-[600]`}>{Content.title}</h3>
            <p className={`${Content.paraStyle} text-[#334155] dark:text-[#bcc3cf]`}>
                {Content.paragraph}
            </p>
            {Content.description}
        </div>
    );
};

export default Top_Contents