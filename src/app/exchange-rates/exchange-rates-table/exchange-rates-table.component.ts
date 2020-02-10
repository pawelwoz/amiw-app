import { Component, OnInit, Input } from '@angular/core';
import { RateModel } from '../models/rate-model';

@Component({
  selector: 'app-exchange-rates-table',
  templateUrl: './exchange-rates-table.component.html',
  styleUrls: ['./exchange-rates-table.component.scss']
})
export class ExchangeRatesTableComponent implements OnInit {

  @Input() rates: RateModel[];

  constructor() { }

  ngOnInit() {
  }

}
