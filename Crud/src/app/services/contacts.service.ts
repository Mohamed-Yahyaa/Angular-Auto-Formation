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
   
   
    return this.httpClient.get<User>("http://localhost:8003/users")
  
    
 
   }
 
   storeData(body:any){
 
    return  this.httpClient.post('http://localhost:8003/users',body)
   }
 
   DeleteRow(id:number){
 
    return  this.httpClient.delete('http://localhost:8003/users'+id)
   }
 
   GetDataById(id:any):Observable<User>{
 
    return  this.httpClient.get<User>('http://localhost:8003/users'+id)
   }
 
   Update(id:any, value:any){
     return this.httpClient.put('http://localhost:8003/users'+id,value)
   }
}
