import {Component, OnInit} from '@angular/core';
import {IncomeEnums} from "../../interfaces/incomeEnums";
import {DataService} from "../../services/dataService";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  categories: IncomeEnums[] | undefined;
  incomeList: any[] = [];
  constructor(private service:DataService) {
  }
  ngOnInit() {
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
    this.service.getIncomes().subscribe({
      next: response => {
        this.incomeList = response.data;
      },
      error: (responseError) => {
        console.log(responseError);
      }
    }
    );
  }

}
