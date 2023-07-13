import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  clientList = [
    {clientId: 10 , firstName: 'yahya', lastName: 'Med'},
    {clientId: 11 , firstName: 'Adnane', lastName: 'Tebbaa'},
    {clientId: 12 , firstName: 'Hicham', lastName: 'El Mliki'},
    {clientId: 13 , firstName: 'Merraadou', lastName: 'Abderahmane'},
    {clientId: 14 , firstName: 'Lharrak', lastName: 'Boutaina'}
  ]

}
