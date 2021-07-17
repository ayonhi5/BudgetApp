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
 err:boolean =false;
  @ViewChild('wallet') walletform: NgForm;

  defaultFlow = "Income";


  walletdetails = new walletdata();



  constructor(private walletserv: CommonServiceService, private route: Router) { }

  ngOnInit(): void {
    
  }

  onSubmitWallet() {
    this.walletdetails.walletname = this.walletform.value.WalletName;
    this.walletdetails.walletdescription = this.walletform.value.WalletDetails;
    this.walletserv.onCreateWallet(this.walletdetails).subscribe((result: walletdata) => {
   if(result){
     console.log(result);
    this.route.navigate(['budget']);
   }else{
     this.err=true;
   }
    });
    


  }


}
