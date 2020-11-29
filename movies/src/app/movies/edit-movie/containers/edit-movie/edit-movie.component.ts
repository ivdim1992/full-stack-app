import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { EditMovieStoreFacade } from '../../+store/facades';
import { IMovieOutput } from '../../interfaces';
import { GenresEnum } from '@app/shared/enums';
import { IMovieForm } from '@app/movies/resources/movie-form/components';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditMovieComponent implements OnInit, OnDestroy {
  public movie$ = this.editMovieStoreFacade.movie$;
  public options: string[] = [];
  public navigateBack: string;

  constructor(
    private readonly editMovieStoreFacade: EditMovieStoreFacade,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.pipe(take(1)).subscribe((params) => (this.navigateBack = params.backRoute));
    this.options = Object.values(GenresEnum);
  }

  public onSubmit(movieId: string, movieForm: IMovieForm) {
    const movieOutput = this.buildMovieOutput(movieForm);
    this.editMovieStoreFacade.updateMovie(movieId, movieOutput);
  }

  public buildMovieOutput(movieForm: IMovieForm): IMovieOutput {
    return {
      description: movieForm.description,
      genres: movieForm.genres,
      title: movieForm.title,
      year: movieForm.year
    };
  }

  ngOnDestroy() {
    this.editMovieStoreFacade.clear();
  }
}
