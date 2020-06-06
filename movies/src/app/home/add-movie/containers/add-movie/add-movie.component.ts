import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  public movieForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.movieForm = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required]),
      year: this.formBuilder.control('', [Validators.required]),
      avatar: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('', [Validators.required])
    });
  }

  public onSubmit(form) {
    console.log(form);
  }
}
