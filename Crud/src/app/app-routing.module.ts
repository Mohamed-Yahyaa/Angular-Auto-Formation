import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"form",
    component:FormComponent,
   
  },
  {
    path:"updateForm/:id",
    component:UpdateFormComponent,
    
  },
  {
    path:"",
    component:ContactListComponent
  },
  {
    path:'**',component:HomeComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



