import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FridgeComponent } from './fridge.component';
import { FridgeRoutingModule } from './fridge-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    FridgeRoutingModule,
    SharedModule,
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
