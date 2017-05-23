import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

import { FormsModule }              from '@angular/forms';
import { Ng2CompleterModule }       from 'ng2-completer';

import { SharedModule }             from '../shared/shared.module';
import { MainRoutingModule }        from './main-routing.module';
import { MainComponent }            from './main.component';

@NgModule({
    imports:      [
        MainRoutingModule,
        SharedModule,
        FormsModule,
        Ng2CompleterModule
    ],
    declarations: [
        MainComponent
    ],
    exports:      [],
    providers:    []
})
export class MainModule {}
