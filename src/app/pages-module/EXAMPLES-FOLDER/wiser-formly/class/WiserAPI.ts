export class CorporateGovernance {
    shareHoldingStructure: string;
    noOfSubsidiaries: string;
    noOfDirectors: string;
    boardMembers: string;
    numberofEmployees: string;
}

export class FinancialMetrics {
    turnover:  string;
    totalAssets:  string;
    EBIT:  string;
    EBITDA:  string;
    totalDebt:  string;
    cashCashEquivalents:  string;
    interestExpense:  string;
    shareholdersEquity:  string;
    daysReceivable:  string;
    daysPayable:  string;
    EBITDAMargin:  string;
    totalDebtTotalAssets:  string;
    intangibleFixedAssetsTotalAssets:  string;
    netAssetsTurnover:  string;
    liquidityRatio:  string;
    currentRatio:  string;
    debtEquityRatio:  string;
    ROE:  string;
    ROA:  string;
    equityTotalAssets:  string;
    interestCoverageRatio:  string;
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
    companyName: string;
    registeredNumber: string;
    legalForm: string;
    dateIncorporated: string;
    registeredOffices: string;
    telephonenumber: string;
    website: string;
    emailAddress: string;
}

export class WiserAPI {
    companyInfo: CompanyInfo;
    riskMetrics: RiskMetrics;
    financialMetrics: FinancialMetrics;
    corporateGovernance: CorporateGovernance;
}
