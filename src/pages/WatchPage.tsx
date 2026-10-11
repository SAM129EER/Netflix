import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import { movieService } from "@/services/movieService"
import type { Movie } from "@/types/movie"

const WatchPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [movie, setMovie] = useState<Movie | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (!id) return

    let isMounted = true
    movieService
      .getById(Number(id))
      .then((data) => {
        if (isMounted) {
          setMovie(data)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.error("Failed to load movie for player:", err)
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [id])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="size-10 animate-spin rounded-full border-4 border-neutral-700 border-t-red-600" />
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center text-white">
        <h1 className="text-3xl font-bold">Movie Not Found</h1>
        <p className="mt-2 text-neutral-400">The requested video could not be loaded.</p>
        <button
          type="button"
          onClick={() => navigate("/browse")}
          className="mt-6 rounded-md bg-red-600 px-6 py-2.5 font-semibold text-white hover:bg-red-700"
        >
          Return to Browse
        </button>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-between bg-black text-white">
      {/* Top Bar with Back Button */}
      <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent p-6">
        <div className="flex items-center gap-4">
          <Link
            to="/browse"
            className="flex items-center gap-2 rounded-full bg-black/50 p-2.5 text-white backdrop-blur transition hover:bg-black/80"
          >
            <ArrowLeft className="size-6" />
          </Link>
          <h1 className="text-xl font-bold md:text-2xl">{movie.title}</h1>
        </div>

        <span className="rounded bg-neutral-800/80 px-2.5 py-1 text-xs font-semibold text-neutral-300">
          ⭐ {movie.rating} • {movie.year}
        </span>
      </div>

      {/* Video / Poster Stage */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="max-h-[80vh] w-auto rounded-lg object-contain opacity-75 shadow-2xl"
        />

        {/* Center Play Button Overlay */}
        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          className="absolute flex size-20 items-center justify-center rounded-full bg-red-600/90 text-white shadow-xl transition hover:scale-110 hover:bg-red-600"
        >
          {isPlaying ? (
            <Pause className="size-10 fill-white" />
          ) : (
            <Play className="ml-1 size-10 fill-white" />
          )}
        </button>
      </div>

      {/* Bottom Controls Bar (Ready for HLS stream controls) */}
      <div className="z-30 bg-gradient-to-t from-black via-black/80 to-transparent px-6 py-6">
        {/* Progress bar mock */}
        <div className="group relative mb-4 h-1.5 w-full cursor-pointer rounded-full bg-neutral-700">
          <div className="h-full w-1/3 rounded-full bg-red-600 group-hover:h-2" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className="text-white hover:text-neutral-300"
            >
              {isPlaying ? <Pause className="size-6" /> : <Play className="size-6" />}
            </button>

            <button
              type="button"
              onClick={() => setIsMuted((m) => !m)}
              className="text-white hover:text-neutral-300"
            >
              {isMuted ? <VolumeX className="size-6" /> : <Volume2 className="size-6" />}
            </button>

            <span className="text-xs text-neutral-400">
              {isPlaying ? "Playing Stream..." : "Paused"}
            </span>
          </div>

          <button
            type="button"
            className="text-white hover:text-neutral-300"
            title="Fullscreen"
          >
            <Maximize className="size-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WatchPage
