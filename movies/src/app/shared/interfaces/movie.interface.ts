export interface IMovie {
  _id: string;
  title: string;
  description: string;
  poster: string;
  year: number;
  isFavorite: boolean;
  genres: string[];
}
