import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { HomeComponent }          from './home.component';
import { SharedModule }           from '../shared/shared.module';
import { FormsModule }            from '@angular/forms';

import { BsRootModule }            from 'ngx-bootstrap';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        BsRootModule
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: []
})
export class HomeModule { }
