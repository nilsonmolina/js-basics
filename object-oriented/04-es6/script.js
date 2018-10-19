// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function draw() {
//     console.log('draw');
//   };
// }

// const c = new Circle(1);
// console.log(c);

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  draw() {
    console.log(`draw circle with radius ${this.radius}`);
  }
}

const c = new Circle(1);
console.log(c);
