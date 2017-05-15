import { Component } from '@angular/core';
import './operators';

import { UserService }      from './shared/user-service/user.service';
import { Router,
         NavigationStart }  from '@angular/router';

/**
 * This class represents the main application component.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent {
    
    constructor(private router: Router,
                private userService: UserService) {

        // Updates this.pageTitle based on the URL.
        router.events.subscribe((navEvent) => {
            if (navEvent instanceof NavigationStart ) {

                // Make sure currentList isn't null
                if ((userService.getCurrentList() === null)
                 && (navEvent.url === '/list')) {
                    this.router.navigateByUrl('');
                }
            }
        });
    }
}
