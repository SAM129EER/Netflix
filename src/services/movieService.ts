import { trendingMovies } from "@/data/movies"
import type { Movie, MovieCategory } from "@/types/movie"

/**
 * MovieService abstracts data fetching for movies.
 * Currently backed by mock data with async simulation.
 * Ready to be swapped with fetch/axios calls when your backend is built.
 */
export const movieService = {
  /**
   * Fetch trending movies
   */
  async getTrending(): Promise<Movie[]> {
    // Simulated network delay to mimic real API latency
    await new Promise((resolve) => setTimeout(resolve, 150))
    return [...trendingMovies]
  },

  /**
   * Search movies by title or genre
   */
  async search(query: string): Promise<Movie[]> {
    await new Promise((resolve) => setTimeout(resolve, 150))
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) return []

    return trendingMovies.filter(
      (m) =>
        m.title.toLowerCase().includes(trimmed) ||
        m.genre.some((g) => g.toLowerCase().includes(trimmed))
    )
  },

  /**
   * Fetch single movie by ID
   */
  async getById(id: number): Promise<Movie | null> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const movie = trendingMovies.find((m) => m.id === id)
    return movie ?? null
  },

  /**
   * Fetch curated categories (for Browse page)
   */
  async getCategories(): Promise<MovieCategory[]> {
    await new Promise((resolve) => setTimeout(resolve, 150))
    return [
      {
        id: "trending",
        title: "Trending Now",
        movies: [...trendingMovies],
      },
      {
        id: "top-rated",
        title: "Critically Acclaimed",
        movies: [...trendingMovies].filter((m) => m.rating >= 8.5),
      },
      {
        id: "scifi",
        title: "Sci-Fi & Thrillers",
        movies: [...trendingMovies].filter((m) =>
          m.genre.some((g) => ["Sci-Fi", "Thriller"].includes(g))
        ),
      },
      {
        id: "action",
        title: "Action Packed",
        movies: [...trendingMovies].filter((m) =>
          m.genre.some((g) => ["Action", "Adventure"].includes(g))
        ),
      },
    ]
  },
}
