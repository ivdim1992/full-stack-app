import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EditMovieStoreFacade } from '../../+store/facades';
import { GenresEnum } from 'src/app/shared/enums';
import { IMovieForm } from 'src/app/home/resources/movie-form/components';
import { IMovieOutput } from '../../interfaces';
import { produce } from 'immer';

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
    this.options = Array.of(
      GenresEnum.ACTION,
      GenresEnum.COMEDY,
      GenresEnum.DRAMA,
      GenresEnum.HORROR,
      GenresEnum.FANTASY
    );
  }

  public onSubmit(movieForm: IMovieForm, movieId: string) {
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
