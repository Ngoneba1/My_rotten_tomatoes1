import {SearchIcon, UserIcon} from '@heroicons/react/solid'

function Header() {
    return <header className="bg-[#FA3209]">
        
            <div className="flex items-center space-x-2 md:space-x-10">
                <img src="https://images.fandango.com/cms/assets/bf631b80-bf47-11ed-a868-adceb8892ad3--rt25-logo-mainnav-322x100.png" 
                width={150}
                height={150}
              className="cursor-pointer object-contain"
                />

                
            <ul className="flex space-x-12">
                <li className="headerLink">Home</li>
                <li className="headerLink">TV Shows</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">New & Popular</li>
            </ul>

            </div>
               

            <div className='flex items-center space-x-4 font-light'>
             <SearchIcon className='h-6 w-6 fill-primary'/>
             <UserIcon className='h-6 w-6 fill-primary'/>
                
            </div>
            
    </header>
}

export default Header