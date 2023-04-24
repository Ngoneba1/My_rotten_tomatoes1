import Image from 'next/image';
import { Movie } from "../typings"
import { useEffect, useState} from 'react'
import { baseUrl } from '@/Constants/movie'
import { InformationCircleIcon } from '@heroicons/react/solid';
import { FaPlay } from 'react-icons/fa'




interface Props{
    topRated: Movie[]
}

function Banner({topRated}:Props) {
    const [movie, setMovie] = useState < Movie | null>(null)
    useEffect(() => {
        setMovie(
          topRated?.[Math.floor(Math.random() * topRated?.length ?? 0)]

        )
      }, [topRated])

      console.log(movie)

    return (
      
     <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
  <div className="absolute top-0 left-0 -z-10 h-[100vh] w-screen">
    <Image
      src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path || ''}`}
      layout="fill"
      objectFit="cover"
      alt={''}
    />
  </div>    
  <h1 className="text-2xl font-bold text-white lg:justify-end mt-4 md:mt-6 lg:mt-8">
  {movie?.title || movie?.name || movie?.original_name}
</h1>


  <p className='max-w-xs text-xl md:max-w-lg md:text-lg lg:max-w-xl lg:text-xl lg:justify-end mt-2 md:mt-4 lg:mt-6' style={{ color: 'white' }}>
    {movie?.overview}
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

export default Banner




