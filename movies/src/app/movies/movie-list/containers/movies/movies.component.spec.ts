import { MoviesComponent } from './movies.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MovieCardModule } from '@app/movies/resources/movie-card';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import * as fromRootStore from '../../../../+store';
import { Store } from '@ngrx/store';
import { hot } from 'jasmine-marbles';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { NoMoviesComponent } from '@app/movies/shared/no-movies/no-movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let store: Store<fromRootStore.State>;
  const movies = [
    {
      _id: '111',
      title: 'test',
      description: 'test test',
      poster: 'none',
      year: 1022,
      isFavorite: false,
      genres: ['Horror']
    },
    {
      _id: '222',
      title: 'test',
      description: 'test test',
      poster: 'none',
      year: 1022,
      isFavorite: false,
      genres: ['Comedy', 'Action']
    }
  ];
  let actions$: Observable<any>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MoviesComponent, NoMoviesComponent],
        imports: [MovieCardModule],
        providers: [
          provideMockActions(() => actions$),
          {
            provide: Store,
            useValue: {
              dispatch: jest.fn(),
              pipe: jest.fn(() => hot('-a', { a: movies }))
            }
          },
          {
            provide: Router,
            useValue: { parseUrl: jest.fn() }
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    actions$ = TestBed.inject(Actions);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
