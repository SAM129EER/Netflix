import type { Movie } from "@/types/movie"
import MovieCard from "./MovieCard"

interface MoviesListProps {
  movies: Movie[]
  showRank?: boolean
  title?: string
}

const MoviesList = ({ movies, showRank = false, title }: MoviesListProps) => {
  return (
    <section className="my-4">
      {title && (
        <h2 className="mb-3 px-2 text-xl font-bold text-white md:text-2xl">
          {title}
        </h2>
      )}

      <div className="overflow-x-auto scrollbar-none">
        <div className="flex gap-4 px-2 py-2">
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              rank={showRank ? index + 1 : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoviesList