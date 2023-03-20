import axios from "../../axios.js";
import React from "react";
import "./Row.css";
function Row({ title, url, isLarge = false }) {
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    async function fetch() {
      const req = await axios.get(url);
      setMovies(req.data.results);
      return req;
    }
    fetch();
  }, [url]);
  const BASEIMG = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h2 className="title_row">{title}</h2>
      <div className="row_posters">
        {movies?.map(
          (m) =>(
            (isLarge && m.poster_path) ||
            (!isLarge && m.backdrop_path)) && (
              <img
                className={`row_poster ${isLarge && "large_poster"}`}
                src={`${BASEIMG}${isLarge ? m.poster_path : m.backdrop_path} `}
                alt=""
              />
            )
  )
        }
      </div>
    </div>
  );
}

export default Row;
