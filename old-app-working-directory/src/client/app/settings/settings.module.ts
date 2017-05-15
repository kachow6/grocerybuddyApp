import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { SettingsComponent }       from './settings.component';
import { SharedModule }            from '../shared/shared.module';

import { BsRootModule }            from 'ngx-bootstrap';

@NgModule({
    imports: [
        SharedModule,
        BsRootModule
    ],
    declarations: [
        SettingsComponent
    ],
    exports: [
        SettingsComponent
    ],
    providers: [
    ]
})
export class SettingsModule { }
