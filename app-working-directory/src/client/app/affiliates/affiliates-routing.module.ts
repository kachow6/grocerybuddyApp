import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AffiliatesComponent } from './affiliates.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'affiliates', component: AffiliatesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AffiliatesRoutingModule { }
