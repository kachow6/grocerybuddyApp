import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BstestComponent } from './bstest.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'bstest', component: BstestComponent }
    ])
  ],
  exports: [RouterModule]
})
export class BstestRoutingModule { }
