import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapTestComponent } from './bootstrap-test.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'bootstrap-test', component: BootstrapTestComponent }
    ])
  ],
  exports: [RouterModule]
})
export class BootstrapTestRoutingModule { }
