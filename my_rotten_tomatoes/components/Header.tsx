import {SearchIcon, UserIcon} from '@heroicons/react/solid'

function Header() {
    return <header>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img src="https://images.fandango.com/cms/assets/bf631b80-bf47-11ed-a868-adceb8892ad3--rt25-logo-mainnav-322x100.png" 
                width={200}
                height={200}
              className="cursor-pointer object-contain"
                />

                <ul className="flex justify-around space-x-20">
                    <li className="headerLink">Movies </li>
                    <li className="headerLink">Tv Shows</li>
                    <li className="headerLink">Movie Trivia</li>
                    <li className="headerLink">News</li>
                    <li className="headerLink">Showtimes</li>
                </ul>


            </div>
               

            <div className='flex items-center space-x-4 font-light '>
             <SearchIcon className='h-6 w-6 fill-primary'/>
             <UserIcon className='h-6 w-6 fill-primary'/>
                
            </div>
    </header>
}

export default Header