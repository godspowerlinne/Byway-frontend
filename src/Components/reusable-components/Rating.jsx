import React from 'react'

const Rating = (rate) => {
    return (
        <div className='w-full'>
            <div className='w-full  flex justify-between'>
                {rate.icons}
                {rate.text}
            </div>
            {rate.described}
            {rate.amount}
        </div>
    );
};

export default Rating;
