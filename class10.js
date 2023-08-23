class Person {
  constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
    this.housePrice = housePrice;
    this.housesNumber = housesNumber;
    this.carPrice = carPrice;
    this.carsNumber = carsNumber;
    this.bankAccount = bankAccount;
  }
  getWealth() {
    return (
      this.housePrice * this.housesNumber +
      this.carPrice * this.carsNumber +
      this.bankAccount
    );
  }
}

class RichPerson extends Person {
  constructor(
    companyPrice,
    companiesNumber,
    investigation,
    housePrice,
    housesNumber,
    carPrice,
    carsNumber,
    bankAccount
  ) {
    super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
    this.companyPrice = companyPrice;
    this.companiesNumber = companiesNumber;
    this.investigation = investigation;
  }
  getWealth() {
    return `Umumiy summa ${
      super.getWealth() +
      this.investigation +
      this.companyPrice * this.companiesNumber
    }$ 
      
   `;
  }
}
let p1 = new Person(500000, 4, 350000, 2, 800000);
let r1 = new RichPerson(15000000, 3, 103000000);

console.log(p1.getWealth());
console.log(r1.getWealth());
