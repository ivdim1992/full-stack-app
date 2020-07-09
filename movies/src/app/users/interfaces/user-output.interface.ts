import { IUser } from '@app/shared/interfaces';

export interface IUserOutput extends Omit<IUser, '_id' | 'isFavorite' | 'movies' | 'email' | 'token'> {}
