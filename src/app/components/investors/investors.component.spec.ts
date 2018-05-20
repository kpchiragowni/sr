import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatTooltipModule } from '@angular/material';

import { NgPipesModule } from 'ngx-pipes';
import { InvestorsComponent } from './investors.component';

import { InvestorsService } from '../../services/investors.service';

describe('InvestorsComponent', () => {
  let component: InvestorsComponent;
  let fixture: ComponentFixture<InvestorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorsComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        NgPipesModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatSlideToggleModule
      ],
      providers: [ InvestorsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
