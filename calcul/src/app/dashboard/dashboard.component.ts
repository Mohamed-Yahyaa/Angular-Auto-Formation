
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [FormsModule,CommonModule]
})
export class DashboardComponent {

  btnUpdate:boolean  = false ;
    btnAdd:boolean  = true ;
    btnAnnuler:boolean  = false ;
    name = '';
    email = '';
    id = 0;


  data =[
    {"id":1 , "name": "hicham","email":"hicham@gmail.com"},
    {"id":2 , "name": "yahya","email":"yahya@gmail.com"},

    {"id":5 , "name": "adnan","email":"adnan@gmail.com"},
    {"id":6 , "name": "amin","email":" amin@gmail.com"},
  ]


  colorBlue = "blue";
  colorRed = "red";
  size = "20px";


  showName(id : number){
    var index = this.data.findIndex(item => item.id === id)
    this.data.splice(index,1)
  }

  addContact(name:string,email:string){
    console.log(name,email)
    var id = this.data.length +2
    this.data.push({"id":id,"name":name, "email": email})
    this.name = " ";
    this.email=" ";
  }

  edit(id:number ) {

    var index = this.data.findIndex(item => item.id === id)
    var dataEdit =  this.data[index]
    this.name = dataEdit.name
    this.email = dataEdit.email
    this.id = dataEdit.id
    this.btnUpdate = true
    this.btnAdd = false
    this.btnAnnuler = true ;

  }

  Annuler(){
    this.name = " "
    this.email = " "
    this.btnUpdate = false
    this.btnAdd = true
    this.btnAnnuler = false ;
  }
  updateContact(name: string,email: string,id:number) {
    var index = this.data.findIndex(item=>item.id === id)
    this.data[index].name = name
    this.data[index].email = email

    this.name = " "
    this.email = " "
    this.btnUpdate = false
    this.btnAdd = true
    this.btnAnnuler = false ;
  }

  const names = this.data.filter(name =>name[0].toLowerCase()  === 'h')
}
