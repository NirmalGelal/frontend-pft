import {Component, OnInit} from '@angular/core';
import {IncomeEnums} from "../../interfaces/incomeEnums";
import {HttpClient} from "@angular/common/http";
import {API_BASE_URL} from "../../constants";
import {DataService} from "../../services/dataService";
import {IncomeData} from "../../interfaces/incomeData";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit{
  categories: IncomeEnums[] | undefined;

  formData:IncomeData = {
    amount: 0,
    category: '',
    description: ''
  }

  constructor(private http:HttpClient,
              private dataService: DataService,
              private messageService: MessageService,
              private router: Router) {
  }
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
  submitForm(form:any){
    if(form.valid){
      this.addRecord();
    }
    else{
      this.messageService.add({ severity: 'error', key:'msg', summary: 'Required', detail: 'All fields are required' });
    }
  }

  addRecord(){
    this.http.post(API_BASE_URL+'/income', this.formData, this.dataService.httpOptions).subscribe({
      next: (response) => {
        this.dataService.closeDialogBox();
        this.router.navigate(['/income']);
        this.messageService.add({ severity: 'success', key:'msg', summary: 'Success', detail: 'Data added successfully' });

      },
      error: (responseError) => {
        console.log(responseError);
      }
    })
  }

}
