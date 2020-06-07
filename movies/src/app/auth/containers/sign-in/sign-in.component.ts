import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ISignInForm } from '../../components';
import { AuthStoreFacade } from '../../+store/facades';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  constructor(private readonly authStoreFacade: AuthStoreFacade) {}

  public onSubmitSignIn(values: ISignInForm) {
    this.authStoreFacade.signIn(values);
  }
}
