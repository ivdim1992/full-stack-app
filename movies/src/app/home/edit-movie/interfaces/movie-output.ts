import { IMovie } from 'src/app/shared/interfaces';

export interface IMovieOutput extends Omit<IMovie, '_id' | 'isFavorite'> {}
