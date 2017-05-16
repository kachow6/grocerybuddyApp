import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConnectComponent } from './auth/connect.component';
import { RegisterComponent } from './auth/register.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
        {
            path: '',
            pathMatch: 'full',
            redirectTo: '/main'
        },
        { path: 'login', component: ConnectComponent },
        { path: 'register', component: RegisterComponent }
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

