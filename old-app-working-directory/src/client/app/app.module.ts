import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { APP_BASE_HREF }          from '@angular/common';
import { HttpModule }             from '@angular/http';
import { AppComponent }           from './app.component';
import { AppRoutingModule }       from './app-routing.module';

import { SharedModule }           from './shared/shared.module';
import { AboutModule }            from './about/about.module';

import { HomeModule }             from './home/home.module';
import { FridgeModule }           from './fridge/fridge.module';
import { ListModule }             from './list/list.module';
import { SettingsModule }         from './settings/settings.module';
import { AffiliatesModule }       from './affiliates/affiliates.module';
import { AuthModule }             from './auth/auth.module';

import { MainModule }             from './main/main.module';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BootstrapTestModule }    from './bootstrap-test/bootstrap-test.module';
import { BsRootModule }           from 'ngx-bootstrap';

import { AngularFireModule, FirebaseAppConfig }      from 'angularfire2';
import { AngularFireAuthModule }  from 'angularfire2/auth';


export class FirebaseConfig implements FirebaseAppConfig {
    apiKey: "AIzaSyBpLETTqVsUSQswaIKAigSfF0Ry4TQjymM";
    authDomain: "learnfirebase01-27d30.firebaseapp.com";
    databaseURL: "https://learnfirebase01-27d30.firebaseio.com";
    projectId: "learnfirebase01-27d30";
    storageBucket: "learnfirebase01-27d30.appspot.com";
    messagingSenderId: "472845719986";
}



export class MyHammerConfig extends HammerGestureConfig  {
    overrides = <any>{
        // override hammerjs default configuration
        'pan': {
            threshold: 5
        },
        'swipe': {
            velocity: 0.4,
            threshold: 5,
            direction: 31 // /!\ ugly hack to allow swipe in all direction
        }
    }
}



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        SharedModule.forRoot(),
    
        HomeModule,
        AboutModule,
    
        FridgeModule,
        ListModule,
        SettingsModule,
        AffiliatesModule,
        AuthModule,

        MainModule,
    
        BootstrapTestModule,
        BsRootModule,

        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFireAuthModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>'
    },
    { 
        provide: HAMMER_GESTURE_CONFIG, 
        useClass: MyHammerConfig 
    }],
    bootstrap: [AppComponent]

})
export class AppModule {
}
