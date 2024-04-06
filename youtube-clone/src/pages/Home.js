import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
import {useSelector} from 'react-redux';

const Home = () => {

  const dispatch = useAppDispatch();
  // const videos = useAppSelector((state) => state.youtubeApp.videos);
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  console.log(videos);
  useEffect(() => {
    dispatch(getHomePageVideos(false));
     console.log(videos);
  },[dispatch])

  return (
    <div>
        <Navbar />
        <Sidebar />
    </div>
  )
}

export default Home