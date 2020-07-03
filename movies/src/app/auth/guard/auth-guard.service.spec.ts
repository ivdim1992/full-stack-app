import { AuthGuardService } from './auth.guard';
import { Router, UrlTree } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';

describe('Auth Guard Service', () => {
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
          provide: Router,
          useValue: { parseUrl: jest.fn() }
        }
      ]
    });

    guard = TestBed.get(AuthGuardService);
    router = TestBed.get(Router);
    authService = TestBed.get(AuthService);
  });

  it('Should redirect to the movies', () => {
    const mockURLThee = {} as UrlTree;
    const mockUser = { user: 'Gosho' };

    router.parseUrl = jest.fn(() => mockURLThee);

    expect(router.parseUrl).toHaveBeenCalledWith('/dashboard');
  });
});
