import { MoviesComponent } from './movies.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MovieCardModule } from '@app/movies/resources/movie-card';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import * as fromRootStore from '../../../../+store';
import { Store } from '@ngrx/store';
import { hot } from 'jasmine-marbles';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesComponent],
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    actions$ = TestBed.get(Actions);
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should display an unordered list of heroes', () => {
  //   const ulDebugEl = fixture.debugElement.query(By.css('app-movie-card'));
  //   const ulEl = ulDebugEl.nativeElement as HTMLUListElement;
  //   component.movies$ = Observable<IMovieInput[]>;
  //   fixture.detectChanges();
  //   expect(ulEl.childElementCount).toBe(users.length);

  //   const firstLi = ulEl.querySelector('li:first-child');
  //   expect(firstLi.textContent).toEqual(
  //     `${users[0].firstName} ${users[0].lastName}`
  //   );
  // });
});
