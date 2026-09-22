import React from "react"
import { trendingMovies } from "@/data/movies"
import MoviesList from "./MoviesList"

const TrendingNow = () => {
  return (
    <div className={"flex flex-col"}>
      <h1 className={"text-3xl font-semibold p-2 mb-4"}>Trending Now</h1>
      <div className="mt-2 ml-8 ">
        {trendingMovies.length > 0 ? (
          <MoviesList movies={trendingMovies} />
        ) : (
          <p>No movies were found</p>
        )}
      </div>
    </div>
  )
}

export default TrendingNow
