import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Top_Link = (Top) => {
    return (
        <div className="flex justify-between mb-5 items-center">
            <h2 className="text-[24px] font-[600]">{Top.name}</h2>
            <Button
                btnText={
                    <Link to="#" className="text-[14px] text-[#3B82F6]">
                        See all
                    </Link>
                }
                btnStyle={"w-[94px] h-[48px] rounded-md"}
            />
        </div>
    )
}

export default Top_Link