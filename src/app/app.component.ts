import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { SanityService } from './shared/sanity.service';
import { User } from './models/user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShareMe';
  constructor(public authService: AuthService, private sanityService: SanityService) {
    this.authService.user$.subscribe(user => {
      if (this.authService.getAccessTokenSilently()) {
        const doc: User = {
          _id: user?.sub ? user.sub.replace('|', '-') : '-1',
          _type: 'user',
          userName: user?.name,
          image: user?.picture
        }
        this.sanityService.addOrCreateUser(doc);
      }
    });
  }
}
