import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { FridgeComponent }         from './fridge.component';
import { SharedModule }            from '../shared/shared.module';
import { FormsModule }             from '@angular/forms';

import { BsRootModule }            from 'ngx-bootstrap';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        BsRootModule
    ],
    declarations: [
        FridgeComponent
    ],
    exports: [
        FridgeComponent
    ],
    providers: [
    ]
})
export class FridgeModule { }
