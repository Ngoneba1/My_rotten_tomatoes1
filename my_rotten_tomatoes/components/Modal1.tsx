import { modalState1, tvshowstate } from "@/atoms/modalAtoms1"
import ReactPlayer from "react-player/lazy"
import { Genre, TVShow } from "@/typings"
import { CheckIcon, PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon, XIcon } from "@heroicons/react/solid"
import MuiModal from "@mui/material/Modal"
import { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { Element } from "@/typings"
import { FaPlay } from "react-icons/fa"
import { DocumentData, collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore"
import useAuth from "@/hooks/useAuth"
import { db } from "@/firebase"
import toast, { Toaster } from "react-hot-toast"


function Modal1() {
    const [showModal1, setShowModal1] = useRecoilState(modalState1)
    const [tvshow, setTvShow] = useRecoilState(tvshowstate)
    const [trailer, setTrailer] = useState('') 
    const [genres, setGenres] = useState<Genre[]>([])
    const [muted, setMuted] = useState(true)
    const{user}= useAuth()
    const [addedToList, setAddedToList] = useState(false)
    const [tvshows, setTvShows] = useState<DocumentData[] | TVShow[]>([])
    

    const toastStyle = {
      background: 'white',
      color: 'black',
      fontWeight: 'bold',
      fontSize: '16px',
      padding: '15px',
      borderRadius: '9999px',
      maxWidth: '1000px',
    }

    useEffect(() => {
        if (!tvshow) return 

        async function fetchTvShow() {
            async function fetchTvShow() {
                const data = await fetch(
                  `https://api.themoviedb.org/3/${
                    tvshow?.media_type === 'tv' ? 'tv' : 'movie'
                  }/${tvshow?.id}?api_key=${
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
          fetchTvShow()
    },[tvshow])

     // Find all the movies in the user's list
  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, 'customers', user.uid, 'myList'),
        (snapshot) => setTvShows(snapshot.docs)
      )
    }
  }, [db, tvshow?.id])

  // Check if the movie is already in the user's list
  useEffect(
    () =>
      setAddedToList(
        tvshows.findIndex((result) => result.data().id === tvshow?.id) !== -1
      ),
    [tvshows]
  )
    
    const handleList = async () => {
      if (addedToList) {
            await deleteDoc(doc(db, 'customers', user!.uid, 'myList', tvshow?.id.toString()!  )
            )

            toast(
              `${tvshow?.name} has been removed from My List`,
            {
              duration: 8000,
              style: toastStyle,
            }
        )
      } else {
            await setDoc(
              doc(db, 'customers', user!.uid, 'myList1', tvshow?.id.toString()!), 
              {...tvshow}
            )
            toast(
              `${tvshow?.name} has been added to My List`,
            {
              duration: 8000,
              style: toastStyle,
            }

            )

      }
    
    }

    const handleClose = () => {
        setShowModal1(false)
    }

    console.log(trailer)

    return <MuiModal open= {showModal1} onClose={handleClose} className="fixex !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden 
    overflow-y-scroll rounded-md scrollbar-hide">
        <>

        <Toaster position='bottom-center'/>

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

              <button className="modalButton text-[white]" onClick={handleList}>
                {addedToList? ( 
                   <CheckIcon className="h-7 w-7" />
                  ) : ( 
                    <PlusIcon className="h-7 w-7" />
                  )} 


              </button>

              <button className="modalButton text-[white]">
                  <ThumbUpIcon className="h-7 w-7" />
              </button>
          </div>

          <button className="text-[white] modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <VolumeOffIcon className="h-6 w-6" />
              ) : (
                <VolumeUpIcon className="h-6 w-6" />
              )}
            </button>
          </div>    
      </div>

      <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
        <div className="space-y-6 text-lg">
          <div className="flex items-center space-x-2 text-sm text-[white]">
            <p className="font-semibold text-[#84ea84]">{tvshow?.vote_average * 10}% Match
            </p>
            <p className=" text-[white] font-light">{tvshow?.release_date  || tvshow?.first_air_date}</p>
               <div className="flex h-4 items-center justify-center rounded border
                border-[#8d8989] px-1.5 text-xs">
                  HD
                  </div>
                 </div>

                 

                 <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row ">
                    <p className="text-[white] w-5/6">{tvshow?.overview}</p>
                    <div className="flex flex-col space-y-3 text-sm text-[white]">
                      <div>
                        <span className="text-[gray]">Genres: </span>
                        {genres.map((genre) => genre.name).join(', ')}
                      </div>

                      <div>
                      <span className="text-[gray]"> Total votes </span>
                      {tvshow?.vote_count}
                    </div>
                 </div>
             </div>
           </div>
           </div>
        
        </>
    </MuiModal>
    
    
}

export default Modal1
