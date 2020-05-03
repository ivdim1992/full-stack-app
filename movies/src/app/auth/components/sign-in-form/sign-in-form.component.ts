import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

export interface ISignInForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInFormComponent implements OnInit {
  public signInForm: FormGroup;
  public testId = '123';
  @Output() public signInFormValues = new EventEmitter<ISignInForm>();

  constructor(private readonly formBuilder: FormBuilder, private readonly router: Router) {}

  public ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required])
    });
  }

  public onSubmit(value: ISignInForm) {
    if (!this.signInForm.valid) return;

    this.signInFormValues.emit(value);
  }
}
