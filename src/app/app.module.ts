import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTooltipModule,
  MatSlideToggleModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgPipesModule } from 'ngx-pipes';

import { AppComponent } from './app.component';
import { InvestorsComponent } from './components/investors/investors.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { OpportunitesComponent } from './components/opportunites/opportunites.component';


@NgModule({
  declarations: [
    AppComponent,
    InvestorsComponent,
    HeaderComponent,
    OpportunitesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
