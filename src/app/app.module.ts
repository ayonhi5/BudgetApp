import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { BudgetManagerComponent } from './budget-manager/budget-manager.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { RegisterComponent } from './register/register.component';
import { BudgetHomeComponent } from './budget-home/budget-home.component';
import { WalletdetailsComponent } from './budget-home/walletdetails/walletdetails.component';
import {  HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    BudgetManagerComponent,
    TodoListComponent,
    WorkoutPlanComponent,
    RegisterComponent,
    BudgetHomeComponent,
    WalletdetailsComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
