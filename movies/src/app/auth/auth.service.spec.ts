import { AuthService } from './auth.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GLOBAL_SETTINGS } from '../shared/tokens';

import { environment as Settings } from '../../environments/environment';

describe('Auth Service', () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, { provide: GLOBAL_SETTINGS, useValue: Settings }]
    });

    httpMock = TestBed.get(HttpTestingController);
    authService = TestBed.get(AuthService);
  });

  it('should call login method and return user', (done) => {
    const data = { email: 'test@test.com', password: '123456' };
    const mockUser = { email: 'test@test.com', token: 'someToken' };

    authService.signIn(data).subscribe((result) => {
      expect(result.email).toEqual(data.email);
      done();
    });

    const request = httpMock.expectOne(`${authService.baseURL}/auth/login`);
    expect(request.request.method).toBe('POST');
    request.flush(mockUser);
    httpMock.verify();
  });

  it('should call register method and register the user', (done) => {
    const data = { email: 'test@test.com', password: '123456' };
    const resp = { message: 'Successfully registered' };

    authService.register(data).subscribe((result) => {
      expect(result.message).toEqual(resp.message);
      done();
    });

    const request = httpMock.expectOne(`${authService.baseURL}/auth/register`);
    expect(request.request.method).toBe('POST');
    request.flush(resp);
    httpMock.verify();
  });

  it('should call signOut method and logOut the user', (done) => {
    const resp = { message: 'Sign out successfully' };

    authService.signOut().subscribe((result) => {
      expect(result.message).toEqual(resp.message);
      done();
    });

    const request = httpMock.expectOne(`${authService.baseURL}/auth/logout`);
    expect(request.request.method).toBe('POST');
    request.flush(resp);
    httpMock.verify();
  });
});
