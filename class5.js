class Shape {
  #color;
  #filled;
  constructor(color, filled) {
    this.#color = color;
    this.#filled = filled;
  }
  get Color() {
    return this.#color;
  }
  setColor(value) {
    this.#color = value;
  }
  get isFilled() {
    return this.#filled;
  }
  setFilled(value) {
    this.#filled = value;
  }
}

class Circle extends Shape {
  #radius;
  constructor(radius) {
    super();
    this.#radius = radius;
  }
  get Radius() {
    return this.#radius;
  }
  setRadius(value) {
    this.#radius = value;
  }
  get Area() {
    return Math.PI * Math.sqrt(this.#radius, 2);
  }
  get Perimeter() {
    return 2 * Math.PI * this.#radius;
  }
}

class Rectangle extends Shape {
  #width;
  #height;
  constructor(width, height) {
    super();
    this.#width = width;
    this.#height = height;
  }
  get Width() {
    return this.#width;
  }
  setWidth(value){
   this.#width= value
  }
  get Height() {
   return this.#height;
 }
 setHeight(value){
  this.#height= value
 }
 get Area(){
   return (this.#width*this.#height)/2
 }
 get Perimeter(){
   return this.#width*3
 }
}
s1 = new Shape("yellow", true);
c1 = new Circle(5);
r1 = new Rectangle(5, 4);

s1.setColor("Blue");
s1.setFilled(false);

c1.setRadius(9);

r1.setWidth(8)
r1.setHeight(3)

console.log(s1.Color);
console.log(s1.isFilled);

console.log(c1.Radius);
console.log(c1.Area);
console.log(c1.Perimeter);

console.log(r1.Width);
console.log(r1.Height);
console.log(r1.Area);
console.log(r1.Perimeter);