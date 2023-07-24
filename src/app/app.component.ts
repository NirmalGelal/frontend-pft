import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'personal-finance-tracker';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    const isLoggedIn = this.authService.checkIfLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['/login'])
    }
  }

}
