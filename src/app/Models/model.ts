export class Mydata{
    name:string;
    amount:number;
    DateOfBirth:string;
    constructor(){
        this.name='';
        this.amount=0;
        this.DateOfBirth=''

    }
}
 
export class walletdata{
    walletname ?: string;
    walletdescription?: string;
    cashflowType ?: string;
    amount ?: number;
    constructor(){
        this.walletname = '';        
        this.walletdescription='';
        this.cashflowType='';
        this.amount=0;

    }
}


