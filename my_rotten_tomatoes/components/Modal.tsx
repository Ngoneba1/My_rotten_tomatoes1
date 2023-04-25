import { modalState, movieState } from "@/atoms/modalAtoms"
import ReactPlayer from "react-player/lazy"
import { Genre, Movie } from "@/typings"
import { PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon, XIcon } from "@heroicons/react/solid"
import MuiModal from "@mui/material/Modal"
import { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { Element } from "@/typings"
import { FaPlay } from "react-icons/fa"



function Modal() {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [movie, setMovie] = useRecoilState(movieState)
    const [trailer, setTrailer] = useState('') 
    const [genres, setGenres] = useState<Genre[]>([])
    const [muted, setMuted] = useState(true)

    useEffect(() => {
        if (!movie) return 

        async function fetchMovie() {
            async function fetchMovie() {
                const data = await fetch(
                  `https://api.themoviedb.org/3/${
                    movie?.media_type === 'tv' ? 'tv' : 'movie'
                  }/${movie?.id}?api_key=${
                    process.env.NEXT_PUBLIC_API_KEY
                  }&language=en-US&append_to_response=videos`
                ).then((response) => response.json())
                .catch((err) => console.log(err.message))

                if (data?.videos) {
                    const index = data.videos.results.findIndex(
                      (element: Element) => element.type === 'Trailer'
                    )
                    setTrailer(data.videos?.results[index]?.key)
                  }

                  if (data?.genres) {
                    setGenres(data.genres)
                  }
        }
        
            
        }

    },[])
    
    

    const handleClose = () => {
        setShowModal(false)
    }

    console.log(trailer)

    return <MuiModal open= {showModal} onClose={handleClose} className="fixex !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden 
    overflow-y-scroll rounded-md scrollbar-hide">
        <>

        <button
        
        onClick={handleClose}
        className="modalButton text-[white] absolute right-5 top-5 !z-40 h-9 borden none bg-[#181818] hover:bg-[#181818]"
        >
            <XIcon className="h-6 w-6"/> 
            
            </button>

            <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />

          <div className="absolute bottom-10 flex w-full items-center justify-between
          px-10">
              <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-[white] px-8 text-xl font-bold text-[black] transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-[black]" />
                Play
              </button>

              <button className="modalButton">
                  <PlusIcon className="h-7 w-7" />
              </button>

              <button className="modalButton">
                  <ThumbUpIcon className="h-7 w-7" />
              </button>
          </div>

          <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeOffIcon className="h-6 w-6" />
              ) : (
                <VolumeUpIcon className="h-6 w-6" />
              )}
            </button>
          </div>    
      </div>

      <div>

        <div className="space-y-6 text-lg">
          <div className="flex items-center space-x-2 text-sm text-[white]">
            <p className="font-semibold text-[#84ea84]">{movie!.vote_average * 10}% Match
            </p>
            <p className=" text-[white] font-light">{movie?.release_date  || movie?.first_air_date}</p>
               <div className="flex h-4 items-center justify-center rounded border
                border-[#8d8989] px-1.5 text-xs">
                  HD
                  </div>
                 </div>

                 <div>
                    <p className="text-[white] w-5/6">{movie?.overview}</p>
                    <div className="flex flex-col space-y-3 text-sm text-[white]">
                      <div>
                        <span className="text-[gray]">Genres: </span>
                        {genres.map((genre) => genre.name).join(',')}
                      </div>
                    </div>

                 </div>
        </div>
      </div>
        
        </>


    </MuiModal>
}

export default Modal

