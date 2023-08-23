class Animal {
  constructor(named, speed, weight) {
    this.named = named;
    this.speed = speed;
    this.weight = weight;
  }
}

class Mammal extends Animal {
  #legs;
  constructor(legs, named, speed, weight) {
    super(named, speed, weight);
    this.#legs = legs;
  }
  get Legs() {
    return this.#legs;
  }
  setLegs(value) {
    this.#legs = value;
  }
}

class Cat extends Mammal {
  constructor(legs, named, speed, weight) {
    super(named, speed, weight, legs);
  }
  get Sound() {
    return "Meow";
  }
  get Full(){
   return `${this.named} ning tezligi ${this.speed} va og'irligi ${this.weight} ga teng. Uning oyoqlari soni ${this.legs} ta U ${Cat.Sound} dedi`
  }
}

class Dog extends Mammal {
  constructor() {
    super();
  }
  get Sound() {
    return "Woof";
  }
}

class Fish extends Animal {
  #size;
  constructor(size) {
    super();
    this.#size = size;
  }
  get Size(){
   return this.#size
  }
  setSize(value){
   this.#size=value
  }
}
class Whale extends Fish {
   constructor() {
     super();
   }
   get Sound() {
     return "Poof";
   }
 }
 
 class Shark extends Fish {
   constructor() {
     super();
   }
   get Sound() {
     return "Sheef";
   }
 }
let a1 = new Animal("Mushuk", 20, 5)
let m1 = new Mammal(4);
let c1 = new Cat();
let d1 = new Dog();
let f1 = new Fish(20)
let w1= new Whale()
let s1 = new Shark()

m1.setLegs(2);
f1.setSize(15)


console.log(m1.Legs);
console.log(c1.Sound);
console.log(d1.Sound);
console.log(f1.Size);
console.log(w1.Sound);
console.log(s1.Sound);

console.log(c1.Full);


