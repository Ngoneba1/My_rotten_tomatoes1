import Image from 'next/image';
import { TVShow } from "../typings"
import { useEffect, useState} from 'react'
import { baseUrl } from '@/Constants/movie'
import { InformationCircleIcon } from '@heroicons/react/solid';
import { FaPlay } from 'react-icons/fa'
import { useRecoilState } from 'recoil';





interface Props{
    topRated: TVShow[]
}

function Banner1({topRated}:Props) {
    const [tvShows, setTvShow] = useState < TVShow | null>(null)



    useEffect(() => {
        setTvShow(
          topRated?.[Math.floor(Math.random() * topRated?.length ?? 0)]

        )
      }, [topRated])


    return (
      
     <div className="flex flex-col space-y-16 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
  <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
    <Image
      src={`${baseUrl}${tvShows?.backdrop_path || tvShows?.poster_path || ''}`}
      layout="fill"
      objectFit="cover"
      alt={''}
    />
  </div>    
  <h1 className="text-6xl font-bold text-white lg:justify-end mt-4 md:mt-6 lg:mt-8">
  {tvShows?.name || tvShows?.name || tvShows?.overview}
</h1>


  <p className='max-w-xs text-xl md:max-w-lg md:text-lg lg:max-w-xl lg:text-xl lg:justify-end mt-2 md:mt-4 lg:mt-6' style={{ color: 'white' }}>
    {tvShows?.overview}
  </p>



      <div className="flex space-x-3">
        <button className="bannerButton bg-[white] text-[black]">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
        
        >
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
    
    
           
    )
}

export default Banner1



