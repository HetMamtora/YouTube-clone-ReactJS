import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky'>
        <div className='flex gap-8 items-center text-2xl text-white'>
            <div>
                <GiHamburgerMenu />
            </div>
            <div className='flex gap-2 items-center justify-center'>
                <FaYoutube className='text-4xl text-red-600'/>
                <span className='text-2xl font-medium'>YouTube</span>
            </div>
            <div>
                <form>
                    <div>
                        <div>
                            <input type='text' placeholder='Search' />
                            <CiSearch />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Navbar