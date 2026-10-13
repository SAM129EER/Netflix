export interface Movie {
  id: number
  title: string
  year: number
  rating: number
  genre: string[]
  poster: string
  backdrop: string
  description: string
  duration: string
  matchScore: number
  ageRating: string
  cast: string[]
  videoUrl?: string
  isTrending?: boolean
  isOriginal?: boolean
}

export type MovieCategory = {
  id: string
  title: string
  movies: Movie[]
}
