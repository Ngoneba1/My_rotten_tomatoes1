import { useRecoilState } from 'recoil'
import {TVShow} from '../typings'
import Image from 'next/image'
import { modalState, movieState } from '@/atoms/modalAtoms'

interface Props{
    tvshows: TVShow 
}

function Thumbnail1({ tvshows }: Props) {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [currentTvShows, setTvShow] = useRecoilState(movieState)

    return (
        <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md: hover:scale-105'
        onClick={() => {
            setTvShow(tvshows)
            setShowModal(true)
          }}
        >
        <Image
                src={`https://image.tmdb.org/t/p/w500${tvshows.backdrop_path || tvshows.poster_path}`}
                className="rounded-sm object-cover md:rounded"
                layout="fill" alt={''}      />
    </div>

    )
}

export default Thumbnail1