import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() public user: IUser;

  @Output() public signOutSelected = new EventEmitter();

  public onSignOut() {
    this.signOutSelected.emit();
  }
}
