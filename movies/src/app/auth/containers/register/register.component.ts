import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IRegisterForm } from '../../components';
import { AuthStoreFacade } from '../../+store/facades';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  constructor(private readonly authStoreFacade: AuthStoreFacade) {}

  public onSubmitRegisterForm(values: IRegisterForm) {
    this.authStoreFacade.register(values);
  }
}
