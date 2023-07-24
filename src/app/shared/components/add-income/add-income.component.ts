import {Component, OnInit} from '@angular/core';
import {IncomeEnums} from "../../interfaces/incomeEnums";

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit{
  categories: IncomeEnums[] | undefined;

  ngOnInit(): void {
    this.categories = [
      {category: 'SALARY'},
      {category: 'INVESTMENT'},
      {category: 'FREELANCING'},
      {category: 'RENT'},
      {category: 'BUSINESS_INCOME'},
      {category: 'PENSION'},
      {category: 'COMMISSION'},
      {category: 'OTHER'},
    ];
  }


}
