import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/shared/interfaces';
import { GLOBAL_SETTINGS, GlobalSettings } from '@app/shared/tokens';
import { IUserOutput } from './interfaces';

@Injectable({ providedIn: 'root' })
export class UserService {
  public baseURL: string;

  constructor(
    @Inject(GLOBAL_SETTINGS)
    private readonly settings: GlobalSettings,
    private readonly http: HttpClient
  ) {
    this.baseURL = this.settings.api.baseURL;
  }

  public getUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseURL}/users/${id}`);
  }

  public updateUser(user: IUserOutput, id: string): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseURL}/users/${id}`, user);
  }
}
