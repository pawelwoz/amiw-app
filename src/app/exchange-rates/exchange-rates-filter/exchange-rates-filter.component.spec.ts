import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRatesFilterComponent } from './exchange-rates-filter.component';

describe('ExchangeRatesFilterComponent', () => {
  let component: ExchangeRatesFilterComponent;
  let fixture: ComponentFixture<ExchangeRatesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRatesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRatesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
