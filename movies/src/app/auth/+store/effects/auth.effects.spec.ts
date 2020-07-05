import { TestBed } from '@angular/core/testing';
import { AuthEffects } from './auth.effects';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { IUser, IAuth } from 'src/app/shared/interfaces';
import { AuthActions } from '../actions';

describe('Auth Effects', () => {
  let effects: AuthEffects;
  let authService: AuthService;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        {
          provide: AuthService,
          useValue: { register: jest.fn(), signIn: jest.fn(), signOut: jest.fn() }
        },
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AuthEffects);
    authService = TestBed.get(AuthService);
    actions$ = TestBed.get(Actions);
  });

  it('should register user successful', () => {
    const user = { email: 'test@test.com', password: '123' } as IAuth;
    // const action = AuthActions.registerUser({  email: 'test@test.com', password: '123' });
    // const completion = CompanyActions.getMyCompanySuccess({ company });
  });
});
