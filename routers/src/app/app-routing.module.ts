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
  
// Configure Component Routes //

  {
    path: 'loan-types',

    // Children //

    children:[
      {
        path: 'add-loan',component: AddLoanComponent
      },

      {
        path: 'edit-loan',component: AddLoanComponent
      },

      {
        path: 'delete-loan',component: AddLoanComponent
      },

    ]
  },
  
 // Redirect //
  {
    path: 'add-new-loan',
    redirectTo: 'add-loan'
  },
  {
    
  path: 'add-loan',
  component:AddLoanComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
