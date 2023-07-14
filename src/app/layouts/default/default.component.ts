import {Component, OnInit} from '@angular/core';
import {DataService} from "../../shared/services/dataService";
import {User} from "../../shared/interfaces/user";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit{
  sideBarOpen = true;

  user?:User;
  constructor(private dataService:DataService) {

  }
  ngOnInit() {
  }
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
