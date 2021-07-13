import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../Services/common-service.service';
import { walletdata } from '../Models/model';

@Component({
  selector: 'app-budget-home',
  templateUrl: './budget-home.component.html',
  styleUrls: ['./budget-home.component.css']
})
export class BudgetHomeComponent implements OnInit {

  recievedwallet: [{}] = [{}];

  constructor(private walletservice: CommonServiceService) {
  }
  ngOnInit(): void {

    this.recievedwallet.push(this.walletservice.emitwallet);
    console.log( this.recievedwallet );
  }
  

}




