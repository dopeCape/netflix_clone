import React from "react";
import { requests } from "../../requests";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import Row from "../Row/Row";
import "./HomeScreen.css";
function HomeScreen() {
  return (
    <div className="homescreen">
      <NavBar />
      <Banner />
	  <Row title="Netflix Originals" url={requests.fetchNetflixOgs} isLarge/>
	  <Row title="Trending Now" url={requests.fetchTrending} />
	  <Row title="Action Movies" url={requests.fetchActionMovies}/>
	  <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
	  <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
	  <Row title="Romance Movies" url={requests.fetchRomanceMovies} />
	  <Row title="Documentaies" url={requests.fetchDocMovies}/>
    </div>
  );
}

export default HomeScreen;
