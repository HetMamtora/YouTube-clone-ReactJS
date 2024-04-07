import React from 'react'

export default function Card({data}) {

    return (
        <div className='w-70 h-100 flex gap-3 flex-col'>
            <div className='relative'>
                <span className='absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10'>
                    {data.videoDuration}
                </span>
                    <img src={data.videoThumbnail} alt='thumbnail' className='h-44 w-full object-cover'/>
            </div>
            <div className='flex gap-2 mt-2'>
                    <div className='min-w-fit'>
                        <a href='#'><img src={data.channelInfo.image} alt='channel image' className='h-9 w-9 rounded-full'/></a>
                    </div>
                    <div>
                        <h3>
                            <a href='#' className='line-clamp-2'>{data.videoTitle}</a>
                        </h3>
                        <div className='text-sm text-gray-400'>
                            <div>
                                <a href='#' className='hover:text-white'>{data.channelInfo.name}</a>
                            </div>
                            <div>
                                <span className="after:content-['•'] after:mx-1">{data.videoViews} views</span>
                                <span>{data.videoAge}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}