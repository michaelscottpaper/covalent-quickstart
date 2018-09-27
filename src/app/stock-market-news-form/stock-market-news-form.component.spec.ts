import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMarketNewsForm } from './stock-market-news-form.component';

describe('StockMarketNewsForm', () => {
  let component: StockMarketNewsForm;
  let fixture: ComponentFixture<StockMarketNewsForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockMarketNewsForm],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMarketNewsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
