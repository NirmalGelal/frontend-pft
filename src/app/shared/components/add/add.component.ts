import {Component, OnInit} from '@angular/core';
import {IncomeEnums} from "../../interfaces/incomeEnums";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  categories: IncomeEnums[] | undefined;
  ngOnInit() {
    this.categories = [
      {category: 'GOAL'},
      {category: 'TEST'},
    ];
  }
}
