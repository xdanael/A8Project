import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../@shared/animation/router.animations';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

export interface TabType {
    label: string;
    fields: FormlyFieldConfig[];
}

@Component({
    selector: 'app-blank-page',
    templateUrl: './mat-tab.component.html',
    styleUrls: ['./mat-tab.component.scss'],
    animations: [routerTransition()]
})
export class MatTabComponent  {
    model = {};
    tabs: TabType[] = [
        {
            label: 'Personal data',
            fields: [
                {
                    key: 'firstname',
                    type: 'input',
                    templateOptions: {
                        label: 'First name',
                        required: true,
                    },
                },
                {
                    key: 'age',
                    type: 'input',
                    templateOptions: {
                        type: 'number',
                        label: 'Age',
                        required: true,
                    },
                },
            ],
        },
        {
            label: 'Destination',
            fields: [
                {
                    key: 'country',
                    type: 'input',
                    templateOptions: {
                        label: 'Country',
                        required: true,
                    },
                },
            ],
        },
        {
            label: 'Day of the trip',
            fields: [
                {
                    key: 'day',
                    type: 'input',
                    templateOptions: {
                        type: 'date',
                        label: 'Day of the trip',
                        required: true,
                    },
                },
            ],
        },
    ];
    form = new FormArray(this.tabs.map(() => new FormGroup({})));
    options = this.tabs.map(() => <FormlyFormOptions>{});

    submit() {
        alert(JSON.stringify(this.model));
    }
}
