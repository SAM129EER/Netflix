export interface Movie {
  id: number
  title: string
  year: number
  rating: number
  genre: string[]
  poster: string
  description?: string
  backdrop?: string
  duration?: string
  videoUrl?: string
}

export type MovieCategory = {
  id: string
  title: string
  movies: Movie[]
}
