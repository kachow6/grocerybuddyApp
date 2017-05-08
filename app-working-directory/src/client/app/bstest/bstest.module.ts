import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BstestComponent } from './bstest.component';
import { BstestRoutingModule } from './bstest-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';

import { DragulaService, dragula, DragulaModule } from 'ng2-dragula/ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    BstestRoutingModule,
    SharedModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    DragulaModule
  ],
  declarations: [BstestComponent],
  exports: [BstestComponent],
  providers: [NameListService]
})
export class BstestModule { }
