import { useEffect, useState } from "react"
import { Play, Info } from "lucide-react"
import { Link } from "react-router-dom"
import Header from "@/components/Header"
import MoviesList from "@/components/movies/MoviesList"
import Search from "@/components/Search"
import { movieService } from "@/services/movieService"
import type { Movie, MovieCategory } from "@/types/movie"

const BrowsePage = () => {
  const [categories, setCategories] = useState<MovieCategory[]>([])
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null)
  const [showSearch, setShowSearch] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    movieService
      .getCategories()
      .then((data) => {
        if (isMounted) {
          setCategories(data)
          if (data.length > 0 && data[0].movies.length > 0) {
            setFeaturedMovie(data[0].movies[0])
          }
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.error("Failed to fetch movie categories", err)
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <Header
          variant="app"
          onSearchClick={() => setShowSearch((prev) => !prev)}
        />
      </div>

      {/* Collapsible Search View */}
      {showSearch && (
        <div className="border-b border-neutral-800 bg-neutral-950/90 pb-6">
          <Search onClose={() => setShowSearch(false)} />
        </div>
      )}

      {/* Featured Hero Banner */}
      {featuredMovie && !showSearch && (
        <div className="relative -mt-20 flex min-h-[70vh] items-end pb-20 pt-32 md:min-h-[85vh]">
          {/* Background backdrop poster */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${featuredMovie.poster})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
            <span className="rounded bg-red-600/90 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
              Featured Title
            </span>
            <h1 className="mt-3 max-w-2xl text-4xl font-extrabold text-white md:text-6xl drop-shadow-md">
              {featuredMovie.title}
            </h1>
            <p className="mt-3 max-w-xl text-sm text-neutral-300 md:text-base">
              A mind-bending cinematic spectacle with stellar visual effects and an unforgettable score.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Link
                to={`/watch/${featuredMovie.id}`}
                className="inline-flex items-center gap-2 rounded bg-white px-6 py-2.5 font-bold text-black transition hover:bg-neutral-200 active:scale-95"
              >
                <Play className="size-5 fill-black" />
                <span>Play</span>
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded bg-neutral-600/70 px-5 py-2.5 font-semibold text-white backdrop-blur transition hover:bg-neutral-600 active:scale-95"
              >
                <Info className="size-5" />
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Movie Rows */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 pb-16">
        {isLoading ? (
          <div className="space-y-8 py-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-6 w-48 animate-pulse rounded bg-neutral-800" />
                <div className="flex gap-4 overflow-hidden">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div
                      key={j}
                      className="h-64 w-44 shrink-0 animate-pulse rounded bg-neutral-900"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          categories.map((category, idx) => (
            <MoviesList
              key={category.id}
              title={category.title}
              movies={category.movies}
              showRank={idx === 0}
            />
          ))
        )}
      </section>
    </main>
  )
}

export default BrowsePage
