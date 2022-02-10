import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutComponent } from './components/about/about.component';
import { AnswerQuestionComponent } from './components/answer-question/answer-question.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { ServiceComponent } from './components/service/service.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import {AuthGuard} from "./guard/auth.guard";
import {EmployeeComponent} from "./components/employee/employee.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'transaction', component: TransactionComponent,canActivate:[AuthGuard]},
  {path: 'answer-question', component: AnswerQuestionComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path: 'employee', component: EmployeeComponent,canActivate:[AuthGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'faq', component: AnswerQuestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
