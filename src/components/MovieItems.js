import { MovieWrapper } from "../styles";
import { Link } from "react-router-dom";
const MovieItem = (props) => {
  return (
    <MovieWrapper>
      <Link to={`/${props.movies.slug}`}>
        {" "}
        <img src={props.movies.poster} alt={props.movies.name} />{" "}
      </Link>

      <p>{props.movies.title}</p>
      <p>{props.movies.runtime}</p>
    </MovieWrapper>
  );
};

export default MovieItem;
