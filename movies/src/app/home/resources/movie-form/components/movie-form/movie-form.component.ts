import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMovieInput } from 'src/app/home/add-movie/interfaces';

export interface IMovieForm {
  title: string;
  year: number;
  poster: string;
  description: string;
  genres: string[];
}

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieFormComponent implements OnInit {
  public movieForm: FormGroup;
  public _movie: IMovieInput;
  @Input() public buttonTitle: string;

  @Input() public options: string[] = [];
  @Input() public set movie(movie) {
    if (!movie) return;
    this._movie = movie;
  }
  public get movie() {
    return this._movie;
  }

  @Output() public movieFormEmitter = new EventEmitter<IMovieForm>();

  constructor(private readonly formBuilder: FormBuilder, private readonly cd: ChangeDetectorRef) {}

  public ngOnInit() {
    this.buildForm(this.movie);
  }

  public buildForm(incomingMovie?: IMovieInput) {
    this.movieForm = this.formBuilder.group({
      title: this.formBuilder.control(incomingMovie ? incomingMovie.title : '', [Validators.required]),
      year: this.formBuilder.control(incomingMovie ? incomingMovie.year : '', [
        Validators.required,
        Validators.pattern(`[0-9]+`)
      ]),
      poster: this.formBuilder.control(incomingMovie ? incomingMovie.poster : '', [Validators.required]),
      description: this.formBuilder.control(incomingMovie ? incomingMovie.description : '', [Validators.required]),
      genres: [incomingMovie ? incomingMovie.genres : '', Validators.required]
    });
  }

  public onSubmit(movieForm) {
    if (!this.movieForm.valid) return this.cd.markForCheck();

    this.movieFormEmitter.emit(movieForm.value);
  }
}