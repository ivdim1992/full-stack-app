import { Injectable, Inject } from '@angular/core';
import { IUser } from '../shared/interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GLOBAL_SETTINGS, GlobalSettings } from '../shared/tokens';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public baseURL: string;

  constructor(
    @Inject(GLOBAL_SETTINGS)
    private readonly settings: GlobalSettings,
    private readonly http: HttpClient
  ) {
    this.baseURL = this.settings.api.baseURL;
  }

  public signIn(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseURL}/auth/login`, { email, password });
  }

  public register(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseURL}/auth/register`, { email, password });
  }
}
