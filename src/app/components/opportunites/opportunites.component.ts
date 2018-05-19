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

  constructor(private investorsSerivce: InvestorsService) { }

  ngOnInit() {
    this.investorsSerivce.getInvestors()
    .subscribe(
      (opportunities) => {
        this.opportunities = opportunities.opportunities;
        console.log(this.opportunities);
      }
    );
  }

}
