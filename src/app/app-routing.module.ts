import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {PostsComponent} from "./modules/posts/posts.component";
import {VisualsComponent} from "./modules/visuals/visuals.component";
import {LoginComponent} from "./layouts/login/login.component";
import {IncomeComponent} from "./shared/components/income/income.component";

const routes: Routes = [
    {
      path: '',
      component: DefaultComponent,
      children: [
        {
          path: 'visuals',
          component: VisualsComponent,
        },
        {
          path: 'income',
          component: IncomeComponent,
        },
        {
          path: 'posts',
          component: PostsComponent,
        },
        {
          path: 'dashboard',
          component: DashboardComponent,
        }
      ]
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: '**',
      component: DefaultComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
