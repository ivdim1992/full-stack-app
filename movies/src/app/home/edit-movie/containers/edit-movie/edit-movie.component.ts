import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EditMovieStoreFacade } from '../../+store/facades';
import { IMovieOutput } from '../../interfaces';
import { produce } from 'immer';
import { GenresEnum } from '@app/shared/enums';
import { IMovieForm } from '@app/home/resources/movie-form/components';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditMovieComponent implements OnInit {
  public movie$ = this.editMovieStoreFacade.movie$;
  public options: string[] = [];

  constructor(private readonly editMovieStoreFacade: EditMovieStoreFacade) {}

  ngOnInit() {
    this.options = Object.values(GenresEnum);
  }

  public onSubmit(movieId: string, movieForm: IMovieForm) {
    const movieOutput = this.buildMovieOutput(movieForm);
    this.editMovieStoreFacade.updateMovie(movieId, movieOutput);
  }

  public buildMovieOutput(movieForm: IMovieForm): IMovieOutput {
    const output = produce<IMovieOutput>(movieForm, (baseState) => {
      (baseState.description = movieForm.description),
        (baseState.genres = movieForm.genres),
        (baseState.poster = movieForm.poster),
        (baseState.title = movieForm.title),
        (baseState.year = movieForm.year);
    });

    return output;
  }
}
