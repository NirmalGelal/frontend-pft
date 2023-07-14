import {Component, EventEmitter, Output} from '@angular/core';
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter<any>();

  constructor(private messageService: MessageService,
              private router:Router) {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  logout() {
    localStorage.clear();
    this.messageService.add({key:"msg",severity: 'success', summary:'Success', detail:'Logged out successfully'});
    this.router.navigate(['']);
  }
}
