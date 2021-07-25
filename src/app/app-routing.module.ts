import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './lib/home/home.component';
import { LoginComponent } from './lib/login/login.component';



const routes: Route[] = [
  {
    path: 'login', component: LoginComponent,
  },
   {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
