import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { BstestModule } from './bstest/bstest.module';
import { SharedModule } from './shared/shared.module';

const FIREBASE_APP_CONFIG = {
  apiKey: '<->',
  authDomain: '<->',
  databaseURL: '<->',
  storageBucket: '<->',
};

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_APP_CONFIG),

    AboutModule,
    HomeModule,
    BstestModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
