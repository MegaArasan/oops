class account{
    constructor(name, accno, balance)
    {
        this.name=name;
        this.accno=accno;
        this.balance=balance;
    }
    getBalance(){
        return "The Balance is :"+this.balance
    }
    withdraw(amount){
        if(amount<=this.balance)
        {
            this.balance=this.balance-amount
            return this.getBalance()
        }else{
            return "The Invalid amount.the balance is:"+this.getBalance()
        }
    }
    deposit(amount){
        this.balance=this.balance+amount
        return this.getBalance()
    }
}
const Mega=new account("Mega",121,31500)
const Arasan=new account("Arasan",122,300)
const Mano=new account("Mano",123,31500000)
console.log(Arasan.getBalance());
console.log(Arasan.deposit(500000));
console.log(Arasan.withdraw(50000));