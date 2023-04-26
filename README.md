# My Rotten Tomatoes

This project is a clone of Rotten Tomatoes, built with Next.js and the TMDB API. It allows users to browse movies, view movie details, and leave reviews.

## Features

- Browse movies by categories such as "trending now", "top rated", "action thrillers", "comedies", "scary movies", "romance movies", and "documentaries"
- View movie details, including the movie poster, release date, runtime, genre, and synopsis
- Leave a review for a movie
- Login and register with Firebase authentication
- Add movies to a personal "My List"
- Responsive design for mobile and desktop

## Technology Used 

- Next.js
- TMDB API
- Firebase Authentication
- Tailwind CSS
- Recoil
- MUI
- React Hot Toast

## Getting started

### Prerequisites
To run this project locally, you will need to have Node.js installed on your machine.

### Installation

1. Clone the repository

```bash

git clone https://github.com/your-username/rotten-tomatoes-clone.git
```
2. Install the dependencies:

```bash
npm install
```

3. Create a .env.local file in the root directory and add your Firebase project credentials:

```bash
NEXT_PUBLIC_API_KEY=776834dd46144921a0def4903c7bcbb2
URL="http://localhost:3000"

// Production
URL="https://prod.com"

```
4. Start the development server:

```bash
npm run dev
```
5. Open http://localhost:3000 in your browser to view the app.

## Deployment

This app is deployed on Vercel. To deploy your own instance of the app, you can connect your GitHub repository to Vercel and set up continuous deployment.

## Contributing

Contributions to this project are welcome! If you would like to contribute, please open an issue or submit a pull request.











