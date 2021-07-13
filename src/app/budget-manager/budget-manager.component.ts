import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { walletdata } from '../Models/model';
import { CommonServiceService } from '../Services/common-service.service';
import { Router } from '@angular/router';
import { BudgetHomeComponent } from '../budget-home/budget-home.component';
@Component({
  selector: 'app-budget-manager',
  templateUrl: './budget-manager.component.html',
  styleUrls: ['./budget-manager.component.css']
})
export class BudgetManagerComponent implements OnInit {

  @ViewChild('wallet') walletform: NgForm;
  
  defaultFlow = "Income";
  details:[{}]=[{}];
  walletdetails:any;
  //name: string;
  //description: string;
  //cashflow: string;
  //amountdata: number;


  constructor(private walletserv: CommonServiceService, private route: Router) { }

  ngOnInit(): void {
    this.walletdetails =new walletdata();
   console.log(this.details);
   console.log(this.walletdetails.amount);
  }

  onSubmitWallet() {
   this.walletdetails.walletname=this.walletform.value.WalletName;
   this.walletdetails.walletdescription=this.walletform.value.WalletDetails;
   this.walletdetails.cashflowType=this.walletform.value.TypeofFlow;
   this.walletdetails.amount=this.walletform.value.WalletAmount;
   this.details.push(this.walletdetails);
   console.log(this.details);
   console.log(this.walletdetails);
   this.walletserv.emitwallet=this.details;
    this.route.navigate(['budget']);

  }
  

}
