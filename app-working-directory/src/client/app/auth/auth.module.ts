import { NgModule }                from '@angular/core';

import { CommonModule }            from '@angular/common';
import { AuthRoutingModule }       from './auth-routing.module';
import { SharedModule }            from '../shared/shared.module';

import { AuthComponent }           from './auth.component';
import { RegisterComponent }       from './register.component';
import { ConnectComponent }        from './connect.component';

import { BsDropdownModule, AccordionModule, AlertModule, ButtonsModule,
         CarouselModule, CollapseModule, DatepickerModule, ModalModule,
         PaginationModule, PopoverModule, ProgressbarModule, RatingModule,
         SortableModule, TabsModule, TimepickerModule, TooltipModule,
         TypeaheadModule }        from 'ngx-bootstrap';

@NgModule({
  imports: [
    AuthRoutingModule,
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
    AuthComponent,
    ConnectComponent,
    RegisterComponent,
  ],
  exports: [
    AuthComponent
  ],
  providers: [
  ]
})
export class AuthModule { }
