import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {PostsComponent} from "./modules/posts/posts.component";
import {VisualsComponent} from "./modules/visuals/visuals.component";
import {AddComponent} from "./shared/components/add/add.component";
import {LoginComponent} from "./layouts/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: DefaultComponent,
    children:[
      {
        path: '',
        component: VisualsComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'add',
        component: AddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
