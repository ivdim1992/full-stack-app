import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';
import { SnackBarService } from '@app/shared/services';
import { Router } from '@angular/router';
import { MoviesService } from '@app/movies/movie-list/movies.service';
import { MovieDetailsActions } from '../actions';
import { MovieDetailsEffects } from './movie-details.effects';
import { IMovieInput } from '@app/movies/edit-movie/interfaces';

describe('Auth Effects', () => {
  let effects: MovieDetailsEffects;
  let movieService: MoviesService;
  let actions$: Observable<any>;
  let router: Router;
  let snackBarService: SnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieDetailsEffects,
        {
          provide: MoviesService,
          useValue: { createMovie: jest.fn() }
        },
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

    effects = TestBed.get(MovieDetailsEffects);
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

    const action = MovieDetailsActions.getMovie({ movieId: movieInput._id });
    const outcome = MovieDetailsActions.getMovieSuccess({ movie: movieInput });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: movieInput });
    const expected = cold('--b', { b: outcome });
    movieService.getMovie = jest.fn(() => response);

    expect(effects.getMovie$).toBeObservable(expected);
  });

  it('should delete the movie', () => {
    const action = MovieDetailsActions.deleteMovie({ movieId: '123' });
    const outcome = MovieDetailsActions.deleteMovieSuccess();

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: outcome });
    const expected = cold('--b', { b: outcome });
    movieService.deleteMovie = jest.fn(() => response);

    expect(effects.deleteMovie$).toBeObservable(expected);
  });
});
