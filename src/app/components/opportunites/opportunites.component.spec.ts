import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgPipesModule } from 'ngx-pipes';
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

import { OpportunitesComponent } from './opportunites.component';
import { InvestorsService } from '../../services/investors.service';

describe('OpportunitesComponent', () => {
  let component: OpportunitesComponent;
  let fixture: ComponentFixture<OpportunitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitesComponent ],
      imports: [,
        BrowserAnimationsModule,
        FormsModule,
        NgPipesModule,
        HttpClientModule,
        FlexLayoutModule,
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
    fixture = TestBed.createComponent(OpportunitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
