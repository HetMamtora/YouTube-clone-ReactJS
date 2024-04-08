import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { RiVideoAddLine } from "react-icons/ri";
import { MdNotificationsNone } from "react-icons/md";
import { useLocation,useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { changeSearchTerm, clearVideos } from "../features/youtube/youtubeSlice";
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';


const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = () => {
    if (location.pathname !== "/search")
      navigate("/search");
    else{
      dispatch(clearVideos);
      dispatch(getSearchPageVideos(false));
    }
  };


  return (
    <div className="flex justify-between items-center px-14 h-14  bg-[#212121] opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        
        <div className="flex gap-1 items-center justify-center">
          <FaYoutube className="text-3xl text-red-600" />
          <span className="text-2xl ">YouTube</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input type="text" placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchTerm}
                onChange={e=>dispatch(changeSearchTerm(e.target.value))}
              />
            </div>
            
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
              <CiSearch className="text-xl " />
            </button>
          </div>
        </form>

        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <FaMicrophone />
        </div>
      </div>
      
      <div className="flex gap-8 items-center text-xl">
        <RiVideoAddLine />
          <div className="relative">
            <MdNotificationsNone />
            <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">{" "} 9+{" "}</span>
          </div>
        
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="profile logo"
            className="w-9 h-9 rounded-full"
          />
      </div>
    </div>
  )
}
export default Navbar


/*<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' alt='profile_logo' className='w-9 h-9 rounded-full ml-2' />*/