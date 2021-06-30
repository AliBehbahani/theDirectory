import { MovieWrapper } from "../styles";
import MovieItem from "./MovieItems";

const MovieList = (props) => {
  const showList = props.movies.map((movie) => <MovieItem movies={movie} />);

  return <MovieWrapper>{showList}</MovieWrapper>;
};
export default MovieList;
