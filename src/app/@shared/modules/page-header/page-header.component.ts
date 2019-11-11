import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
    // INTESTAZIONE DELLA FUNZIONALITA
    @Input() heading: string;
    @Input() icon: string;
    @Input() route: string;
    // INTESTAZIONE DELLA PAGINA CORRENTE DELLA FUNZIONALITA
    @Input() curr_page_heading: string;
    @Input() curr_page_icon: string;

    constructor() {}

    ngOnInit() {}
}
