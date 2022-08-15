class BankAccount {
  constructor(name, money) {
    this.holder = name;
    this._balance = money;
  }

  get balance() {
    return this._balance;
  }

  set balance(money) {
    if (money >= 0) {
      this._balance = money;
    } else {
      console.log('You cannot set negative number for balance');
    }
  }

  deposit(money) {
    this._balance += money;
  }

  withdraw(money) {
    if (this._balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this._balance -= money;
    }
  }

  transfer(money, anotherAccount) {
    const account = anotherAccount;
    if (this._balance - money < 0) {
      console.log('Insufficient balance');
    } else {
      this._balance -= money;
      account._balance += money;
    }
  }
}

const account1 = new BankAccount('Michael', 10000);
account1.balance = -20000;
account1._balance = -7000;
account1.deposit(5000)
console.log(account1)