import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IRegisterForm } from '../../components';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public onSubmitRegisterForm(values: IRegisterForm) {
    debugger;
  }
}
