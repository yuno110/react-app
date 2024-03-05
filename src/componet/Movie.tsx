import { Link } from "react-router-dom";

import { IMovie } from "../interface/IMovie";

function Movie({ id, medium_cover_image, title, summary, genres }: IMovie) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movies/${id}`}>Title : {title}</Link>
      </h2>
      <p><strong>Summary :</strong> {summary}</p>
      <strong>genres</strong>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
    </div>
  )
}
export default Movie;