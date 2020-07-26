import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';
import { MoviesService } from '@app/movies/movie-list/movies.service';
import { FavoriteMoviesActions } from '../actions';
import { IMovieInput } from '@app/movies/add-movie/interfaces';
import { FavoriteMoviesEffects } from './favorite-movies.effects';

describe('Auth Effects', () => {
  let effects: FavoriteMoviesEffects;
  let movieService: MoviesService;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FavoriteMoviesEffects,
        {
          provide: MoviesService,
          useValue: { getFavoriteMovies: jest.fn() }
        },

        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(FavoriteMoviesEffects);
    movieService = TestBed.get(MoviesService);
    actions$ = TestBed.get(Actions);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should get favorite movies successfully', () => {
    const movies: IMovieInput[] = [
      {
        _id: '2323',
        title: 'First Mock Movie',
        description: 'test test',
        poster: 'none',
        year: 1022,
        isFavorite: true,
        genres: ['Comedy', 'Action']
      },
      {
        _id: '23215',
        title: 'Second Mock Movie',
        description: 'test test',
        poster: 'none',
        year: 2222,
        isFavorite: true,
        genres: ['Horror']
      }
    ];

    const action = FavoriteMoviesActions.getFavoriteMovies();
    const outcome = FavoriteMoviesActions.getFavoriteMoviesSuccess({ favMovies: movies });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: movies });
    const expected = cold('--b', { b: outcome });
    movieService.getFavoriteMovies = jest.fn(() => response);

    expect(effects.getFavoriteMovie$).toBeObservable(expected);
  });
});
