import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMarketDashboardComponent } from './stock-market-dashboard.component';

describe('StockMarketDashboardComponent', () => {
  let component: StockMarketDashboardComponent;
  let fixture: ComponentFixture<StockMarketDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMarketDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMarketDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
