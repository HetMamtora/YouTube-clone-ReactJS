import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions,MdVideoLibrary,MdHistory,MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";

const Sidebar = () => {

    const mainLinks =[
        {
            icon:<IoMdHome className='text-xl'/>,
            name:'Home'
        },
        {
            icon:<SiYoutubeshorts className='text-xl'/>,
            name:'Shorts'
        },
        {
            icon:<MdSubscriptions className='text-xl'/>,
            name:'Subscriptions'
        },
    ];

    const otherLinks = [
        {
            icon:<MdVideoLibrary className='text-xl'/>,
            name:'Library'
        },
        {
            icon:<MdHistory className='text-xl'/>,
            name:'History'
        },
        {
            icon:<MdOutlineWatchLater className='text-xl'/>,
            name:'Watch Later'
        },
        {
            icon:<BiLike className='text-xl'/>,
            name:'Liked Videos'
        }
    ]

  return (
    <div className='w-3/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen'>
        <ul className='flex flex-col border-b-2 border-gray-700'>
            {mainLinks.map(
                ({icon,name}) => {
                    return(
                        <li key={name} className={`pl-6 py-3  hover:bg-zinc-600 ${name === "Home" ? "bg-zinc-700" : " "} rounded-xl`}>
                            <a href='#' className='flex items-center gap-5'>
                                {icon}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>
                        </li>
                    )
                }
            )}
        </ul>

        <ul className='flex flex-col border-b-1 border-gray-800'>
            {otherLinks.map(
                ({icon,name}) => {
                    return(
                        <li key={name} className={`pl-6 py-3  hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" : " "}`}>
                            <a href='#' className='flex items-center gap-5'>
                                {icon}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>
                        </li>
                    )
                }
            )}
        </ul>        
    </div>
  )
}

export default Sidebar