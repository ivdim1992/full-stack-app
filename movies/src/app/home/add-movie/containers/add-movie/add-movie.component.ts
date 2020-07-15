import { Component, OnInit, ViewChild, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MovieFormComponent } from 'src/app/home/resources/movie-form/components';
import { CreateMovieStoreFacade } from '../../+store/facades';
import { GenresEnum } from 'src/app/shared/enums';
import { FileUploader } from 'ng2-file-upload';
import { AuthStoreFacade } from '@app/auth/+store/facades';
import { take } from 'rxjs/operators';
import { GLOBAL_SETTINGS, GlobalSettings } from '@app/shared/tokens';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddMovieComponent implements OnInit {
  public options: string[] = [];
  public URL = `${this.settings.api.baseURL}/movies`;
  public user$ = this.authStoreFacade.user$;
  public uploader: FileUploader;

  @ViewChild(MovieFormComponent) public movieForm: MovieFormComponent;

  constructor(
    private readonly createMovieStoreFacade: CreateMovieStoreFacade,
    private readonly authStoreFacade: AuthStoreFacade,
    @Inject(GLOBAL_SETTINGS)
    private readonly settings: GlobalSettings
  ) {}

  public ngOnInit() {
    this.options = Object.values(GenresEnum);

    this.user$.pipe(take(1)).subscribe((user) => {
      this.uploader = new FileUploader({
        url: this.URL,
        itemAlias: 'image',
        authToken: user.token
      });
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    // tslint:disable-next-line: no-any
    this.uploader.onCompleteItem = (item: any, response: string) => {
      this.createMovieStoreFacade.createMovie(JSON.parse(response));
    };

    this.uploader.onBuildItemForm = (item, form) => {
      form.append('description', this.movieForm.value.description);
      form.append('genres', this.movieForm.value.genres);
      form.append('title', this.movieForm.value.title);
      form.append('year', this.movieForm.value.year);
    };
  }
}
