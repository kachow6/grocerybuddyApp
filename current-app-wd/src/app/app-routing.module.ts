import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConnectComponent } from './auth/connect.component';
import { RegisterComponent } from './auth/register.component';

import { LoggedOutGuard } from './shared/user-service/logged-out-guard.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/main/home',
            },
            {
                path: 'login',
                component: ConnectComponent,
                canActivate: [ LoggedOutGuard ]
            },
            {
                path: 'register',
                component: RegisterComponent,
                canActivate: [ LoggedOutGuard ]
            }
            /* define app module routes here, e.g., to lazily load a module
                 (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
             */
        ])
    ],
    exports: [RouterModule],
    providers: [ LoggedOutGuard ]
})
export class AppRoutingModule { }

