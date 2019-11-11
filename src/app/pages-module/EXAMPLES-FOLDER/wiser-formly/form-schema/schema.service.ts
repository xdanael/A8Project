import {Injectable} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SchemaService {

    constructor(public translate: TranslateService) {}

    Fields =  [
        {
            className: 'section-label',
            template: '<hr/><div class="alert alert-info d-flex justify-content-center"><strong>COMPANY INFO</strong></div><br/>',
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-6',
                    key: 'companyInfo.companyName',
                    type: 'input',
                    templateOptions: {
                        // label: 'CompanyName',
                        placeholder: 'Inserire il nome dell azienda',
                        required: true,
                    },
                    expressionProperties: {
                        'templateOptions.label': this.translate.stream('WISER.LABEL.COMPANY_NAME'),
                    },
                },
                {
                    className: 'col-6',
                    key: 'companyInfo.registeredNumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Registered Number',
                        placeholder: 'Inserire la P.IVA',
                        required: true,
                    },
                },
            ],
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-6',
                    key: 'companyInfo.legalForm',
                    type: 'input',
                    templateOptions: {
                        label: 'Legal Form',
                        placeholder: 'Inserire la ragione sociale',
                        required: true,
                    },
                },
                {
                    className: 'col-6',
                    key: 'companyInfo.dateIncorporated',
                    type: 'input',
                    templateOptions: {
                        label: 'Date Incorporated',
                        placeholder: 'Inserire la data',
                        required: false,
                    },
                },
            ],
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-6',
                    key: 'companyInfo.registeredOffices',
                    type: 'input',
                    templateOptions: {
                        label: 'Registered Offices',
                        placeholder: 'Inserire ufficio',
                        required: false,
                    },
                },
                {
                    className: 'col-6',
                    key: 'companyInfo.telephonenumber',
                    type: 'input',
                    templateOptions: {
                        label: 'Telephone number',
                        placeholder: 'Inserire il telefono',
                        required: false,
                    },
                },
            ],
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-6',
                    key: 'companyInfo.website',
                    type: 'input',
                    templateOptions: {
                        label: 'Website',
                        placeholder: 'Inserire il sito',
                        required: false,
                    },
                },
                {
                    className: 'col-6',
                    key: 'companyInfo.emailAddress',
                    type: 'input',
                    templateOptions: {
                        label: 'Email Address',
                        placeholder: 'Inserire la mail',
                        required: true,
                    },
                },
            ],
        },
        {
            className: 'section-label',
            template: '<hr/><div class="alert alert-info  d-flex justify-content-center"><strong>RISK METRICS</strong></div><br/>',
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-1',
                    key: 'riskMetrics.bondRatingEquivalent',
                    type: 'input',
                    templateOptions: {
                        label: 'Bond',
                        placeholder: 'Inserire il Rating sui bond',
                        required: true,
                    },
                },
                {
                    className: 'col-1',
                    key: 'riskMetrics.SMEZscore',
                    type: 'input',
                    templateOptions: {
                        label: 'SMEZ',
                        placeholder: 'Inserire il SMEZscore',
                        required: true,
                    },
                },
                {
                    className: 'col-2',
                    key: 'riskMetrics.lossGivenDefault',
                    type: 'input',
                    templateOptions: {
                        label: 'loss Given Default',
                        placeholder: 'Inserire il lossGivenDefault',
                        required: true,
                    },
                },
                {
                    className: 'col-2',
                    key: 'riskMetrics.probabilityofDefault',
                    type: 'input',
                    templateOptions: {
                        label: 'Probability of Default',
                        placeholder: 'Inserire il probabilityofDefault',
                        required: true,
                    },
                },
                {
                    className: 'col-2',
                    key: 'riskMetrics.zscoreBand',
                    type: 'input',
                    templateOptions: {
                        label: 'ZscoreBand',
                        placeholder: 'Inserire il zscoreBand',
                        required: true,
                    },
                },
                {
                    className: 'col-2',
                    key: 'riskMetrics.benchmarkScore',
                    type: 'input',
                    templateOptions: {
                        label: 'BenchmarkScore',
                        placeholder: 'Inserire il benchmarkScore',
                        required: true,
                    },
                },
                {
                    className: 'col-2',
                    key: 'riskMetrics.riskRatingGeneratedon',
                    type: 'input',
                    templateOptions: {
                        label: 'Bond Rating Eq.',
                        placeholder: 'Inserire il Rating sui bond',
                        required: true,
                    },
                },
            ],
        },
        {
            className: 'section-label',
            template: '<hr/><div class="alert alert-info d-flex justify-content-center"><strong>CORPORATE GOVERNANCE</strong></div><br/>',
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-4',
                    key: 'corporateGovernance.shareHoldingStructure',
                    type: 'input',
                    templateOptions: {
                        label: 'shareHoldingStructure',
                        placeholder: 'Inserire shareHoldingStructure',
                        required: true,
                    },
                },
                {
                    className: 'col-2',
                    key: 'corporateGovernance.noOfSubsidiaries',
                    type: 'input',
                    templateOptions: {
                        label: 'noOfSubsidiaries',
                        placeholder: 'Inserire il noOfSubsidiaries',
                        required: true,
                    },
                },
                {
                    className: 'col-2',
                    key: 'corporateGovernance.noOfDirectors',
                    type: 'input',
                    templateOptions: {
                        label: 'noOfDirectors',
                        placeholder: 'Inserire il noOfDirectors',
                        required: true,
                    },
                },
                {
                    className: 'col-2',
                    key: 'corporateGovernance.boardMembers',
                    type: 'input',
                    templateOptions: {
                        label: 'boardMembers',
                        placeholder: 'Inserire il boardMembers',
                        required: true,
                    },
                },
                {
                    className: 'col-2',
                    key: 'corporateGovernance.numberofEmployees',
                    type: 'input',
                    templateOptions: {
                        label: 'numberofEmployees',
                        placeholder: 'Inserire il numberofEmployees',
                        required: true,
                    },
                },
            ],
        },
    ];

    getFormSchema(): FormlyFieldConfig[] {
        return this.Fields;
    }
}

