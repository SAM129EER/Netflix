import type { Movie } from "../data/movies";

type MovieCardProps = {
  movie: Movie;
  rank: number;
};

const MovieCard = ({ movie, rank }: MovieCardProps) => {
  return (
    <div
      className="
        group
        relative
        w-48
        shrink-0
        overflow-hidden
        rounded-md
        bg-neutral-900
        transition-transform
        duration-300
        ease-out
        hover:z-20
        hover:scale-110
      "
    >
      {/* Poster */}
      <img
        src={movie.poster}
        alt={movie.title}
        className="
          aspect-[2/3]
          w-full
          object-cover
        "
      />

      {/* Dark gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-1/2
          bg-gradient-to-t
          from-black
          via-black/50
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Ranking number */}
      <span
        className="
          absolute
          top-2
          left-0
          text-6xl
          font-black
          leading-none
          text-black
          [-webkit-text-stroke:1px_white]
        "
      >
        {rank}
      </span>

      {/* Movie information */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          p-3
          text-white
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      >
        <h3 className="line-clamp-2 text-sm font-bold">
          {movie.title}
        </h3>

        <div className="mt-1 flex items-center gap-2 text-xs text-neutral-300">
          <span>{movie.year}</span>
          <span>•</span>
          <span>⭐ {movie.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;