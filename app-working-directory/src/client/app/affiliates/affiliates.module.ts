import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliatesComponent } from './affiliates.component';
import { AffiliatesRoutingModule } from './affiliates-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AffiliatesRoutingModule,
    SharedModule,
  ],
  declarations: [
    AffiliatesComponent
  ],
  exports: [
    AffiliatesComponent
  ],
  providers: [
  ]
})
export class AffiliatesModule { }
