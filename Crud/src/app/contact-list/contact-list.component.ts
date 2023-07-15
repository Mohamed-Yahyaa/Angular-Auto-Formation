import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  contacts?:any;
constructor(private Service:ContactsService,private route: Router ){}

ngOnInit(){
  this.Service.getData().subscribe(value=>{
    this.contacts = value
    console.log(value);

  })
  console.log()
}

DeleteContact(id:number){
  console.log(id);
  this.Service.DeleteRow(id).subscribe(value =>{
    console.log(value)
   this.ngOnInit()
  },(errvalue)=>{
    console.log(errvalue)
  }
  )

  // this.Service.DeleteRow(id)
}
EditContact(id:number){

  this.route.navigate(["updateForm/"+id])
  console.log(id);
  // this.Service.DeleteRow(id)
}

}
