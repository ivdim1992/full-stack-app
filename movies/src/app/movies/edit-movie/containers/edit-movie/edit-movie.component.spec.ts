import { EditMovieComponent } from './edit-movie.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// import * as fromRootStore from '../../../../+store';
import { Store } from '@ngrx/store';
import { IMovieInput } from '../../interfaces';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EditMovieResolver } from '../../resolver';
import { BehaviorSubject, Observable } from 'rxjs';
import { convertToParamMap } from '@angular/router';
import { hot } from 'jasmine-marbles';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { MovieFormModule } from '@app/movies/resources/movie-form';
import { MatIconModule } from '@angular/material/icon';

describe('Edit Movie Component', () => {
  let component: EditMovieComponent;
  let fixture: ComponentFixture<EditMovieComponent>;
  // let store: Store<fromRootStore.State>;
  let movie: IMovieInput;
  let actions$: Observable<any>;

  beforeEach(() => {
    movie = generateMovie('firstOne');
  });

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: true,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn()
        };
      })
    });
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditMovieComponent],
      imports: [FormsModule, RouterTestingModule, ReactiveFormsModule, MovieFormModule, MatIconModule],
      providers: [
        {
          provide: EditMovieResolver,
          useValue: {
            paramMap: new BehaviorSubject(
              convertToParamMap({
                id: movie._id
              })
            )
          }
        },
        {
          provide: Store,
          useValue: {
            dispatch: jest.fn(),
            pipe: jest.fn(() => hot('-a', { a: movie }))
          }
        },
        provideMockActions(() => actions$)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieComponent);
    component = fixture.componentInstance;
    actions$ = TestBed.get(Actions);
    // store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //   it('should match snapshot', () => {
  //     fixture.detectChanges();
  //     expect(fixture).toMatchSnapshot();
  //   });

  // it('should dispatch updateMovie action', () => {
  //   const updatedMovie = generateMovie('updatedTitle');
  //   const action = EditMovieActions.updateMovie({ movieId: updatedMovie._id, movie: updatedMovie });
  //   const spy = jest.spyOn(store, 'dispatch');

  //   fixture.detectChanges();
  //   expect(spy).toHaveBeenCalledWith(action);
  // });
});

const generateMovie = (title: string): IMovieInput => {
  return {
    _id: '2323',
    title: title || 'test',
    description: 'test test',
    poster: 'none',
    year: 1022,
    isFavorite: false,
    genres: ['Comedy', 'Action']
  };
};
