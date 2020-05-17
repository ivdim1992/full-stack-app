import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GLOBAL_SETTINGS, GlobalSettings } from '../shared/tokens';
import { IUser, IAuth } from '../shared/interfaces';

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

  public signIn(body: IAuth): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseURL}/auth/login`, body);
  }

  public register(body: IAuth): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseURL}/auth/register`, body);
  }

  public signOut(data = null): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseURL}/auth/logout`, data);
  }
}
