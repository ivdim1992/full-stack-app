import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IMovie } from 'src/app/shared/interfaces';
import { GlobalSettings, GLOBAL_SETTINGS } from 'src/app/shared/tokens';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  public baseURL: string;

  constructor(
    @Inject(GLOBAL_SETTINGS)
    private readonly settings: GlobalSettings,
    private readonly http: HttpClient
  ) {
    this.baseURL = this.settings.api.baseURL;
  }

  public getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${this.baseURL}/movies`);
  }

  public getMovie(movieId: string): Observable<IMovie> {
    return this.http.get<IMovie>(`${this.baseURL}/movies/${movieId}`);
  }

  public createMovie(movieOutput: any, movieId: string): Observable<IMovie> {
    return this.http.post<IMovie>(`${this.baseURL}/movies/${movieId}`, movieOutput);
  }

  public updateMovie(movieOutput: any, movieId: string): Observable<IMovie> {
    return this.http.put<IMovie>(`${this.baseURL}/movies/${movieId}`, movieOutput);
  }

  public deleteMovie(movieId: string): Observable<null> {
    return this.http.delete<null>(`${this.baseURL}/movies/${movieId}`);
  }
}
