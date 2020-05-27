import { AuthGuard } from './shared/classes/auth.guard';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import { ContactBookPageComponent } from './contact-book-page/contact-book-page.component';


const routes: Routes = [
  {
    path: "", component: AuthLayoutComponent, children: [
      { path: "", redirectTo: "/login", pathMatch: "full"},
      { path: "login", component: LoginPageComponent },
      { path: "register", component: RegisterPageComponent }
     

    ]
  },
  {
    path: "", component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
      { path: "book", component: ContactBookPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
