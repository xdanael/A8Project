import {Injectable} from '@angular/core';
import {WiserAPI} from '../../pages-module/WISER-FOLDER/wiser-formly-cru/class/WiserAPI';

const MODEL = {
    companyInfo: {
        id: null,
        company_name: 'STRABAG SE',
        created: null,
        dateofincorporation: '1987',
        email: 'pr@strabag.com',
        type: 'Corporate',
        legalForm: 'Public limited company - AG',
        company_id: 14,
        registeredOffices: null,
        phone: '+43 1 22422 1116',
        website: 'www.strabag.com',
        year: 2018,
        addr1: 'DONAU-CITY-STRASSE 9',
        addr2: null,
        addr3: null,
        addr4: null,
        number_of_available_years: 10,
        city: 'VIENNA',
        countryiso: 'AT',
        county: null,
        region: null,
        subregion: null,
        eurovat: 'ATU37301503',
        vat_number: 'ATU37301503',
        category: 'Very large company',
        fullpostcode: null,
        postcode: '1220',
        nacename: 'F - Construction',
        nacecode: '4211',
        nuts1: null,
        nuts2: null,
        nuts3: null,
        lastfiledaccountdate: '2018-12-31',
        capital: 99208470.8443474,
        isactive: true,
        suiteTrace: null,
        registeredNumber: 14,
        currency: 'EUR',
        totalRating: 0,
        analisibilperf:0,
        analisisostenib:0,
        analisiasseman:0,
        analisisiccert:0,
        digitalinnov:0,
    },
    riskMetrics: {
        bondRatingEquivalent: '1',
        SMEZscore: 'Hight',
        lossGivenDefault: '1',
        probabilityofDefault: '0',
        zscoreBand: 'Hight',
        benchmarkScore: '1',
        riskRatingGeneratedon: 'Low'
    },
    financialMetrics: {
        id: null,
        created: null,
        debtEquityRatio: null,
        netAssetsTurnover: null,
        cashTotalAssets: 0.2524349512,
        turnover: 12190895292.2382,
        EBIT: 359211899.191759,
        EBITDA:  702027799.920803,
        totalDebt: 4013206435.329575,
        cashEquivalents: 2476838713.85281,
        interestExpense:   65726012.0272389,
        shareholdersEquity:  3015861601.38259,
        daysReceivable:  66.391,
        daysPayable: 89.181,
        EBITDAMargin:   5.759,
        debtTotalAssets:   0.4090187887,
      //  intangibleFixedAssetsTotalAssets:  number,
        liquidityRatio:  1.056,
        currentRatio: 1.263,
        ROE:  12.397,
        ROA:  8.935,
        equityTotalAssets:  0.3073711953,
        interestCoverageRatio:  5.465,
     //   equityBookValueTotalAssets: number,
        interestCover: 5.465,
        interestExpenses: 65726012.0272389,
        netIncome:  247566972.67385,
        retainedEarnings: 2918224105.12346,
        returnOnEquity: 12.397,
        returnOnAssets: 8.935,
        totalShareholderEquity: 3015861601.38259,
        totalAssets: 9811789936.91359,
        nonCurrentLiabilities: 1904251605.56354,
        intangibleFixedAssets: 442765630.422314,
        intangibleTotalAssets: 0.0451258775,
        tangibleFixedAssets: 1718448337.79602,
        tangibleTotalAssets: 0.1751411668,
        otherCurrentLiabilities: 1662125704.27213,
        otherNonCurrentLiabilities: 1120596195.9293,
        netCurrentAssets: 9811789936.91359,
        netIncomeTotalAssets: 0.025231581,
        creditors: 3019987229.40634,
        debtors: 2248253358.06533,
        depreciation: 342815900.729044,
        currentAssets: 6176354513.58744,
        ln1ebitdaTotalAssets: 0.0322412044,
        ln1RetainedEarningsTotalAssets: 0.1533043144,
        loans: 209563796.288989,
        longTermDebt: 783655409.634246,
        sales: 12190895292.2382,
        shortTermDebt: 3229551025.695329,
        shortTermDebtTotalDebt: 0.8047308499,
        ebitdaInterestExpenses: 10.6811257563,
        fixedAssets: 3635435423.32616,
        operatingRevenue: 12190895292.2382,
        grossMargin:  35.188,
        workingCapital: 238197323.487383,
        workingCapitalTotalAssets: 0.0242766432,
        suiteTrace: null,
    },
    corporateGovernance: {
        shareHoldingStructure: '4',
        noOfSubsidiaries: '32',
        noOfDirectors: '3',
        boardMembers: '150',
        numberofEmployees: '169'
    }
};


