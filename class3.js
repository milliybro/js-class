class CustomDate {
  #day;
  #month;
  #year;
  constructor(day, month, year) {
    this.#day = day;
    this.#month = month;
    this.#year = year;
  }
  get Day() {
    return this.#day;
  }
  get Month() {
    return this.#month;
  }
  get Year() {
    return this.#year;
  }
  setDay(value) {
    this.#day = value;
  }
  setMonth(value) {
    this.#month = value;
  }
  setYear(value) {
    this.#year = value;
  }

  get ISOdate(){
   return `${this.#day}-${this.#month}-${this.#year}`
  }
}
let d1 = new CustomDate(27, 06, 2003);

d1.setDay(17);
d1.setMonth(07);
d1.setYear(2005);

console.log(d1.Day);
console.log(d1.Month);
console.log(d1.Year);

console.log(d1.ISOdate);

