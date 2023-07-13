import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoanComponent } from './add-loan/add-loan.component';

import {LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HashLocationStrategy } from '@angular/common';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    LoanTypesComponent,
    AddLoanComponent,
    P1Component,
    P2Component,
    ProductComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
