import type { Movie } from "../data/movies";
import MovieCard from "./MovieCard";

type MoviesListProps = {
  movies: Movie[];
};

const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <div className="overflow-x-auto scrollbar-none">
      <div className="flex gap-5 px-4 py-6">
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            rank={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;