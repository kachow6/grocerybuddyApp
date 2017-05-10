import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { APP_BASE_HREF }          from '@angular/common';
import { HttpModule }             from '@angular/http';
import { AppComponent }           from './app.component';
import { AppRoutingModule }       from './app-routing.module';
import { AngularFireModule }      from 'angularfire2';

import { SharedModule }           from './shared/shared.module';
import { AboutModule }            from './about/about.module';

import { HomeModule }             from './home/home.module';
import { FridgeModule }           from './fridge/fridge.module';
import { ListModule }             from './list/list.module';
import { SettingsModule }         from './settings/settings.module';
import { AffiliatesModule }       from './affiliates/affiliates.module';
import { AuthModule }             from './auth/auth.module';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { BootstrapTestModule }    from './bootstrap-test/bootstrap-test.module';

import { BsDropdownModule, AccordionModule, AlertModule, ButtonsModule,
         CarouselModule, CollapseModule, DatepickerModule, ModalModule,
         PaginationModule, PopoverModule, ProgressbarModule, RatingModule,
         SortableModule, TabsModule, TimepickerModule, TooltipModule,
         TypeaheadModule }        from 'ngx-bootstrap';

const FIREBASE_APP_CONFIG = {
    apiKey: '<->',
    authDomain: '<->',
    databaseURL: '<->',
    storageBucket: '<->',
};




export class MyHammerConfig extends HammerGestureConfig  {
    overrides = <any>{
        // override hammerjs default configuration
        'pan': {threshold: 5},
        'swipe': {
            velocity: 0.4,
            threshold: 10,
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
        AngularFireModule.initializeApp(FIREBASE_APP_CONFIG),
    
        HomeModule,
        AboutModule,
    
        FridgeModule,
        ListModule,
        SettingsModule,
        AffiliatesModule,
        AuthModule,
    
        BootstrapTestModule,
    
        // BOOTSTRAP IMPORTS
        BsDropdownModule.forRoot(),
        AccordionModule.forRoot(),
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        DatepickerModule.forRoot(),
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        PopoverModule.forRoot(),
        ProgressbarModule.forRoot(),
        RatingModule.forRoot(),
        SortableModule.forRoot(),
        TabsModule.forRoot(),
        TimepickerModule.forRoot(),
        TooltipModule.forRoot(),
        TypeaheadModule.forRoot(),
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
