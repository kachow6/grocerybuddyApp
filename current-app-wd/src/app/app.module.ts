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

import { AngularFireModule }      from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment }            from '../environments/environment';

import { DateTools, User } from './shared/user-service/user';



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

        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
    },
    { 
        provide: HAMMER_GESTURE_CONFIG, 
        useClass: MyHammerConfig 
    }],
    bootstrap: [AppComponent]

})
export class AppModule {
}
