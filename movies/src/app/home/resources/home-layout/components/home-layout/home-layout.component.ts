import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthStoreFacade } from 'src/app/auth/+store/facades';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLayoutComponent {
  public user$ = this.authStoreFacade.user$;

  constructor(private readonly authStoreFacade: AuthStoreFacade) {}

  public onSignOut() {
    this.authStoreFacade.signOut();
  }

  public onSelectGenre(genre: string) {}
}
