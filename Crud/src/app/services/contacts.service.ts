import { Injectable } from '@angular/core';

import {HttpClient ,HttpHeaders , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient : HttpClient) { }

  getData():Observable <User> {

    const header = new HttpHeaders({
      
    })

  }
}
