import { Component, NgModule } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import { Alert } from './_models';
import { AlertComponent } from './_components';



@Component({
selector: 'app', 
templateUrl: 'app.component.html' 
})
export class AppComponent {
    user: User;


    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}