@Injectable()
export class WiserApiServiceMock {
    getWiser(): WiserAPI {
        return MODEL;
    }

    getWisers(): WiserAPI[] {
        const modelList = ARRAY;
        return modelList;
    }
}


const ARRAY = [
    {
        companyInfo: {
            id: null,
            company_name: 'STRABAG SE',
            created: null,
            dateofincorporation: '1987',
            email: 'pr@strabag.com',
            type: 'Corporate',
            legalForm: 'Public limited company',
            company_id: 14,
            registeredOffices: null,
            phone: '+43 1 22422 1116',
            website: 'www.strabag.com',
            year: 2018,
            addr1: 'DONAU-CITY-STRASSE 9',
            addr2: null,
            addr3: null,
            addr4: null,
            number_of_available_years: 10,
            city: 'VIENNA',
            countryiso: 'AT',
            county: null,
            region: null,
            subregion: null,
            eurovat: 'ATU37301503',
            vat_number: 'ATU37301503',
            category: 'Very large company',
            fullpostcode: null,
            postcode: '1220',
            nacename: 'F - Construction',
            nacecode: '4211',
            nuts1: null,
            nuts2: null,
            nuts3: null,
            lastfiledaccountdate: '2018-12-31',
            capital: 99208470.8443474,
            isactive: true,
            suiteTrace: null,
            registeredNumber: 14,
            currency: 'EUR',
            totalRating: 1,
            analisibilperf:0.90,
            analisisostenib:0.10,
            analisiasseman:0,
            analisisiccert:0,
            digitalinnov:0,
        },
        riskMetrics: {
            bondRatingEquivalent: '1',
            SMEZscore: 'Hight',
            lossGivenDefault: '1',
            probabilityofDefault: '0',
            zscoreBand: 'Hight',
            benchmarkScore: '1',
            riskRatingGeneratedon: 'Low'
        },
        financialMetrics: {
            id: null,
            created: null,
            debtEquityRatio: null,
            netAssetsTurnover: null,
            cashTotalAssets: 0.2524349512,
            turnover: 12190895292.2382,
            EBIT: 359211899.191759,
            EBITDA:  702027799.920803,
            totalDebt: 4013206435.329575,
            cashEquivalents: 2476838713.85281,
            interestExpense:   65726012.0272389,
            shareholdersEquity:  3015861601.38259,
            daysReceivable:  66.391,
            daysPayable: 89.181,
            EBITDAMargin:   5.759,
            debtTotalAssets:   0.4090187887,
            //  intangibleFixedAssetsTotalAssets:  number,
            liquidityRatio:  1.056,
            currentRatio: 1.263,
            ROE:  12.397,
            ROA:  8.935,
            equityTotalAssets:  0.3073711953,
            interestCoverageRatio:  5.465,
            //   equityBookValueTotalAssets: number,
            interestCover: 5.465,
            interestExpenses: 65726012.0272389,
            netIncome:  247566972.67385,
            retainedEarnings: 2918224105.12346,
            returnOnEquity: 12.397,
            returnOnAssets: 8.935,
            totalShareholderEquity: 3015861601.38259,
            totalAssets: 9811789936.91359,
            nonCurrentLiabilities: 1904251605.56354,
            intangibleFixedAssets: 442765630.422314,
            intangibleTotalAssets: 0.0451258775,
            tangibleFixedAssets: 1718448337.79602,
            tangibleTotalAssets: 0.1751411668,
            otherCurrentLiabilities: 1662125704.27213,
            otherNonCurrentLiabilities: 1120596195.9293,
            netCurrentAssets: 9811789936.91359,
            netIncomeTotalAssets: 0.025231581,
            creditors: 3019987229.40634,
            debtors: 2248253358.06533,
            depreciation: 342815900.729044,
            currentAssets: 6176354513.58744,
            ln1ebitdaTotalAssets: 0.0322412044,
            ln1RetainedEarningsTotalAssets: 0.1533043144,
            loans: 209563796.288989,
            longTermDebt: 783655409.634246,
            sales: 12190895292.2382,
            shortTermDebt: 3229551025.695329,
            shortTermDebtTotalDebt: 0.8047308499,
            ebitdaInterestExpenses: 10.6811257563,
            fixedAssets: 3635435423.32616,
            operatingRevenue: 12190895292.2382,
            grossMargin:  35.188,
            workingCapital: 238197323.487383,
            workingCapitalTotalAssets: 0.0242766432,
            suiteTrace: null,
        },
        corporateGovernance: {
            shareHoldingStructure: '4',
            noOfSubsidiaries: '32',
            noOfDirectors: '3',
            boardMembers: '150',
            numberofEmployees: '169'
        }
    },
    {
        companyInfo: {
            id: null,
            company_name: 'FLORIAN LEGNO S.P.A.',
            created: null,
            dateofincorporation: '1974/11/14',
            email: 'breda@breda.com',
            type: 'Corporate',
            legalForm: 'Joint stock company - SPA',
            company_id: 4160,
            registeredOffices: null,
            phone: '+39 04234532',
            website:  'www.florianinc.com',
            year: 2018,
            addr1: 'VIA CASTELLANA 48/A',
            addr2: null,
            addr3: null,
            addr4: null,
            number_of_available_years: 10,
            city: 'RIESE PIO X',
            countryiso: 'IT',
            county: null,
            region: 'Veneto',
            subregion: 'Treviso',
            eurovat: 'IT00335200267',
            vat_number: '00335200267',
            category: 'Large company',
            fullpostcode: null,
            postcode: '31039',
            nacename: 'F - Construction',
            nacecode: '4211',
            nuts1: 'ITH - Northeast',
            nuts2: 'ITH3 - Veneto',
            nuts3: 'ITH34 - Treviso',
            lastfiledaccountdate: '2017/12/31',
            capital: 464400.0,
            isactive: true,
            suiteTrace: null,
            registeredNumber: 4160,
            currency: 'EUR',
            totalRating: 2,
            analisibilperf:1,
            analisisostenib:0,
            analisiasseman:0,
            analisisiccert:0,
            digitalinnov:1,
        },
        riskMetrics: {
            bondRatingEquivalent: '1',
            SMEZscore: 'Hight',
            lossGivenDefault: '1',
            probabilityofDefault: '0',
            zscoreBand: 'Hight',
            benchmarkScore: '1',
            riskRatingGeneratedon: 'Low'
        },
        financialMetrics: {
            id: null,
            created: null,
            debtEquityRatio: null,
            netAssetsTurnover: null,
            cashTotalAssets: 0.2524349512,
            turnover: 12190895292.2382,
            EBIT: 359211899.191759,
            EBITDA:  702027799.920803,
            totalDebt: 4013206435.329575,
            cashEquivalents: 2476838713.85281,
            interestExpense:   65726012.0272389,
            shareholdersEquity:  3015861601.38259,
            daysReceivable:  66.391,
            daysPayable: 89.181,
            EBITDAMargin:   5.759,
            debtTotalAssets:   0.4090187887,
            //  intangibleFixedAssetsTotalAssets:  number,
            liquidityRatio:  1.056,
            currentRatio: 1.263,
            ROE:  12.397,
            ROA:  8.935,
            equityTotalAssets:  0.3073711953,
            interestCoverageRatio:  5.465,
            //   equityBookValueTotalAssets: number,
            interestCover: 5.465,
            interestExpenses: 65726012.0272389,
            netIncome:  247566972.67385,
            retainedEarnings: 2918224105.12346,
            returnOnEquity: 12.397,
            returnOnAssets: 8.935,
            totalShareholderEquity: 3015861601.38259,
            totalAssets: 9811789936.91359,
            nonCurrentLiabilities: 1904251605.56354,
            intangibleFixedAssets: 442765630.422314,
            intangibleTotalAssets: 0.0451258775,
            tangibleFixedAssets: 1718448337.79602,
            tangibleTotalAssets: 0.1751411668,
            otherCurrentLiabilities: 1662125704.27213,
            otherNonCurrentLiabilities: 1120596195.9293,
            netCurrentAssets: 9811789936.91359,
            netIncomeTotalAssets: 0.025231581,
            creditors: 3019987229.40634,
            debtors: 2248253358.06533,
            depreciation: 342815900.729044,
            currentAssets: 6176354513.58744,
            ln1ebitdaTotalAssets: 0.0322412044,
            ln1RetainedEarningsTotalAssets: 0.1533043144,
            loans: 209563796.288989,
            longTermDebt: 783655409.634246,
            sales: 12190895292.2382,
            shortTermDebt: 3229551025.695329,
            shortTermDebtTotalDebt: 0.8047308499,
            ebitdaInterestExpenses: 10.6811257563,
            fixedAssets: 3635435423.32616,
            operatingRevenue: 12190895292.2382,
            grossMargin:  35.188,
            workingCapital: 238197323.487383,
            workingCapitalTotalAssets: 0.0242766432,
            suiteTrace: null,
        },
        corporateGovernance: {
            shareHoldingStructure: '4',
            noOfSubsidiaries: '32',
            noOfDirectors: '3',
            boardMembers: '150',
            numberofEmployees: '169'
        }
    },
    {
        companyInfo: {
            id: null,
            company_name: 'Nissan Italia s.r.l.',
            created: null,
            dateofincorporation: '1967',
            email: 'pr@strabag.com',
            type: 'Corporate',
            legalForm: 'Joint stock company',
            company_id: 14,
            registeredOffices: null,
            phone: '+43 1 22422 1116',
            website: 'www.strabag.com',
            year: 2018,
            addr1: 'DONAU-CITY-STRASSE 9',
            addr2: null,
            addr3: null,
            addr4: null,
            number_of_available_years: 10,
            city: 'VIENNA',
            countryiso: 'AT',
            county: null,
            region: null,
            subregion: null,
            eurovat: 'ATU37301503',
            vat_number: 'ATU37301503',
            category: 'Very large company',
            fullpostcode: null,
            postcode: '1220',
            nacename: 'F - Construction',
            nacecode: '4211',
            nuts1: null,
            nuts2: null,
            nuts3: null,
            lastfiledaccountdate: '2018-12-31',
            capital: 99208470.8443474,
            isactive: true,
            suiteTrace: null,
            registeredNumber: 14,
            currency: 'EUR',
            totalRating: 3,
            analisibilperf:1,
            analisisostenib:0,
            analisiasseman:1,
            analisisiccert:0,
            digitalinnov:1,
        },
        riskMetrics: {
            bondRatingEquivalent: '1',
            SMEZscore: 'Hight',
            lossGivenDefault: '1',
            probabilityofDefault: '0',
            zscoreBand: 'Hight',
            benchmarkScore: '1',
            riskRatingGeneratedon: 'Low'
        },
        financialMetrics: {
            id: null,
            created: null,
            debtEquityRatio: null,
            netAssetsTurnover: null,
            cashTotalAssets: 0.2524349512,
            turnover: 12190895292.2382,
            EBIT: 359211899.191759,
            EBITDA:  702027799.920803,
            totalDebt: 4013206435.329575,
            cashEquivalents: 2476838713.85281,
            interestExpense:   65726012.0272389,
            shareholdersEquity:  3015861601.38259,
            daysReceivable:  66.391,
            daysPayable: 89.181,
            EBITDAMargin:   5.759,
            debtTotalAssets:   0.4090187887,
            //  intangibleFixedAssetsTotalAssets:  number,
            liquidityRatio:  1.056,
            currentRatio: 1.263,
            ROE:  12.397,
            ROA:  8.935,
            equityTotalAssets:  0.3073711953,
            interestCoverageRatio:  5.465,
            //   equityBookValueTotalAssets: number,
            interestCover: 5.465,
            interestExpenses: 65726012.0272389,
            netIncome:  247566972.67385,
            retainedEarnings: 2918224105.12346,
            returnOnEquity: 12.397,
            returnOnAssets: 8.935,
            totalShareholderEquity: 3015861601.38259,
            totalAssets: 9811789936.91359,
            nonCurrentLiabilities: 1904251605.56354,
            intangibleFixedAssets: 442765630.422314,
            intangibleTotalAssets: 0.0451258775,
            tangibleFixedAssets: 1718448337.79602,
            tangibleTotalAssets: 0.1751411668,
            otherCurrentLiabilities: 1662125704.27213,
            otherNonCurrentLiabilities: 1120596195.9293,
            netCurrentAssets: 9811789936.91359,
            netIncomeTotalAssets: 0.025231581,
            creditors: 3019987229.40634,
            debtors: 2248253358.06533,
            depreciation: 342815900.729044,
            currentAssets: 6176354513.58744,
            ln1ebitdaTotalAssets: 0.0322412044,
            ln1RetainedEarningsTotalAssets: 0.1533043144,
            loans: 209563796.288989,
            longTermDebt: 783655409.634246,
            sales: 12190895292.2382,
            shortTermDebt: 3229551025.695329,
            shortTermDebtTotalDebt: 0.8047308499,
            ebitdaInterestExpenses: 10.6811257563,
            fixedAssets: 3635435423.32616,
            operatingRevenue: 12190895292.2382,
            grossMargin:  35.188,
            workingCapital: 238197323.487383,
            workingCapitalTotalAssets: 0.0242766432,
            suiteTrace: null,
        },
        corporateGovernance: {
            shareHoldingStructure: '4',
            noOfSubsidiaries: '32',
            noOfDirectors: '3',
            boardMembers: '150',
            numberofEmployees: '169'
        }
    },
    {
        companyInfo: {
            id: null,
            company_name: 'Air Canada',
            created: null,
            dateofincorporation: '1947',
            email: 'pr@strabag.com',
            type: 'Corporate',
            legalForm: 'Joint-stock company',
            company_id: 14,
            registeredOffices: null,
            phone: '+43 1 22422 1116',
            website: 'www.strabag.com',
            year: 2018,
            addr1: 'DONAU-CITY-STRASSE 9',
            addr2: null,
            addr3: null,
            addr4: null,
            number_of_available_years: 10,
            city: 'VIENNA',
            countryiso: 'AT',
            county: null,
            region: null,
            subregion: null,
            eurovat: 'ATU37301503',
            vat_number: 'ATU37301503',
            category: 'Very large company',
            fullpostcode: null,
            postcode: '1220',
            nacename: 'F - Construction',
            nacecode: '4211',
            nuts1: null,
            nuts2: null,
            nuts3: null,
            lastfiledaccountdate: '2018-12-31',
            capital: 99208470.8443474,
            isactive: true,
            suiteTrace: null,
            registeredNumber: 14,
            currency: 'EUR',
            totalRating: 4,
            analisibilperf:1,
            analisisostenib:2,
            analisiasseman:0,
            analisisiccert:0,
            digitalinnov:1,
        },
        riskMetrics: {
            bondRatingEquivalent: '1',
            SMEZscore: 'Hight',
            lossGivenDefault: '1',
            probabilityofDefault: '0',
            zscoreBand: 'Hight',
            benchmarkScore: '1',
            riskRatingGeneratedon: 'Low'
        },
        financialMetrics: {
            id: null,
            created: null,
            debtEquityRatio: null,
            netAssetsTurnover: null,
            cashTotalAssets: 0.2524349512,
            turnover: 12190895292.2382,
            EBIT: 359211899.191759,
            EBITDA:  702027799.920803,
            totalDebt: 4013206435.329575,
            cashEquivalents: 2476838713.85281,
            interestExpense:   65726012.0272389,
            shareholdersEquity:  3015861601.38259,
            daysReceivable:  66.391,
            daysPayable: 89.181,
            EBITDAMargin:   5.759,
            debtTotalAssets:   0.4090187887,
            //  intangibleFixedAssetsTotalAssets:  number,
            liquidityRatio:  1.056,
            currentRatio: 1.263,
            ROE:  12.397,
            ROA:  8.935,
            equityTotalAssets:  0.3073711953,
            interestCoverageRatio:  5.465,
            //   equityBookValueTotalAssets: number,
            interestCover: 5.465,
            interestExpenses: 65726012.0272389,
            netIncome:  247566972.67385,
            retainedEarnings: 2918224105.12346,
            returnOnEquity: 12.397,
            returnOnAssets: 8.935,
            totalShareholderEquity: 3015861601.38259,
            totalAssets: 9811789936.91359,
            nonCurrentLiabilities: 1904251605.56354,
            intangibleFixedAssets: 442765630.422314,
            intangibleTotalAssets: 0.0451258775,
            tangibleFixedAssets: 1718448337.79602,
            tangibleTotalAssets: 0.1751411668,
            otherCurrentLiabilities: 1662125704.27213,
            otherNonCurrentLiabilities: 1120596195.9293,
            netCurrentAssets: 9811789936.91359,
            netIncomeTotalAssets: 0.025231581,
            creditors: 3019987229.40634,
            debtors: 2248253358.06533,
            depreciation: 342815900.729044,
            currentAssets: 6176354513.58744,
            ln1ebitdaTotalAssets: 0.0322412044,
            ln1RetainedEarningsTotalAssets: 0.1533043144,
            loans: 209563796.288989,
            longTermDebt: 783655409.634246,
            sales: 12190895292.2382,
            shortTermDebt: 3229551025.695329,
            shortTermDebtTotalDebt: 0.8047308499,
            ebitdaInterestExpenses: 10.6811257563,
            fixedAssets: 3635435423.32616,
            operatingRevenue: 12190895292.2382,
            grossMargin:  35.188,
            workingCapital: 238197323.487383,
            workingCapitalTotalAssets: 0.0242766432,
            suiteTrace: null,
        },
        corporateGovernance: {
            shareHoldingStructure: '4',
            noOfSubsidiaries: '32',
            noOfDirectors: '3',
            boardMembers: '150',
            numberofEmployees: '169'
        }
    },
    {
        companyInfo: {
            id: null,
            company_name: 'Air Malta Plc',
            created: null,
            dateofincorporation: '1947',
            email: 'pr@strabag.com',
            type: 'Corporate',
            legalForm: 'Public limited company - AG',
            company_id: 14,
            registeredOffices: null,
            phone: '+43 1 22222 1116',
            website: 'www.strabag.com',
            year: 2018,
            addr1: 'DONAU-CITY-STRASSE 9',
            addr2: null,
            addr3: null,
            addr4: null,
            number_of_available_years: 10,
            city: 'VIENNA',
            countryiso: 'AT',
            county: null,
            region: null,
            subregion: null,
            eurovat: 'ATU37301503',
            vat_number: 'ATU37301503',
            category: 'Very large company',
            fullpostcode: null,
            postcode: '1220',
            nacename: 'F - Construction',
            nacecode: '4211',
            nuts1: null,
            nuts2: null,
            nuts3: null,
            lastfiledaccountdate: '2018-12-31',
            capital: 99208470.8443474,
            isactive: true,
            suiteTrace: null,
            registeredNumber: 14,
            currency: 'EUR',
            totalRating: 0,
            analisibilperf:0,
            analisisostenib:0,
            analisiasseman:0,
            analisisiccert:0,
            digitalinnov:0,
        },
        riskMetrics: {
            bondRatingEquivalent: '1',
            SMEZscore: 'Hight',
            lossGivenDefault: '1',
            probabilityofDefault: '0',
            zscoreBand: 'Hight',
            benchmarkScore: '1',
            riskRatingGeneratedon: 'Low'
        },
        financialMetrics: {
            id: null,
            created: null,
            debtEquityRatio: null,
            netAssetsTurnover: null,
            cashTotalAssets: 0.2524349512,
            turnover: 12190895292.2382,
            EBIT: 359211899.191759,
            EBITDA:  702027799.920803,
            totalDebt: 4013206435.329575,
            cashEquivalents: 2476838713.85281,
            interestExpense:   65726012.0272389,
            shareholdersEquity:  3015861601.38259,
            daysReceivable:  66.391,
            daysPayable: 89.181,
            EBITDAMargin:   5.759,
            debtTotalAssets:   0.4090187887,
            //  intangibleFixedAssetsTotalAssets:  number,
            liquidityRatio:  1.056,
            currentRatio: 1.263,
            ROE:  12.397,
            ROA:  8.935,
            equityTotalAssets:  0.3073711953,
            interestCoverageRatio:  5.465,
            //   equityBookValueTotalAssets: number,
            interestCover: 5.465,
            interestExpenses: 65726012.0272389,
            netIncome:  247566972.67385,
            retainedEarnings: 2918224105.12346,
            returnOnEquity: 12.397,
            returnOnAssets: 8.935,
            totalShareholderEquity: 3015861601.38259,
            totalAssets: 9811789936.91359,
            nonCurrentLiabilities: 1904251605.56354,
            intangibleFixedAssets: 442765630.422314,
            intangibleTotalAssets: 0.0451258775,
            tangibleFixedAssets: 1718448337.79602,
            tangibleTotalAssets: 0.1751411668,
            otherCurrentLiabilities: 1662125704.27213,
            otherNonCurrentLiabilities: 1120596195.9293,
            netCurrentAssets: 9811789936.91359,
            netIncomeTotalAssets: 0.025231581,
            creditors: 3019987229.40634,
            debtors: 2248253358.06533,
            depreciation: 342815900.729044,
            currentAssets: 6176354513.58744,
            ln1ebitdaTotalAssets: 0.0322412044,
            ln1RetainedEarningsTotalAssets: 0.1533043144,
            loans: 209563796.288989,
            longTermDebt: 783655409.634246,
            sales: 12190895292.2382,
            shortTermDebt: 3229551025.695329,
            shortTermDebtTotalDebt: 0.8047308499,
            ebitdaInterestExpenses: 10.6811257563,
            fixedAssets: 3635435423.32616,
            operatingRevenue: 12190895292.2382,
            grossMargin:  35.188,
            workingCapital: 238197323.487383,
            workingCapitalTotalAssets: 0.0242766432,
            suiteTrace: null,
        },
        corporateGovernance: {
            shareHoldingStructure: '4',
            noOfSubsidiaries: '32',
            noOfDirectors: '3',
            boardMembers: '150',
            numberofEmployees: '169'
        }
    },
];
