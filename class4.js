class Time {
  #hour;
  #minute;
  #second;
  constructor(hour, minute, second) {
    this.#hour = hour;
    this.#minute = minute;
    this.#second = second;
  }
  get Hour() {
    return this.#hour;
  }
  get Minute() {
    return this.#minute;
  }
  get Second() {
    return this.#second;
  }
  setHour(value) {
    this.#hour = value;
  }
  setMinute(value) {
    this.#minute = value;
  }
  setSecond(value) {
    this.#second = value;
  }
  get nextSecond() {
    const swapTime = (n) => (n < 10 ? "0" + n : n);
    this.#second++;
    if (this.#second == 60) {
      this.#second = 0;
      this.#minute++;
      if (this.#minute == 60) {
        this.#minute = 0;
        this.#hour++;
        if (this.#hour == 24) {
          this.#hour = 0;
        }
      }
    }
    let h = swapTime(this.#hour);
    let m = swapTime(this.#minute);
    let s = swapTime(this.#second);
    return h + ":" + m + ":" + s;
  }
  get previousSecond() {
   const swapTime = (n) => (n < 10 ? "0" + n : n);
   this.#second--;
   if (this.#second == -1) {
     this.#second = 59;
     this.#minute--;
     if (this.#minute == -1) {
       this.#minute = 59;
       this.#hour--;
       if (this.#hour == -1) {
         this.#hour = 23;
       }
     }
   }
   let h = swapTime(this.#hour);
   let m = swapTime(this.#minute);
   let s = swapTime(this.#second);
   return h + ":" + m + ":" + s;
 }
}
let t1 = new Time(23, 00, 09);

// t1.setHour(5)
// t1.setMinute(12)
// t1.setSecond(60)

console.log(t1.Hour);
console.log(t1.Minute);
console.log(t1.Second);

console.log(t1.nextSecond);
console.log(t1.previousSecond);
