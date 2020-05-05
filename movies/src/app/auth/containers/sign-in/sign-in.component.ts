import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISignInForm } from '../../components';
import { AuthStoreFacade } from '../../+store/facades';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
  constructor(private readonly authStoreFacade: AuthStoreFacade) {}

  public ngOnInit(): void {}

  public onSubmitSignIn(values: ISignInForm) {
    const { email, password } = values;

    this.authStoreFacade.signIn(email, password);
  }
}
