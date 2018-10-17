/*--------------------------------------------
  OBJECT LITERALS
  - has properties (radius, location)
  - has methods (draw())
--------------------------------------------*/
const circleLiteral = {
  radius: 1,
  location: { x: 1, y: 1 },
  draw: function draw() {
    console.log('draw() from object literal');
  },
};

circleLiteral.draw();

/*--------------------------------------------
  FACTORY FUNCTION
--------------------------------------------*/
function createCircle(radius) {
  return {
    radius,
    location: { x: 1, y: 1 },
    draw: function draw() {
      console.log('draw() from factory function');
    },
  };
}

const circleFactory = createCircle(1);
circleFactory.draw();

/*--------------------------------------------
  CONSTRUCTOR FUNCTION
--------------------------------------------*/
function Circle(radius) {
  this.radius = radius;
  this.location = { x: 0, y: 0 };
  this.draw = function draw() {
    console.log('draw() from constructor function');
  };
}

const circleConstructor = new Circle(1);
circleConstructor.draw();

/*--------------------------------------------
  CONSTRUCTOR PROPERTY
  - every object has a constructor property
    that references the function that was used
    to create that object.
--------------------------------------------*/
console.log(circleLiteral.constructor);
console.log(circleFactory.constructor);
console.log(circleConstructor.constructor);
