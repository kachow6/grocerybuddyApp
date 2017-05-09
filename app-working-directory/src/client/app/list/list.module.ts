import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ListRoutingModule,
    SharedModule,
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
