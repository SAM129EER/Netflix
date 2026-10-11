import { Link } from "react-router-dom"
import { Play } from "lucide-react"
import type { Movie } from "@/types/movie"

interface MovieCardProps {
  movie: Movie
  rank?: number
}

const MovieCard = ({ movie, rank }: MovieCardProps) => {
  return (
    <Link
      to={`/watch/${movie.id}`}
      className="group relative w-40 shrink-0 overflow-hidden rounded-md bg-neutral-900 transition-all duration-300 ease-out hover:scale-105 hover:z-20 sm:w-48"
    >
      {/* Poster */}
      <img
        src={movie.poster}
        alt={movie.title}
        loading="lazy"
        className="aspect-[2/3] w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Ranking number (if provided) */}
      {typeof rank === "number" && (
        <span className="absolute top-1 left-2 text-6xl leading-none font-black text-black select-none [-webkit-text-stroke:2px_white] drop-shadow-md">
          {rank}
        </span>
      )}

      {/* Hover action & info */}
      <div className="absolute inset-x-0 bottom-0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex size-8 items-center justify-center rounded-full bg-white text-black shadow transition hover:scale-110">
            <Play className="size-4 fill-black" />
          </div>
          <span className="rounded bg-neutral-800/80 px-1.5 py-0.5 text-[10px] font-semibold text-neutral-300">
            HD
          </span>
        </div>

        <h3 className="line-clamp-1 text-sm font-bold text-white">{movie.title}</h3>

        <div className="mt-1 flex items-center gap-2 text-xs text-neutral-300">
          <span>{movie.year}</span>
          <span>•</span>
          <span className="text-yellow-400">★ {movie.rating.toFixed(1)}</span>
        </div>

        {movie.genre?.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {movie.genre.slice(0, 2).map((g) => (
              <span key={g} className="text-[10px] text-neutral-400">
                {g}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}

export default MovieCard
