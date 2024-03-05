import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Movie from "../componet/Movie";
import { IMovie } from "../interface/IMovie";

function Detail() {

  const [loading, setLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<IMovie>({} as IMovie); // 초기값 주는 방법

  const { id } = useParams();

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {
            // movie ? ( // 위에서 초기값주었으므로 이거 안해도됨
              <Movie
                key={movie.id}
                id={movie.id}
                medium_cover_image={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            // ) : null
          }

        </div>
      )}

    </div>

  )
}

export default Detail;



