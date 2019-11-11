import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../@shared/animation/router.animations';

@Component({
    selector: 'app-blank-page',
    templateUrl: './crt-upd.component.html',
    styleUrls: ['./crt-upd.component.scss'],
    animations: [routerTransition()]
})
export class CrtUpdComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
