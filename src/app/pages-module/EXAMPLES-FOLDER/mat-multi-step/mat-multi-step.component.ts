import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../@shared/animation/router.animations';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';


export interface StepType {
    label: string;
    fields: FormlyFieldConfig[];
}

@Component({
    selector: 'app-blank-page',
    templateUrl: './mat-multi-step.component.html',
    styleUrls: ['./mat-multi-step.component.scss'],
    animations: [routerTransition()]
})
export class MatMultiStepComponent implements OnInit {
    ngOnInit() {}
    activedStep = 0;

    model = {};
    steps: StepType[] = [
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

    form = new FormArray(this.steps.map(() => new FormGroup({})));
    options = this.steps.map(() => <FormlyFormOptions> {});

    prevStep(step) {
        this.activedStep = step - 1;
    }

    nextStep(step) {
        this.activedStep = step + 1;
    }

    submit() {
        alert(JSON.stringify(this.model));
    }
}
