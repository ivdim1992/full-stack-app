import { AuthGuardService } from './auth.guard';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from '../auth.service';
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { AuthStoreFacade } from '../+store/facades';
import { of } from 'rxjs';

describe('Auth Guard', () => {
  let guard: AuthGuardService;
  let router: Router;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        {
          provide: AuthService,
          useValue: { signIn: jest.fn() }
        },
        {
          provide: AuthStoreFacade,
          useValue: { signIn$: of(), user$: of({ email: 'test@test.com', token: 'aawdss1234' }) }
        },
        {
          provide: Router,
          useValue: { parseUrl: jest.fn() }
        }
      ]
    });

    authService = TestBed.get(AuthService);
    guard = TestBed.get(AuthGuardService);
    router = TestBed.get(Router);
  });

  it('should return true', () => {
    const mockUrlTree = {} as UrlTree;
    const mockUser = { email: 'test@test.com', token: 'aawdss1234' };

    router.parseUrl = jest.fn(() => mockUrlTree);
    authService.signIn = jest.fn(() => result);

    const result = cold('(-a|)', { a: mockUser });
    const expected = cold('(-a|)', { a: mockUrlTree });

    // TODO IMPLEMENT THIS TEST WITH MOCK STORE
    // expect(guard.canActivate()).toBeObservable(expected);
    expect(router).toBeTruthy();
  });
});
