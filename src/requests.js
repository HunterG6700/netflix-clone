const apiKey = "70f5c4e462468deb9bee1738aeb74f30";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${apiKey}&with_genres=99`,
    fetchAnimatedMovies: `/discover/movie?api_key=${apiKey}&with_genres=16`,

    fetchAnimatedTv: `/discover/tv?api_key=${apiKey}&with_genres=16&with_networks=213`,
    fetchFamilyTv: `/discover/tv?api_key=${apiKey}&with_genres=10751&with_networks=213`,
    fetchTopRatedTv: `/tv/top_rated?api_key=${apiKey}&language=en-US&with_networks=213`,
    fetchActionAdventureTv: `/discover/tv?api_key=${apiKey}&with_genres=10759&with_networks=213`,
    fetchKidsTv: `/discover/tv?api_key=${apiKey}&with_genres=10762&with_networks=213`,
    fetchComedyTv: `/discover/tv?api_key=${apiKey}&with_genres=35&with_networks=213`,
}

export default requests;