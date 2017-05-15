import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { ListComponent }           from './list.component';
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
        ListComponent
    ],
    exports: [
        ListComponent
    ],
    providers: [
    ]
})
export class ListModule { }
