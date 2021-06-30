import "./App.css";
import movies from "./movies";
import { Switch, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/:movieSlug">
          <MovieDetail movies={movies} />
        </Route>

        <Route exact path="/">
          <MovieList movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
