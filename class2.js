class Employee {
  #id;
  #firstName;
  #lastName;
  #salary;
  constructor(id, firstName, lastName, salary) {
    this.#id = id;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#salary = salary;
  }
  get Id() {
    return this.#id;
  }
  get FirstName() {
    return this.#firstName;
  }
  get LastName() {
    return this.#lastName;
  }
  get Salary() {
    return this.#salary;
  }
  set Id(id) {
    this.#id = id;
  }
  set FirstName(fName) {
    this.#firstName = FirstName;
  }
  set LastName(lName) {
    this.#lastName = this.LastName;
  }
  set Salary(s) {
    this.#salary = this.Salary;
  }

  get FullName() {
    return this.#firstName + " " + this.#lastName;
  }

  get AnnualSalary() {
    return this.#salary * 12;
  }
  get RaiseSalary() {
    return this.#salary;
  }
}

let e1 = new Employee(8111, "Shohruh", "Rustamov", 1000);

e1.id = 9354;
e1.firstName = "Shohnazar";
e1.lastName = "Abdusalomov";
e1.salary = 800;

let parcent = 6;

// console.log(e1.id);
console.log(e1.Id);

// console.log(e1.firstName);
console.log(e1.FirstName);

// console.log(e1.lastName);
console.log(e1.LastName);

// console.log(e1.salary);
console.log(e1.Salary);

console.log(e1.FullName);
console.log(e1.AnnualSalary);
console.log(e1.Salary + (e1.RaiseSalary / 100) * parcent);
