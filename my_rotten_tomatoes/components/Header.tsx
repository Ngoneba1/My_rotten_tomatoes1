import { SetStateAction, useState } from 'react';
import axios from 'axios';
import useAuth from '@/hooks/useAuth'
import {SearchIcon, UserIcon} from '@heroicons/react/solid'
import router from 'next/router'


interface SearchBarProps {
    onClose: () => void;
  }

  function SearchBar({ onClose }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!searchText.trim()) {
      return;
    }
    
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=776834dd46144921a0def4903c7bcbb2&language=en-US&query=${searchText}&page=1&include_adult=false`
    );

    setSearchResults(response.data.results);
  };

  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[gray] bg-opacity-70 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-80">
        <input type="text" value={searchText} onChange={handleInputChange} className="border border-[gray] 0 rounded-lg py-2 px-4 w-full mb-4" placeholder="Search movies and TV shows" />
        <button onClick={handleSearch} className="bg-red-500 text-[#000000] py-2 px-4 rounded-lg">Search</button>
        <button onClick={onClose} className="bg-gray-400 text-[#000000] py-2 px-4 rounded-lg ml-4">Close</button>
        {searchResults.map((result) => (
          <div key={result.id} className="mt-4">
            <h2 className="text-lg font-semibold">{result.name || result.title}</h2>
            <p className="text-gray-500">{result.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Header() {
  const { logout } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <header className="bg-[#FA3209]">
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://images.fandango.com/cms/assets/bf631b80-bf47-11ed-a868-adceb8892ad3--rt25-logo-mainnav-322x100.png"
          width={150}
          height={150}
          className="cursor-pointer object-contain"
        />

        <ul className="flex space-x-12">
          <li className="headerLink">Home</li>
          <li className="headerLink" onClick={() => router.push('/Tvshow')}>
            TV Shows
          </li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 font-light">
        <SearchIcon
          className="h-6 w-6 fill-primary cursor-pointer"
          onClick={handleSearchClick}
        />

        <UserIcon className="h-6 w-6 fill-primary" onClick={logout} />
      </div>

      {isSearchOpen && <SearchBar onClose={handleCloseSearch} />}
    </header>
  );
}

export default Header;
