import { Component, OnInit } from '@angular/core';
import { InvestorsService } from '../../services/investors.service';
import { IOpportunity, IOpportunities } from '../../model/opportunity';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit {

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
