function Account( holder, number, balance,baseCash) {
   this.name = holder;
   this.number = number;
   this.baseCash = baseCash;
   this.balance= balance;
   this.deposit = function deposit(amount){
       this.balance = amount
   }
   this.withdraw = function withdraw(amount){
    if(this.balance - amount < -this.baseCash){
      return false;
    }else{
      this.balance -= amount;
      return this.balance;
    }
    }

    this.transfer = function transfer(target,amount){
      if (this.balance - amount < -this.baseCash){
        return false;
      }else{
        this.balance -= amount;
        target.balance += amount;
        return "Done";
      }

    }

}

