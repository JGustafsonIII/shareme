import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthZeroModule } from './auth-zero/auth-zero.module';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthZeroModule,
    AuthModule.forRoot({
      domain: env.Domain,
      clientId: env.ClientID
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
