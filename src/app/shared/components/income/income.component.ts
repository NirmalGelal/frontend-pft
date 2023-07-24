import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/dataService";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, ConfirmEventType, MessageService} from "primeng/api";
import {AddIncomeComponent} from "../add-income/add-income.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit{
  ref: DynamicDialogRef | undefined;
  incomeList: any;
  constructor(private service:DataService,
              public dialogService: DialogService,
              public messageService: MessageService,
              private confirmationService: ConfirmationService,
              private router: Router
              ) {
  }
  ngOnInit() {
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

  showAddComponent() {
    this.ref = this.dialogService.open(AddIncomeComponent, {
      header: 'Income',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', key:"msg", summary: 'Maximized', detail: `maximized: ${value.maximized}` });
    });
  }

  confirm2(id:number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteRecords(id);
        this.router.navigate(['/income'])
        this.messageService.add({ severity: 'info', key:'msg', summary: 'Confirmed', detail: 'Record deleted' });
      },
      reject: (type:ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', key:'msg', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', key:'msg', summary: 'Cancelled', detail: 'You have cancelled' });
            break;

        }
      }
    });
  }

  deleteRecords(id:number){
      this.service.deleteIncome(id).subscribe({
        next: (response) => {
        },
        error: (responseError) => {
          console.log(responseError);
        }
      })
    }

}
