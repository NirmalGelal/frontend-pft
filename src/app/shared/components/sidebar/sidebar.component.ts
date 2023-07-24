import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {GeneralResponse} from "../../interfaces/generalResponse";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_BASE_URL} from "../../constants";
import jwtDecode from "jwt-decode";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  // @ts-ignore
  items: MenuItem[];

  access_token = localStorage.getItem("access_token");
  refresh_token = localStorage.getItem("refresh_token");
  username = this.getUsername();
  user?:User;
  constructor(private messageService:MessageService, private http:HttpClient) {
  }
  ngOnInit() {
    this.items = [
      {
        label: 'Visuals',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: ['/visuals']
      },
      {
        label: 'Incomes',
        icon: 'pi pi-fw pi-dollar',
        routerLink: ['/income']
      },
      {
        label: 'Expenses',
        icon: 'pi pi-fw pi-wallet'
      },
      {
        label: 'Goal',
        icon: 'pi pi-fw pi-money-bill',
      },
      {
        label: 'Recurring Bills',
        icon: 'pi pi-fw pi-money-bill',
      },
      {
        label: 'Budget Limits',
        icon: 'pi pi-fw pi-stop-circle',
      }
    ];
    this.user = this.getUser(this.username);
  }
  getIncomes() {
    return this.http.get<any>(API_BASE_URL + '/incomes', {});
  }

  getUsername(): any {
    if (this.access_token) {
      const decodedToken: string = jwtDecode(this.access_token);
      if (decodedToken) {
        return decodedToken.sub;
      }
    }
  }
  getUser(username: string):any{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.access_token}`
      })
    };
    //  let user:User;
    this.http.post<GeneralResponse>(API_BASE_URL + '/find-user', {email: username}, httpOptions)
      .subscribe(
        {
          next:( response) => {
            // console.log(response)
            // return response.data;
            this.user = response.data;
          },
          error: (errorResponse: any) => {
            let errorData: GeneralResponse = errorResponse.error;
            console.error(errorData)
          }
        }
      );
    return this.user;
  }

}
