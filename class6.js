class Person {
  #name;
  #address;
  constructor(name, address) {
    this.#name = name;
    this.#address = address;
  }
  get Name() {
    return this.#name;
  }
  setName(value) {
    this.#name = value;
  }
  get Address() {
    return this.#address;
  }
  setAddress(value) {
    this.#address = value;
  }
}

class Student extends Person {
  #faculty;
  #year;
  #university;
  constructor(faculty, year, university) {
    super();
    this.#faculty = faculty;
    this.#year = year;
    this.#university = university;
  }
  get Faculty() {
    return this.#faculty;
  }
  get Year() {
    return this.#year;
  }
  get University() {
    return this.#university;
  }
  setFaculty(value) {
    this.#faculty = value;
  }
  setYear(value) {
    this.#year = value;
  }
  setUniversity(value) {
    this.#university = value;
  }
}

class Employee extends Person {
  #salary;
  #work;
  constructor(salary, work){
   this.#salary = salary
   this.#work = work
  }
  get Salary(){
   return this.#salary
  }
  get Work(){
   return this.#work
  }
  setSalary(value){
   this.#salary=value
  }
  setWork(value){
   this.#work=value
  }
}

let p1 = new Person("Shohruh", "Tashkent");

let s1 = new Student("Dasturing engineer", 3, "TUIT");

let e1= new Employee(1000, "Project Menejer")

p1.setName("Shohnazar");
p1.setAddress("Navoiy");

s1.setFaculty("Iqtisod");
s1.setYear(2);
s1.setUniversity("TATU");

e1.setSalary(500)
e1.setWork("Web-developer")

console.log(p1.Name);
console.log(p1.Address);

console.log(s1.Faculty);
console.log(s1.Year);
console.log(s1.University);

console.log(e1.Salary);
console.log(e1.Work);


