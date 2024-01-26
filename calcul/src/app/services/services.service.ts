import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private Http: HttpClient) { }

  getUsers(){
    const headers = new HttpHeaders();

    return this.Http.get('https://jsonplaceholder.typicode.com/users');
  }
}
