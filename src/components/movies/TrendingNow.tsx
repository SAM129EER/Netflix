import { useEffect, useState } from "react"
import { movieService } from "@/services/movieService"
import type { Movie } from "@/types/movie"
import MoviesList from "./MoviesList"

const TrendingNow = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    movieService
      .getTrending()
      .then((data) => {
        if (isMounted) {
          setMovies(data)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.error("Failed to load trending movies:", error)
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="flex flex-col">
      <h2 className="mb-2 px-2 text-2xl font-bold text-white md:text-3xl">
        Trending Now
      </h2>

      <div className="mx-auto w-full max-w-7xl">
        {isLoading ? (
          <div className="flex gap-4 overflow-hidden px-2 py-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-72 w-48 shrink-0 animate-pulse rounded-md bg-neutral-800"
              />
            ))}
          </div>
        ) : movies.length > 0 ? (
          <MoviesList movies={movies} showRank={true} />
        ) : (
          <p className="px-2 py-4 text-neutral-400">No movies found.</p>
        )}
      </div>
    </div>
  )
}

export default TrendingNow
