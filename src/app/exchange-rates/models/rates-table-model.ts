export class RatesTableApiModel {
    effectiveDate: Date;
    no: string;
    rates: RateApiModel[];
    table: string;
}

export class RateApiModel {
    currency: string;
    code: string;
    mid: number;
}
