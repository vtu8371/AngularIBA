import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http:HttpClient) { }

  fetchAccountByIdFromRemote():Observable<any>{
   return  this.http.get<any>("http://localhost:8080/Accounts/viewAccountsForCustomer/{customerId}");
  }
}
