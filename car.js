function Car(company,model,year){
    this.company = company;
    this.model = model;
    this.year = year;
}

let myCar = new Car('Honda','civic',2019);

console.log(myCar.company , myCar.model);
