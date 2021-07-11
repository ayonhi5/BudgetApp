import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-manager',
  templateUrl: './budget-manager.component.html',
  styleUrls: ['./budget-manager.component.css']
})
export class BudgetManagerComponent implements OnInit {

Amount =15000;

  constructor() { }

  ngOnInit(): void {
  }

}
