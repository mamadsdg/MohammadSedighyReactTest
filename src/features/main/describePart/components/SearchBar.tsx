// import * as React from "react";
import logo from '@assets/svgs/logo.svg'
import search from '@assets/svgs/search.svg'

export default function SearchBar(){
    return (
        <>
            <div className="flex items-center gap-2 cursor-pointer border-1 rounded-lg p-2 w-[20rem] bg-[#f0f2fe]">
{/*                <input
                    className="h-[40px]"
                    type="text"
                    placeholder='جستجو در ایرانیکارت'
                />*/}
                <img src={search} alt="" className='w-5'/>
                <div className='font-bold'>جستجو در </div>
                <img src={logo} alt="" className='w-[80px]'/>
            </div>
        </>
    )
}