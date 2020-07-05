import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';
import { MoviesService } from '@app/home/movies/movies.service';
import { MovieListEffects } from './movie-list.effects';
import { MovieListActions } from '../actions';
import { IMovie } from '@app/shared/interfaces';

describe('Auth Effects', () => {
  let effects: MovieListEffects;
  let movieService: MoviesService;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieListEffects,
        {
          provide: MoviesService,
          useValue: { getMovies: jest.fn() }
        },

        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(MovieListEffects);
    movieService = TestBed.get(MoviesService);
    actions$ = TestBed.get(Actions);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should get all movies', () => {
    const movies: IMovie[] = [
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

    const action = MovieListActions.getMovies();
    const outcome = MovieListActions.getMoviesSuccess({ movies: movies });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: movies });
    const expected = cold('--b', { b: outcome });
    movieService.getMovies = jest.fn(() => response);

    expect(effects.getMovies$).toBeObservable(expected);
  });
});
