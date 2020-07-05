import { TestBed } from '@angular/core/testing';
import { AuthEffects } from './auth.effects';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';
import { IAuth, IUser } from 'src/app/shared/interfaces';
import { AuthActions } from '../actions';
import { SnackBarService } from '@app/shared/services';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/auth.service';

describe('Auth Effects', () => {
  let effects: AuthEffects;
  let authService: AuthService;
  let actions$: Observable<any>;
  let router: Router;
  let snackBarService: SnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        {
          provide: AuthService,
          useValue: { register: jest.fn(), signIn: jest.fn(), signOut: jest.fn() }
        },
        {
          provide: SnackBarService,
          useValue: { open: () => ({}) }
        },
        {
          provide: Router,
          useValue: { parseUrl: jest.fn() }
        },
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AuthEffects);
    authService = TestBed.get(AuthService);
    actions$ = TestBed.get(Actions);
    router = TestBed.get(Router);
    snackBarService = TestBed.get(SnackBarService);
  });

  it('should register user successful', () => {
    const user = { email: 'test@test.com', password: '123' } as IAuth;
    const resp = { message: 'Registered Successfully' };
    const action = AuthActions.registerUser({ data: user });
    const completion = AuthActions.registerUserSuccess(resp);

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: resp });
    const expected = cold('--b', { b: completion });
    authService.register = jest.fn(() => response);

    expect(effects.registerUser$).toBeObservable(expected);
  });

  it('should login user successful', () => {
    const user = { email: 'test@test.com', password: '123' } as IAuth;
    const resp = { email: 'test@test.com', token: 'awd2asdd23' } as IUser;
    const action = AuthActions.signInUser({ data: user });
    const completion = AuthActions.signInUserSuccess({ user: resp });

    actions$ = hot('-a', { a: action });
    const response = cold('-a|', { a: resp });
    const expected = cold('--b', { b: completion });
    authService.signIn = jest.fn(() => response);

    expect(effects.signInUser$).toBeObservable(expected);
  });

  it('should logout user successful', () => {
    const resp = { message: 'Sign out successfully' };
    const action = AuthActions.signOut();
    const completion = AuthActions.signOutSuccess(resp);

    actions$ = hot('-a--', { a: action });
    const response = cold('-a|', { a: resp });
    const expected = cold('--b', { b: completion });
    authService.signOut = jest.fn(() => response);

    expect(effects.signOutUser$).toBeObservable(expected);
  });
});
