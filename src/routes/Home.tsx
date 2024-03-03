import { useEffect, useState } from "react";

import Movie from "../componet/Movie";
import { Movies } from "../interface/movies";

function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movies[]>([]); // 초기값 빈

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();

    console.log(json.data.movies);
    setMovies(json.data.movies);

    console.log(movies);// 빈배열

    setLoading(false);
  }

  useEffect(() => {
    getMovies()
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;