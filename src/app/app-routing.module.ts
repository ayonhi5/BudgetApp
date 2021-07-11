import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetManagerComponent } from './budget-manager/budget-manager.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'budget', component:BudgetManagerComponent},
  {path:'todo',component:TodoListComponent},
  {path:'workout',component:WorkoutPlanComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
