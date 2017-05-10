import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared/shared.module';

import { BsDropdownModule, AccordionModule, AlertModule, ButtonsModule,
         CarouselModule, CollapseModule, DatepickerModule, ModalModule,
         PaginationModule, PopoverModule, ProgressbarModule, RatingModule,
         SortableModule, TabsModule, TimepickerModule, TooltipModule,
         TypeaheadModule }        from 'ngx-bootstrap';

import { SwitchComponent } from 'angular2-bootstrap-switch/components';

@NgModule({
  imports: [
    SettingsRoutingModule,
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
    SettingsComponent,
    SwitchComponent,
  ],
  exports: [
    SettingsComponent
  ],
  providers: [
  ]
})
export class SettingsModule { }
