import { Component } from '@angular/core';
import { FormGroup, Validators , FormBuilder ,FormControl } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

form! :FormGroup;

validation = Validators.compose([Validators.required]);

  constructor(private FormBuilder : FormBuilder,private services : ContactsService,private router:Router){}

  ngOnInit(){
    this.form = this.FormBuilder.group({
      "FirstName" : new FormControl("",this.validation),
      "Email" : new FormControl("",[
        Validators.email,Validators.required
      ]),
      "password" : new FormControl("",[
        Validators.minLength(8),
        Validators.required
      ]),
    })

  }

  async addUser(){
    //  console.log( this.form.value)
     const data= {
      "FirstName":this.form.value.FirstName,
    "Email":this.form.value.Email,
    "password":this.form.value.password,

  }
    console.log(data);

     (await this.services.storeData(data)).subscribe(value=>{
      console.log(value);
      this.router.navigate([''])

     },(err)=>{
      console.log(err)
     }

     )
  }


}
