import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { ExchangeRatesFilterComponent } from './exchange-rates/exchange-rates-filter/exchange-rates-filter.component';
import { ExchangeRatesTableComponent } from './exchange-rates/exchange-rates-table/exchange-rates-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExchangeRatesComponent,
    ExchangeRatesFilterComponent,
    ExchangeRatesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
