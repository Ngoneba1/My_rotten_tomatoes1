import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import { TVShow} from "../typings"
import Thumbnail1 from "./Thumbnail1"
import { useRef, useState } from "react"

interface Props{
    name: string
    tvshows:TVShow[]
}
function Row1({name, tvshows}:Props) {
    const rowRef = useRef <HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)

    const handleClick = (direction: string) => {
        setIsMoved(true)

        if (rowRef.current) {
            const {scrollLeft, clientWidth}= rowRef.current

            const scrollTo = direction === "left" 
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth

            rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
        }

    }

    return( 
    <div className="h-40 space-y-0.5 md:space-y-2">
         <h2 className="w-56 cursor-pointer text-sm font-bold transition-200 hover:text-[gray] lg:text-2xl">
            {name}
         </h2>
         <div className="group relative md:-ml-2 ">
            <ChevronLeftIcon 
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer 
            opacity-0 transition hover:scale-125 group-hover:opacity-100 text-[white] ${
                !isMoved && 'hidden'

            }`}
            onClick={()=> handleClick("left")} 
        />
              <div ref={rowRef}className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
                {tvshows.map((tvshow) => (
                  <Thumbnail1 key={tvshow.id} tvshows={tvshow}   />
                ))}

            </div>


            <ChevronRightIcon 
            className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer 
            opacity-0 transition hover:scale-125 group-hover:opacity-100 text-[white]`} 
            onClick={()=> handleClick('right')} /> 

          

    </div>
    </div> 
    )
}

export default Row1

