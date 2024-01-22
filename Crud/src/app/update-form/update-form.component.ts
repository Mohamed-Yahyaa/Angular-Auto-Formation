import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnDestroy, OnInit {
  form!:FormGroup ;
  data?:any;
  IdGet?: number;
  private _role = true
  
  constructor(private FormBuilder:FormBuilder , private route:Router,private service:ContactsService,private routeParams:ActivatedRoute){

  }
  ngOnDestroy(): void {
    
  }

  validation = Validators.compose([Validators.required])

  ngOnInit(){

    this.form = this.FormBuilder.group({
      "FirstName" : new FormControl("",this.validation),
      "Email" : new FormControl("",[
        Validators.email,Validators.required
      ])

  })


  this.routeParams.params.subscribe(value=>{
    this.IdGet=  value["id"]
  })
      this.service.GetDataById(this.IdGet).subscribe(value=>{
        console.log(value)
        console.log(this.IdGet)
         this.form.get('FirstName')?.setValue(value.FirstName)
         this.form.get('Email')?.setValue(value.Email)

      })

  }




  Update(){
    var id = this.IdGet
    console.log(this.IdGet)
    var values = this.form.value
    this.service.Update(id, values).subscribe(value=>{
      console.log(value)
    })
    this.route.navigate([''])
  }
}
