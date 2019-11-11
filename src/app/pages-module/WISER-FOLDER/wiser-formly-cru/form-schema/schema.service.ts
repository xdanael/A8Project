
import {Injectable} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {TranslateService } from '@ngx-translate/core';
import {TabType} from '../interfaces/TabType';
import {StepType} from '../interfaces/StepType';

@Injectable()
export class SchemaService {

    constructor(public translate: TranslateService) {
    }


    search = [
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
                    },
                    expressionProperties: {
                        'templateOptions.label': this.translate.stream('WISER.LABEL.COMPANY_NAME'),
                    },
                }
            ],
        },
    ];
    steps: StepType[] = [
        {
            label: 'COMPANY INFO',
            fields: [
                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-4',
                            key: 'companyInfo.company_name',
                            type: 'input',
                            templateOptions: {
                                // addonLeft: {class: 'fa fa-home'},
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.COMPANY_NAME.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.COMPANY_NAME.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-4',
                            key: 'companyInfo.vat_number',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.REGISTRATION_NUMBER.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.REGISTRATION_NUMBER.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-4',
                            key: 'companyInfo.legalForm',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.LEGAL_FORM.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.LEGAL_FORM.PLACE_HOLDER'),
                            },
                        },


                    ],
                },
                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-4',
                            key: 'companyInfo.city',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.CITY.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.CITY.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-6',
                            key: 'companyInfo.addr1',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.ADDRESS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.ADDRESS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-2',
                            key: 'companyInfo.postcode',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.POSTCODE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.POSTCODE.PLACE_HOLDER'),
                            },
                        },

                    ],
                },
                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-4',
                            key: 'companyInfo.website',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.SITE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.SITE.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-4',
                            key: 'companyInfo.email',
                            type: 'input',
                            templateOptions: {
                                label: 'CODICE NACE',
                                placeholder: 'Inserisci il codice nace',
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.EMAIL.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.EMAIL.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-4',
                            key: 'companyInfo.phone',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.TELEPHONE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.TELEPHONE.PLACE_HOLDER'),
                            },
                        },
                    ],
                },

                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-4',
                            key: 'companyInfo.dateofincorporation',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.DATE_OF_ANNEXATION.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.DATE_OF_ANNEXATION.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-4',
                            key: 'companyInfo.type',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.TYPE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.TYPE.PLACE_HOLDER'),
                            },
                        },

                        {
                            className: 'col-4',
                            key: 'companyInfo.countryiso',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.ISO.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.ISO.PLACE_HOLDER'),
                            },
                        },


                    ],
                },
                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-4',
                            key: 'companyInfo.category',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.CATEGORY.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.CATEGORY.PLACE_HOLDER'),
                            },
                        },

                        {
                            className: 'col-4',
                            key: 'companyInfo.nacename',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.NACE_NAME.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.NACE_NAME.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-4',
                            key: 'companyInfo.nacecode',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.NACE_CODE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.NACE_CODE.PLACE_HOLDER'),
                            },
                        },

                    ],
                },
                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-2',
                            key: 'companyInfo.currency',
                            type: 'input',
                            templateOptions: {
                                label: 'VALUTA',
                                placeholder: 'Inserisci la valuta',
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                            },
                        },
                        {
                            className: 'col-2',
                            key: 'companyInfo.capital',
                            type: 'input',
                            templateOptions: {
                                label: 'CAPITALE',
                                placeholder: 'Inserisci il capitale',
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                            },
                        },
                        {
                            className: 'col-4',
                            key: 'companyInfo.lastfiledaccountdate',
                            type: 'input',
                            templateOptions: {
                                type: 'date',
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.DATE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.DATE.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-2',
                            key: 'companyInfo.year',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.COMPANY_INFO.YEAR.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.COMPANY_INFO.YEAR.PLACE_HOLDER'),
                            },
                        },
                    ],
                },
                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-2',
                            key: 'companyInfo.isactive',
                            type: 'checkbox',
                            templateOptions: {
                                label: 'STATO ATTIVA',
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                            },
                        },
                    ],
                },
            ],
        },
        {
            label: 'RISK METRICS',
            fields: [
                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-4',
                            key: 'riskMetrics.bondRatingEquivalent',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.RISK_METRICS.BOND.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.RISK_METRICS.BOND.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-4',
                            key: 'riskMetrics.SMEZscore',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.RISK_METRICS.SMEZ.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.RISK_METRICS.SMEZ.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-4',
                            key: 'riskMetrics.lossGivenDefault',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.RISK_METRICS.LOSS_GIVEN_DEFAULT.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.RISK_METRICS.LOSS_GIVEN_DEFAULT.PLACE_HOLDER'),
                            },
                        },
                    ],
                },
                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'riskMetrics.probabilityofDefault',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.RISK_METRICS.DEFAULT_PROBABILITY.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.RISK_METRICS.DEFAULT_PROBABILITY.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'riskMetrics.zscoreBand',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },

                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.RISK_METRICS.Z_SCORE_BAND.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.RISK_METRICS.Z_SCORE_BAND.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'riskMetrics.benchmarkScore',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.RISK_METRICS.BENCHMARK_SCORE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.RISK_METRICS.BENCHMARK_SCORE.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'riskMetrics.riskRatingGeneratedon',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.RISK_METRICS.BOND_RATING_EQ.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.RISK_METRICS.BOND_RATING_EQ.PLACE_HOLDER'),
                            },
                        },
                    ],
                },
            ],
        },




        /* inizio step FINANCIAL METRICS */
        {
            label: 'FINANCIAL METRICS',
            fields: [
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.id',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.ID.LABEL'),

                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.created',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.CREATED.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.CREATED.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.debtEquityRatio',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.DEBT_EQUITY_RATIO.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.DEBT_EQUITY_RATIO.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.netAssetsTurnover',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.NET_ASSETS_TURNOVER.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.NET_ASSETS_TURNOVER.PLACE_HOLDER'),
                            },
                        },
                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.cashTotalAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.CASH_TOTAL_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.CASH_TOTAL_ASSETS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.turnover',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.TURNOVER.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.TURNOVER.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.EBIT',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.EBIT.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.EBIT.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.EBITDA',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.EBITDA.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.EBITDA.PLACE_HOLDER'),
                            },
                        },
                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.totalDebt',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.TOTAL_DEBT.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.TOTAL_DEBT.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.cashEquivalents',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.CASH_EQUIVALENTS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.CASH_EQUIVALENTS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.interestExpense',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.INTEREST_EXPENSE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.INTEREST_EXPENSE.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.shareholdersEquity',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.SHARE_HOLDERS_EQUITY.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.SHARE_HOLDERS_EQUITY.PLACE_HOLDER'),
                            },
                        },
                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.daysReceivable',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.DAYS_RECEIVABLE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.DAYS_RECEIVABLE.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.daysPayable',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.DAYS_PAYABLE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.DAYS_PAYABLE.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.EBITDAMargin',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.EBITDA_MARGIN.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.EBITDA_MARGIN.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.debtTotalAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.DEBT_TOTAL_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.DEBT_TOTAL_ASSETS.PLACE_HOLDER'),
                            },
                        },
                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.liquidityRatio',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.LIQUIDITY_RATIO.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.LIQUIDITY_RATIO.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.currentRatio',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.CURRENT_RATIO.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.CURRENT_RATIO.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.ROE',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.ROE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.ROE.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.ROA',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.ROA.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.ROA.PLACE_HOLDER'),
                            },
                        },
                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.equityTotalAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.EQUITY_TOTAL_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.EQUITY_TOTAL_ASSETS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.interestCoverageRatio',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.INTEREST_COVERAGE_RATIO.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.INTEREST_COVERAGE_RATIO.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.interestCover',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.INTEREST_COVER.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.INTEREST_COVER.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.interestExpenses',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.INTEREST_EXPENSES.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.INTEREST_EXPENSES.PLACE_HOLDER'),
                            },
                        },
                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.netIncome',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.NET_IN_COME.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.NET_IN_COME.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.retainedEarnings',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.RETAIN_EDEARNINGS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.RETAIN_EDEARNINGS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.returnOnEquity',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.RETURN_ON_EQUITY.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.RETURN_ON_EQUITY.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.returnOnAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.RETURN_ON_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.RETURN_ON_ASSETS.PLACE_HOLDER'),
                            },
                        },
                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.totalShareholderEquity',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.TOTAL_SHARE_HOLDER_EQUITY.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.TOTAL_SHARE_HOLDER_EQUITY.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.totalAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.TOTAL_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.TOTAL_ASSETS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.nonCurrentLiabilities',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.NON_CURRENT_LIABILITIES.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.NON_CURRENT_LIABILITIES.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.intangibleFixedAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.INTANGIBLE_FIXED_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.INTANGIBLE_FIXED_ASSETS.PLACE_HOLDER'),
                            },
                        },
                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.intangibleTotalAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.INTANGIBLE_TOTAL_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.INTANGIBLE_TOTAL_ASSETS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.tangibleFixedAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.TANGIBLE_FIXED_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.TANGIBLE_FIXED_ASSETS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.tangibleTotalAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.TANGIBLE_TOTAL_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.TANGIBLE_TOTAL_ASSETS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.otherCurrentLiabilities',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.OTHER_CURRENT_LIABILITIES.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.OTHER_CURRENT_LIABILITIES.PLACE_HOLDER'),
                            },
                        },
                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.otherNonCurrentLiabilities',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.OTHER_CURRENT_LIABILITIES.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.OTHER_CURRENT_LIABILITIES.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.netCurrentAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.NET_CURRENT_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.NET_CURRENT_ASSETS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.netIncomeTotalAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.NET_IN_COME_TOTAL_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.NET_IN_COME_TOTAL_ASSETS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.creditors',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.CREDITORS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.CREDITORS.PLACE_HOLDER'),
                            },
                        },
                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [

                        {
                            className: 'col-3',
                            key: 'financialMetrics.debtors',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.DEBTORS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.DEBTORS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.depreciation',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.DEPRECIATION.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.DEPRECIATION.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.currentAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.CURRENT_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.CURRENT_ASSETS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.ln1ebitdaTotalAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.LN1_EBITDA_TOTAL_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.LN1_EBITDA_TOTAL_ASSETS.PLACE_HOLDER'),
                            },
                        },

                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.ln1RetainedEarningsTotalAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.LN1_RETAIN_EDEARNINGS_TOTAL_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.LN1_RETAIN_EDEARNINGS_TOTAL_ASSETS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.loans',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.LOANS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.LOANS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.longTermDebt',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.LONG_TERM_DEBT.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.LONG_TERM_DEBT.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.sales',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.SALES.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.SALES.PLACE_HOLDER'),
                            },
                        },
                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.shortTermDebt',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.SHORT_TERM_DEBT.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.SHORT_TERM_DEBT.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.shortTermDebtTotalDebt',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.SHORT_TERM_DEBT_TOTAL_DEBT.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.SHORT_TERM_DEBT_TOTAL_DEBT.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.ebitdaInterestExpenses',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.EBITDA_INTEREST_EXPENSES.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.EBITDA_INTEREST_EXPENSES.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.fixedAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.FIXED_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.FIXED_ASSETS.PLACE_HOLDER'),
                            },
                        },
                    ],
                }, // FINE_RIGA FM
                { // RIGA FM
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.operatingRevenue',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.OPERATING_REVENUE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.OPERATING_REVENUE.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.grossMargin',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.GROSS_MARGIN.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.GROSS_MARGIN.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.workingCapital',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.WORKING_CAPITAL_TOTAL_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.WORKING_CAPITAL_TOTAL_ASSETS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-3',
                            key: 'financialMetrics.workingCapitalTotalAssets',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.WORKING_CAPITAL_TOTAL_ASSETS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.WORKING_CAPITAL_TOTAL_ASSETS.PLACE_HOLDER'),
                            },
                        },

                    ],
                }, // FINE_RIGA FM
                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-3',
                            key: 'financialMetrics.suiteTrace',
                            type: 'input',
                            templateOptions: {
                                required: false,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.FINANCIAL_METRICS.SUITE_TRACE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.FINANCIAL_METRICS.SUITE_TRACE.PLACE_HOLDER'),
                            },
                        },
                    ],
                },
            ],
        },
        /* fine step FINANCIAL METRICS */




        /* inizio step corporate governance */
        {
            label: 'CORPORATE GOVERNANCE',
            fields: [
                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-4',
                            key: 'corporateGovernance.shareHoldingStructure',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },

                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.CORPORATE_GOVERNANCE.SHARE_HOLDING_STRUCTURE.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.CORPORATE_GOVERNANCE.SHARE_HOLDING_STRUCTURE.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-4',
                            key: 'corporateGovernance.noOfSubsidiaries',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },

                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.CORPORATE_GOVERNANCE.NUMBER_OF_SUBSIDIARIES.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.CORPORATE_GOVERNANCE.NUMBER_OF_SUBSIDIARIES.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-4',
                            key: 'corporateGovernance.noOfDirectors',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.CORPORATE_GOVERNANCE.NUMBER_OF_DIRECTORS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.CORPORATE_GOVERNANCE.NUMBER_OF_DIRECTORS.PLACE_HOLDER'),
                            },
                        },
                    ],
                },
                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-4',
                            key: 'corporateGovernance.boardMembers',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },

                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.CORPORATE_GOVERNANCE.BOARD_MEMBERS.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.CORPORATE_GOVERNANCE.BOARD_MEMBERS.PLACE_HOLDER'),
                            },
                        },
                        {
                            className: 'col-4',
                            key: 'corporateGovernance.numberofEmployees',
                            type: 'input',
                            templateOptions: {
                                required: true,
                            },
                            expressionProperties: {
                                'templateOptions.disabled': 'formState.disabled',
                                'templateOptions.label': this.translate.stream('WISER.CORPORATE_GOVERNANCE.NUMBERS_EMPOLYEES.LABEL'),
                                'templateOptions.placeholder': this.translate.stream('WISER.CORPORATE_GOVERNANCE.NUMBERS_EMPOLYEES.PLACE_HOLDER'),
                            },
                        },
                    ],
                },



            ],
        },
    ];

    tabs: TabType[] = [
        {
            label: 'COMPANY INFO',
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
            label: 'RISK METRICS',
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
            label: 'CORPORATE GOVERNANCE',
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



    getTabSchema(): TabType[] {
        return this.tabs;
    }

    getStepSchema(): StepType[] {
        return this.steps;
    }

    getSearchSchema(): FormlyFieldConfig[] {
        return this.search;
    }
}

