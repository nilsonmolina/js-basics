// function Circle(radius) {
//   // Instance members
//   this.radius = radius;
// }

// // Prototype members
// Circle.prototype.draw = function draw() {
//   console.log(this.radius);
// };
// Circle.prototype.toString = function toString() {
//   console.log(`Circle with radius ${this.radius}`);
// };

// const c1 = new Circle(1);
// const c2 = new Circle(13);

// console.log(c1, c2);


function Circle(radius) {
  this.radius = radius;
  this.move = function move() {
    console.log('move');
  };
}

Circle.prototype.draw = function draw() {
  console.log('draw');
};

const c = new Circle(1);
console.log(c);
