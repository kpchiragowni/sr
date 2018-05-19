import { Component, OnInit } from '@angular/core';

import { InvestorsService } from '../../services/investors.service';
import { IOpportunity, IOpportunities } from '../../model/opportunity';

@Component({
  selector: 'app-opportunites',
  templateUrl: './opportunites.component.html',
  styleUrls: ['./opportunites.component.css']
})
export class OpportunitesComponent implements OnInit {

  public opportunities: IOpportunity[];
  public filteredOpportunities: IOpportunity[];
  public filterKey: string;
  public sortBy: string;
  public tradingActive: boolean;
  public eis: false;
  public seis: false;
  public color = 'accent';

  public columns = [
    {
      'value': 'averageInvestment',
      'viewValue': 'Average Investment'
    },
    {
      'value': 'totalRaised',
      'viewValue': 'Total Raised'
    }
  ];
  constructor(private investorsSerivce: InvestorsService) { }

  ngOnInit() {
    this.investorsSerivce.getInvestors()
    .subscribe(
      (opportunities) => {
        this.opportunities = opportunities.opportunities;
        this.filteredOpportunities = this.opportunities;
        console.log(this.opportunities);
      }
    );
  }

  public onChanged(event) {
    this.tradingActive = !this.tradingActive;
    this.applyFilter();
    console.log('Trading active::: ', this.tradingActive);
  }

  private applyFilter() {
    if (this.opportunities && this.opportunities.length) {
      if (this.tradingActive) {
        this.filteredOpportunities = this.opportunities.filter(opp => opp.tradingActive === this.tradingActive);
      } else {
        this.filteredOpportunities = this.opportunities;
      }
    }
  }

  private onChange(key) {
    if (key === 'eis') {
      if (this.eis) {
        this.filteredOpportunities = this.opportunities.filter(opp => opp.eis === this.eis);
      } else {
        this.filteredOpportunities = this.opportunities;
      }
    }

    if (key === 'seis') {
      if (this.seis) {
        this.filteredOpportunities = this.opportunities.filter(opp => opp.seis === this.seis);
      } else {
        this.filteredOpportunities = this.opportunities;
      }
    }
  }
}
