import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../@shared/animation/router.animations';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    animations: [routerTransition()]
})
export class BlankPageComponent   {

    constructor() {}
}
