import { NgModule }                from '@angular/core';

import { CommonModule }            from '@angular/common';
import { AuthRoutingModule }       from './auth-routing.module';
import { SharedModule }            from '../shared/shared.module';

import { AuthComponent }           from './auth.component';
import { RegisterComponent }       from './register.component';
import { ConnectComponent }        from './connect.component';

import { BsRootModule }            from 'ngx-bootstrap';

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule,
        BsRootModule
    ],
    declarations: [
        AuthComponent,
        ConnectComponent,
        RegisterComponent,
    ],
    exports: [
        AuthComponent
    ],
    providers: [
    ]
})
export class AuthModule { }
