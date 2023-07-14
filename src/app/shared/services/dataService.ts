import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_BASE_URL} from "../constants";
import {Injectable, OnInit} from "@angular/core";
import {AuthService} from "./auth.service";
import jwtDecode from "jwt-decode";
import {GeneralResponse} from "../interfaces/generalResponse";
import {User} from "../interfaces/user";

@Injectable()
export class DataService{
  // access_token: string | null = '';
  // refresh_token: string | null = '';
  // username: string = '';
  // user?:User;
  constructor(private http: HttpClient) {

  }
  //
  // ngOnInit(): void {
  //   this.access_token = localStorage.getItem("access_token");
  //   this.refresh_token = localStorage.getItem("refresh_token");
  //   this.username = this.getUsername();
  //   this.user = this.getUser(this.username);
  //
  // }
  //
  getIncomes() {
    return this.http.get<any>(API_BASE_URL + '/incomes', {});
  }
  //
  // getUsername(): any {
  //   if (this.access_token) {
  //     const decodedToken: string = jwtDecode(this.access_token);
  //     if (decodedToken) {
  //       return decodedToken.sub;
  //     }
  //   }
  // }
  //
  // getUser(username: string):any{
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${this.access_token}`
  //     })
  //   };
  // //  let user:User;
  //   this.http.post<GeneralResponse>(API_BASE_URL + '/find-user', {email: username}, httpOptions)
  //     .subscribe(
  //     {
  //       next:( response) => {
  //         console.log(response)
  //         // return response.data;
  //         this.user = response.data;
  //       },
  //       error: (errorResponse: any) => {
  //         let errorData: GeneralResponse = errorResponse.error;
  //         console.error(errorData)
  //       }
  //     }
  //   );
  //   return this.user;
  // }

}
