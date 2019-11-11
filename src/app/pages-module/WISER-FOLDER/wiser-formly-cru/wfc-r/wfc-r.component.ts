import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../../@shared/animation/router.animations';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';
import {WiserAPI} from '../class/WiserAPI';
import {WiserApiServiceMock} from '../../../../@shared/mocks/wiser.mock.service';
import {SchemaService} from '../form-schema/schema.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
    selector: 'app-blank-page',
    templateUrl: './wfc-r.component.html',
    styleUrls: ['./wfc-r.component.scss'],
    animations: [routerTransition()]
})
export class WfcRComponent implements OnInit {
    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};
    enelList: WiserAPI[] = [];
    wiserAPI: WiserAPI ;
    // fields: FormlyFieldConfig[] = this.schemaService.getSearchSchema();
    fields: FormlyFieldConfig[] = [
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-12',
                    key: 'companyName',
                    type: 'input',
                    templateOptions: {
                        placeholder: 'Inserire il nome dell azienda da ricercare',
                        required: true,
                        addonLeft: {
                            class: 'fa fa-search',
                        },
                    },
                    expressionProperties: {
                        'templateOptions.label': this.translate.stream('WISER.LABEL.COMPANY_NAME'),
                    },
                },
            ],
        },
    /*    {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-4',
                    key: 'custom',
                    type: 'custom',
                    templateOptions: {
                    },
                },
            ],
        },  */
    ];

    constructor(private schemaService: SchemaService,
                private wiserApiServiceMock: WiserApiServiceMock,
                public translate: TranslateService) {
    }

    ngOnInit() {
        this.enelList = this.wiserApiServiceMock.getWisers();
    }

    resetModel() {
        this.options.resetModel();
        this.enelList = this.wiserApiServiceMock.getWisers();
    }

    submit() {
        if (this.form.valid) {
           // alert(JSON.stringify(this.model.companyName));
            // this.enelList = this.wiserApiServiceMock.getWisers();
            this.enelList =  this.enelList.filter( wiserAPI => wiserAPI.companyInfo.company_name === this.model.companyName);
        }
    }


}
