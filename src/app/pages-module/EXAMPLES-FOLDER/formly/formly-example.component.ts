import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'app-formly',
    templateUrl: './formly-example.component.html',
    styleUrls: ['./formly-example.component.scss']
})
export class FormlyExampleComponent implements OnInit {
    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};

    fields: FormlyFieldConfig[] = [
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-6',
                    type: 'input',
                    key: 'firstName',
                    templateOptions: {
                        label: 'First Name',
                        required: true,
                    },
                },
                {
                    className: 'col-6',
                    type: 'input',
                    key: 'lastName',
                    templateOptions: {
                        label: 'Last Name',
                    },
                    expressionProperties: {
                        'templateOptions.disabled': '!model.firstName',
                    },
                },
            ],
        },
        {
            className: 'section-label',
            template: '<hr /><div><strong>Address:</strong></div>',
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-6',
                    type: 'input',
                    key: 'street',
                    templateOptions: {
                        label: 'Street',
                    },
                },
                {
                    className: 'col-3',
                    type: 'input',
                    key: 'cityName',
                    templateOptions: {
                        label: 'City',
                    },
                },
                {
                    className: 'col-3',
                    type: 'input',
                    key: 'zip',
                    templateOptions: {
                        type: 'number',
                        label: 'Zip',
                        max: 99999,
                        min: 0,
                        pattern: '\\d{5}',
                    },
                },
            ],
        },
        { template: '<hr />' },
        {
            type: 'textarea',
            key: 'otherInput',
            templateOptions: {
                label: 'Other Input',
            },
        },
        {
            type: 'checkbox',
            key: 'otherToo',
            templateOptions: {
                label: 'Other Checkbox',
            },
        },
    ];

    ngOnInit() {}

    submit() {
        alert(JSON.stringify(this.model));
    }
}
