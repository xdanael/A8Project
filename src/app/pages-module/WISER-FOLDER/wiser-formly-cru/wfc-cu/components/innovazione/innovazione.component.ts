import {Component, OnInit, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { of as observableOf } from 'rxjs';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

const regioni = ['Abruzzo', 'Molise', 'Lazio', 'Campania'];

@Component({
    selector: 'app-innovazione',
    templateUrl: './innovazione.component.html',
    styleUrls: ['./innovazione.component.scss']
})  //
export class InnovazioneComponent implements OnInit {
    form = new FormGroup({});
    model = {};
    options = {};
    /*
    fields: FormlyFieldConfig[] = [
        {
            key: 'state',
            type: 'typeahead',
            templateOptions: {
                placeholder: 'Search for a state: ',
                search$: (term) => {
                    if ((!term || term === '')) {
                        return observableOf(states);
                    }
                    return observableOf(states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
                },
            }
        },
    ];*/


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
                    },
                },
                {
                    className: 'col-6',
                    type: 'typeahead',
                    key: 'state',
                    templateOptions: {
                        placeholder: '',
                        search$: (term) => {
                            if ((!term || term === '')) {
                                return observableOf(states);
                            }
                            return observableOf(states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
                        },
                    }
                },
            ],
        },
    ];





    submit(model) {
        console.log(model);
    }
    ngOnInit() {}
}
