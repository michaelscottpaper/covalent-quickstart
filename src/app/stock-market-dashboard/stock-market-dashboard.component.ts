import { Component, OnInit } from '@angular/core';
import { TdDigitsPipe } from '@covalent/core/common';
import { TdLoadingService } from '@covalent/core/loading';
import { StoriesService, CryptoService } from '../../services';
import { stockData } from './stockData';

@Component({
  selector: 'app-stock-market-dashboard',
  templateUrl: './stock-market-dashboard.component.html',
  styleUrls: ['./stock-market-dashboard.component.scss'],
  viewProviders: [StoriesService, CryptoService],
})
export class StockMarketDashboardComponent implements OnInit {
  stories: Object[];
  crypto: Object[];
  stockData: any[];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Sales';
  colorScheme: any = {
    domain: ['#1565C0', '#2196F3', '#81D4FA', '#FF9800', '#EF6C00'],
  };
  displayedColumns: string[] = ['symbol', 'last_price', 'change', 'change_percent'];

  constructor(
    private _storiesService: StoriesService,
    private _cryptoService: CryptoService,
    private _loadingService: TdLoadingService
  ) {
    this.stockData = stockData.map((group: any) => {
      group.series = group.series.map((dataItem: any) => {
        dataItem.name = new Date(dataItem.name);
        return dataItem;
      });
      return group;
    });
  }

  ngOnInit(): void {
    this._loadingService.register('stories.load');
    this._storiesService.query().subscribe((stories: Object[]) => {
      this.stories = stories;
      setTimeout(() => {
        this._loadingService.resolve('stories.load');
      }, 750);
    });

    this._loadingService.register('crypto.load');
    this._cryptoService.query().subscribe((crypto: Object[]) => {
      this.crypto = crypto;
      setTimeout(() => {
        this._loadingService.resolve('crypto.load');
      }, 750);
    });
  }

  // ngx transform using covalent digits pipe
  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }
}
