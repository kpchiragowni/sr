import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

  import { AppComponent } from './app.component';
  import { HeaderComponent } from './components/header/header.component';
  import { OpportunitesComponent } from './components/opportunites/opportunites.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        OpportunitesComponent
      ],
      imports: [
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
       ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
