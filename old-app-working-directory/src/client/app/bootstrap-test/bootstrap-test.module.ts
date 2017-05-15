import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapTestComponent } from './bootstrap-test.component';
import { BootstrapTestRoutingModule } from './bootstrap-test-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BsDropdownModule, AccordionModule, AlertModule, ButtonsModule,
         CarouselModule, CollapseModule, DatepickerModule, ModalModule,
         PaginationModule, PopoverModule, ProgressbarModule, RatingModule,
         SortableModule, TabsModule, TimepickerModule, TooltipModule,
         TypeaheadModule }        from 'ngx-bootstrap';

@NgModule({
  imports: [
    BootstrapTestRoutingModule,
    SharedModule,

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
    BootstrapTestComponent
  ],
  exports: [
    BootstrapTestComponent
  ],
  providers: [
  ]
})
export class BootstrapTestModule { }
