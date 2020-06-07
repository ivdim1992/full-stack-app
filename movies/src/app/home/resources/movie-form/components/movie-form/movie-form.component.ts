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

export interface ICreateMovieForm {
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
  @Input() options: string[] = [];
  @Output() public movieFormEmitter = new EventEmitter<ICreateMovieForm>();

  constructor(private readonly formBuilder: FormBuilder, private readonly cd: ChangeDetectorRef) {}

  public ngOnInit() {
    this.movieForm = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required]),
      year: this.formBuilder.control('', [Validators.required, Validators.pattern(`[0-9]+`)]),
      poster: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('', [Validators.required]),
      genres: [null, Validators.required]
    });
  }

  public onSubmit(movieForm) {
    if (!this.movieForm.valid) return this.cd.markForCheck();

    this.movieFormEmitter.emit(movieForm.value);
  }
}
