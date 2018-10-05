function b() {
  var x = 3;
  console.log('function b() x:', x);
}

function a() {
  var x = 2;
  b();
  console.log('function a() x:', x);
}

var x = 1;
console.log('global x:', x);
a();
console.log('global x:', x);