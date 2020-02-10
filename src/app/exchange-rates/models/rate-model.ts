export class RateModel {

    constructor(currency: string, currencyCode: string, midRate: number, rateNumber: string, effectiveDate: Date) {
        this.currency = currency;
        this.currencyCode = currencyCode;
        this.midRate = midRate;
        this.rateNumber = rateNumber;
        this.effectiveDate = effectiveDate;
    }

    effectiveDate: Date;
    rateNumber: string;
    currency: string;
    currencyCode: string;
    midRate: number;
}
