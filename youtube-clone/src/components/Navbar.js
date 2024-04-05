// import React from 'react'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaYoutube } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// import { FaMicrophone } from "react-icons/fa6";
// import { RiVideoAddLine } from "react-icons/ri";
// import { MdNotificationsNone } from "react-icons/md";

// const Navbar = () => {
//   return (
//     <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky text-white'>
//         <div className='flex gap-8 items-center text-2xl '>
//             <div>
//                 <GiHamburgerMenu />
//             </div>
//             <div className='flex gap-2 items-center justify-center'>
//                 <FaYoutube className='text-4xl text-red-600'/>
//                 <span className='text-2xl'>YouTube</span>
//             </div>
//             </div>
//             <div className='flex items-center justify-center gap-5'>
//                 <form>
//                     <div className='flex bg-zinc-900 items-center h-10 px-4 pr-2 rounded-3xl'>
//                         <div className='flex gap-5 items-center pr-5'>
//                             <input type='text' placeholder='Search' className='w-96 bg-zinc-900 focus:outline-none border-none'/>
//                         </div>
//                         <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-2xl'>
//                             <CiSearch className='text-xl'/>
//                         </button>
//                     </div>
//                 </form>
//                 <div className='text-xl p-3 bg-zinc-900 rounded-full'>
//                     <FaMicrophone />
//                 </div>
//                 </div>
//                 <div className='flex gap-8 items-center text-xl'>
//                     <RiVideoAddLine />
//                     <div className='relative'>
//                         <MdNotificationsNone />
//                         <span className='absolute bottom-2 left-4 text-xs bg-red-600 rounded-full px-1'> 9+</span>
//                     </div>
//                     <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
//                         alt='profile_logo' className='w-9 h-9 rounded-full ml-2'
                    
//                     />
//                 </div>
            
//     </div>
//   )
// }

// export default Navbar


import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaYoutube } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { FaMicrophone } from 'react-icons/fa';
import { RiVideoAddLine } from 'react-icons/ri';
import { MdNotificationsNone } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 sm:px-6 md:px-8 lg:px-10 h-14 items-center bg-[#212121] opacity-95 sticky text-white'>
      {/* Left Section */}
      <div className='flex gap-4 items-center text-lg md:text-xl'>
        <div>
          <GiHamburgerMenu />
        </div>
        <div className='flex gap-2 items-center'>
          <FaYoutube className='text-3xl md:text-4xl text-red-600' />
          <span className='text-xl md:text-2xl'>YouTube</span>
        </div>
      </div>
      
      {/* Middle Section */}
      <div className='flex items-center gap-4'>
        <form>
          <div className='flex bg-zinc-900 items-center h-10 rounded-full'>
            <div className='flex gap-2 items-center'>
              <CiSearch className='text-lg' />
              <input type='text' placeholder='Search' className='w-40 sm:w-60 bg-zinc-900 focus:outline-none border-none text-sm sm:text-base' />
            </div>
            <button className='h-10 w-10 flex items-center justify-center bg-zinc-800 rounded-full'>
              <CiSearch className='text-lg' />
            </button>
          </div>
        </form>
        <div className='text-xl p-2 bg-zinc-900 rounded-full'>
          <FaMicrophone />
        </div>
      </div>

      {/* Right Section */}
      <div className='flex gap-4 items-center text-lg md:text-xl'>
        <RiVideoAddLine />
        <div className='relative'>
          <MdNotificationsNone />
          <span className='absolute bottom-1 left-3 text-xs bg-red-600 rounded-full px-1'>9+</span>
        </div>
        <img
          src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
          alt='profile_logo'
          className='w-8 h-8 sm:w-9 sm:h-9 rounded-full'
        />
      </div>
    </div>
  );
};

export default Navbar;
