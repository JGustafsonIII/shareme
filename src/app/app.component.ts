import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from './models/user';
import { SanityService } from './shared/sanity.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ShareMe';
  loading: boolean = false;

  constructor(
    public authService: AuthService,
    private sanityService: SanityService,
    private router: Router
  ) {
    this.authService.user$.subscribe((user) => {
      if (user !== null && user !== undefined) {
        const doc: User = {
          _id: user.sub ? user.sub.replace('|', '-') : '-1',
          _type: 'user',
          userName: user.name,
          image: user.picture,
        };
        this.sanityService.addOrCreateUser(doc);
      }
    });

    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
