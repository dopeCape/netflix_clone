import axios from "../../axios.js";
import React, { useEffect } from "react";

import "./Banner.css";
import { requests } from "../../requests";
function Banner() {
	const[movie,setMovie] = React.useState([])
	useEffect(()=>{
	async function fetchData(){
		const req = await axios.get(requests.fetchNetflixOgs)



		setMovie(
		req.data.results[Math.floor(Math.random() * (req.data.results.length -1))]
		)
		return req
	}
		fetchData()
	},[])

  const tranc = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        background: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_tittle">{movie?.title||movie?.original_name||movie?.name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">Test Button</button>
        </div>
        <h1 className="banner_dis">
          {tranc(movie?.overview, 54)}{" "}
        </h1>
      </div>
	  <div className="banner--fade"></div>
    </header>
  );
}

export default Banner;
