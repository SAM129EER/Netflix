import { useState, useTransition } from "react"
import { Search as SearchIcon, X } from "lucide-react"
import { movieService } from "@/services/movieService"
import type { Movie } from "@/types/movie"
import MovieCard from "./movies/MovieCard"

interface SearchProps {
  onClose?: () => void
}

const Search = ({ onClose }: SearchProps) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Movie[]>([])
  const [hasSearched, setHasSearched] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleSearch = (value: string) => {
    setQuery(value)
    if (!value.trim()) {
      setResults([])
      setHasSearched(false)
      return
    }

    startTransition(async () => {
      const data = await movieService.search(value)
      setResults(data)
      setHasSearched(true)
    })
  }

  const handleClear = () => {
    setQuery("")
    setResults([])
    setHasSearched(false)
  }

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />
      </div>


      <div className="mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Search Movies & Shows
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Find titles by name, actor, or genre (Sci-Fi, Action, Thriller...)
            </p>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white"
            >
              <X className="size-5" />
            </button>
          )}
        </div>

        {/* Search input bar */}
        <div className="relative mx-auto mt-6 flex max-w-xl items-center">
          <SearchIcon className="absolute left-4 size-5 text-neutral-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for movies, genres..."
            className="w-full rounded-full border border-neutral-700 bg-neutral-900/90 py-3.5 pl-12 pr-12 text-white outline-none transition placeholder:text-neutral-500 focus:border-red-600 focus:ring-1 focus:ring-red-600"
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-4 text-neutral-400 hover:text-white"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results grid */}
      <div className="mt-8">
        {isPending && (
          <p className="text-center text-sm text-neutral-400">Searching...</p>
        )}

        {!isPending && hasSearched && results.length === 0 && (
          <p className="text-center text-neutral-400">
            No titles found matching &quot;{query}&quot;. Try another title or genre.
          </p>
        )}

        {results.length > 0 && (
          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-300">
              Results for &quot;{query}&quot; ({results.length})
            </h3>
            <div className="flex flex-wrap gap-4">
              {results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Search