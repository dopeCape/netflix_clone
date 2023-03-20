
const KEY ="c9320bd939a4e84663f351c2bd566710"

export const requests ={
	fetchTrending : `/trending/all/week?api_key=${KEY}&language=en-US`,
	fetchNetflixOgs:`/discover/tv?api_key=${KEY}&with_networks=213`,

	fetchActionMovies:`/discover/movie?api_key=${KEY}&with_genres=28`,
	fetchComedyMovies:`/discover/movie?api_key=${KEY}&with_genres=35`,
	fetchHorrorMovies:`/discover/movie?api_key=${KEY}&with_genres=27`,
	fetchRomanceMovies:`/discover/movie?api_key=${KEY}&with_genres=10749`,
	fetchDocMovies:`/discover/movie?api_key=${KEY}&with_genres=99`,
}


