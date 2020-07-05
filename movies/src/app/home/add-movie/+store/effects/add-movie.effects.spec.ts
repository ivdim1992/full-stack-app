import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';
import { SnackBarService } from '@app/shared/services';
import { Router } from '@angular/router';
import { MoviesService } from '@app/home/movies/movies.service';
import { CreateMovieEffects } from './add-movie.effects';
import { IMovieInput, IMovieOutput } from '../../interfaces';
import { CreateMovieActions } from '../actions';

describe('Auth Effects', () => {
  let effects: CreateMovieEffects;
  let movieService: MoviesService;
  let actions$: Observable<any>;
  let router: Router;
  let snackBarService: SnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CreateMovieEffects,
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

    effects = TestBed.get(CreateMovieEffects);
    movieService = TestBed.get(MoviesService);
    actions$ = TestBed.get(Actions);
    router = TestBed.get(Router);
    snackBarService = TestBed.get(SnackBarService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should create movie successfully', () => {
    const movieInput = {
      _id: '123',
      title: 'First Mock Movie',
      description: 'test test',
      poster: 'none',
      year: 1022,
      isFavorite: false,
      genres: ['Comedy', 'Action']
    } as IMovieInput;

    const movieOutput = {
      title: 'First Mock Movie',
      description: 'test test',
      poster: 'none',
      _id: 'sda',
      year: 1022,
      genres: ['Comedy', 'Action']
    } as IMovieOutput;

    const action = CreateMovieActions.createMovie({ movieOutput: movieOutput });
    const outcome = CreateMovieActions.createMovieSuccess({ movie: movieInput });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: movieInput });
    const expected = cold('--b', { b: outcome });
    movieService.createMovie = jest.fn(() => response);

    expect(effects.createMovie$).toBeObservable(expected);
  });
});
