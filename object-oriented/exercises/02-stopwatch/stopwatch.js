function Stopwatch() {
  // // Private Properties
  // let startTime = 0;
  // let duration = 0;

  // // Public Getters
  // Object.defineProperty(this, 'duration', {
  //   get() { return duration; },
  //   set(value) { duration = value; },
  // });

  // Object.defineProperty(this, 'startTime', {
  //   get() { return startTime; },
  //   set(value) { startTime = value; },
  // });

  // THIS IS PRETTY MUCH EQUIVALENT
  this.startTime = 0;
  this.duration = 0;
}

Stopwatch.prototype.start = function start() {
  if (this.startTime !== 0) throw new Error('Stopwatch has already started.');

  this.startTime = Date.now();
};

Stopwatch.prototype.stop = function stop() {
  if (this.startTime === 0) throw new Error('Stopwatch has not started.');

  this.duration += (Date.now() - this.startTime) / 1000;
  this.startTime = 0;
};

Stopwatch.prototype.reset = function reset() {
  this.startTime = 0;
  this.duration = 0;
};

const sw = new Stopwatch();
console.log('sw:', sw);
