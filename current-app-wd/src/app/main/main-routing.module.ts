import { NgModule }                 from '@angular/core';
import { RouterModule }             from '@angular/router';

import { MainComponent }            from './main.component';
import { AffiliatesComponent }      from '../affiliates/affiliates.component';
import { FridgeComponent }          from '../fridge/fridge.component';
import { HomeComponent }            from '../home/home.component';
import { ListComponent }            from '../list/list.component';
import { SettingsComponent }        from '../settings/settings.component';

import { LoggedInGuard } from '../shared/user-service/logged-in-guard.service';

@NgModule({
    imports: [
        RouterModule.forChild([
        {
            path: 'main',
            component: MainComponent,
            canActivate: [ LoggedInGuard ],
            children: [
                { path: 'affiliates', component: AffiliatesComponent },
                { path: 'fridge', component: FridgeComponent },
                { path: 'home', redirectTo: '', pathMatch: 'full' },
                { path: '', component: HomeComponent },
                { path: 'list', component: ListComponent },
                { path: 'settings', component: SettingsComponent }
            ]
        }
        ])
    ],
    exports: [ RouterModule ],
    providers: [ LoggedInGuard ]
})
export class MainRoutingModule { }
