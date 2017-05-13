import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { FridgeComponent }         from './fridge.component';
import { SharedModule }            from '../shared/shared.module';
import { FormsModule }             from '@angular/forms';

import { BsDropdownModule, AccordionModule, AlertModule, ButtonsModule,
         CarouselModule, CollapseModule, DatepickerModule, ModalModule,
         PaginationModule, PopoverModule, ProgressbarModule, RatingModule,
         SortableModule, TabsModule, TimepickerModule, TooltipModule,
         TypeaheadModule }        from 'ngx-bootstrap';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,

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
    FridgeComponent
  ],
  exports: [
    FridgeComponent
  ],
  providers: [
  ]
})
export class FridgeModule { }
