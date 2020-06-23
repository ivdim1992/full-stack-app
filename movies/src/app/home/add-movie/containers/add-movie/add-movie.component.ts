import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { IMovieOutput } from '../../interfaces';
import { MovieFormComponent, IMovieForm } from 'src/app/home/resources/movie-form/components';
import { CreateMovieStoreFacade } from '../../+store/facades';
import { GenresEnum } from 'src/app/shared/enums';
import { produce } from 'immer';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddMovieComponent implements OnInit {
  public options: string[] = [];

  constructor(private readonly createMovieStoreFacade: CreateMovieStoreFacade) {}

  @ViewChild(MovieFormComponent) public movieFormComp: MovieFormComponent;

  public ngOnInit() {
    this.options = Array.of(
      GenresEnum.ACTION,
      GenresEnum.COMEDY,
      GenresEnum.DRAMA,
      GenresEnum.HORROR,
      GenresEnum.FANTASY,
      GenresEnum.ADVENTURE,
      GenresEnum.ANIMATION,
      GenresEnum.CRIME,
      GenresEnum.FAMILY,
      GenresEnum.MYSTERY
    );
  }

  public onSubmit(movieForm: IMovieForm) {
    const movieOutput = this.buildMovieOutput(movieForm);
    this.createMovieStoreFacade.createMovie(movieOutput);
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
