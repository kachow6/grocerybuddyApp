import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FridgeComponent } from './fridge.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'fridge', component: FridgeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class FridgeRoutingModule { }
