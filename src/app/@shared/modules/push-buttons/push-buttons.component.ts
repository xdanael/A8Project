import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-push-buttons',
    templateUrl: './push-buttons.component.html',
    styleUrls: ['./push-buttons.component.scss']
})
export class PushButtonsComponent implements OnInit {
    @Input() route: string;
    @Input() back: string;
    constructor() {}

    ngOnInit() {}

    printPage() {
        window.print();
    }

}
