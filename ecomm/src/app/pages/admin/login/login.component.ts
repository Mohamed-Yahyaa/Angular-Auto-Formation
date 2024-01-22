import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  loginObj : any = {
    fullName: '',
    password:'',
  };
  constructor(private router: Router){

  }
  onLogin (){
    if(this.loginObj.fullName === "yahya" && this.loginObj.password === "1234"){
      this.router.navigateByUrl('/products')

    }else {
      alert('no nooo')
    }

  }
}
