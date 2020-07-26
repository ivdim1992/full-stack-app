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
import { IMovieInput } from '@app/movies/add-movie/interfaces';

export interface IMovieForm {
  title: string;
  year: number;
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

  @Input() public shouldShow = false;
  @Input() public buttonTitle: string;

  @Input() public options: string[] = [];
  @Input() public set movie(movie) {
    if (!movie) return;
    this._movie = movie;
  }
  public get movie() {
    return this._movie;
  }

  @Output() public movieFormEmitter = new EventEmitter();

  constructor(private readonly formBuilder: FormBuilder, private readonly cd: ChangeDetectorRef) {}

  public ngOnInit() {
    this.buildForm(this.movie);
  }

  public buildForm(incomingMovie?: IMovieInput) {
    this.movieForm = this.formBuilder.group({
      title: this.formBuilder.control(incomingMovie ? incomingMovie.title : '', [Validators.required]),
      year: this.formBuilder.control(incomingMovie ? incomingMovie.year : '', [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]),
      description: this.formBuilder.control(incomingMovie ? incomingMovie.description : '', [Validators.required]),
      genres: [incomingMovie ? incomingMovie.genres : '', Validators.required]
    });
  }

  public onSubmit() {
    if (!this.movieForm.valid) return this.markAsTouched();

    this.movieFormEmitter.emit();
  }

  public get value(): IMovieForm {
    return this.movieForm ? this.movieForm.value : null;
  }

  public get dirty() {
    return this.movieForm ? this.movieForm.dirty : false;
  }

  public get valid(): boolean {
    return this.movieForm ? this.movieForm.valid : false;
  }

  public markAsTouched() {
    this.movieForm.markAllAsTouched();
    this.cd.markForCheck();
  }
}
