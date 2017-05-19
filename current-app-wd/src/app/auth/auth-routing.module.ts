import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConnectComponent } from './connect.component';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    RouterModule.forChild([

    ])
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
