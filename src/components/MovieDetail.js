import { DetailWrapper, MovieInfo, Back } from "../styles";
import { useParams } from "react-router-dom";

const MovieDetail = (props) => {
  const movieSlug = useParams().movieSlug;
  const movie = props.movies.find((movie) => movie.slug === movieSlug);

  return (
    <DetailWrapper>
      <img src={movie.poster} alt={movie.name} />
      <MovieInfo>
        <p>{movie.title}</p>
        <p>{movie.released}</p>
        <p>{movie.runtime}</p>
        <p>{movie.genre}</p>
        <p>{movie.plot}</p>
        <Back to="/">Back</Back>
      </MovieInfo>
    </DetailWrapper>
  );
};
export default MovieDetail;
