import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import sanityClient from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import { environment as env } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SanityService {

  constructor(private router: Router) { }

  sanityClientCredentials = {
    option: sanityClient({
      projectId: env.SanityProjectID,
      dataset: "production",
      apiVersion: '2021-11-16',
      useCdn: true,
      token: env.SanityToken
    })
  }

  urlFor = (source: any) => {
    return imageUrlBuilder(this.sanityClientCredentials.option).image(source);
  }

  async addUser(user: User) {
    return await this.sanityClientCredentials.option.createIfNotExists(user)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(e => {
        console.warn(user);

      })
  }
  // async getUser(): Promise<User> {
  //  return await 
  //}

}
