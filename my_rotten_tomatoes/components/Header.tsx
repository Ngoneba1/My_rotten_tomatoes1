function Header() {
    return <header>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img src="https://www.rottentomatoes.com/assets/pizza-pie/images/rottentomatoes_logo_40.336d6fe66ff.png" 
                width={200}
                height={200}
              className="cursor-pointer object-contain"
                />

                <ul className="flex justify-around space-x-20">
                    <li>Movies </li>
                    <li>Tv Shows</li>
                    <li>Movie Trivia </li>
                    <li>News </li>
                    <li>Showtimes </li>
                </ul>
            </div>


            <div> </div>
    </header>
}

export default Header