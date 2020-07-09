import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthStoreFacade } from '@app/auth/+store/facades';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
  public user$ = this.authStoreFacade.user$;
  constructor(private readonly authStoreFacade: AuthStoreFacade) {}
}
