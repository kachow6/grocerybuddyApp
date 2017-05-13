import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { AffiliatesComponent }    from './affiliates.component';
import { SharedModule }           from '../shared/shared.module';
import { BsRootModule }           from 'ngx-bootstrap';


@NgModule({
    imports: [
        SharedModule,
        BsRootModule
    ],
    declarations: [
        AffiliatesComponent
    ],
    exports: [
        AffiliatesComponent
    ],
    providers: [
    ]
})
export class AffiliatesModule { }
