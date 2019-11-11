import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';


@Component({
    selector: 'app-admin-user-search',
    templateUrl: './ricerca.component.html',
    styleUrls: ['./ricerca.component.scss']
})
export class RicercaComponent implements OnInit {
    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [
        {
          //  className: 'section-label',
          // template: '<div class="card-header"><h3>RICERCA UTENTI</h3></div>',
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-12',
                    type: 'input',
                    key: 'lastname',
                    templateOptions: {
                        label: 'Cognome',
                        placeholder: 'Ricerca utente',
                        required: true,
                    },
                },
            ],
        },
    ];

    /****/

    ngOnInit() {}

    submit() {
        if (this.form.valid) {
            alert(JSON.stringify(this.model));
        }
    }

    resetModel() {
        this.options.resetModel();
    }
}
