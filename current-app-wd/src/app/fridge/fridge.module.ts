import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { FridgeComponent }         from './fridge.component';
import { SharedModule }            from '../shared/shared.module';
import { FormsModule }             from '@angular/forms';

import { BsRootModule }            from 'ngx-bootstrap';

import { Ng2CompleterModule }      from 'ng2-completer';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        BsRootModule,
        Ng2CompleterModule
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
