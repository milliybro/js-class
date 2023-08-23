class Triangle {
  #leftSide;
  #rightSide;
  #width;
  constructor(leftSide, rightSide, width) {
    this.#leftSide = leftSide;
    this.#rightSide = rightSide;
    this.#width = width;
  }
  get LeftSide() {
    return this.#leftSide;
  }
  get RightSide() {
    return this.#rightSide;
  }
  get Width() {
    return this.#width;
  }
  setSides(a, b, c) {
    this.#leftSide = a;
    this.#rightSide = b;
    this.#width = c;
  }
}

let t1 = new Triangle(3, 4, 5);

t1.setSides(4, 6, 2);

console.log("a tamon: "+t1.LeftSide);
console.log("b tamon: "+t1.RightSide);
console.log("c tamon: "+t1.Width);

