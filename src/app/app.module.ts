import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { BudgetManagerComponent } from './budget-manager/budget-manager.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    BudgetManagerComponent,
    TodoListComponent,
    WorkoutPlanComponent,
    RegisterComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
