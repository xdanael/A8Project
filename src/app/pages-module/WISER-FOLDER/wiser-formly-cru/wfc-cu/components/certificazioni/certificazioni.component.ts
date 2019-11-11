import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-certificazioni',
    templateUrl: './certificazioni.component.html',
    styleUrls: ['./certificazioni.component.scss']
})
export class CertificazioniComponent implements OnInit {

    @Input() company_name: string;

    ngOnInit() {}

    constructor() { }
}
