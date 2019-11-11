import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../@shared/animation/router.animations';

@Component({
    selector: 'app-blank-page',
    templateUrl: './dettaglio.component.html',
    styleUrls: ['./dettaglio.component.scss'],
    animations: [routerTransition()]
})
export class DettaglioComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
