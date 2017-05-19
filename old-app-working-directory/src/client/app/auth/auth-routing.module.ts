import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConnectComponent } from './connect.component';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: ConnectComponent },
      { path: 'register', component: RegisterComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
