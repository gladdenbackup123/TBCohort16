function BankAccount(){
    let balance = 5000; //private variable
    return{
        getBalance(otp){
            if(otp=="2778")
                console.log("Your bank account balance is ",balance);
            else
                console.log("Authentication Failed , Incorrect OTP.");
        },
        deposit(amount){
            balance += amount;
            console.log("You have successfully deposited",amount);
            console.log("Your current balance is ",balance);
        },
        withdraw(amount){
            balance-=amount;
            console.log("Your account has been debited with",amount);
            console.log("Your current balance is ",balance);
        }
    }
}

let myAccount = new BankAccount();
myAccount.getBalance("2778"); //5000
//myAccount.deposit(1000); //6000
//myAccount.deposit(500); // 6500
//myAccount.getBalance("2778"); //6500

//myAccount.withdraw(2000); //4500
