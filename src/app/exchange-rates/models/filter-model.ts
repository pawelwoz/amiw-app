export class FilterModel {

    constructor(currencyCode: string, date: Date) {
        this.currencyCode = currencyCode;
        this.date = date;
    }

    public date: Date;
    public currencyCode: string;
}
