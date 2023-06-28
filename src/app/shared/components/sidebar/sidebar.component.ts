import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  // @ts-ignore
  items: MenuItem[];

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
        items: [
          {
            label: 'Add',
            icon: 'pi pi-fw pi-plus-circle',
            routerLink: ['/add']
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-file-edit'
          }

        ]
      },
      {
        label: 'Expenses',
        icon: 'pi pi-fw pi-wallet',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-fw pi-plus-circle',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-file-edit'
          }
        ]
      },
      {
        label: 'Goal',
        icon: 'pi pi-fw pi-money-bill',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-file-edit'
          }
        ]
      },
      {
        label: 'Recurring Bills',
        icon: 'pi pi-fw pi-money-bill',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-file-edit'
          }
        ]
      },
      {
        label: 'Budget Limits',
        icon: 'pi pi-fw pi-stop-circle',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-file-edit'
          }
        ]
      }
    ];
  }
  constructor() {
  }

}
