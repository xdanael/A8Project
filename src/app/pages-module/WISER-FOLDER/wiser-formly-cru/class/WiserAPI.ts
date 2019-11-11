export class CorporateGovernance {
    shareHoldingStructure: string;
    noOfSubsidiaries: string;
    noOfDirectors: string;
    boardMembers: string;
    numberofEmployees: string;
}

export class FinancialMetrics {
    id: null;
    created: null;
    debtEquityRatio: null;
    netAssetsTurnover: null;
    cashTotalAssets: number;
    turnover:  number;
    EBIT:  number;
    EBITDA:  number;
    totalDebt:  number;
    cashEquivalents: number;
    interestExpense:  number;
    shareholdersEquity:  number;
    daysReceivable:  number;
    daysPayable:  number;
    EBITDAMargin:  number;
    debtTotalAssets:  number;
    // intangibleFixedAssetsTotalAssets:  number;
    liquidityRatio:  number;
    currentRatio:  number;
    ROE:  number;
    ROA:  number;
    equityTotalAssets:  number;
    interestCoverageRatio:  number;
    // equityBookValueTotalAssets: number;
    interestCover: number;
    interestExpenses: number;
    netIncome: number;
    retainedEarnings: number;
    returnOnEquity: number;
    returnOnAssets: number;
    totalShareholderEquity: number;
    totalAssets: number;
    nonCurrentLiabilities: number;
    intangibleFixedAssets: number;
    intangibleTotalAssets: number;
    tangibleFixedAssets: number;
    tangibleTotalAssets: number;
    otherCurrentLiabilities: number;
    otherNonCurrentLiabilities: number;
    netCurrentAssets: number;
    netIncomeTotalAssets: number;
    creditors: number;
    debtors: number;
    depreciation: number;
    currentAssets: number;
    ln1ebitdaTotalAssets: number;
    ln1RetainedEarningsTotalAssets: number;
    loans: number;
    longTermDebt: number;
    sales: number;
    shortTermDebt: number;
    shortTermDebtTotalDebt: number;
    ebitdaInterestExpenses: number;
    fixedAssets: number;
    operatingRevenue: number;
    grossMargin: number;
    workingCapital: number;
    workingCapitalTotalAssets: number;
    suiteTrace: number;
}

export class RiskMetrics {
    bondRatingEquivalent: string;
    SMEZscore: string;
    lossGivenDefault: string;
    probabilityofDefault: string;
    zscoreBand: string;
    benchmarkScore: string;
    riskRatingGeneratedon: string;
}

export class CompanyInfo {
    id: number;
    company_name: string;
    created: number;
    dateofincorporation: string;
    email:  string;
    type: string;
    legalForm:  string;
    company_id: number;
    registeredOffices: string;
    phone: string;
    website: string;
    year: number;
    addr1: string;
    addr2: string;
    addr3: string;
    addr4: string;
    number_of_available_years:  number;
    city: string;
    countryiso: string;
    county: string;
    region: string;
    subregion: string;
    eurovat: string;
    vat_number: string;
    category: string;
    fullpostcode: string;
    postcode: string;
    nacename: string;
    nacecode: string;
    nuts1: string;
    nuts2: string;
    nuts3: string;
    lastfiledaccountdate: string;
    capital: number;
    isactive: boolean;
    suiteTrace: any;
    registeredNumber: number;
    currency: string;
    totalRating: number;
    analisibilperf:number;
    analisisostenib:number;
    analisiasseman:number;
    analisisiccert:number;
    digitalinnov:number;
}

export class WiserAPI {
    companyInfo: CompanyInfo;
    riskMetrics: RiskMetrics;
    financialMetrics: FinancialMetrics;
    corporateGovernance: CorporateGovernance;
}
