import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RatesTableApiModel } from './models/rates-table-model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private http: HttpClient) { }

  public getRates(date: Date): Observable<RatesTableApiModel[]> {
    let url = `http://api.nbp.pl/api/exchangerates/tables/A`;

    if (date) {
      url = url + `/` + this.getFormattedDate(date);
    }

    return this.http.get<RatesTableApiModel[]>(url);
  }

  private getFormattedDate(date: Date) {
    const year = date.getFullYear();
    const month = this.minTwoDigits(date.getMonth() + 1);
    const day = this.minTwoDigits(date.getDate());
    return `${year}-${month}-${day}`;
  }

  private minTwoDigits(n: number): string {
    return n < 10 ?  `0${n}` : n.toString();
  }
}
