import {Injectable} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {OptionServiceMock} from "./options.service";

@Injectable()
export class SchemaService {

    constructor(private optionServiceMock: OptionServiceMock) {}

    Fields =  [
        {
            key: 'tagName',
            type: 'input', // input type
            templateOptions: {
                type: 'text',
                label: 'Tag name for your outfit',
                placeholder: 'tag name'
            },
            validation: {
                messages: {
                    maxLength: 'Tag name is too long'
                }
            },
            validators: {
                // limite a 25 characters
                maxLength: ({ value }) => {
                    return value.length <= 25;
                }
            }
        },
        {
            key: 'color',
            type: 'select',
            templateOptions: {
                label: 'Outfit color',
                options: this.optionServiceMock.getOptions()
                /* [
                     { label: 'Powder blue', value: 'powder-blue' },
                     { label: 'Orange crush', value: 'orange-crush' },
                     { label: 'Purple haze', value: 'purple-haze' }
                 ]*/
            }
        },
        {
            key: 'quantity',
            type: 'input',
            templateOptions: {
                type: 'number',
                label: 'How many outfits?',
                placeholder: 'quantity',
                required: true
            }
        },
        {
            key: 'size',
            type: 'select',
            defaultValue: 'M',
            templateOptions: {
                label: 'Size',
                options: [
                    { label: 'Small', value: 'S' },
                    { label: 'Medium', value: 'M' },
                    { label: 'Large', value: 'L' }
                ]
            }
        },
        {
            key: 'terms',
            type: 'checkbox',
            templateOptions: {
                label: 'You accept our terms and conditions',
                required: true
            }
        }
    ];

    getFormSchema(): FormlyFieldConfig[] {
        return this.Fields;
    }
}

