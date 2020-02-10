import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { FilterModel } from '../models/filter-model';

@Component({
  selector: 'app-exchange-rates-filter',
  templateUrl: './exchange-rates-filter.component.html',
  styleUrls: ['./exchange-rates-filter.component.scss']
})
export class ExchangeRatesFilterComponent {

  @Output() onFilterChange: EventEmitter<FilterModel>;

  public currencies = [
    'ALL',
    'THB',
    'USD',
    'AUD',
    'HKD',
    'CAD',
    'NZD',
    'EUR',
    'SGD',
    'CHF',
    'HUF',
    'GBP',
    'UAH',
    'JPY',
    'CZK',
    'DKK',
    'ISK',
    'NOK',
    'DKK',
    'ISK',
    'SEK',
    'HRK',
    'RON',
    'BGN',
    'TRY',
    'ILS',
    'CLP',
    'PHP',
    'MXN',
    'ZAR',
    'BRL',
    'MYR',
    'RUB',
    'IDR',
    'INR',
    'KRW',
    'CNY',
    'XDR',
  ];

  public filterDate: Date;
  public selectedCurrency: string;
  public date: { year: number, month: number };

  constructor(private calendar: NgbCalendar) {
    this.onFilterChange = new EventEmitter<FilterModel>();
  }

  public changeCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.emitFilterChange();
  }

  public onDateSelect(date: NgbDate) {
    // -1 because date index months from 0 and datepicker from 1
    this.filterDate = new Date(date.year, date.month - 1, date.day);
    this.emitFilterChange();
  }

  private emitFilterChange() {
    const filterValue = new FilterModel(this.selectedCurrency, this.filterDate);
    this.onFilterChange.emit(filterValue);
  }
}

