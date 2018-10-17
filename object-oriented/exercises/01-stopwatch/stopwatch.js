function Stopwatch() {
  // Private Properties
  let startTime = 0;
  let duration = 0;

  // Public Getters
  Object.defineProperty(this, 'duration', {
    get() { return duration / 1000; },
  });

  // Public Methods
  this.start = function start() {
    if (startTime !== 0) throw new Error('Stopwatch has already started.');

    startTime = Date.now();
  };

  this.stop = function stop() {
    if (startTime === 0) throw new Error('Stopwatch has not started.');

    duration += (Date.now() - startTime);
    startTime = 0;
  };

  this.reset = function reset() {
    startTime = 0;
    duration = 0;
  };
}

const sw = new Stopwatch();
console.log('sw:', sw);
