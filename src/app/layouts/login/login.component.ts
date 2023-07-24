import { Component } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Tokens} from "../../shared/interfaces/tokens";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {DataService} from "../../shared/services/dataService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // @ts-ignore
  email:string;
  // @ts-ignore
  password:string;

  private tokens: Tokens = {
    accessToken: '',
    refreshToken: ''
  }
  constructor(private authService:AuthService,
              private router:Router,
              private messageService: MessageService,
              private dataService: DataService) {
  }

  generateTokens(){
    this.authService.login(this.email, this.password).subscribe((response: any) => {
      console.log(response)
      if(response.status === true){
        this.tokens.accessToken = response.data.access_token;
        this.tokens.refreshToken = response.data.refresh_token;

        localStorage.setItem("access_token", this.tokens.accessToken);
        localStorage.setItem("refresh_token", this.tokens.refreshToken);
        this.messageService.add({key:"msg", severity: 'success', summary: 'Success', detail: 'Logged in successfully' });
        this.router.navigate(['']);
      }
    },error => {
        this.messageService.add({key:"msg", severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
    })
  }

}
