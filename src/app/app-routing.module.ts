import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetHomeComponent } from './budget-home/budget-home.component';
import { BudgetManagerComponent } from './budget-manager/budget-manager.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { WalletdetailsComponent } from './budget-home/walletdetails/walletdetails.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'budget', component:BudgetHomeComponent},
  {path:'budget/budgetmanage',component:BudgetManagerComponent},
  {path:'todo',component:TodoListComponent},
  {path:'workout',component:WorkoutPlanComponent},
  {path:'register',component:RegisterComponent},
  {path:'wallet',component:WalletdetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
