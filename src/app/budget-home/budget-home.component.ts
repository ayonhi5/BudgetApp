import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonServiceService } from '../Services/common-service.service';
import { walletdata } from '../Models/model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-budget-home',
  templateUrl: './budget-home.component.html',
  styleUrls: ['./budget-home.component.css']
})
export class BudgetHomeComponent implements OnInit{

 walletdata :any;

  constructor(private walletservice: CommonServiceService ) {
  }
  ngOnInit(): void {
    
    this.onGetwallet();
    
  }

  onGetwallet(){
    this.walletservice.onGetwallet().subscribe((result) => {
      console.log(result);
        this.walletdata=result;
        console.log(this.walletdata);
    })

  }

}




