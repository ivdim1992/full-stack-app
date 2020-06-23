import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface IRegisterForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit {
  public registerForm: FormGroup;

  @Output() public registerFormValues = new EventEmitter<IRegisterForm>();

  constructor(private readonly formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)])
    });
  }

  public onSubmit(value: IRegisterForm) {
    if (!this.registerForm.valid) return;

    this.registerFormValues.emit(value);
  }
}
