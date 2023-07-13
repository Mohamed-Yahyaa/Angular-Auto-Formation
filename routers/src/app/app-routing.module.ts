import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoanComponent } from './add-loan/add-loan.component';

const routes: Routes = [
  
// Component Routing //

  {
    path: 'loans',
    component: LoansComponent
    // Output // loans works! //
  },
  {
    path: 'loan-types',
    component:LoanTypesComponent
     // Output // loan-types works! //
  },
  {
    path: 'loan/add-loan',
    component: AddLoanComponent
     // Output // >add-loan works! //
  }
   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
