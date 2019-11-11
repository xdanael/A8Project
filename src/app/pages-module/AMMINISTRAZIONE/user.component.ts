import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../@shared/animation/router.animations';
import {Router} from '@angular/router';



@Component({
    selector: 'app-user-father',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    animations: [routerTransition()]
})
export class UserComponent implements OnInit {

    constructor( private route: Router) { }

    ngOnInit() {}

    showUserDetaill() {
        this.route.navigate(['admin-user-detail']);
    }
}
