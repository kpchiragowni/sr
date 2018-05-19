import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOpportunity, IOpportunities } from '../model/opportunity';

@Injectable({
  providedIn: 'root'
})
export class InvestorsService {

  constructor(private http: HttpClient) { }

  getInvestors(): Observable<IOpportunities> {
    return this.http.get<IOpportunities>('/api/investors.json');
  }
}
