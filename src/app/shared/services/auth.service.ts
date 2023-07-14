import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_BASE_URL} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    return this.http.post(API_BASE_URL+'/auth/signin',{email,password});
  }

}
