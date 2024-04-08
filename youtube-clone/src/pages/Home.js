import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
import Spinner from '../components/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../components/Card'

const Home = () => {

  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  
  useEffect(() => {
    dispatch(getHomePageVideos(false));
  },[dispatch])

  return (
    <div className='max-h-screen overflow-auto'>
      <div style={{height:"7.5vh"}}>
        <Navbar />
      </div>

      <div className='flex' style={{height:"92.5vh", left:"4rem"}}>
        <Sidebar />
        {
        videos.length ? (
          <InfiniteScroll 
          dataLength={videos.length} 
          next={()=> dispatch(getHomePageVideos(true))}
          hasMore={videos.length<500}
          loader={<Spinner/>}
          height={1000}
          >
              <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
                {videos.map((item) => {
                  return <Card data={item} key={item.videoId}/>
                })}
              </div>
          </InfiniteScroll>
        ):(
          <Spinner/>
        )
      }
      </div>
    </div>
  )
}

export default Home