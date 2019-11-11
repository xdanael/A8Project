import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';
import {routerTransition} from '../../../@shared/animation/router.animations';
import {WiserAPI} from './class/WiserAPI';

import { WiserApiServiceMock } from '../../../@shared/mocks/wiser.mock.service';
import {SchemaService} from './form-schema/schema.service';

@Component({
    selector: 'app-blank-page',
    templateUrl: './wiser-formly.component.html',
    styleUrls: ['./wiser-formly.component.scss'],
    animations: [routerTransition()]
})
export class WiserFormlyComponent implements OnInit {
    form = new FormGroup({});
    model: WiserAPI;
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[];

    constructor(private schemaService: SchemaService,
                private wiserApiServiceMock: WiserApiServiceMock) {}

    ngOnInit() {
        /**Caricare Model MOCK**/
        // this.model = this.wiserApiServiceMock.getWiser();
        this.fields = this.schemaService.getFormSchema();
        // alert(JSON.stringify(this.model));
    }

    onSubmit(wiserInfo) {
        alert(JSON.stringify(wiserInfo));
    }
}
