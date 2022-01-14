import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { SanityService } from './shared/sanity.service';
import { v4 as uuidv4 } from 'uuid';

import { User } from './models/user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShareMe';
  user?: string;
  constructor(public auth: AuthService, private sanityService: SanityService) {
    this.auth.user$.subscribe(user => {
      if (user) {
        console.warn(user);

        const doc: User = {
          _id: user.sub ? user.sub.replace('|', '-') : '-1',
          _type: 'user',
          userName: user?.name,
          image: user?.picture
        }

        this.sanityService.addUser(doc);
      }
    });
  }
}
