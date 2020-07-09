import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { UserStoreFacade } from '@app/users/+store/facades';

export interface UserForm {
  firstName: string;
  lastName: string;
  phone: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  public currentUser$ = this.userStoreFacade.user$;
  constructor(private readonly userStoreFacade: UserStoreFacade, private readonly formBuilder: FormBuilder) {}

  public userForm: FormGroup;
  ngOnInit(): void {
    this.currentUser$.pipe(take(1)).subscribe((user) => {
      this.userForm = this.formBuilder.group({
        firstName: this.formBuilder.control(user ? user.firstName : '', Validators.required),
        lastName: this.formBuilder.control(user ? user.lastName : '', Validators.required),
        phone: this.formBuilder.control(user ? user.phone : '', Validators.required)
      });
    });
  }

  public onSubmit(userForm: UserForm, id: string) {
    if (!this.userForm.valid) return;
    this.userStoreFacade.updateUser(id, userForm);
  }

  public ngOnDestroy() {
    this.userStoreFacade.clear();
  }
}
