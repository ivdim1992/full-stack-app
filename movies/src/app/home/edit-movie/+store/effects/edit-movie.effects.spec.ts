import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';
import { SnackBarService } from '@app/shared/services';
import { Router } from '@angular/router';
import { MoviesService } from '@app/home/movies/movies.service';
import { IMovieInput } from '../../interfaces';
import { EditMovieActions } from '../actions';
import { HttpClient } from '@angular/common/http';
import { EditMovieEffects } from './edit-movie.effects';
import { IMovieOutput } from '@app/home/add-movie/interfaces';

describe('Auth Effects', () => {
  let effects: EditMovieEffects;
  let movieService: MoviesService;
  let actions$: Observable<any>;
  let router: Router;
  let snackBarService: SnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EditMovieEffects,
        {
          provide: MoviesService,
          useValue: { getMovie: jest.fn(), updateMovie: jest.fn() }
        },
        { provide: HttpClient, useValue: { get: jest.fn() } },
        {
          provide: SnackBarService,
          useValue: { open: () => ({}) }
        },
        {
          provide: Router
        },
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(EditMovieEffects);
    movieService = TestBed.get(MoviesService);
    actions$ = TestBed.get(Actions);
    router = TestBed.get(Router);
    snackBarService = TestBed.get(SnackBarService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should get the movie successfully', () => {
    const movieInput = {
      _id: '2323',
      title: 'First Mock Movie',
      description: 'test test',
      poster: 'none',
      year: 1022,
      isFavorite: false,
      genres: ['Comedy', 'Action']
    } as IMovieInput;

    const action = EditMovieActions.getMovie({ movieId: movieInput._id });
    const outcome = EditMovieActions.getMovieSuccess({ movie: movieInput });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: movieInput });
    const expected = cold('--b', { b: outcome });
    movieService.getMovie = jest.fn(() => response);

    expect(effects.getMovie$).toBeObservable(expected);
  });

  it('should update the movie successfully', () => {
    const movieOutput = {
      _id: '2323',
      title: 'First Mock Movie',
      description: 'test test',
      poster: 'none',
      year: 1022,
      isFavorite: false,
      genres: ['Comedy', 'Action']
    } as IMovieOutput;

    const movieInput = {
      _id: '2323',
      title: 'First Mock Movie',
      description: 'test test',
      poster: 'none',
      year: 1022,
      isFavorite: false,
      genres: ['Comedy', 'Action']
    } as IMovieInput;

    const action = EditMovieActions.updateMovie({ movie: movieOutput, movieId: movieInput._id });
    const outcome = EditMovieActions.updateMovieSuccess({ movie: movieInput });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: movieInput });
    const expected = cold('--b', { b: outcome });
    movieService.updateMovie = jest.fn(() => response);

    expect(effects.updateMovie$).toBeObservable(expected);
  });
});
