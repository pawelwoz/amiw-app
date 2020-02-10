import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from './exchange-rates.service';
import { RateModel } from './models/rate-model';
import { FilterModel } from './models/filter-model';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
})
export class ExchangeRatesComponent implements OnInit {

  public rates: RateModel[];
  public filter: FilterModel;

  constructor(private exchangeRatesService: ExchangeRatesService) { }

  ngOnInit() {
    this.getData();
  }

  public changeFilter(filter: FilterModel) {
    this.filter = filter;
    this.getData(filter.currencyCode, filter.date);
  }

  private getData(currencyCode: string = null, date: Date = null) {
    this.exchangeRatesService.getRates(date)
      .subscribe(response => {
        // map results from api to application specific format
        this.rates = response[0].rates.map(rate => new RateModel(
          rate.currency,
          rate.code,
          rate.mid,
          response[0].no,
          response[0].effectiveDate))
          // filters selected currency
          .filter(c => currencyCode === null || currencyCode === 'ALL' || c.currencyCode === currencyCode );

      }, (error) =>{
        this.rates = [];
      });
  }
}
