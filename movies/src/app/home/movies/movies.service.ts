import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IMovie } from 'src/app/shared/interfaces';
import { IFavoriteMovie } from 'src/app/shared/interfaces/favorite-movie.interface';
import { IMovieOutput } from '../add-movie/interfaces';
import { IFavoriteMovieInput } from '../favorites/interfaces';
import { GLOBAL_SETTINGS, GlobalSettings } from '@app/shared/tokens';

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

  public createMovie(movieOutput: IMovieOutput): Observable<IMovie> {
    return this.http.post<IMovie>(`${this.baseURL}/movies`, movieOutput);
  }

  public updateMovie(movieOutput: IMovieOutput, movieId: string): Observable<IMovie> {
    return this.http.put<IMovie>(`${this.baseURL}/movies/${movieId}`, movieOutput);
  }

  public deleteMovie(movieId: string): Observable<null> {
    return this.http.delete<null>(`${this.baseURL}/movies/${movieId}`);
  }

  public getFavoriteMovies(): Observable<IFavoriteMovieInput[]> {
    return this.http.get<IFavoriteMovieInput[]>(`${this.baseURL}/movies/favorites/all`);
  }

  // tslint:disable-next-line: no-any
  public uploadPoster(poster: any): Observable<any> {
    const input = new FormData();
    input.append('url', poster);
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'multipart/form-data',
    //     Accepts: 'application/json'
    //   })
    // };
    // tslint:disable-next-line: no-any
    return this.http.post<any>(`${this.baseURL}/file-upload`, poster);
  }

  public setOrRemoveFromFavorites(movieId: string, setOrRemove: boolean): Observable<IFavoriteMovie> {
    let params = new HttpParams();
    params = params.set('isFavorite', setOrRemove.toString());

    return this.http.post<IFavoriteMovie>(`${this.baseURL}/movies/${movieId}/favorites`, null, {
      params
    });
  }
}
