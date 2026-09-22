// src/data/movies.ts

export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string[];
  poster: string;
}

export const trendingMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Sci-Fi", "Thriller"],
    poster:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genre: ["Sci-Fi", "Drama"],
    poster:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    poster:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    rating: 8.4,
    genre: ["Animation", "Action", "Adventure"],
    poster:
      "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  },
  {
    id: 5,
    title: "Dune",
    year: 2021,
    rating: 8.0,
    genre: ["Sci-Fi", "Adventure"],
    poster:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
  {
    id: 6,
    title: "Oppenheimer",
    year: 2023,
    rating: 8.6,
    genre: ["Drama", "History"],
    poster:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    id: 7,
    title: "Avatar",
    year: 2009,
    rating: 7.9,
    genre: ["Action", "Adventure", "Sci-Fi"],
    poster:
      "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  },
  {
    id: 8,
    title: "Top Gun: Maverick",
    year: 2022,
    rating: 8.2,
    genre: ["Action", "Drama"],
    poster:
      "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
  },
  {
    id: 9,
    title: "John Wick: Chapter 4",
    year: 2023,
    rating: 7.6,
    genre: ["Action", "Thriller"],
    poster:
      "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  },
  {
    id: 10,
    title: "Godzilla x Kong: The New Empire",
    year: 2024,
    rating: 6.1,
    genre: ["Action", "Adventure", "Sci-Fi"],
    poster:
      "https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
  },
];