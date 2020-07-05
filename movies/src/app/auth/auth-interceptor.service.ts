import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import Url from 'url-parse';
import { GLOBAL_SETTINGS, GlobalSettings } from '../shared/tokens';
import { switchMap, catchError, first } from 'rxjs/operators';
import { AuthStoreFacade } from './+store/facades';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public whiteListURL: string[] = [];

  constructor(
    private readonly authStoreFacade: AuthStoreFacade,
    @Inject(GLOBAL_SETTINGS) private readonly globalSettings: GlobalSettings
  ) {
    this.whiteListURL = this.globalSettings.whiteListedHosts;
  }

  private isWhitelisted(url: string): boolean {
    const urlClass = new Url(url);

    return this.whiteListURL.some((el) => el !== urlClass.href);
  }

  // tslint:disable-next-line: no-any
  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isWhitelisted(req.url)) return next.handle(req);

    return this.authStoreFacade.user$.pipe(
      first(),
      switchMap((user) => {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${user.token}`
          }
        });

        return next.handle(req);
      }),
      catchError(() => next.handle(req))
    );
  }
}
